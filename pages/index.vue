<template>
    <div class="page">
        <!-- KV -->
        <Banner :props-data-array="banners" />

        <!-- Featured Collection -->
        <div v-if="featured_banners.length > 0" class="container-fluid">
            <div class="row HalfWidthBannerContanier">
                <HalfWidthBanner :bg="featured_banners[0].image_path" :m_bg="featured_banners[0].mobile_path">
                    <div :class="(featured_banners[0].color == 'dark')?'':'whiteText'">
                        <h1>{{ featured_banners[0].title }}</h1>
                        <p>{{ featured_banners[0].content }}</p>
                        <a :href="$i18n.locale + '/' + featured_banners[0].link" :class="(featured_banners[0].color == 'dark')?'':'color-white'" class="btn-underline">{{ $t('text_discover_more') }}</a>
                    </div>
                </HalfWidthBanner>
                <HalfWidthBanner :bg="featured_banners[1].image_path" :m_bg="featured_banners[1].mobile_path">
                    <div :class="(featured_banners[1].color == 'dark')?'':'whiteText'">
                        <h1>{{ featured_banners[1].title }}</h1>
                        <p>{{ featured_banners[1].content }}</p>
                        <a :href="$i18n.locale + '/' + featured_banners[1].link" :class="(featured_banners[1].color == 'dark')?'':'color-white'" class="btn-underline">{{ $t('text_discover_more') }}</a>
                    </div>
                </HalfWidthBanner>
            </div>
        </div>

        <!-- Featured Products -->
        <div class="text-center">
            <div class="caption">{{ $t('text_best_seller') }}</div>
            <h1>{{ $t('text_skincare') }}</h1>
        </div>
        <div class="container">
            <swiper ref="productSwiperOption" class="productSwiperOption" :options="productSwiperOption">
                <swiper-slide v-for="(item, key) in featured_skincare_products" :key="key">
                    <ListProduct
                        :uid="item['uid']"
                        path="productdetail-uid"
                        :img="item['thumbnail_path']"
                        :name="item['title']"
                        :capacity="item['volume']"
                        :price="item['price']"
                        :spf="item['spf']"
                        :icon_text="item['icon_text']"
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

        <!-- News -->
        <div class="container-fluid">
            <div class="row landingNewsContanier" :style="{ backgroundImage: 'url(' + news_banners[0].image_path + ')' }">
                <div class="col-12 landingNews">
                    <img :src="news_banners[0].mobile_path" alt="" class="d-block d-md-none">
                    <div class="landingNews-text">
                        <div class="caption">{{ $t('text_news') }}</div>
                        <h1>{{ news_banners[0].title }}</h1>
                        <p>{{ news_banners[0].content }}</p>
                        <div class="btn-underline cursor" @click="toPage('newslist')">
                            {{ $t('text_discover_more') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Featured Collection -->
        <div v-if="featured_banners.length > 0" class="container-fluid">
            <div class="row HalfWidthBannerContanier">
                <HalfWidthBanner :bg="featured_banners[2].image_path" :m_bg="featured_banners[2].mobile_path">
                    <div :class="(featured_banners[2].color == 'dark')?'':'whiteText'">
                        <h1>{{ featured_banners[2].title }}</h1>
                        <p>{{ featured_banners[2].content }}</p>
                        <a :href="$i18n.locale + '/' + featured_banners[2].link" :class="(featured_banners[2].color == 'dark')?'':'color-white'" class="btn-underline">{{ $t('text_discover_more') }}</a>
                    </div>
                </HalfWidthBanner>
                <HalfWidthBanner :bg="featured_banners[3].image_path" :m_bg="featured_banners[3].mobile_path">
                    <div :class="(featured_banners[3].color == 'dark')?'':'whiteText'">
                        <h1>{{ featured_banners[3].title }}</h1>
                        <p>{{ featured_banners[3].content }}</p>
                        <a :href="$i18n.locale + '/' + featured_banners[3].link" :class="(featured_banners[3].color == 'dark')?'':'color-white'" class="btn-underline">{{ $t('text_discover_more') }}</a>
                    </div>
                </HalfWidthBanner>
            </div>
        </div>

        <!-- Featured Products -->
        <div class="text-center">
            <div class="caption">{{ $t('text_best_seller') }}</div>
            <h1>{{ $t('text_makeup') }}</h1>
        </div>
        <div class="container">
            <swiper ref="productSwiperOption" class="productSwiperOption" :options="productSwiperOption">
                <swiper-slide v-for="(item, key) in featured_makeup_products" :key="key">
                    <ListProduct
                        :uid="item['uid']"
                        path="productdetail-uid"
                        :img="item['thumbnail_path']"
                        :name="item['title']"
                        :capacity="item['volume']"
                        :price="item['price']"
                        :spf="item['spf']"
                        :icon_text="item['icon_text']"
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

        <!-- Locator & Contact -->
        <div class="container-fluid">
            <div class="row landingLocatorContanier">
                <div v-b-modal.store-popup-bs class="col-md-3 col-sm-12 landingLocator">
                    <div class="caption">{{ $t('text_store_locator') }}</div>
                    <div class="longArrowContanier">
                        <h1>{{ $t('text_find_whoo') }}</h1>
                        <div class="longArrow">
                            <img src="~assets/images/long_arrow.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 landingLocator-img">
                    <img src="~/assets/images/landing/brand-img-01.jpg" alt="" class="d-md-block d-none">
                    <img src="~/assets/images/landing/m-brand-img-01.jpg" alt="" class="d-block d-md-none">
                </div>
                <div class="col-md-3 col-sm-12 landingLocator">
                    <div class="caption">{{ $t('text_customer_care') }}</div>
                    <a class="longArrowContanier" href="mailto:info@whoohk.com">
                        <h1>{{ $t('text_contact_us') }}</h1>
                        <div class="longArrow">
                            <img src="~assets/images/long_arrow.svg" alt="">
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-sm-12 landingLocator-img">
                    <img src="~/assets/images/landing/brand-img-02.jpg" alt="" class="d-md-block d-none">
                    <img src="~/assets/images/landing/m-brand-img-02.jpg" alt="" class="d-block d-md-none">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { banners } from '../static/api';
import HalfWidthBanner from '~/components/HalfWidthBanner';
import ListProduct from '~/components/ListProduct';
import Banner from '~/components/landing/Banner';

export default {
    components: {
        Swiper,
        SwiperSlide,
        HalfWidthBanner,
        ListProduct,
        Banner,
    },
    async asyncData({ app, route }) {
        const getBanners = await banners(app, route).catch(() => ({
            // suppresses error and returns empty arrays
            banners: [],
            news_banners: [],
            featured_banners: [],
            featured_skincare_products: [],
            featured_makeup_products: [],
        }));

        console.log(getBanners);
        return {
            banners: getBanners.banners,
            news_banners: getBanners.news_banners, // TODO
            featured_banners: getBanners.featured_banners,
            featured_skincare_products: getBanners.featured_skincare_products, // TODO
            featured_makeup_products: getBanners.featured_makeup_products, // TODO
        };
    },
    data() {
        return {
            swiperListVisibility: '1',
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        };
    },
    head() {
        return {
            title: this.headTitle(),
        };
    },
    mounted() {

    },
    methods: {
        toPage(pathName) {
            this.featured_skincare_products = [];

            this.$router.push(this.localePath(pathName));
        },
        hideListProduct(opacity) {
            this.swiperListVisibility = opacity;
        },
        headTitle() {
            switch (true) {
            case this.$i18n.locale === 'tc':
                return 'The history of Whoo 后 - 傳承韓國宮廷養顏秘方';
            case this.$i18n.locale === 'sc':
                return 'The history of Whoo 后 - 传承韩国宫廷养颜秘方';
            default:
                return 'The history of Whoo, Traditional Korean Royal Beauty Secrets';
            }
        },
    },
};
</script>

<style lang="scss">
.productSwiperOption {
    .swiper-slide {
        height: auto;
        align-items: stretch;
    }
    .swiper-button-prev {
        left: -8px;
    }
    .swiper-button-next {
        right: -8px;
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
    .swiper-wrapper {
        padding-top: 20px;
    }
}
</style>
