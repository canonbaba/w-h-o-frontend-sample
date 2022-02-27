<template>
    <div class="col-md-6 col-sm-12 halfWidthBanner">
        <div class="halfWidthBanner__frame" :style="{'background-image':'url('+this.bg+')'}">
            <img :src="this.bg" class="w-100 d-none d-lg-block" alt="">
            <img :src="this.m_bg" class="w-100 d-block d-lg-none" alt="">
        </div>
        <div class="halfWidthBanner__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // eslint-disable-next-line import/no-unresolved
        bg: { type: String, default: '' },
        m_bg: { type: String, default: '' },
    },
    mounted() {
        // eslint-disable-next-line no-console
        console.log(this.bg);
    },
};
</script>

<style lang="scss" scoped>

</style>
