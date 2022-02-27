<template>
    <div class="page productdetail">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 productdetail__img">
                    <div class="productdetail__img--icon"><img :src="getProduct.product.icon_path" alt=""></div>
                    <!-- 有 COLOR出 -->
                    <swiper v-if="getProduct.product_colors.length>0" ref="productDetailImageSwiper" class="productDetailImageSwiper" :options="productDetailImageSwiperOption">
                        <swiper-slide v-for="(item, index) in getProduct.product_colors[currentImgGroupInex].image_path" :key="index">
                            <div class="">
                                <img class="full-width" :src="item" alt="">
                            </div>
                        </swiper-slide>
                        <div v-if="getProduct.product_colors[currentImgGroupInex].image_path.length>1" slot="pagination" class="productDetailImageSwiper-pagination" />                <div v-if="getProduct.product_colors[currentImgGroupInex].image_path.length>1" slot="button-prev" class="swiper-button-prev" />
                        <div v-if="getProduct.product_colors[currentImgGroupInex].image_path.length>1" slot="button-next" class="swiper-button-next" />
                    </swiper>
                    <!-- 冇 COLOR出 -->
                    <!-- <img v-else class="full-width" :src="getProduct.product.image_path" alt=""> -->
                </div>
                <div class="col-md-6 col-sm-12 productdetail-intro">
                    <div v-if="getProduct.product.collections" class="pb-2">{{ getProduct.product.collections_display }}</div>
                    <div class="productdetail-intro-title">
                        <h1>{{ getProduct.product.title }}</h1>
                        <div v-b-modal.share-popup-bs class="productdetail-intro-share"><img src="~/assets/images/icons/share.svg" alt=""></div>
                    </div>
                    <div v-if="getProduct.product.spf" class="mb-15 grayText">{{ getProduct.product.spf }}</div>
                    <div class="productdetail-intro-volume grayText">{{ getProduct.product.volume }}</div>
                    <div class="productdetail-intro-price">HK${{ getProduct.product.price.toLocaleString() }}</div>
                    <div v-if="getProduct.product_colors.length>1" class="productdetail-intro-color-frame">
                        <div v-for="(item, index) in getProduct.product_colors" :key="index" class="d-inline-block">
                            <div v-if="index != 0" class="productdetail-intro-color cursor" :style="{backgroundColor: item.rgb_code}" @click="changeProductImgGroup(index, item.rgb_code)">
                                <div :class="selectColor(item.rgb_code)" />
                            </div>
                        </div>
                        <div>{{ colorName }}</div>
                    </div>
                    <div class="productdetail-intro-volume grayText">
                        <span>
                            {{ $t('text_categories') }} :
                            <a
                                @click="toProductlistPage(
                                    getProduct.product.skincare_or_makeup,
                                    getProduct.product.subcategory,
                                    'collections',
                                    getProduct.product.collections
                                )"
                            >
                                <!-- collections -->
                                {{ (getProduct.product.collections)? getProduct.product.collections_display + ', ' : '' }}
                            </a>
                            <a
                                @click="toProductlistPage(
                                    getProduct.product.skincare_or_makeup,
                                    getProduct.product.subcategory
                                )"
                            >
                                <!-- subcategory -->
                                {{ ((getProduct.product.subcategory) ? getProduct.product.subcategory_display : '') +
                                    ((getProduct.product.subcategory && getProduct.product.categories) ? ', ' : '') }}
                            </a>
                            <a
                                @click="toProductlistPage(
                                    getProduct.product.skincare_or_makeup,
                                    getProduct.product.subcategory,
                                    'categories',
                                    getProduct.product.categories
                                )"
                            >
                                <!-- categories -->
                                {{ (getProduct.product.categories)? getProduct.product.categories_display : '' }}
                            </a><a
                                v-for="(linkItem, linkIndex) in getProduct_skin_concern" :key="linkIndex"
                                @click="toProductlistPage(
                                    getProduct.product.skincare_or_makeup,
                                    getProduct.product.subcategory,
                                    'skin_concern',
                                    getProduct_skin_concern_link_name[linkIndex]
                                )"
                            >
                                <!-- skin_concern -->
                                {{ `, ${linkItem}` }}
                            </a>
                        </span>
                    </div>
                    <div class="productdetail-intro-line" />

                    <b-tabs :no-nav-style="true" nav-class="cus-tags-nav-bs" content-class="mt-3">
                        <b-tab v-if="getProduct.product.details" :title="$t('text_details')">
                            <div class="container detail-description" v-html="getProduct.product.details" />
                        </b-tab>
                        <b-tab v-if="getProduct.product.key_elements" :title="$t('text_key_elements')">
                            <div class="container detail-description" v-html="getProduct.product.key_elements" />
                        </b-tab>
                        <b-tab v-if="getProduct.product.how_to_use" :title="$t('text_how_to_use')">
                            <div class="container detail-description" v-html="getProduct.product.how_to_use" />
                        </b-tab>
                    </b-tabs>
                </div>
                <div v-if="Object.keys(getProduct.banner).length>0" class="col-12 productdetail-banner">
                    <img class="d-none d-md-block full-width" :src="getProduct.banner.image_path" alt="">
                    <img class="d-block d-md-none full-width" :src="getProduct.banner.mobile_path" alt="">
                </div>
            </div>
        </div>

        <!-- Special Set -->
        <div v-if="getProduct.product_sets && getProduct.product_sets.length>0" class="container pt-5 productdetail-specialset">
            <div class="text-center">
                <h1>{{ $t('text_special_set') }}</h1>
            </div>
            <swiper class="productSwiperOption" :options="productSwiperOption">
                <swiper-slide v-for="(item, key) in getProduct.product_sets" :key="`specialset_${key}`">
                    <ListProduct
                        :img="item['thumbnail_path']"
                        :name="item['title']"
                        :price="item['price']"
                        :spf="item['spf']"
                        class="w-100"
                    >
                        <!-- <div v-b-modal.set-popup-bs class="btn-underline">{{ $t('text_discover_more') }}</div> -->
                        <div ref="set-popup-bs-show" class="btn-underline cursor" @click="openSetPopupBs(item['description'])">{{ $t('text_discover_more') }}</div>
                    </ListProduct>
                </swiper-slide>
                <div slot="button-prev" class="swiper-button-prev" />
                <div slot="button-next" class="swiper-button-next" />
            </swiper>
        </div>

        <!-- Video -->
        <div v-if="getProduct.product.youtube_link" class="container">
            <div class="row">
                <div class="col-12 embed-responsive embed-responsive-16by9 productdetail-video">
                    <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+getProduct.product.youtube_link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
            </div>
        </div>

        <!-- You may also like -->
        <div class="text-center pt-5">
            <h1>{{ $t('text_you_may_also_like') }}</h1>
        </div>
        <div class="container">
            <swiper class="productSwiperOption" :options="productSwiperOption">
                <swiper-slide v-for="(item, key) in getProduct.recommended_products" :key="`suggestion_${key}`">
                    <ListProduct
                        :uid="item['uid']"
                        path="productdetail-uid"
                        :img="item['thumbnail_path']"
                        :name="item['title']"
                        :capacity="item['volume']"
                        :price="item['price']"
                        :spf="item['spf']"
                        :collections="item['collections_display']"
                        class="w-100"
                        :style="{opacity: swiperListVisibility}"
                        @hideListProduct="hideListProduct"
                    >
                        <div class="btn-underline">
                            {{ $t('text_discover_more') }}
                        </div>
                    </ListProduct>
                </swiper-slide>
                <div slot="button-prev" class="swiper-button-prev" />
                <div slot="button-next" class="swiper-button-next" />
            </swiper>
        </div>
        <div class="spacing" />

        <!-- POP UP -->
        <SharePopup
            :title="getProduct.product.title"
            :share-platform="['whatsapp']"
        />
        <SetPopup :description="setPopupDescription" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { product } from '~/static/api';
