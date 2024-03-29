const Link = ( props ) => {

    // GET PROPS
    const {

        aria_label,
        href

    } = props

    return(
        <a href={ href } aria-label={ aria_label }>
            { props.children }
        </a>
    )

}

export default Link
