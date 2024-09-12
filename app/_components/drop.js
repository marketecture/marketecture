"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import ReadyToBuild from "./ReadyToBuild";

const BouncingImages = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    // Create engine and render
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const { world } = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Update canvas size on window resize
    const updateCanvasSize = () => {
      render.canvas.width = sceneRef.current.clientWidth;
      render.canvas.height = sceneRef.current.clientHeight;
      render.options.width = sceneRef.current.clientWidth;
      render.options.height = sceneRef.current.clientHeight;
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // Create walls
    const wallThickness = 50;
    const walls = [
      Matter.Bodies.rectangle(
        render.options.width / 2,
        0 - wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true,
          render: {
            visible: false, // Make the wall invisible
          },
         }
      ),
      Matter.Bodies.rectangle(
        render.options.width / 2,
        render.options.height + wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true,
          render: {
            visible: false, // Make the wall invisible
          },
         }
      ),
      Matter.Bodies.rectangle(
        0 - wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true,
          render: {
            visible: false, // Make the wall invisible
          },
         }
      ),
      Matter.Bodies.rectangle(
        render.options.width + wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true,
          render: {
            visible: false, // Make the wall invisible
          },
         }
      ),
    ];
    Matter.World.add(world, walls);

    // Create image bodies
    const images = [
      "/logo/comp1.png",
      "/logo/comp2.png",
      "/logo/comp3.png",
      "/logo/comp4.png",
      "/logo/comp5.png",
      "/logo/comp6.png",
      "/logo/comp7.png",
      "/logo/comp8.png",
      "/logo/comp9.png",
      "/logo/comp10.png",
    ];

    const imageBodies = images.map((image) => {
      const x = Math.random() * (render.options.width - 100) + 50;
      const y = Math.random() * (render.options.height - 100) + 50;
      // Detect if the screen width is less than 640px (mobile size)
      const isMobile = window.innerWidth < 800;


      const radius = isMobile ? 37.5 : 58; // Set radius for the circle
    
      
      
      // Set scale based on screen size
      const scale = isMobile ? 0.11 : 0.17;
    
      return Matter.Bodies.circle(x, y, radius, {
        restitution: 1,
        render: {
          sprite: {
            texture: image,
            xScale: scale, // Set the scale based on screen size
            yScale: scale, // Same for both x and y to keep it circular
          },
        },
      });
    });    

    Matter.World.add(world, imageBodies);

    // Enable mouse control (for dragging)
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Remove event listeners that block scrolling
    mouse.element.removeEventListener('wheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const runner = Matter.Runner.create();
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <ReadyToBuild />
      <div
        ref={sceneRef}
        className="w-full h-[60vh] sm:h-[70vh] border-none p-0 m-0 bg-transparent"
      />
    </div>
  );
};

export default BouncingImages;
