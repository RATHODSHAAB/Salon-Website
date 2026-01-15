import { ImagesDiv } from "./CompImage"

export const CompGaller = ({title, description1, description2, images}) => {
    return (
        <>
       <div className="max-w-6xl w-full text-center p">
                    <h2
                    className="mb-10 text-5xl tracking-wider mt-2"
                    style={{ fontFamily: "Zalando" }}
                    >
                    {title}
                    </h2>

                    <p className="text-xl leading-relaxed text-gray-700"
                    style={{ fontFamily: "Bebas Neue" }}>
                        {description1}
                    </p>

                    <p className="mt-4 text-xl leading-relaxed text-gray-700 mb-6"
                    style={{ fontFamily: "Bebas Neue" }}>
                        {description2}
                    </p>
                    
                    <ImagesDiv images={images} ></ImagesDiv>
                </div>
        </>
    )
}