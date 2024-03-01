// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const HeaderIcon = ( props ) => {

    // GET PROPS
    const {

        alternative_text,
        aria_label,
        href,
        source,
        text

    } = props

    return(
        <Link href={ href } aria_label={ aria_label }>
            <div className="flex flex-col gap-2 items-center">
                <div className="w-8 aspect-square">
                    <PictureInternalContain
                        alternative_text={ alternative_text }
                        source={ source }
                    />
                </div>
                <p className="font-avenir font-semibold text-saritasa_primary text-xs uppercase">{ text }</p>
            </div>
        </Link>
    )

}

export default HeaderIcon
