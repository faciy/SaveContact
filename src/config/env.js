import {DEV_BACKEND_URL, PROD_BACKEND_URL} from "@env";

const devEnvironementVariables = {
    BACKEND_URL: DEV_BACKEND_URL+``,
}

const prodEnvironementVariables = {
    BACKEND_URL: PROD_BACKEND_URL+``, 
}

export default __DEV__ ? devEnvironementVariables : prodEnvironementVariables