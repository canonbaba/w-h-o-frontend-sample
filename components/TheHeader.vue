<template>
    <div>
        <div class="header">
            <div class="header__top">
                <div class="header__logo">
                    <nuxt-link :to="localePath('/')"><img src="~/assets/images/whoo-logo.svg" alt=""></nuxt-link>
                </div>
                <div class="header__left">
                    <div class="d-inline-block mr-4">
                        <img src="~/assets/images/ico-ham.svg" class="cursor" alt="" @click="toggleSlideMenu()">
                    </div>
                    <div v-click-outside="hideLang" class="d-none d-sm-inline-block position-relative" @click="showLang">
                        <img src="~/assets/images/ico-earth.svg" class="cursor" alt="">
                        <div v-show="showLangOption" class="header__lang">
                            <div class="d-block pb-2 cursor" @click="switchLang('en')">EN</div>
                            <div class="d-block pb-2 cursor" @click="switchLang('tc')">繁</div>
                            <div class="d-block pb-2 cursor" @click="switchLang('sc')">简</div>
                        </div>
                    </div>
                </div>
                <div class="header__right">
                    <div class="d-inline-block mr-4">
                        <img v-b-modal.subscribe-popup-bs style="width:20px;opacity: 0.5;" src="~/assets/images/ico-email.svg" class="cursor" alt="">
                    </div>
                    <div v-b-modal.store-popup-bs class="d-none d-sm-inline-block mr-4">
                        <img src="~/assets/images/ico-map_pin.svg" class="cursor" alt="">
                    </div>
                    <div class="d-inline-block">
                        <img src="~/assets/images/ico-search.svg" class="cursor" alt="" @click="toggleSearchPopup()">
                    </div>
                </div>
            </div>
            <div class="header__btm">
                <div class="header__btm--menu">
                    <ol class="header__lv1">
                        <li>
                            <a href="https://shop.whoo-hk.com/?utm_source=website" target="_blank">{{ $t('menu_shop') }}</a>
                        </li>
                        <li>
                            <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'skincare' } })" :class="this.$route.params.maincategory=='skincare'?'active':''">{{ $t('text_skincare') }}</nuxt-link>
                            <div class="header__lv1--wrapper px-4 py-4 text-left">
                                <div class="header__lv2">
                                    <!-- skincare -->
                                    <div v-for="(l1_item, l1_key) in skincare.contains" :key="l1_key">
                                        <div class="title">
                                            <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'skincare', subcategory: l1_key } })">{{ l1_item.display_as }}</nuxt-link>
                                        </div>
                                        <div class="d-flex py-3">
                                            <div v-for="(l2_item, l2_key) in l1_item.contains" :key="l2_key" class="mr-3">
                                                <div class="title color-gray">{{ l2_item.display_as }}</div>
                                                <div v-for="(l3_item, l3_key) in l2_item.contains" :key="l3_key">
                                                    <a class="header__lv2--list cursor" @click="toProductlistPage('skincare', l1_key, l2_key, l3_key)">{{ l3_item.display_as }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: 'makeup' } })" :class="this.$route.params.maincategory=='makeup'?'active':''">{{ $t('text_makeup') }}</nuxt-link>
                            <div class="header__lv1--wrapper px-4 py-4 text-left">
                                <div class="header__lv2">
                                    <!-- makeup -->
                                    <div v-for="(l1_item, l1_key) in makeup.contains" :key="l1_key">
                                        <div class="d-flex py-3">
                                            <div v-for="(l2_item, l2_key) in l1_item.contains" :key="l2_key" class="mr-3">
                                                <div class="title color-gray">{{ l2_item.display_as }}</div>
                                                <div v-for="(l3_item, l3_key) in l2_item.contains" :key="l3_key">
                                                    <a class="header__lv2--list cursor" @click="toProductlistPage('makeup', l1_key, l2_key, l3_key)">{{ l3_item.display_as }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><nuxt-link :to="localePath('newslist')" :class="this.$route.fullPath.split('/')[2]=='newslist'?'active':''">{{ $t('text_news') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('royalclub')" :class="this.$route.fullPath.split('/')[2]=='royalclub'?'active':''">{{ $t('text_royal_club') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('about_whoo')" :class="this.$route.fullPath.split('/')[2]=='about_whoo'?'active':''">{{ $t('text_about_whoo') }}</nuxt-link></li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- side menu -->
        <SideMenu @toProductlistPage="toProductlistPage" />
        <!-- / side menu -->
    </div>
</template>

<script async src="https://www.googletagmanager.com/gtag/js?id=223687053&l=dataLayer2"></script>
<script>
  window.dataLayer2 = window.dataLayer2 || [];
  function gtag2(){dataLayer2.push(arguments);}
  gtag2('js', new Date());

  gtag2('config', '223687053');
</script>

<script>
import ClickOutside from 'vue-click-outside';
import { createNamespacedHelpers } from 'vuex';
import SideMenu from '~/components/SideMenu';

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('globalStore');

export default {
    directives: {
        ClickOutside,
    },
    components: {
        SideMenu,
    },
    data() {
        return {
            showLangOption: false,
        };
    },
    computed: {
        ...mapState([
            'slideMenu', 'skincare', 'makeup', 'level3_data',
        ]),
    },
    mounted() {
        // console.log(this.slideSubMenu);
        console.log(this.$route);

        this.getMenuData();
        console.log("test");
        console.log(this.$gtag);
        this.$gtag.event('conversion', {'send_to': 'AW-706698369/AaxsCKmk6uMBEIG5_dAC'})
                console.log(this.$gtag);

    },
    methods: {
        logout() {
            this.$auth.logout();
        },
        showLang() {
            this.showLangOption = !this.showLangOption;
        },
        hideLang() {
            this.showLangOption = false;
        },
        ...mapMutations([
            'toggleSlideMenu', 'toggleSearchPopup', 'hideSlideMenu', 'initMenuData',
        ]),
        ...mapActions([
            'getMenuData',
        ]),
        toProductlistPage(maincategory, subcategory, search, name) {
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

            this.hideSlideMenu();
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
.disabled {
  color: lightgrey;
  pointer-events: none;
}
.separator {
  margin-left: 5px;
  margin-right: 5px;
}
.logout {
  color: $color-main;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
