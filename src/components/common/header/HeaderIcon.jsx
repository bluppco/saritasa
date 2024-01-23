const HeaderIcon = ( props ) => {

    const {

        src,
        alt,
        text,
        href

    } = props

    return(
        <a href={ href }>
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
        </a>
    )

}

export default HeaderIcon
