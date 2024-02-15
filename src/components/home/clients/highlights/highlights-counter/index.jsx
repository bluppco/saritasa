// IMPORTS ATOMS
import ContainPicture from "@/atoms/picture/contain/jsx/index.jsx"

const HighlightsCounter = ( props ) => {

    const {

        title,
        statistics,
        src,
        alt,
        PROJECT,
        CDN_LINK

        } = props

    return(
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="w-12 aspect-square">
                <ContainPicture
                    src={ src }
                    alt={ alt }
                    image_width="50"
                    PROJECT={ PROJECT }
                    CDN_LINK={ CDN_LINK }
                />
            </div>
            <div>
                <p className="text-5xl text-saritasa_primary font-avenir font-semibold text-center">{ statistics }</p>
                <p className="text-lg text-saritasa_primary font-avenir font-semibold text-center">{ title }</p>
            </div>
        </div>
    )

}

export default HighlightsCounter
