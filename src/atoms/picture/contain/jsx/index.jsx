const ContainPicture = ( props ) => {

    const {

        alt,
        src,
        image_width,
        CDN_LINK,
        PROJECT

    } = props

    return(
        <picture class="w-full h-full">
            <source media="(max-width: 375px)" srcset={ CDN_LINK + PROJECT + "/" + src + "?height=300&quality=80" } />
            <source media="(max-width: 640px)" srcset={ CDN_LINK + PROJECT + "/" + src + "?height=400&quality=80" } />
            <img
                src={ CDN_LINK + PROJECT + "/" +  src + "?quality=80" + "&width=" + image_width }
                alt={ alt }
                class="w-full h-full object-contain"
            />
        </picture>
    )

}

export default ContainPicture
