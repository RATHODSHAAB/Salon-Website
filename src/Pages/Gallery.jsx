import { ImagesDiv } from "../Components/CompImage"
import { Navbar } from "../Components/Navbar"
import { CompGaller } from "../Components/Comp-gallery"
import { gallery_looks, std_images } from "../Components/images.js"
import { gallery_lifestyle } from "../Components/images.js"


export const Gallery = () => {

    return (
        <>
        <Navbar />
            <div className="gallery-bg h-102 w-full text-amber-50 flex justify-center items-center">
                <div className="text-6xl shadow-gray-400"
                 style={{ fontFamily: "Zalando" }}>
                    GALLERY
                </div>
            </div>
            <div className="mt-24 flex justify-center px-2 mb-10">
                <CompGaller title={"THE STUDIO"} description1={"Explore the Lola Hair Studio gallery and discover artistry that defines our work. From precision cuts and dimensional color to balayage and Bellami extensions,   each style highlights the individuality of our guests. Our gallery also features stunning  transformations and custom styling, from everyday looks to special occasion finishes."} 
                description2={" Our gallery also features stunning transformations and custom styling, from everyday looks to special occasion finishes. Every image reflects the skill and passion of our team, dedicated to creating results that inspire confidence."} 
                 images={std_images}
                />
            </div>
            <div className="flex justify-center px-2 mb-10">
                <CompGaller  title={"THE LIFESTYLE"} images={gallery_lifestyle}></CompGaller>
            </div>
            <div className="flex justify-center px-2 mb-10">
                <CompGaller  title={"THE LOOKS"} images={gallery_looks}></CompGaller>
            </div>
        </>
    )
}