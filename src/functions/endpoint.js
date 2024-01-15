export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.saritasa.blupp.co" : "https://api.saritasa.blupp.co"

}
