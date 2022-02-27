<template>
    <swiper v-if="propsDataArray.length > 0" ref="landingTopBannerSwiper" class="landingTopBannerSwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in propsDataArray" :key="index">
            <div class="landingBanner">
                <img :src="item.image_path" class="d-none d-md-block w-100" alt="">
                <img :src="item.mobile_path" class="d-block d-md-none w-100" alt="">
                <!-- DC -->
                <div :class="(item.color==='dark')?'text-dark':''" class="landingBanner__text d-none d-md-block">
                    <h1 v-html="item.title" />
                    <p v-html="item.content" />
                    <!-- <p>{{ item.content }}</p> -->
                    <a :href="$i18n.locale + '/' + item.link" :class="(item.color!=='dark')?'color-white':''" class="btn-underline">{{ $t('text_discover_more') }}</a>
                </div>
                <!-- MO -->
                <div class="landingBanner__m-text d-md-none d-block col-12">
                    <h1 v-html="item.title" />
                    <p v-html="item.content" />
                    <!-- <p>{{ item.content }}</p> -->
                    <a :href="$i18n.locale + '/' + item.link" class="btn-underline">{{ $t('text_discover_more') }}</a>
                </div>
            </div>
        </swiper-slide>
        <div v-if="showPaginationBullet" slot="pagination" class="landingTopBannerSwiper-pagination" />
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
    // name: 'Banner',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        propsDataArray: { type: Array, default: [] },
        // propsBtn: { type: String, default: '' },
    },
    data() {
        return {
            showPaginationBullet: true,
            swiperOption: {
                direction: 'horizontal',
                effect: 'fade',
                autoHeight: true,
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.landingTopBannerSwiper-pagination',
                    clickable: true,
                },
                on: {
                    transitionEnd() {
                        // console.log();
                    },
                },
            },
        };
    },
    computed: {

    },
    mounted() {
        console.log('lol');
        console.log(this.$i18n.locale);
    },
    methods: {

    },

};
</script>
<style lang="scss">
.landingTopBannerSwiper {
    width: 100%;
    height: 100%;
    .landingTopBannerSwiper-pagination {
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
.landingBanner {
    position: relative;
    &__text {
        color: #fff;
        max-width: 520px;
        text-align: center;
        position: absolute;
        width: 35%;
        top: 50%;
        right: 12%;
        transform: translate(0, -50%);
        p {
            font-size: $font-size *1.2;
        }
        @include media-breakpoint-down(md) {
            width: 40%;
            right: 5%;
        }
        &.text-dark {
            color: #000 !important;
        }
    }
    &__m-text {
        width: 100%;
        text-align: center;
        padding-top: 30px;
        padding-bottom: 20px;
        color: black;
    }
    b {
        display: block;
        margin-top: 15px !important;
    }
    .swiper-slide {
        align-items: center;
    }
}
</style>
