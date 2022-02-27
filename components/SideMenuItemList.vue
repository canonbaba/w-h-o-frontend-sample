<template>
    <transition name="slideMenuFade">
        <div v-show="slideMenuItemListShow" class="slideMenuItemList">
            <!-- only keep spacing for .slideMenuItemList__top -->
            <div class="slideMenuItemList__top keep_spacing px-0">
                <div class="text-right">
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="" @click="toggleSlideMenuItemList()">
                </div>

                <!-- selected tag -->
                <p v-if="cateData.categories_display && $route.query.categories" class="cateTag">
                    {{ cateData.categories_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'categories', '')">
                </p>
                <p v-if="cateData.collections_display && $route.query.collections" class="cateTag">
                    {{ cateData.collections_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'collections', '')">
                </p>
                <p v-if="cateData.skin_concern_display && $route.query.skin_concern" class="cateTag">
                    {{ cateData.skin_concern_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'skin_concern', '')">
                </p>
            </div>
            <div class="slideMenuItemList__top position-fixed">
                <div class="text-right">
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="" @click="toggleSlideMenuItemList()">
                </div>

                <!-- selected tag -->
                <p v-if="cateData.categories_display && $route.query.categories" class="cateTag">
                    {{ cateData.categories_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'categories', '')">
                </p>
                <p v-if="cateData.collections_display && $route.query.collections" class="cateTag">
                    {{ cateData.collections_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'collections', '')">
                </p>
                <p v-if="cateData.skin_concern_display && $route.query.skin_concern" class="cateTag">
                    {{ cateData.skin_concern_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'skin_concern', '')">
                </p>
            </div>

            <div v-if="slideMenuItemListIncludeSubcate">
                <div v-for="(listItem, listIndex) in slideMenuItemListData" :key="listIndex" class="position-relative pb-3">
                    <div v-b-toggle="'collapse-'+$route.params.maincategory+'_'+$route.params.subcategory+'_'+listIndex" class="text-uppercase grayText mb-3">
                        {{ listItem.display_as }}
                        <div :id="'collapse-'+$route.params.maincategory+'_'+$route.params.subcategory+'_'+listIndex+'-btn'" class="collapse_icon"><img src="~/assets/images/dropdown.svg" alt=""></div>
                    </div>
                    <b-collapse :id="'collapse-'+$route.params.maincategory+'_'+$route.params.subcategory+'_'+listIndex" visible @hide="downArrow('collapse-'+$route.params.maincategory+'_'+$route.params.subcategory+'_'+listIndex+'-btn')" @show="upArrow('collapse-'+$route.params.maincategory+'_'+$route.params.subcategory+'_'+listIndex+'-btn')">
                        <a
                            v-for="(linkItem_2, linkIndex_2) in listItem.contains" :key="linkIndex_2"
                            class="d-block mb-3 cursor"
                            @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, listIndex, linkIndex_2, linkItem_2.display_as)"
                        >
                            {{ linkItem_2.display_as }}
                        </a>
                    </b-collapse>
                </div>
            </div>
            <div v-else>
                <div v-for="(item, listKey) in slideMenuItemListData" :key="listKey" class="position-relative py-4">
                    <div v-if="item.display_as" class="text-uppercase mb-4 font-weight-bold" @click="toggleSlideMenuItemList()">
                        <nuxt-link :to="localePath({ name: 'productlist-maincategory-subcategory', params: { maincategory: $route.params.maincategory, subcategory: listKey } })">
                            {{ item.display_as }}
                        </nuxt-link>
                    </div>
                    <div v-for="(listItem, listIndex) in item.contains" :key="listIndex" class="pb-3">
                        <div v-b-toggle="'collapse-'+$route.params.maincategory+'_'+listKey+'_'+listIndex" class="text-uppercase grayText mb-3">
                            {{ listItem.display_as }}
                            <div class="collapse_icon"><img src="~/assets/images/dropdown.svg" alt=""></div>
                        </div>
                        <b-collapse :id="'collapse-'+$route.params.maincategory+'_'+listKey+'_'+listIndex" visible>
                            <a
                                v-for="(linkItem_2, linkIndex_2) in listItem.contains" :key="linkIndex_2"
                                class="d-block mb-3 cursor"
                                @click="toProductlistPage($route.params.maincategory, listKey, listIndex, linkIndex_2)"
                            >
                                {{ linkItem_2.display_as }}
                            </a>
                        </b-collapse>
                    </div>
                </div>
            </div>

            <!-- <div class="slideMenuItemList__bottom keep_spacing">
                <p v-if="cateData.categories_display && $route.query.categories" class="cateTag">
                    {{ cateData.categories_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'categories', '')">
                </p>
            </div>
            <div class="slideMenuItemList__bottom position-fixed">
                <p v-if="cateData.categories_display && $route.query.categories" class="cateTag">
                    {{ cateData.categories_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'categories', '')">
                </p>
                <p v-if="cateData.collections_display && $route.query.collections" class="cateTag">
                    {{ cateData.collections_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'collections', '')">
                </p>
                <p v-if="cateData.skin_concern_display && $route.query.skin_concern" class="cateTag">
                    {{ cateData.skin_concern_display }}
                    <img src="~/assets/images/ico-wclose.svg" alt="" class="pl-1" @click="toProductlistPage($route.params.maincategory, $route.params.subcategory, 'skin_concern', '')">
                </p>
            </div> -->
        </div>
    </transition>
</template>

<script>
import { BCollapse } from 'bootstrap-vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('globalStore');

export default {
    components: {
        BCollapse,
    },
    props: {
        cateData: { type: Object, default() { } },
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState([
            'slideMenuItemListShow', 'slideMenuItemListData', 'slideMenuItemListIncludeSubcate',
        ]),
        selectedCategoriesTag() {
            const tagLink = this.$route.query.categories;
            return tagLink;
        },
        selectedCollectionsTag() {
            const tagLink = this.$route.query.collections;
            return tagLink;
        },
        selectedSkinConcernTag() {
            const tagLink = this.$route.query.skin_concern;
            return tagLink;
        },
    },
    mounted() {

    },
    methods: {
        ...mapMutations([
            'toggleSlideMenuItemList',
        ]),
        toProductlistPage(maincategory, subcategory, search, nameLink, name) {
            if (name) {
                this.$router.push(this.localeRoute({
                    name: 'productlist-maincategory-subcategory',
                    params: {
                        maincategory,
                        subcategory,
                    },
                    query: {
                        page: 1,
                        categories: (search === 'categories') ? nameLink : this.$route.query.categories,
                        collections: (search === 'collections') ? nameLink : this.$route.query.collections,
                        skin_concern: (search === 'skin_concern') ? nameLink : this.$route.query.skin_concern,
                        mobile_filter_name: (name) || '',
                    },
                }));
            } else {
                this.$router.push(this.localeRoute({
                    name: 'productlist-maincategory-subcategory',
                    params: {
                        maincategory,
                        subcategory,
                    },
                    query: {
                        page: 1,
                        categories: (search === 'categories') ? nameLink : this.$route.query.categories,
                        collections: (search === 'collections') ? nameLink : this.$route.query.collections,
                        skin_concern: (search === 'skin_concern') ? nameLink : this.$route.query.skin_concern,
                    },
                }));
            }
            this.toggleSlideMenuItemList();
        },
        downArrow(input) {
            // hide
            const elements = document.getElementById(input);
            elements.classList.add('hidden');
        },
        upArrow(input) {
            // show
            const elements = document.getElementById(input);
            elements.classList.remove('hidden');
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

.slideMenuItemList {
    overflow-x: hidden;
    position: fixed; top: 0; bottom: 0;
    padding: 0 30px;
    width: 100%; max-width: 420px;
    background-color: #F7F4F0; color: #000;
    z-index: 10;
    font-size: 16px;
    // &__deem {
    //     pointer-events: initial;
    //     position: fixed;
    //     width: 100%; height: 100%; top: 0; left: 0;
    //     transition: all 100ms linear;
    //     background-color: rgba(0,0,0,0.5);
    //     z-index: 10;
    // }
    &__top {
        z-index: 2;
        // position: fixed;
        top: 0;
        left: 0;
        padding: 20px 30px;
        width: 100%;
        background-color: #F7F4F0;
        .cateTag {
            display: inline-block;
            color: #A39161;
            padding: 9px 14px;
            border: 1px solid #A39161;
            border-radius: 30px;
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
    // &__bottom {
    //     z-index: 2;
    //     // position: fixed;
    //     bottom: 0;
    //     left: 0;
    //     padding: 20px 30px;
    //     width: 100%;
    //     background-color: #F7F4F0;
    //     .cateTag {
    //         display: inline-block;
    //         color: #A39161;
    //         padding: 9px 14px;
    //         border: 1px solid #A39161;
    //         border-radius: 30px;
    //     }
    // }
    .keep_spacing {
        opacity: 0;
    }
    .collapse_icon {
        float: right;
        width: 15px;
        transform: rotate(180deg);
        transition: all .3s linear;
        img { width:100%; }
        &.hidden {
            transform: rotate(0);
        }
    }
}
</style>
