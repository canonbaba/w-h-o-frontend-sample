<template>
    <div class="page productList">
        <div class="container productList-banner">
            <img class="w-100 d-none d-md-block" :src="banner.image_path" alt="">
            <img class="w-100 d-block d-md-none" :src="banner.mobile_path" alt="">
            <div v-if="this.$route.query.categories || this.$route.query.collections || this.$route.query.skin_concern" class="productList-title">
                <p class="brownText">
                    <nuxt-link v-if="this.$route.params.subcategory" :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: this.$route.params.maincategory } })">
                        {{ banner.skincare_or_makeup_display + ' / ' }}
                    </nuxt-link>
                    <nuxt-link v-if="this.$route.params.maincategory !== 'makeup'" :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: this.$route.params.maincategory, subcategory: this.$route.params.subcategory } })">
                        {{ banner.subcategory_display }}
                    </nuxt-link>
                </p>
                <h1 :class="(banner.color == 'dark')? 'darkText' : 'whiteText'">
                    {{ (this.$route.query.categories)? banner.categories_display : '' }}
                    {{ (this.$route.query.collections && !this.$route.query.categories)? banner.collections_display : '' }}
                    {{ (this.$route.query.skin_concern && !this.$route.query.collections && !this.$route.query.categories)? banner.skin_concern_display : '' }}
                </h1>
            </div>
            <div v-else class="productList-title">
                <p class="brownText">
                    <nuxt-link v-if="this.$route.params.subcategory" :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: this.$route.params.maincategory } })">
                        {{ banner.skincare_or_makeup_display + ' / ' }}
                    </nuxt-link>
                </p>
                <h1 :class="(banner.color == 'dark')? 'darkText' : 'whiteText'">{{ (this.$route.params.subcategory && (this.$route.params.maincategory !== 'makeup'))? banner.subcategory_display : banner.skincare_or_makeup_display }}</h1>
            </div>
        </div>
        <!-- filter -->
        <div class="row container py-5 mx-auto list-filter">
            <!-- left side filter - mobile-->
            <div class="d-inline-block d-lg-none w-50">
                <div
                    :style="{display:((this.$route.params.maincategory == 'skincare') && (this.$route.params.subcategory == 'body_care'))? 'none':''}"
                    class="productList__sortBox left-side-filter-mo"
                    type="text"
                    @click="toggleSlideMenuItemList({
                        maincategory: $route.params.maincategory,
                        subcategory: ($route.params.subcategory)?$route.params.subcategory:''
                    })"
                >
                    <!-- {{ aboutProduct('left-side-filter-mo') }} -->
                    {{ ($route.query.mobile_filter_name)? $route.query.mobile_filter_name : aboutProduct('left-side-filter-mo') }}
                </div>
            </div>

            <!-- skincare-> face_care+body_care -->
            <div v-if="(this.$route.params.maincategory == 'skincare') && !this.$route.params.subcategory" class="d-none d-lg-inline-block w-70">
                <div v-click-outside="hideVisibleSelectCategories" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCategories = !visibleSelectCategories">
                        <div class="label">
                            <span>{{ valueSelectCategories }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCategories, visibleSelectCategories }">
                            <ul>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.categories.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'categories', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-click-outside="hideVisibleSelectCollections" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCollections = !visibleSelectCollections">
                        <div class="label">
                            <span>{{ valueSelectCollections }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCollections, visibleSelectCollections }">
                            <ul>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.collections.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'collections', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-click-outside="hideVisibleSelectSkin_Concern" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectSkin_Concern = !visibleSelectSkin_Concern">
                        <div class="label">
                            <span>{{ valueSelectSkin_Concern }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectSkin_Concern, visibleSelectSkin_Concern }">
                            <ul>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.skin_concern.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'skin_concern', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- skincare-> face_care -->
            <div v-if="(this.$route.params.maincategory == 'skincare') && (this.$route.params.subcategory == 'face_care')" class="d-none d-lg-inline-block w-70">
                <!-- by_categories -->
                <div v-click-outside="hideVisibleSelectCategories" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCategories = !visibleSelectCategories">
                        <div class="label">
                            <span>{{ valueSelectCategories }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCategories, visibleSelectCategories }">
                            <ul>
                                <li @click="select('', 'face_care', 'categories', '')">
                                    {{ this.$t('by_categories') }}
                                </li>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.categories.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'categories', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- by_collections -->
                <div v-click-outside="hideVisibleSelectCollections" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCollections = !visibleSelectCollections">
                        <div class="label">
                            <span>{{ valueSelectCollections }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCollections, visibleSelectCollections }">
                            <ul>
                                <li @click="select('', 'face_care', 'collections', '')">
                                    {{ this.$t('by_collections') }}
                                </li>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.collections.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'collections', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- by_skin_concern -->
                <div v-click-outside="hideVisibleSelectSkin_Concern" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectSkin_Concern = !visibleSelectSkin_Concern">
                        <div class="label">
                            <span>{{ valueSelectSkin_Concern }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectSkin_Concern, visibleSelectSkin_Concern }">
                            <ul>
                                <li @click="select('', 'face_care', 'skin_concern', '')">
                                    {{ this.$t('by_skin_concern') }}
                                </li>
                                <li
                                    v-for="(item, key) in (skincare)?skincare.contains.face_care.contains.skin_concern.contains:[]"
                                    :key="key"
                                    @click="select(key, 'face_care', 'skin_concern', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- skincare-> body_care -->
            <div v-if="(this.$route.params.maincategory == 'skincare') && (this.$route.params.subcategory == 'body_care')" class="d-none d-lg-inline-block w-70" />
            <!-- makeup -->
            <div v-if="this.$route.params.maincategory == 'makeup'" class="d-none d-lg-inline-block w-70">
                <!-- by_categories -->
                <div v-click-outside="hideVisibleSelectCategories" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCategories = !visibleSelectCategories">
                        <div class="label">
                            <span>{{ valueSelectCategories }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCategories, visibleSelectCategories }">
                            <ul>
                                <li @click="select('', 'all', 'categories', '')">
                                    {{ this.$t('by_categories') }}
                                </li>
                                <li
                                    v-for="(item, key) in (makeup)?makeup.contains.all.contains.categories.contains:[]"
                                    :key="key"
                                    @click="select(key, 'all', 'categories', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- by_collections -->
                <div v-click-outside="hideVisibleSelectCollections" class="d-inline-block aselect">
                    <div class="selector" @click="visibleSelectCollections = !visibleSelectCollections">
                        <div class="label">
                            <span>{{ valueSelectCollections }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectCollections, visibleSelectCollections }">
                            <ul>
                                <li @click="select('', 'all', 'collections', '')">
                                    {{ this.$t('by_collections') }}
                                </li>
                                <li
                                    v-for="(item, key) in (makeup)?makeup.contains.all.contains.collections.contains:[]"
                                    :key="key"
                                    @click="select(key, 'all', 'collections', item.display_as)"
                                >
                                    {{ item.display_as }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-inline-block w-30 text-right">
                <div v-click-outside="hideVisibleSelectOrdering" class="d-inline-block aselect sortby">
                    <div class="selector" @click="visibleSelectOrdering = !visibleSelectOrdering">
                        <div class="label">
                            <span>{{ valueSelectOrdering }}</span>
                        </div>
                        <div :class="{ hidden : !visibleSelectOrdering, visibleSelectOrdering }">
                            <ul>
                                <li @click="select('', '', 'ordering', 'sort_by')">{{ $t('sort_by') }}</li>
                                <li @click="select('price asc', '', 'ordering', 'low_to_high_price')">{{ $t('low_to_high_price') }}</li>
                                <li @click="select('price desc', '', 'ordering', 'high_to_low_price')">{{ $t('high_to_low_price') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- / filter -->
        <div class="container">
            <div class="row">
                <ListProduct
                    v-for="(item, index) in items"
                    :key="`listproduct_${index}`"
                    class="w-100 col-6 col-lg-3 col-md-6 pb-4"
                    :uid="item['uid']"
                    path="productdetail-uid"
                    :img="item['thumbnail_path']"
                    :name="item['title']"
                    :capacity="item['volume']"
                    :price="item['price']"
                    :icon_text="item['icon_text']"
                    :spf="item['spf']"
                    :collections="item['collections_display']"
                />
            </div>
        </div>
        <div class="container py-5">
            <b-pagination
                v-model="currentPage"
                pills
                :total-rows="totalPages"
                :per-page="1"
                :hide-goto-end-buttons="true"
                :hide-ellipsis="true"
                :ellipsis-class="'force_show_ellipsis'"
                class="customPagination"
                @input="toPage()"
            />
        </div>
        <SideMenuItemList :cate-data="banner" />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { BPagination } from 'bootstrap-vue';
import ClickOutside from 'vue-click-outside';
import { listProducts } from '~/static/api';
import ListProduct from '~/components/ListProduct';
import SideMenuItemList from '~/components/SideMenuItemList';
// import Selection from '~/components/Selection';

const { mapState, mapMutations } = createNamespacedHelpers('globalStore');

export default {
    directives: {
        ClickOutside,
    },
    components: {
        BPagination,
        ListProduct,
        SideMenuItemList,
        // Selection,
    },
    async asyncData({ app, route }) {
        const categories = (route.query.categories) ? route.query.categories.replace('+', ' ') : '';
        const collections = (route.query.collections) ? route.query.collections.replace('+', ' ') : '';
        const skinConcern = (route.query.skin_concern) ? route.query.skin_concern.replace('+', ' ') : '';
        const getListProducts = await listProducts(app, {
            page: route.query.page || '1',
            per_page: 12,
            skincare_or_makeup: route.params.maincategory === 'skincare' ? '0' : '1',
            subcategory: route.params.subcategory,
            ordering: route.query.ordering || '',
            categories: categories.replace('+', ' ') || '',
            collections: collections.replace('+', ' ') || '',
            skin_concern: skinConcern.replace('+', ' ') || '',
        }, route);
        console.log(getListProducts);

        // handle Page Name
        let tagName = '';
        if (route.query.categories) {
            tagName = getListProducts.banner.categories_display;
        } else if (route.query.collections) {
            tagName = getListProducts.banner.collections_display;
        } else if (route.query.skin_concern) {
            tagName = getListProducts.banner.skin_concern_display;
        } else if (route.params.subcategory) {
            if (route.params.maincategory === 'makeup') {
                tagName = getListProducts.banner.skincare_or_makeup_display;
            } else {
                tagName = getListProducts.banner.subcategory_display;
            }
        } else {
            tagName = getListProducts.banner.skincare_or_makeup_display;
        }
        console.log(tagName);

        return {
            items: getListProducts.items,
            totalPages: getListProducts.last_page,
            banner: getListProducts.banner,
            tagName,
        };
    },
    data() {
        return {
            currentPage: this.$route.query.page || 1,
            // valueSelectCategories: (this.$route.query.categories) ? this.$t(`cate.${this.$route.query.categories}`) : this.$t('by_categories'),
            // valueSelectCollections: (this.$route.query.collections) ? this.$t(`cate.${this.$route.query.collections}`) : this.$t('by_collections'),
            // valueSelectSkin_Concern: (this.$route.query.skin_concern) ? this.$t(`cate.${this.$route.query.skin_concern}`) : this.$t('by_skin_concern'),
            valueSelectOrdering: (this.$route.query.ordering) ? this.handlePriceOrderingText(this.$route.query.ordering) : this.$t('sort_by'),
            visibleSelectCategories: false,
            visibleSelectCollections: false,
            visibleSelectSkin_Concern: false,
            visibleSelectOrdering: false,
        };
    },
    head() {
        return {
            title: `${this.tagName} | The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong`,
        };
    },
    computed: {
        ...mapState([
            'skincare', 'makeup',
        ]),
        valueSelectCategories() {
            const skincareOrMakeup = this.$route.params.maincategory === 'skincare' ? 'skincare' : 'makeup';
            if (this[skincareOrMakeup]) {
                const subcategory = this.$route.params.maincategory === 'makeup' ? 'all' : this.$route.params.subcategory;
                if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains, subcategory)) {
                    if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains, 'categories')
                        && Object.prototype.hasOwnProperty.call(this.$route.query, 'categories')
                        && Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains.categories.contains, this.$route.query.categories)) {
                        return this[skincareOrMakeup].contains[subcategory].contains.categories.contains[this.$route.query.categories].display_as;
                    }
                }
            }
            return this.$t('by_categories');
        },
        valueSelectCollections() {
            const skincareOrMakeup = this.$route.params.maincategory === 'skincare' ? 'skincare' : 'makeup';
            if (this[skincareOrMakeup]) {
                const subcategory = this.$route.params.maincategory === 'makeup' ? 'all' : this.$route.params.subcategory;
                if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains, subcategory)) {
                    if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains, 'collections')
                        && Object.prototype.hasOwnProperty.call(this.$route.query, 'collections')
                        && Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains.collections.contains, this.$route.query.collections)) {
                        return this[skincareOrMakeup].contains[subcategory].contains.collections.contains[this.$route.query.collections].display_as;
                    }
                }
            }
            return this.$t('by_collections');
        },
        valueSelectSkin_Concern() {
            const skincareOrMakeup = this.$route.params.maincategory === 'skincare' ? 'skincare' : 'makeup';
            if (this[skincareOrMakeup]) {
                const subcategory = this.$route.params.maincategory === 'makeup' ? 'all' : this.$route.params.subcategory;
                if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains, subcategory)) {
                    if (Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains, 'skin_concern')
                        && Object.prototype.hasOwnProperty.call(this.$route.query, 'skin_concern')
                        && Object.prototype.hasOwnProperty.call(this[skincareOrMakeup].contains[subcategory].contains.skin_concern.contains, this.$route.query.skin_concern)) {
                        return this[skincareOrMakeup].contains[subcategory].contains.skin_concern.contains[this.$route.query.skin_concern].display_as;
                    }
                }
            }
            return this.$t('by_skin_concern');
        },
    },
    watchQuery: true, // reloads the page on query update (ordering, categories, collections, skin_concern change)
    mounted() {
        // console.log(this.$route);
        // this.aboutProduct('left-side-filter-mo');
    },
    methods: {
        ...mapMutations([
            'toggleSlideMenu', 'toggleSlideMenuItemList',
        ]),
        toPage() {
            this.$router.push(this.localeRoute({
                name: 'productlist-maincategory-subcategory',
                params: {
                    maincategory: this.$route.params.maincategory,
                    subcategory: this.$route.params.subcategory,
                    // page: this.currentPage,
                },
                query: {
                    page: this.currentPage,
                    ordering: this.$route.query.ordering,
                    categories: this.$route.query.categories,
                    collections: this.$route.query.collections,
                    skin_concern: this.$route.query.skin_concern,
                },
            }));
        },
        // filter(e, target) {
        //     const theTarget = e.target.options[e.target.options.selectedIndex].dataset;
        //     console.log(e.target.value);

        //     this.categories = (target === 'categories') ? e.target.value : '';
        //     this.collections = (target === 'collections') ? e.target.value : '';
        //     this.skin_concern = (target === 'skin_concern') ? e.target.value : '';

        //     this.$router.push(this.localeRoute({
        //         name: 'productlist-maincategory-subcategory',
        //         params: {
        //             maincategory: this.$route.params.maincategory,
        //             subcategory: (theTarget.subcate) ? theTarget.subcate : this.$route.params.subcategory,
        //             // page: this.currentPage,
        //         },
        //         query: {
        //             ordering: target === 'ordering' ? e.target.value : this.$route.query.ordering,
        //             categories: target === 'categories' ? e.target.value : '',
        //             collections: target === 'collections' ? e.target.value : '',
        //             skin_concern: target === 'skin_concern' ? e.target.value : '',
        //         },
        //     }));
        // },
        aboutProduct(input) {
            if (Object.keys(this.$route.query).length > 0 && input === 'left-side-filter-mo') {
                switch (true) {
                case this.$route.query.categories && Object.keys(this.$route.query.categories).length > 0:
                    return this.banner.categories_display;
                case this.$route.query.collections && Object.keys(this.$route.query.collections).length > 0:
                    return this.banner.collections_display;
                case this.$route.query.skin_concern && Object.keys(this.$route.query.skin_concern).length > 0:
                    return this.banner.skin_concern_display;
                default:
                    if (this.banner.subcategory_display) {
                        return this.banner.subcategory_display;
                    }
                    return this.banner.skincare_or_makeup_display;
                }
            } else if (input === 'left-side-filter-mo') {
                if (this.banner.subcategory_display) {
                    return this.banner.subcategory_display;
                }
                return this.banner.skincare_or_makeup_display;
            }
        },
        hideVisibleSelectCategories() {
            this.visibleSelectCategories = false;
        },
        hideVisibleSelectCollections() {
            this.visibleSelectCollections = false;
        },
        hideVisibleSelectSkin_Concern() {
            this.visibleSelectSkin_Concern = false;
        },
        hideVisibleSelectOrdering() {
            this.visibleSelectOrdering = false;
        },
        select(option, subcate, target, listName) {
            // console.log(option);

            if (target === 'ordering') {
                this.$router.push(this.localeRoute({
                    name: 'productlist-maincategory-subcategory',
                    params: {
                        maincategory: this.$route.params.maincategory,
                        subcategory: (subcate) || this.$route.params.subcategory,
                    },
                    query: {
                        ordering: target === 'ordering' ? option : this.$route.query.ordering,
                        categories: this.$route.query.categories,
                        collections: this.$route.query.collections,
                        skin_concern: this.$route.query.skin_concern,
                    },
                }));
            } else {
                this.$router.push(this.localeRoute({
                    name: 'productlist-maincategory-subcategory',
                    params: {
                        maincategory: this.$route.params.maincategory,
                        subcategory: (subcate) || this.$route.params.subcategory,
                    },
                    query: {
                        ordering: target === 'ordering' ? option : this.$route.query.ordering,
                        categories: target === 'categories' ? option : this.$route.query.categories,
                        collections: target === 'collections' ? option : this.$route.query.collections,
                        skin_concern: target === 'skin_concern' ? option : this.$route.query.skin_concern,
                    },
                }));
            }

            // this.valueSelectCategories = (target === 'categories') ? listName : this.$t('by_categories');
            // this.valueSelectCollections = (target === 'collections') ? listName : this.$t('by_collections');
            // this.valueSelectSkin_Concern = (target === 'skin_concern') ? listName : this.$t('by_skin_concern');
            this.visibleSelectOrdering = (target === 'ordering') ? this.$t(listName) : this.$t('sort_by');
        },
        handlePriceOrderingText(input) {
            // console.log('input');
            // console.log(input);
            if (input === 'price asc') {
                return this.$t('low_to_high_price');
            }
            if (input === 'price desc') {
                return this.$t('high_to_low_price');
            }
            return this.$t('sort_by');
        },
    },
};
</script>