import ListProduct from '~/components/ListProduct';
import SharePopup from '~/components/popup/SharePopup';
import SetPopup from '~/components/popup/SetPopup';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ListProduct,
        SharePopup,
        SetPopup,
    },
    async asyncData({ app, route }) {
        const getProduct = await product(app, {
            uid: route.params.uid,
        }, route);
        console.log('getProduct');
        console.log(getProduct);
        return { getProduct };
    },
    data() {
        return {
            // suggestion: [
            //     {
            //         img: require('~/assets/images/thumbnail/thumb01.jpg'),
            //         name: 'Product Name',
            //         capacity: '60ml',
            //         price: 2000,
            //     },
            //     ......
            // ],
            productDetailImageSwiperOption: {
                direction: 'horizontal',
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                autoHeight: false,
                centerInsufficientSlides: true,
                pagination: {
                    el: '.productDetailImageSwiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            productSwiperOption: {
                direction: 'horizontal',
                slidesPerView: 1,
                autoHeight: false,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                },
                centerInsufficientSlides: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            productDetail: '',
            setPopupDescription: '',
            getProduct_skin_concern: [],
            getProduct_skin_concern_link_name: [],
            currentImgGroupInex: 0,
            colorName: '',
            swiperListVisibility: '1',
            focusColor: '',
        };
    },
    head() {
        return {
            title: `${this.getProduct.product.title} | The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong`,
            meta: [
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.getProduct.product_colors[0].image_path,
                },
            ],
        };
    },
    computed: {
        swiper() {
            return this.$refs.productDetailImageSwiper.$swiper;
        },
    },
    mounted() {
        if (this.getProduct.product.skin_concern) {
            // console.log('this.getProduct.product.skin_concern');
            // console.log(typeof (this.getProduct.product.skin_concern));
            this.getProduct_skin_concern = this.getProduct.product.skin_concern_display.split(',');
            this.getProduct_skin_concern_link_name = this.getProduct.product.skin_concern.split(',');
        }

        // console.log(this.$refs.productDetailImageSwiper.$swiper);
    },
    methods: {
        toProductlistPage(maincategory, subcategory, search, name) {
            maincategory = (maincategory === 0) ? 'skincare' : 'makeup';
            if (maincategory !== 'makeup') {
                subcategory = (subcategory.toLowerCase()).replace(' ', '_');
            } else {
                subcategory = 'all';
            }

            this.$router.push(this.localeRoute({
                name: 'productlist-maincategory-subcategory',
                params: {
                    maincategory,
                    subcategory,
                    // page: 1,
                },
                query: {
                    page: 1,
                    categories: (search === 'categories') ? name : '',
                    collections: (search === 'collections') ? name : '',
                    skin_concern: (search === 'skin_concern') ? name : '',
                },
            }));
        },
        listOutCategories() {
            const skinConcernArray = this.getProduct.product.skin_concern.split(',');

            let skinConcern = '';
            skinConcernArray.forEach((e, index) => {
                if (index > 0) {
                    skinConcern += ` / ${this.$t(skinConcernArray[index])}`;
                } else {
                    skinConcern += `${this.$t(skinConcernArray[index])}`;
                }
            });

            return skinConcern;
        },
        openSetPopupBs(text) {
            this.$root.$emit('bv::show::modal', 'set-popup-bs', '#set-popup-bs-show');
            this.setPopupDescription = text;
        },
        changeProductImgGroup(i, colorCode) {
            this.currentImgGroupInex = i;
            this.colorName = this.getProduct.product_colors[i].description;

            this.swiper.slideTo(0, 500, false);

            this.focusColor = colorCode;
        },
        hideListProduct(opacity) {
            this.swiperListVisibility = opacity;
        },
        selectColor(colorCode) {
            return (this.focusColor === colorCode) ? 'active' : '';
        },
    },
};
</script>

<style lang="scss">
.productDetailImageSwiper {
    .productDetailImageSwiper-pagination {
        text-align: center;
        padding: 10px 0 20px;
        span {
            margin: 0 5px;
        }
        .swiper-pagination-bullet {
            background-color: transparent !important;
            border: 1px solid #A39161 !important;
            opacity: 1;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background-color: #A39161 !important;
        }
    }
}

.productSwiperOption, .productDetailImageSwiper {
    .swiper-button-prev, .swiper-button-next {
        z-index: 12px !important;
    }
    .swiper-button-prev, .swiper-button-next {
        color: #000 !important;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
        font-size: 15px !important;
        font-weight: bolder !important;
    }
    .swiper-button-prev:focus, .swiper-button-next:focus {
        outline: none;
    }
}

.productdetail-intro {
    .grayText a {
        color: $color-gray;
        cursor: pointer;
    }
}
</style>
