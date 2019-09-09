import { GOOGLE_API_KEY } from '../Config'

export const get_google_map_url = ()=>{
    return `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`
}