<style lang="scss" scoped>
.customPagination::v-deep {
    justify-content: center;
}
.customPagination::v-deep .page-link {
    z-index: 0;
    border: none;
    color: #000;
}
.customPagination::v-deep .page-link:focus {
    box-shadow: none;
}
.customPagination::v-deep .page-item.active .page-link {
    background-color: $color-main;
    color: #fff;
}
li.page-item.disabled.bv-d-xs-down-none.force_show_ellipsis {
    display: inline-block !important;
}

.aselect {
    width: 280px;
    max-width: 160px;
    margin-right: 20px;
    cursor: pointer;
    .selector {
        border: none;
        border-bottom: 1px solid #e0e0e0;
        background-color: transparent;
        position: relative;
        z-index: 1;
        background-image: url('~assets/images/dropdown.svg');
        background-repeat: no-repeat;
        background-position: calc(100% - 5px) center;
        background-size: 8px auto;
        text-align: left !important;
        .label {
            display: block;
            padding: 10px 12px 10px 0;
            color: #9C9C9C;
        }
    }
    ul {
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        border: 1px solid gainsboro;
        position: absolute;
        z-index: 1;
        background: #fff;
    }
    li {
        padding: 10px 12px;
        &:hover {
            background: #e0e0e0;
        }
    }
    .hidden {
        visibility: hidden;
    }
    .visible {
        visibility: visible;
    }
}
</style>
