export default function Features() {
    return (
        <div>
            <div className="justify-center items-center text-center w-full">
                <h1 className="mt-10 sm:text-4xl text-[24px] font-bold bg-gradient-to-r from-pink-300 to-purple-700 bg-clip-text inline-block text-transparent">HOW WE WORK?</h1>
            </div>
            <div className="justify-center items-center text-center w-full">
                <h1 className="sm:mt-5 mt-2 mb-5 text-[20px] sm:text-4xl font-bold">Super <span className="bg-red-500 bg-clip-text inline-block text-transparent">Powerful</span> Feature</h1>
            </div>
            <div className="py-4">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:py-4">
                    <FeatureTemplate
                        path={FeatureNum[1]['path']}
                        title={FeatureNum[1]['title']}
                        desc={FeatureNum[1]['desc']}
                    />
                    <FeatureTemplate
                        path={FeatureNum[2]['path']}
                        title={FeatureNum[2]['title']}
                        desc={FeatureNum[2]['desc']}
                    />
                    <FeatureTemplate
                        path={FeatureNum[3]['path']}
                        title={FeatureNum[3]['title']}
                        desc={FeatureNum[3]['desc']}
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:py-4">
                    <FeatureTemplate
                        path={FeatureNum[4]['path']}
                        title={FeatureNum[4]['title']}
                        desc={FeatureNum[4]['desc']}
                    />
                    <FeatureTemplate
                        path={FeatureNum[5]['path']}
                        title={FeatureNum[5]['title']}
                        desc={FeatureNum[5]['desc']}
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:py-4">
                    <FeatureTemplate
                        path={FeatureNum[6]['path']}
                        title={FeatureNum[6]['title']}
                        desc={FeatureNum[6]['desc']}
                    />
                    <FeatureTemplate
                        path={FeatureNum[7]['path']}
                        title={FeatureNum[7]['title']}
                        desc={FeatureNum[7]['desc']}
                    />
                    <FeatureTemplate
                        path={FeatureNum[8]['path']}
                        title={FeatureNum[8]['title']}
                        desc={FeatureNum[8]['desc']}
                    />
                </div>
            </div>
        </div>
    );
}

