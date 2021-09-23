import HELPERS from "../utils/helper";

const PRODUCT_API = {
    getProducts: params => {
        return HELPERS.request({
            url: `/products/`,
            method: 'GET',
            params,
        });
    },
}

export default PRODUCT_API;