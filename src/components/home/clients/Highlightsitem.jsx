// IMPORTS CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const HighlightsItem = ( props ) => {

    const {

        title,
        statistics,
        src,
        alt

        } = props

    return(
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="w-12 aspect-square">
                <img
                    src={ CDN_LINK + src + "?quality=" + IMAGE_QUALITY }
                    alt={ alt }
                    className="w-12 aspect-square"
                />
            </div>
            <div>
                <p className="text-5xl text-saritasa_primary font-avenir font-semibold text-center">{ statistics }</p>
                <p className="text-lg text-saritasa_primary font-avenir font-semibold text-center">{ title }</p>
            </div>
        </div>
    )

}

export default HighlightsItem
