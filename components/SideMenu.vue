<template>
    <div>
        <!-- side menu -->
        <div v-show="slideMenu" class="header__deem" @click="toggleSlideMenu" />
        <transition name="slideMenuFade">
            <div v-show="slideMenu" class="header__slide">
                <!-- LV 1 -->
                <div class="header__slide--lv1">
                    <div class="header__slide--top">
                        <!-- <h2>MENU</h2> -->
                        <div class="top-spacing">
                            <img src="~/assets/images/ico-wclose.svg" alt="" class="header__slide--close" @click="toggleSlideMenu">
                        </div>
                    </div>
                    <div class="header__slide--below">
                        <div class="slidemenu_list bottome_border" @click="toggleSlideMenu">
                            <a href="https://shop.whoo-hk.com/?utm_source=website" target="_blank">{{ $t('menu_shop') }}</a>
                        </div>
                        <div class="slidemenu_list bottome_border" @click="toSlideSubMenu({target:'skincare'})">
                            {{ $t('text_skincare') }}
                            <img src="~/assets/images/btn-warrowR.svg" class="header__slide--goin">
                        </div>
                        <div class="slidemenu_list bottome_border" @click="toSlideSubMenu({target:'makeup'})">
                            {{ $t('text_makeup') }}
                            <img src="~/assets/images/btn-warrowR.svg" class="header__slide--goin">
                        </div>
                        <div class="slidemenu_list bottome_border" @click="toggleSlideMenu">
                            <nuxt-link :to="localePath('newslist')" class="">{{ $t('text_news') }}</nuxt-link>
                        </div>
                        <div class="slidemenu_list bottome_border" @click="toggleSlideMenu">
                            <nuxt-link :to="localePath('royalclub')" class="">{{ $t('text_royal_club') }}</nuxt-link>
                        </div>
                        <div class="slidemenu_list bottome_border" @click="toggleSlideMenu">
                            <nuxt-link :to="localePath('about_whoo')" class="">{{ $t('text_about_whoo') }}</nuxt-link>
                        </div>
                        <a v-b-modal.store-popup-bs class="slidemenu_list bottome_border" @click="toggleSlideMenu">{{ $t('text_store_locator') }}</a>
                        <a v-b-modal.subscribe-popup-bs class="slidemenu_list" @click="toggleSlideMenu">{{ $t('text_follow_us') }}</a>
                        <div class="pt-2">
                            <a class="mr-3 d-inline" href="mailto:info@whoohk.com"><img src="~/assets/images/icons/mail.svg" alt="" @click="toggleSlideMenu"></a>
                            <a class="mr-3 d-inline" href="https://www.instagram.com/thehistoryofwhoo_hk/" target="_blank"><img src="~/assets/images/icons/ig.svg" alt=""></a>
                            <a class="mr-3 d-inline" href="https://www.facebook.com/thehistoryofwhoo.hk/" target="_blank"><img src="~/assets/images/icons/fb.svg" alt=""></a>
                            <a class="mr-3 d-inline" href="https://www.youtube.com/channel/UCAn0zwpce_taj1f7GUkJ3RA" target="_blank"><img src="~/assets/images/icons/yt.svg" alt=""></a>
                        </div>
                        <div class="header__slide--lang pt-5">
                            <span @click="toggleSlideMenu">
                                <!-- <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link> -->
                                <a class="cursor" @click="switchLang('en')">EN</a>
                            </span>
                            <p class="divider_v d-inline-block" />
                            <span @click="toggleSlideMenu">
                                <!-- <nuxt-link :to="switchLocalePath('tc')">繁</nuxt-link> -->
                                <a class="cursor" @click="switchLang('tc')">繁</a>
                            </span>
                            <p class="divider_v d-inline-block" />
                            <span @click="toggleSlideMenu">
                                <!-- <nuxt-link :to="switchLocalePath('sc')">简</nuxt-link> -->
                                <a class="cursor" @click="switchLang('sc')">简</a>
                            </span>
                        </div>
                        <div class="company py-5">
                            <div class="break-line" />
                            © 2022 LG H&H HK Ltd. All rights reserved.
                        </div>
                    </div>
                </div>
                <!-- / LV 1 -->
                <!-- LV 2 -->
                <!-- skincare -->
                <div :class="slideSubMenu.skincare" class="header__slide--submenu">
                    <div class="header__slide--top border-bottom">
                        <div class="top-spacing">
                            <img src="~/assets/images/ico-wclose.svg" alt="" class="header__slide--close" @click="toggleSlideMenu">
                        </div>
                        <img src="~/assets/images/btn-warrowL.svg" alt="" class="header__slide--back" @click="backToPrevSlideMenu('skincare')">
                        <div class="slide-title" @click="backToPrevSlideMenu('skincare')">{{ $t('text_skincare') }}</div>
                    </div>
                    <div class="slidemenu_list" @click="toggleSlideMenu">
                        <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'skincare' } })">{{ $t('text_all_products') }}</nuxt-link>
                    </div>
                    <div class="slidemenu_list" @click="toSlideSubMenu({target:'level3', level1:'skincare', level2:'face_care'})">
                        {{ $t('text_facecare') }}
                        <img class="header__slide--goin" src="~/assets/images/btn-warrowR.svg">
                    </div>
                    <div class="slidemenu_list" @click="toggleSlideMenu">
                        <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'skincare', subcategory: 'body_care' } })">{{ $t('text_bodycare') }}</nuxt-link>
                        <!-- {{ $t('text_bodycare') }} -->
                        <!-- <img class="header__slide--goin" src="~/assets/images/btn-warrowR.svg"> -->
                    </div>
                </div>
                <!-- makeup -->
                <div :class="slideSubMenu.makeup" class="header__slide--submenu">
                    <div class="header__slide--top border-bottom">
                        <div class="top-spacing">
                            <img src="~/assets/images/ico-wclose.svg" alt="" class="header__slide--close" @click="toggleSlideMenu">
                        </div>
                        <img src="~/assets/images/btn-warrowL.svg" alt="" class="header__slide--back" @click="backToPrevSlideMenu('skincare')">
                        <div class="slide-title" @click="backToPrevSlideMenu('makeup')">{{ $t('text_makeup') }}</div>
                    </div>
                    <div class="slidemenu_list pb-5" @click="hideSlideMenu">
                        <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'makeup' } })">{{ $t('text_all_products') }}</nuxt-link>
                    </div>
                    <div v-for="(listItem, listIndex) in $t('makeup.all.list')" :key="listIndex" class="pb-5">
                        <div v-b-toggle="'collapse-makeup_all'+listIndex" class="cus-collapse-btn">{{ listItem.title }}</div>
                        <b-collapse :id="'collapse-makeup_all'+listIndex" visible>
                            <a v-for="(linkItem, linkIndex) in listItem.menu" :key="linkIndex" class="list-item cursor" @click="toProductlistPage('makeup', 'all', listItem.search, listItem.menu[linkIndex].key)">{{ listItem.menu[linkIndex].name }}</a>
                        </b-collapse>
                    </div>
                </div>
                <!-- / LV 2 -->
                <!-- Lv3 -->
                <!-- <div :class="slideSubMenu.level3" class="header__slide--submenu">
                    <div class="header__slide--top border-bottom">
                        <div class="top-spacing">
                            <img src="~/assets/images/ico-wclose.svg" alt="" class="header__slide--close" @click="toggleSlideMenu">
                        </div>
                        <img src="~/assets/images/btn-warrowL.svg" alt="" class="header__slide--back" @click="backToPrevSlideMenu('level3')">
                        <div class="slide-title" @click="backToPrevSlideMenu('level3')">{{ level3_data.title }}</div>
                    </div>

                    <div v-for="(listItem, listIndex) in level3_data.list" :key="listIndex" class="pb-5">
                        <div v-b-toggle="'collapse-'+level1_name+'_'+level2_name+'_'+listIndex" class="cus-collapse-btn">{{ listItem.title }}</div>
                        <b-collapse :id="'collapse-'+level1_name+'_'+level2_name+'_'+listIndex" visible>
                            <a
                                v-for="(linkItem, linkIndex) in listItem.menu" :key="linkIndex"
                                class="list-item cursor"
                                @click="toProductlistPage('skincare', level2_name, listItem.search, listItem.menu[linkIndex].key)"
                            >
                                {{ listItem.menu[linkIndex].name }}
                            </a>
                        </b-collapse>
                    </div>
                </div> -->
                <div :class="slideSubMenu.level3" class="header__slide--submenu">
                    <div class="header__slide--top border-bottom mb-5">
                        <div class="top-spacing">
                            <img src="~/assets/images/ico-wclose.svg" alt="" class="header__slide--close" @click="toggleSlideMenu">
                        </div>
                        <img src="~/assets/images/btn-warrowL.svg" alt="" class="header__slide--back" @click="backToPrevSlideMenu('level3')">
                        <div class="slide-title" @click="backToPrevSlideMenu('level3')">{{ level3_data.display_as }}</div>
                    </div>

                    <div v-for="(listItem, listIndex) in level3_data.contains" :key="listIndex" class="pb-5">
                        <div v-b-toggle="'collapse-'+level1_name+'_'+level2_name+'_'+listIndex" class="cus-collapse-btn sort_title">{{ listItem.display_as }}</div>
                        <b-collapse :id="'collapse-'+level1_name+'_'+level2_name+'_'+listIndex" visible>
                            <a
                                v-for="(linkItem, linkIndex) in listItem.contains" :key="linkIndex"
                                class="list-item cursor"
                                @click="toProductlistPage('skincare', level2_name, listIndex, linkIndex)"
                            >
                                {{ linkItem.display_as }}
                            </a>
                        </b-collapse>
                    </div>
                </div>
                <!-- / Lv3 -->
            </div>
        </transition>
        <!-- / side menu -->
    </div>
</template>

<script>
import { BCollapse } from 'bootstrap-vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('globalStore');

export default {
    components: {
        BCollapse,
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState([
            'slideMenu', 'slideSubMenu', 'level1_name', 'level2_name', 'level3_data',
        ]),
    },
    mounted() {
        // console.log(this.slideSubMenu);
        // this.initMenuData();
    },
    methods: {
        ...mapActions([
            'getMenuData',
        ]),
        ...mapMutations([
            'toggleSlideMenu', 'hideSlideMenu', 'toSlideSubMenu', 'backToPrevSlideMenu',
        ]),
        toProductlistPage(maincategory, subcategory, search, name) {
            this.$emit('toProductlistPage', maincategory, subcategory, search, name);
        },
        switchLang(lang) {
            if (lang !== this.$i18n.localeProperties.code) {
                this.$router.replace(this.switchLocalePath(lang)).then(() => {
                    this.getMenuData();
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.slideMenuFade-enter-active, .slideMenuFade-leave-active {
  transition: all .5s ease;
}
.slideMenuFade-enter {
  transform: translateX(-240px);
  opacity: 0;
}
.slideMenuFade-leave-to {
  transform: translateX(-240px);
  opacity: 0;
}
</style>
