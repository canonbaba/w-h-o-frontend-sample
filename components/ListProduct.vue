<template>
    <!-- <div :class="(path && uid)?'cursor':''" class="w-100 productThumb text-center" @click="toProductDetailPage(path, uid)"> -->
    <div class="w-100 productThumb text-center" @click="handleTransition()">
        <nuxt-link v-if="uid" :to="localePath({ name: 'productdetail-uid', params: { uid: uid } })">
            <div v-if="icon_text" class="icon">{{ icon_text }}</div>
            <img :src="img" alt="" @load="onLoad">
            <div class="productThumb__content">
                <!-- handle 有path 冇path -->
                <div v-if="collections">{{ collections }}</div>
                <div class="thumb-productName">{{ name }}</div>
                <div v-if="spf" class="grayText">{{ spf }}</div>
                <div class="thumb-caption">
                    <span v-if="capacity">{{ capacity }}</span>
                </div>
                <p>{{ 'HK$' + stringPrice }}</p>
                <div class="customize_box">
                    <slot />
                </div>
            </div>
        </nuxt-link>
        <div v-else>
            <div v-if="icon_text" class="icon">{{ icon_text }}</div>
            <img :src="img" alt="" @load="onLoad">
            <div class="productThumb__content">
                <!-- handle 有path 冇path -->
                <div v-if="collections">{{ collections }}</div>
                <div class="thumb-productName">{{ name }}</div>
                <div v-if="spf" class="grayText">{{ spf }}</div>
                <div class="thumb-caption">
                    <span v-if="capacity">{{ capacity }}</span>
                </div>
                <p>{{ 'HK$' + stringPrice }}</p>
                <div class="customize_box">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('globalStore');

export default {
    props: {
        uid: { type: String, default: '' },
        path: { type: String, default: '' },
        img: { type: String, default: '' },
        name: { type: String, default: '' },
        capacity: { type: String, default: '' },
        price: { type: Number, default: 99999 },
        icon_text: { type: String, default: '' },
        spf: { type: String, default: '' },
        collections: { type: String, default: '' },
    },
    computed: {
        stringPrice() {
            return this.price.toLocaleString();
        },
    },
    mounted() {
        // console.log(this.path);
        // console.log(this.uid);
    },
    methods: {
        ...mapMutations([
            'hideSearchPopup',
        ]),
        onLoad() {
            console.log('trigger me when image has fully loaded');
        },
        // toProductDetailPage(path, uid) {
        //     if (path && uid) {
        //         this.$router.push(this.localePath({ name: path, params: { uid } }));
        //     }

        //     this.$emit('hideListProduct', 0);

        //     this.hideSearchPopup();
        // },
        handleTransition() {
            this.$emit('hideListProduct', 0);

            this.hideSearchPopup();
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