const FeatureNum = {
    1: {
        "path": "M73.6374 33.5455V51H69.9471V37.0483H69.8448L65.8477 39.554V36.2812L70.1687 33.5455H73.6374Z",
        "title": "Research",
        "desc": "We understand your target market, your business, and your goals."
    },
    2: {
        "path": "M64.3562 51V48.3409L70.5692 42.5881C71.0977 42.0767 71.5408 41.6165 71.8988 41.2074C72.2624 40.7983 72.538 40.3977 72.7255 40.0057C72.913 39.608 73.0067 39.179 73.0067 38.7188C73.0067 38.2074 72.8903 37.767 72.6573 37.3977C72.4244 37.0227 72.1062 36.7358 71.7028 36.5369C71.2994 36.3324 70.842 36.2301 70.3306 36.2301C69.7965 36.2301 69.3306 36.3381 68.9329 36.554C68.5352 36.7699 68.2283 37.0795 68.0124 37.483C67.7965 37.8864 67.6886 38.3665 67.6886 38.9233H64.1857C64.1857 37.7812 64.4442 36.7898 64.9613 35.9489C65.4783 35.108 66.2028 34.4574 67.1346 33.9972C68.0664 33.5369 69.1403 33.3068 70.3562 33.3068C71.6062 33.3068 72.6942 33.5284 73.6204 33.9716C74.5522 34.4091 75.2766 35.017 75.7937 35.7955C76.3107 36.5739 76.5692 37.4659 76.5692 38.4716C76.5692 39.1307 76.4386 39.7812 76.1772 40.4233C75.9215 41.0653 75.4641 41.7784 74.805 42.5625C74.146 43.3409 73.217 44.2756 72.0181 45.3665L69.4698 47.8636V47.983H76.7994V51H64.3562Z",
        "title": "Planning",
        "desc": "We have a road map that will grow you and your company."
    },
    3: {
        "path": "M70.4563 51.2386C69.1836 51.2386 68.0501 51.0199 67.0558 50.5824C66.0671 50.1392 65.2859 49.5312 64.712 48.7585C64.1438 47.9801 63.8512 47.0824 63.8342 46.0653H67.5501C67.5728 46.4915 67.712 46.8665 67.9677 47.1903C68.229 47.5085 68.5756 47.7557 69.0075 47.9318C69.4393 48.108 69.9251 48.196 70.4648 48.196C71.0273 48.196 71.5245 48.0966 71.9563 47.8977C72.3881 47.6989 72.7262 47.4233 72.9705 47.071C73.2148 46.7187 73.337 46.3125 73.337 45.8523C73.337 45.3864 73.2063 44.9744 72.945 44.6165C72.6893 44.2528 72.32 43.9687 71.837 43.7642C71.3597 43.5597 70.7915 43.4574 70.1325 43.4574H68.5046V40.7472H70.1325C70.6893 40.7472 71.1808 40.6506 71.6069 40.4574C72.0387 40.2642 72.3739 39.9972 72.6126 39.6562C72.8512 39.3097 72.9705 38.9062 72.9705 38.446C72.9705 38.0085 72.8654 37.625 72.6552 37.2955C72.4506 36.9602 72.1609 36.6989 71.7859 36.5114C71.4165 36.3239 70.9847 36.2301 70.4904 36.2301C69.9904 36.2301 69.533 36.321 69.1183 36.5028C68.7035 36.679 68.3711 36.9318 68.1211 37.2614C67.8711 37.5909 67.7376 37.9773 67.7205 38.4205H64.1836C64.2006 37.4148 64.4876 36.5284 65.0444 35.7614C65.6012 34.9943 66.3512 34.3949 67.2944 33.9631C68.2433 33.5256 69.3143 33.3068 70.5075 33.3068C71.712 33.3068 72.766 33.5256 73.6694 33.9631C74.5728 34.4006 75.2745 34.9915 75.7745 35.7358C76.2802 36.4744 76.5302 37.304 76.5245 38.2244C76.5302 39.2017 76.2262 40.017 75.6126 40.6705C75.0046 41.3239 74.212 41.7386 73.2347 41.9148V42.0511C74.5188 42.2159 75.4961 42.6619 76.1665 43.3892C76.8427 44.1108 77.1779 45.0142 77.1722 46.0994C77.1779 47.0938 76.891 47.9773 76.3114 48.75C75.7376 49.5227 74.945 50.1307 73.9336 50.5739C72.9222 51.017 71.7631 51.2386 70.4563 51.2386Z",
        "title": "Execution",
        "desc": "Once the planning is done, it's time to start executing your campaign."
    },
    4: {
        "path": "M63.5178 47.9318V45.0256L70.8047 33.5455H73.3104V37.5682H71.8274L67.2337 44.8381V44.9744H77.5888V47.9318H63.5178ZM71.8956 51V47.0455L71.9638 45.7585V33.5455H75.424V51H71.8956Z",
        "title": "Analysis",
        "desc": "We understand what worked well and what could be improved for future campaigns."
    },
    5: {
        "path": "M70.5554 51.2386C69.3509 51.2386 68.277 51.017 67.3338 50.5739C66.3963 50.1307 65.652 49.5199 65.1009 48.7415C64.5497 47.9631 64.2628 47.071 64.2401 46.0653H67.8196C67.8594 46.7415 68.1435 47.2898 68.6719 47.7102C69.2003 48.1307 69.8281 48.3409 70.5554 48.3409C71.1349 48.3409 71.6463 48.2131 72.0895 47.9574C72.5384 47.696 72.8878 47.3352 73.1378 46.875C73.3935 46.4091 73.5213 45.875 73.5213 45.2727C73.5213 44.6591 73.3906 44.1193 73.1293 43.6534C72.8736 43.1875 72.5185 42.8239 72.0639 42.5625C71.6094 42.3011 71.0895 42.1676 70.5043 42.1619C69.9929 42.1619 69.4957 42.267 69.0128 42.4773C68.5355 42.6875 68.1634 42.9744 67.8963 43.3381L64.6151 42.75L65.4418 33.5455H76.1122V36.5625H68.4844L68.0327 40.9347H68.1349C68.4418 40.5028 68.9048 40.1449 69.5241 39.8608C70.1435 39.5767 70.8366 39.4347 71.6037 39.4347C72.6548 39.4347 73.5923 39.6818 74.4162 40.1761C75.2401 40.6705 75.8906 41.3494 76.3679 42.2131C76.8452 43.071 77.081 44.0597 77.0753 45.179C77.081 46.3551 76.8082 47.4006 76.2571 48.3153C75.7116 49.2244 74.9474 49.9403 73.9645 50.4631C72.9872 50.9801 71.8509 51.2386 70.5554 51.2386Z",
        "title": "Reporting",
        "desc": "Based on our analysis, we'll create a detailed report of our findings."
    },
    6: {
        "path": "M70.6918 51.2386C69.794 51.233 68.9276 51.0824 68.0923 50.7869C67.2628 50.4915 66.5185 50.0114 65.8594 49.3466C65.2003 48.6818 64.6776 47.8011 64.2912 46.7045C63.9105 45.608 63.7202 44.2614 63.7202 42.6648C63.7259 41.1989 63.8935 39.8892 64.223 38.7358C64.5582 37.5767 65.0355 36.5937 65.6548 35.7869C66.2798 34.9801 67.027 34.3665 67.8963 33.946C68.7656 33.5199 69.7401 33.3068 70.8196 33.3068C71.9844 33.3068 73.0128 33.5341 73.9048 33.9886C74.7969 34.4375 75.5128 35.0483 76.0526 35.821C76.598 36.5938 76.9276 37.4602 77.0412 38.4205H73.402C73.2599 37.8125 72.9616 37.3352 72.5071 36.9886C72.0526 36.642 71.4901 36.4688 70.8196 36.4688C69.6832 36.4688 68.8196 36.9631 68.2287 37.9517C67.6435 38.9403 67.3452 40.2841 67.3338 41.983H67.4531C67.7145 41.4659 68.0668 41.0256 68.5099 40.6619C68.9588 40.2926 69.4673 40.0114 70.0355 39.8182C70.6094 39.6193 71.2145 39.5199 71.8509 39.5199C72.8849 39.5199 73.8054 39.7642 74.6122 40.2528C75.419 40.7358 76.0554 41.4006 76.5213 42.2472C76.9872 43.0937 77.2202 44.0625 77.2202 45.1534C77.2202 46.3352 76.9446 47.3864 76.3935 48.3068C75.848 49.2273 75.0838 49.9489 74.1009 50.4716C73.1236 50.9886 71.9872 51.2443 70.6918 51.2386ZM70.6747 48.3409C71.2429 48.3409 71.7514 48.2045 72.2003 47.9318C72.6491 47.6591 73.0014 47.2898 73.2571 46.8239C73.5128 46.358 73.6406 45.8352 73.6406 45.2557C73.6406 44.6761 73.5128 44.1562 73.2571 43.696C73.0071 43.2358 72.6605 42.8693 72.2173 42.5966C71.7741 42.3239 71.2685 42.1875 70.7003 42.1875C70.2741 42.1875 69.8793 42.267 69.5156 42.4261C69.1577 42.5852 68.8423 42.8068 68.5696 43.0909C68.3026 43.375 68.0923 43.7045 67.9389 44.0795C67.7855 44.4489 67.7088 44.8437 67.7088 45.2642C67.7088 45.8267 67.8366 46.3409 68.0923 46.8068C68.3537 47.2727 68.706 47.6449 69.1491 47.9233C69.598 48.2017 70.1065 48.3409 70.6747 48.3409Z",
        "title": "Refinement",
        "desc": "Making changes to the content we'll refine the campaign."
    },
    7: {
        "path": "M65.4684 51L72.7042 36.6818V36.5625H64.2752V33.5455H76.5224V36.6051L69.2781 51H65.4684Z",
        "title": "Budget",
        "desc": "Optimizing campaigns to suit your budget and needs."
    },
    8: {
        "path": "M70.4925 51.2386C69.18 51.2386 68.0124 51.0256 66.9897 50.5994C65.9727 50.1676 65.1744 49.5795 64.5948 48.8352C64.0153 48.0909 63.7255 47.2472 63.7255 46.304C63.7255 45.5767 63.8903 44.9091 64.2198 44.3011C64.555 43.6875 65.0096 43.179 65.5835 42.7756C66.1573 42.3665 66.7994 42.1051 67.5096 41.9915V41.8722C66.5778 41.6847 65.8221 41.233 65.2425 40.517C64.663 39.7955 64.3732 38.9574 64.3732 38.0028C64.3732 37.0994 64.6374 36.2955 65.1658 35.5909C65.6942 34.8807 66.4187 34.3239 67.3391 33.9205C68.2653 33.5114 69.3164 33.3068 70.4925 33.3068C71.6687 33.3068 72.717 33.5114 73.6374 33.9205C74.5636 34.3295 75.2908 34.8892 75.8192 35.5994C76.3477 36.304 76.6147 37.1051 76.6204 38.0028C76.6147 38.9631 76.3192 39.8011 75.734 40.517C75.1488 41.233 74.3988 41.6847 73.484 41.8722V41.9915C74.1829 42.1051 74.8164 42.3665 75.3846 42.7756C75.9585 43.179 76.413 43.6875 76.7482 44.3011C77.0891 44.9091 77.2624 45.5767 77.2681 46.304C77.2624 47.2472 76.9698 48.0909 76.3903 48.8352C75.8107 49.5795 75.0096 50.1676 73.9869 50.5994C72.9698 51.0256 71.805 51.2386 70.4925 51.2386ZM70.4925 48.5284C71.0778 48.5284 71.5891 48.4233 72.0266 48.2131C72.4641 47.9972 72.805 47.7017 73.0494 47.3267C73.2994 46.946 73.4244 46.5085 73.4244 46.0142C73.4244 45.5085 73.2965 45.0625 73.0408 44.6761C72.7852 44.2841 72.4386 43.9773 72.0011 43.7557C71.5636 43.5284 71.0607 43.4148 70.4925 43.4148C69.93 43.4148 69.4272 43.5284 68.984 43.7557C68.5408 43.9773 68.1914 44.2841 67.9357 44.6761C67.6857 45.0625 67.5607 45.5085 67.5607 46.0142C67.5607 46.5085 67.6829 46.946 67.9272 47.3267C68.1715 47.7017 68.5153 47.9972 68.9585 48.2131C69.4016 48.4233 69.913 48.5284 70.4925 48.5284ZM70.4925 40.7301C70.9812 40.7301 71.4158 40.6307 71.7965 40.4318C72.1772 40.233 72.4755 39.9574 72.6914 39.6051C72.9073 39.2528 73.0153 38.8466 73.0153 38.3864C73.0153 37.9318 72.9073 37.5341 72.6914 37.1932C72.4755 36.8466 72.18 36.5767 71.805 36.3835C71.43 36.1847 70.9925 36.0852 70.4925 36.0852C69.9982 36.0852 69.5607 36.1847 69.18 36.3835C68.7994 36.5767 68.5011 36.8466 68.2852 37.1932C68.0749 37.5341 67.9698 37.9318 67.9698 38.3864C67.9698 38.8466 68.0778 39.2528 68.2937 39.6051C68.5096 39.9574 68.8079 40.233 69.1886 40.4318C69.5692 40.6307 70.0039 40.7301 70.4925 40.7301Z",
        "title": "Conclusion",
        "desc": "Reach your target audience and achieve your business goals."
    },

}

