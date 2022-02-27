<template>
    <div>
        <div class="footer footer-d">
            <div class="flex-container">
                <div class="footer-logo">
                    <img src="~/assets/images/whoo-icon.svg" alt="">
                </div>
                <!-- col-1 -->
                <div class="footer-col">
                    <!-- DC -->
                    <div class="d-none d-md-block footer-option footer-option-b">
                        <div class="footer-m-Lcol">
                            {{ $t('text_product') }}
                        </div>
                        <div class="footer-m-Rcol">
                            <img src="~/assets/images/down-arrow.svg" alt="">
                        </div>
                    </div>
                    <!-- MOBILE -->
                    <div class="d-block d-md-none footer-option footer-option-b" @click="product_extend = !product_extend">
                        <div class="footer-m-Lcol">
                            {{ $t('text_product') }}
                        </div>
                        <div class="footer-m-Rcol">
                            <img src="~/assets/images/down-arrow.svg" alt="">
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-show="product_extend" class="footer-extended">
                            <div class="footer-option">
                                <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'skincare' } })">{{ $t('text_skincare') }}</nuxt-link>
                            </div>
                            <div class="footer-option">
                                <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'makeup' } })">{{ $t('text_makeup') }}</nuxt-link>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- col-2 -->
                <div class="footer-col">
                    <div class="footer-option footer-option-b">
                        <nuxt-link :to="localePath('newslist')">{{ $t('text_news') }}</nuxt-link>
                    </div>
                </div>
                <!-- col-3 -->
                <div class="footer-col">
                    <!-- DC -->
                    <div class="d-none d-md-block footer-option footer-option-b">
                        <div class="footer-m-Lcol">
                            {{ $t('text_helpful_link') }}
                        </div>
                        <div class="footer-m-Rcol">
                            <img src="~/assets/images/down-arrow.svg" alt="">
                        </div>
                    </div>
                    <!-- MOBILE -->
                    <div class="d-block d-md-none footer-option footer-option-b" @click="helpful_extend = !helpful_extend">
                        <div class="footer-m-Lcol">
                            {{ $t('text_helpful_link') }}
                        </div>
                        <div class="footer-m-Rcol">
                            <img src="~/assets/images/down-arrow.svg" alt="">
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-show="helpful_extend" class="footer-extended">
                            <div class="footer-option">
                                <a href="https://shop.whoo-hk.com/?utm_source=website" target="_blank">{{ $t('text_online_shop') }}</a>
                            </div>
                            <div class="footer-option">
                                <nuxt-link :to="localePath('royalclub')">{{ $t('text_royal_club') }}</nuxt-link>
                            </div>
                            <div class="footer-option">
                                <nuxt-link :to="localePath('about_whoo')">{{ $t('text_about_whoo') }}</nuxt-link>
                            </div>
                            <div v-b-modal.store-popup-bs class="footer-option">
                                {{ $t('text_store_locator') }}
                            </div>
                            <div class="footer-option">
                                <a href="mailto:info@whoohk.com">{{ $t('text_contact_us') }}</a>
                            </div>
                            <div class="footer-option">
                                <nuxt-link :to="localePath('policy')">{{ $t('text_privacy_policy') }}</nuxt-link>
                            </div>
                            <div class="footer-option">
                                <nuxt-link :to="localePath('tnc')">{{ $t('text_terms_and_conditions') }}</nuxt-link>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- col-4 -->
                <div class="footer-col">
                    <div class="footer-option footer-option-b">
                        <a href="http://www.lghnh.com" target="_blank">{{ $t('text_company') }}</a>
                    </div>
                </div>
                <!-- col-5 -->
                <div class="footer-col">
                    <div v-b-modal.subscribe-popup-bs class="footer-option footer-option-b">
                        {{ $t('text_follow_us') }}
                    </div>
                    <div class="footer-icons">
                        <a href="mailto:info@whoohk.com"><img src="~/assets/images/icons/mail.svg" alt=""></a>
                        <a href="https://www.instagram.com/thehistoryofwhoo_hk/" target="_blank"><img src="~/assets/images/icons/ig.svg" alt=""></a>
                        <a href="https://www.facebook.com/thehistoryofwhoo.hk/" target="_blank"><img src="~/assets/images/icons/fb.svg" alt=""></a>
                        <a href="https://www.youtube.com/channel/UCAn0zwpce_taj1f7GUkJ3RA" target="_blank"><img src="~/assets/images/icons/yt.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                © 2022 LG H&H HK Ltd. All rights reserved.
            </div>
        </div>
        <transition name="fade">
            <div v-show="showToTop" class="to-top" @click="scrollToTop">
                <img src="~assets/images/ico-top.svg" alt="">
            </div>
        </transition>

        <!-- Floating Button -->
        <div class="shopBtn">
            <div class="shopBtn-outer">
                <div class="shopBtn-inner">
                    <a href="https://shop.whoo-hk.com/?utm_source=website" target="_blank">
                        <img src="~/assets/images/shop-btn.svg" alt="">
                    </a>
                </div>
            </div>
        </div>

        <!-- POP UP -->
        <SubscribePopup />
        <StorePopup />
        <SearchPopup />
    </div>
</template>

<script>
import SubscribePopup from '~/components/popup/SubscribePopup';
import StorePopup from '~/components/popup/StorePopup';
import SearchPopup from '~/components/popup/SearchPopup';

export default {
    components: {
        SubscribePopup,
        StorePopup,
        SearchPopup,
    },
    data() {
        return {
            showToTop: false,
            product_extend: false,
            helpful_extend: false,
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        window.addEventListener('scroll', this.handleScroll);

        this.$fb.enable();
    },
    // created() {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // destroyed() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },
    methods: {
        handleScroll() {
            this.showToTop = window.scrollY > 400;
        },
        handleResize() {
            if (window.innerWidth >= 768) {
                this.product_extend = true;
                this.helpful_extend = true;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
