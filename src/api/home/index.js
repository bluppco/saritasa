import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, services, projects, highlights, industries, news, testimonials, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        services : "",
        projects : "",
        in_the_news : "",
        industries_we_serve : "",
        scope_my_project : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "services" )
            home_data.services = data
        else if ( data.slug === "projects" )
            home_data.projects = data
        else if ( data.slug === "in-the-news" )
            home_data.in_the_news = data
        else if ( data.slug === "industries-we-serve" )
            home_data.industries_we_serve = data
        else if ( data.slug === "scope-my-project" )
            home_data.scope_my_project = data

    })

    return { home_data, services, projects, highlights, industries, news, testimonials, meta_tags }

}