const FeatureTemplate = ({ path, title, desc }) => {
    return (
        <div className="flex flex-row items-center justify-center space-x-2">
            <div className="mt-6 relative w-[112px] h-[112px] flex-shrink-0">
            <svg
                    className="absolute top-0 left-0"
                    width="112"
                    height="112"
                    viewBox="0 0 113 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_325_398)">
                        <rect
                            x="34.5"
                            y="6"
                            width="72"
                            height="72"
                            rx="36"
                            fill="url(#paint0_linear_325_398)"
                            shape-rendering="crispEdges"
                        />
                        <path
                            d={path}
                            fill="white"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_325_398"
                            x="0.5"
                            y="0"
                            width="112"
                            height="112"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-14" dy="14" />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.984314 0 0 0 0 0.360784 0 0 0 0 0.505882 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_325_398"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_325_398"
                                result="shape"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_325_398"
                            x1="70.5"
                            y1="6"
                            x2="70.5"
                            y2="78"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FF0000" />
                            <stop offset="0.5" stop-color="#EE70DA" />
                            <stop offset="1" stop-color="#6E68ED" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col justify-center max-w-[268px]">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-xs text-gray-500 mt-2">{desc}</p>
            </div>
        </div>
    );
};


// const FeatureTemplate = ({ path, title, desc }) => {
//     return (
//         <div className="flex flex-row items-center justify-center">
//             <div className="relative w-[112px] h-[112px]">
//                 <svg
//                     className="absolute top-0 left-0"
//                     width="112"
//                     height="112"
//                     viewBox="0 0 113 112"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <g filter="url(#filter0_d_325_398)">
//                         <rect
//                             x="34.5"
//                             y="6"
//                             width="72"
//                             height="72"
//                             rx="36"
//                             fill="url(#paint0_linear_325_398)"
//                             shape-rendering="crispEdges"
//                         />
//                         <path
//                             d={path} // Dynamic path
//                             fill="white"
//                         />
//                     </g>
//                     <defs>
//                         <filter
//                             id="filter0_d_325_398"
//                             x="0.5"
//                             y="0"
//                             width="112"
//                             height="112"
//                             filterUnits="userSpaceOnUse"
//                             color-interpolation-filters="sRGB"
//                         >
//                             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                             <feColorMatrix
//                                 in="SourceAlpha"
//                                 type="matrix"
//                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                                 result="hardAlpha"
//                             />
//                             <feOffset dx="-14" dy="14" />
//                             <feGaussianBlur stdDeviation="10" />
//                             <feComposite in2="hardAlpha" operator="out" />
//                             <feColorMatrix
//                                 type="matrix"
//                                 values="0 0 0 0 0.984314 0 0 0 0 0.360784 0 0 0 0 0.505882 0 0 0 0.25 0"
//                             />
//                             <feBlend
//                                 mode="normal"
//                                 in2="BackgroundImageFix"
//                                 result="effect1_dropShadow_325_398"
//                             />
//                             <feBlend
//                                 mode="normal"
//                                 in="SourceGraphic"
//                                 in2="effect1_dropShadow_325_398"
//                                 result="shape"
//                             />
//                         </filter>
//                         <linearGradient
//                             id="paint0_linear_325_398"
//                             x1="70.5"
//                             y1="6"
//                             x2="70.5"
//                             y2="78"
//                             gradientUnits="userSpaceOnUse"
//                         >
//                             <stop stop-color="#FF0000" />
//                             <stop offset="0.5" stop-color="#EE70DA" />
//                             <stop offset="1" stop-color="#6E68ED" />
//                         </linearGradient>
//                     </defs>
//                 </svg>
//             </div>
//             <div className=" mt-[-6%] flex flex-col justify-center max-w-[268px]">
//                 <p className="text-lg font-bold">{title}</p>
//                 <p className="text-xs text-gray-500 mt-2">{desc}</p>
//             </div>
//         </div>
//     );
// };
