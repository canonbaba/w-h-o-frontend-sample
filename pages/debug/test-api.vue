<template>
    <div class="page">
        <div class="my-container">
            <span class="text-base">
                {{ $auth.loggedIn ? `Logged in as user '${$auth.user.name}'` : 'Not logged in' }}
            </span>
        </div>
        <div class="my-container">
            <span class="text-base">Filter by function name</span>
            <input
                v-model="filterFunctions"
                @input="debounceFilter"
            >
        </div>
        <div class="my-container">
            <div class="text-large">
                Middleware: none
            </div>
            <div
                v-if="!hideFunctions.banners"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/banners</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">banners(this, this.$route)</span>
                <br>
                <button @click="testBanners">
                    Test
                </button>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showBannersResponse = !showBannersResponse"
                        >
                            [{{ showBannersResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showBannersResponse">{{ BannersResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.subscribe"
                class="my-api-container"
            >
                <span class="text-large">POST</span>
                <span class="text-base">api/subscribe</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">subscribe(this, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testSubscribe">
                        <div
                            v-for="v, k in postSubscribe"
                            :key="'postSubscribe_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeSubscribe[k])})`
                            }}</span>
                            <input
                                v-model="postSubscribe[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showSubscribeResponse = !showSubscribeResponse"
                        >
                            [{{ showSubscribeResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showSubscribeResponse">{{ SubscribeResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.filters"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/filters</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">filters(this)</span>
                <br>
                <button @click="testFilters">
                    Test
                </button>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showFiltersResponse = !showFiltersResponse"
                        >
                            [{{ showFiltersResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showFiltersResponse">{{ FiltersResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.listProducts"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/listProducts</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">listProducts(this, this.$route, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testListProducts">
                        <div
                            v-for="v, k in postListProducts"
                            :key="'postListProducts_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeListProducts[k])})`
                            }}</span>
                            <input
                                v-model="postListProducts[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showListProductsResponse = !showListProductsResponse"
                        >
                            [{{ showListProductsResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showListProductsResponse">{{ ListProductsResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.searchProducts"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/searchProducts</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">searchProducts(this, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testSearchProducts">
                        <div
                            v-for="v, k in postSearchProducts"
                            :key="'postSearchProducts_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeSearchProducts[k])})`
                            }}</span>
                            <input
                                v-model="postSearchProducts[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showSearchProductsResponse = !showSearchProductsResponse"
                        >
                            [{{ showSearchProductsResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showSearchProductsResponse">{{ SearchProductsResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.product"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/product</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">product(this, this.$route, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testProduct">
                        <div
                            v-for="v, k in postProduct"
                            :key="'postProduct_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeProduct[k])})`
                            }}</span>
                            <input
                                v-model="postProduct[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showProductResponse = !showProductResponse"
                        >
                            [{{ showProductResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showProductResponse">{{ ProductResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.listNews"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/listNews</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">listNews(this, this.$route, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testListNews">
                        <div
                            v-for="v, k in postListNews"
                            :key="'postListNews_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeListNews[k])})`
                            }}</span>
                            <input
                                v-model="postListNews[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showListNewsResponse = !showListNewsResponse"
                        >
                            [{{ showListNewsResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showListNewsResponse">{{ ListNewsResponse }}</pre>
                </div>
            </div>
            <div
                v-if="!hideFunctions.news"
                class="my-api-container"
            >
                <span class="text-large">GET</span>
                <span class="text-base">api/news</span>
                <br>
                <span class="text-large">Alias: </span>
                <span class="text-base">news(this, this.$route, data)</span>
                <div>
                    <span class="text-large">Input:</span>
                    <form @submit.prevent="testNews">
                        <div
                            v-for="v, k in postNews"
                            :key="'postNews_' + k"
                        >
                            <span class="text-base">{{
                                `${k} (${actualDataType(postTypeNews[k])})`
                            }}</span>
                            <input
                                v-model="postNews[k]"
                                class="form-input"
                            >
                        </div>
                        <button type="submit">
                            Test
                        </button>
                    </form>
                </div>
                <div>
                    <div class="text-large">
                        Response:
                        <span
                            class="text-code use-pointer"
                            @click="showNewsResponse = !showNewsResponse"
                        >
                            [{{ showNewsResponse ? '-' : '+' }}]
                        </span>
                    </div>
                    <pre v-show="showNewsResponse">{{ NewsResponse }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    banners, subscribe, filters, listProducts, searchProducts, product, listNews, news,
} from '../../static/api';

export default {
    data() {
        return {
            debounceFilterId: null,
            filterFunctions: '',
            hideFunctions: {
                banners: false,
                subscribe: false,
                filters: false,
                listProducts: false,
                searchProducts: false,
                product: false,
                listNews: false,
                news: false,
            },

            showBannersResponse: true,
            postBanners: {
            },
            postTypeBanners: {
            },
            BannersResponse: '',
            showSubscribeResponse: true,
            postSubscribe: {
                first_name: '',
                last_name: '',
                area: '',
                tel: '',
                email: '',
                tnc: '',
            },
            postTypeSubscribe: {
                first_name: 'String',
                last_name: 'String',
                area: 'Integer',
                tel: 'Integer',
                email: 'String',
                tnc: 'Boolean',
            },
            SubscribeResponse: '',
            showFiltersResponse: true,
            postFilters: {
            },
            postTypeFilters: {
            },
            FiltersResponse: '',
            showListProductsResponse: true,
            postListProducts: {
                page: '',
                per_page: '',
                skincare_or_makeup: '',
                subcategory: '',
                ordering: '',
                categories: '',
                collections: '',
                skin_concern: '',
            },
            postTypeListProducts: {
                page: 'Integer',
                per_page: 'Integer',
                skincare_or_makeup: 'Boolean',
                subcategory: 'String',
                ordering: 'String',
                categories: 'String',
                collections: 'String',
                skin_concern: 'String',
            },
            ListProductsResponse: '',
            showSearchProductsResponse: true,
            postSearchProducts: {
                page: '',
                per_page: '',
                search: '',
            },
            postTypeSearchProducts: {
                page: 'Integer',
                per_page: 'Integer',
                search: 'String',
            },
            SearchProductsResponse: '',
            showProductResponse: true,
            postProduct: {
                uid: '',
            },
            postTypeProduct: {
                uid: 'String',
            },
            ProductResponse: '',
            showListNewsResponse: true,
            postListNews: {
                page: '',
                per_page: '',
                category: '',
            },
            postTypeListNews: {
                page: 'Integer',
                per_page: 'Integer',
                category: 'String',
            },
            ListNewsResponse: '',
            showNewsResponse: true,
            postNews: {
                uid: '',
            },
            postTypeNews: {
                uid: 'String',
            },
            NewsResponse: '',
        };
    },
    methods: {
        async testBanners() {
            this.BannersResponse = await banners(this, this.$route).catch((err) => err);
        },
        async testSubscribe() {
            this.SubscribeResponse = await subscribe(this, this.postSubscribe).catch((err) => err);
        },
        async testFilters() {
            this.FiltersResponse = await filters(this).catch((err) => err);
        },
        async testListProducts() {
            this.ListProductsResponse = await listProducts(this, this.postListProducts, this.$route).catch((err) => err);
        },
        async testSearchProducts() {
            this.SearchProductsResponse = await searchProducts(this, this.postSearchProducts).catch((err) => err);
        },
        async testProduct() {
            this.ProductResponse = await product(this, this.postProduct, this.$route).catch((err) => err);
        },
        async testListNews() {
            this.ListNewsResponse = await listNews(this, this.$route, this.postListNews).catch((err) => err);
        },
        async testNews() {
            this.NewsResponse = await news(this, this.$route, this.postNews).catch((err) => err);
        },
        debounceFilter() {
            clearTimeout(this.debounceFilterId);
            this.debounceFilterId = setTimeout(() => {
                const filterFunctionsIsEmpty = this.filterFunctions.trim() === '';
                Object.keys(this.hideFunctions).forEach((k) => {
                    if (filterFunctionsIsEmpty) this.hideFunctions[k] = false;
                    else {
                        const kLower = k.toLowerCase();
                        const filterFunctionsArray = this.filterFunctions.trim().split(/\s+/);
                        const hide = !filterFunctionsArray.every((v2) => kLower.includes(v2.toLowerCase()));
                        this.hideFunctions[k] = hide;
                    }
                });
            }, 500);
        },
        randomizeInput(post, k, postType) {
            const newPost = { ...post };
            if (k === '') {
                Object.keys(newPost).forEach((k2) => {
                    newPost[k2] = this.randomWithDataType(postType[k2]);
                });
            } else {
                newPost[k] = this.randomWithDataType(postType[k]);
            }
            return newPost;
        },
        randomWithDataType(dataType) {
            if (dataType === 'String') return this.randomString(this.randomInt(4, 12));
            if (dataType === 'Word') return this.randomWords(1);
            if (dataType === 'Sentence') return this.randomWords(this.randomInt(2, 5));
            if (dataType === 'Integer') return this.randomInt(0, 999);
            if (dataType === 'Boolean') return this.randomInt(0, 1);
            if (dataType === 'Float') return this.randomFloat(0, 999);
            return '';
        },
        randomString(stringLength) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < stringLength; i += 1) {
                result += characters[Math.floor(Math.random() * characters.length)];
            }
            return result;
        },
        randomWords(wordCount) {
            const wordList = ['phasellus', 'a', 'pharetra', 'justo', 'praesent', 'purus', 'varius', 'quis', 'ligula', 'ac', 'tincidunt', 'lobortis', 'erat', 'quisque', 'sit', 'amet', 'donec', 'condimentum', 'sapien', 'id', 'ante', 'convallis', 'et', 'vehicula', 'dui', 'volutpat', 'nullam', 'massa', 'sagittis', 'sollicitudin', 'molestie', 'eros', 'sed', 'mattis', 'est', 'eget', 'dapibus', 'vivamus', 'felis', 'neque', 'venenatis', 'risus', 'viverra', 'hendrerit', 'mi', 'interdum', 'malesuada', 'fames', 'ipsum', 'primis', 'in', 'faucibus', 'morbi', 'nec', 'ex', 'nisl', 'placerat', 'vitae', 'quam', 'commodo', 'elit'];
            let result = '';
            const previous = [];
            for (let i = 0; i < wordCount; i += 1) {
                let newInt = -1;
                while (previous.includes(newInt) || newInt === -1) {
                    newInt = Math.floor(Math.random() * wordList.length);
                }
                previous[i % 3] = newInt;
                result += `${wordList[newInt]} `;
            }
            return result.trimEnd();
        },
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        randomFloat(min, max) {
            return Math.random() * (max - min) + min;
        },
        actualDataType(t) {
            if (t === 'String' || t === 'Word' || t === 'Sentence') return 'string';
            if (t === 'Boolean') return 'boolean';
            return 'number';
        },
    },
};
</script>
<style scoped>
.text-large { font-size: 22px; }
.text-base { font-size: 18px; }
.text-code {
    font-family: "Jetbrains Mono", "Victor Mono",
        SFMono-Regular, Menlo, Monaco,
        Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 16px;
}
.form-input { width: 400px; }
.my-container {
    margin: 0 10px 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
}
.my-api-container {
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
}
.use-pointer { cursor: pointer; }
</style>
