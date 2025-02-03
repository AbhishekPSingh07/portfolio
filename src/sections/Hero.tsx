import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/Icons/star.svg'

export const HeroSection = () => {
    return (
        <div className="py-40 ml-5 md:py-56 lg:py-72 relative z-0 overflow-x-clip overflow-y-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div 
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}>
                </div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div> 
            </div>
           <div className="container pl-15 relative z-1">
            <h1 className="p-2 mt-7 sfMono text-[#64FFDA] sm:text-15px md:text-17px lg:text-19px">Hi, my name is</h1>
            <h2 className="mt-5 font-inter text-[#CCD6F6] sm:text-4xl md:text-7xl lg:text-8xl font-bold">Abhishek Singh.</h2>
            <h2 className="font-inter mt-2 sm:text-5xl md:text-6xl lg:text-8xl font-bold">I build full-stack solutions</h2>
            <p className="mt-5 w-3/4">I’m a passionately driven software engineer experiencing designing and developing scalable applications.Currently developing solutions for smart buildings at <a href="https://www.siemens.com/global/en/products/buildings/smart-buildings.html" target="_blank" className="text-[#64FFDA]">Siemens</a>
            </p>
            <div className="flex felx-col items-center mt-8">
            <button className="text-[#64FFDA] inline-flex items-center gap-2 rounded-xl border border-[#64FFDA] px-6 h-12 hover:shadow-[4px_4px_0px_0px_rgb(100,255,218)] duration-300">
                Let's Connect
            </button>
            </div>
            </div>
        </div>
    )
}