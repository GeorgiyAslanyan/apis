import React from 'react'

const Glow = ({ colour }) => {
    return (
            <svg className="absolute top-[-50%] blur-lg left-0 z-[0] max-w-[100vw] pointer-events-none" width="2442" height="1250" viewBox="0 0 2442 1250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_12558)">
                    <rect x="2111.5" y="662.877" width="1780.5" height="331.877" transform="rotate(180 2111.5 662.877)" fill="#121B37" />
                </g>
                <g filter="url(#filter1_f_1_12558)">
                    <rect x="1863.53" y="1028.85" width="1285.64" height="239.636" transform="rotate(180 1863.53 1028.85)" fill={colour} />
                </g>
                <defs>
                    <filter id="filter0_f_1_12558" x="0.570465" y="0.570221" width="2441.36" height="992.737" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="165.215" result="effect1_foregroundBlur_1_12558" />
                    </filter>
                    <filter id="filter1_f_1_12558" x="357.608" y="568.932" width="1726.21" height="680.209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="110.143" result="effect1_foregroundBlur_1_12558" />
                    </filter>
                </defs>
            </svg>
    )
}

export default Glow