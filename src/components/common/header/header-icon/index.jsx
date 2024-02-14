// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const HeaderIcon = ( props ) => {

    const {

        src,
        alt,
        text,
        href,
        aria_label

    } = props

    return(
        <Link href={ href } aria_label={ aria_label }>
            <div className="flex flex-col gap-2 items-center">
                <div className="w-8 aspect-square">
                    <img
                        src={ src }
                        alt={ alt }
                        className="w-8 aspect-square"
                    />
                </div>
                <p className="font-avenir font-semibold text-saritasa_primary text-xs uppercase">{ text }</p>
            </div>
        </Link>
    )

}

export default HeaderIcon
