<template>
    <transition>
        <div v-if="showSearchPopup" class="search-popup">
            <div class="popup-close" @click="toggleSearchPopup()" />
            <div class="container search-popup-wapper">
                <form form class="position-relative" @submit.prevent="getSearchProducts">
                    <input v-model="postSearchProducts.search" class="w-100" type="text" :placeholder="$t('search_placeholder')">
                    <img class="search-icon" src="~assets/images/ico-search.svg" alt="" @click="getSearchProducts">
                </form>

                <div class="row py-5">
                    <ListProduct
                        v-for="(item, index) in searchProductsResponse"
                        :key="`listproduct_${index}`"
                        class="w-100 col-6 col-md-3 pb-4"
                        :uid="item['uid']"
                        path="productdetail-uid"
                        :img="item['thumbnail_path']"
                        :name="item['title']"
                        :capacity="item['volume']"
                        :price="item['price']"
                        :spf="item['spf']"
                        :collections="item['collections_display']"
                    />
                    <h1 v-if="notFound" class="text-center w-100 py-5">{{ $t('search_notfound') }}</h1>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { searchProducts } from '../../static/api';
import ListProduct from '~/components/ListProduct';

const { mapState, mapMutations } = createNamespacedHelpers('globalStore');

export default {
    components: {
        ListProduct,
    },
    data() {
        return {
            postSearchProducts: {
                page: '1',
                per_page: '100',
                search: '',
            },
            searchProductsResponse: [],
            notFound: false,
        };
    },
    computed: {
        ...mapState([
            'showSearchPopup',
        ]),
    },
    mounted() {

    },
    methods: {
        ...mapMutations([
            'toggleSearchPopup',
        ]),
        async getSearchProducts() {
            this.$nuxt.$loading.start();

            const res = await searchProducts(this, this.postSearchProducts).catch((err) => err);

            if (res) {
                this.searchProductsResponse = res.items;
                this.notFound = false;

                if (!res.items || (res.items.length < 1)) { this.notFound = true; }

                this.$nuxt.$loading.finish();
            } else {
                this.notFound = true;

                this.$nuxt.$loading.finish();
            }

            console.log(this.searchProductsResponse);
        },
    },
};
</script>

<style lang="scss" scoped>
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.4s;
}
.v-enter-to {
  opacity: 1;
}
.search-popup {
    z-index: 9;
    position: fixed;
    top: $header-lg + 45px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.85);
    overflow: scroll;
    @include media-breakpoint-down(lg) {
        top: $header-lg + 37px;
    }
    @include media-breakpoint-down(md) {
        top: $header-xs;
    }
    .search-popup-wapper {
        padding-top: 50px;
        padding-bottom: 100px;
        // @include media-breakpoint-down(md) {
        //     padding-top: 50px;
        // }
    }
    .popup-close {
        cursor: pointer;
        position: absolute;
        right: 15px;
        top: 20px;
        width: 20px;
        height: 20px;
        z-index: 10;
        &:before, &:after {
            position: absolute;
            left: 0;
            content: ' ';
            width: 100%;
            height: 20px;
            width: 1px;
            background-color: $color-gray;
        }
        &:before {
        transform: rotate(45deg);
        }
        &:after {
        transform: rotate(-45deg);
        }
    }
    input {
        height: 70px;
        padding: 15px;
        border-color: #828282;
        background-color: transparent;
        font-size: 30px;
    }
    input::placeholder {
        color: #000;
    }
    .search-icon {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 25px;
        z-index: 2;
        width: 25px;
        transform: translate(-50%, -50%);
    }
}
</style>
