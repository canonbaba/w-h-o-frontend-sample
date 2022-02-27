/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} route - this.$route or context.route (in asyncData)
 * @return {Promise<object>} API response
 */
export function banners(instance, route) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/banners', {
            params: {
                preview: route.query.preview,
            },
        })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} data - to submit in the request
 * @param {string} data.first_name - required, string, max:255
 * @param {string} data.last_name - required, string, max:255
 * @param {string} data.area - required, digits_between:2,3
 * @param {string} data.tel - required, $tel_check
 * @param {string} data.email - required, email, max:255
 * @param {boolean} data.tnc - accepted
 * @return {Promise<object>} API response
 */
export function subscribe(instance, data) {
    return new Promise((resolve, reject) => {
        instance.$axios.post('/api/subscribe', { ...data })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @return {Promise<object>} API response
 */
export function filters(instance) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/filters')
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} data - to submit in the request
 * @param {number} data.page - required, integer, between:1,10000
 * @param {number} data.per_page - integer, max:100, nullable
 * @param {string} data.skincare_or_makeup - required, boolean
 * @param {string} data.subcategory - string, max:255, nullable
 * @param {string} data.ordering - string, max:255, nullable
 * @param {string} data.categories - string, max:255, nullable
 * @param {string} data.collections - string, max:255, nullable
 * @param {string} data.skin_concern - string, max:255, nullable
 * @param {object} route - this.$route or context.route (in asyncData)
 * @return {Promise<object>} API response
 */
export function listProducts(instance, data, route = { query: { preview: 0 } }) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/listProducts', { params: { ...data, preview: route.query.preview } })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} data - to submit in the request
 * @param {number} data.page - required, integer, between:1,10000
 * @param {number} data.per_page - integer, max:100, nullable
 * @param {string} data.search - required, string, max:255
 * @return {Promise<object>} API response
 */
export function searchProducts(instance, data) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/searchProducts', { params: data })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} data - to submit in the request
 * @param {string} data.uid - required, string, max:128
 * @param {object} route - this.$route or context.route (in asyncData)
 * @return {Promise<object>} API response
 */
export function product(instance, data, route = { query: { preview: 0 } }) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/product', { params: { ...data, preview: route.query.preview } })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} route - this.$route or context.route (in asyncData)
 * @param {object} data - to submit in the request
 * @param {number} data.page - required, integer, between:1,10000
 * @param {number} data.per_page - integer, max:100, nullable
 * @param {string} data.category - string, max:255, nullable
 * @return {Promise<object>} API response
 */
export function listNews(instance, route, data) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/listNews', { params: { ...data, preview: route.query.preview } })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}

/**
 * @param {*} instance - this or context.app (in asyncData)
 * @param {object} route - this.$route or context.route (in asyncData)
 * @param {object} data - to submit in the request
 * @param {string} data.uid - required, string, max:128
 * @return {Promise<object>} API response
 */
export function news(instance, route, data) {
    return new Promise((resolve, reject) => {
        instance.$axios.get('/api/news', { params: { ...data, preview: route.query.preview } })
            .then((res) => { resolve(res.data); })
            .catch((err) => { reject(err.response); });
    });
}
