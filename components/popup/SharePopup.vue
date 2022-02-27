<template>
    <div>
        <b-modal id="share-popup-bs" dialog-class="cus-modal-dialog-class" hide-header hide-footer size="md" :centered="true" :visible="false">
            <div class="popup-close" @click="$bvModal.hide('share-popup-bs')" />
            <div class="container text-center pt-5 pb-4 px-5">
                <h2 class="py-2">
                    {{ $t('text_share') }}
                </h2>
                <!-- fb -->
                <a class="px-2" href="//m.me/atmssg" target="_blank">
                    <img src="~/assets/images/icons/fb.svg" alt="">
                </a>
                <!-- whatsapp -->
                <p v-for="list in sharePlatform" :key="list" class="d-inline-block px-2">
                    <ShareNetwork
                        :network="list"
                        :title="title"
                        :description="description"
                        :url="`${domain_link}${$route.fullPath}`"
                    >
                        <!-- <img v-if="(list == 'facebook')?true:false" :src="networks.facebook.icon" alt=""> -->
                        <img v-if="(list == 'whatsapp')?true:false" :src="networks.whatsapp.icon" alt="">
                    </ShareNetwork>
                </p>
                <!-- copy -->
                <p class="d-inline-block px-2">
                    <a
                        v-clipboard:copy="`${domain_link}${$route.fullPath}`"
                        v-clipboard:success="onCopy"
                        class="share-popup-bs-iconlink"
                    >
                        <img src="~/assets/images/ico-link.svg" alt="">
                    </a>
                </p>
                <div class="anim-copy" :style="{opacity: copyVisibility}">{{ $t('copy') }}</div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue';
import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

export default {
    components: {
        BModal,
    },
    props: {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        sharePlatform: { type: Array, default: [] },
    },
    data() {
        return {
            domain_link: '',
            networks: {
                // facebook: { network: 'facebook', name: 'Facebook', icon: require('@/assets/images/icons/fb.svg') },
                whatsapp: { network: 'whatsapp', name: 'Whatsapp', icon: require('@/assets/images/icons/whatsapp.svg') },
            },
            copyVisibility: 0,
        };
    },
    mounted() {
        this.domain_link = window.location.origin;
    },
    methods: {
        onCopy() {
            this.copyVisibility = 1;
            setTimeout(() => {
                this.copyVisibility = 0;
            }, 2500);
            // console.log(this.domain_link + this.$route.fullPath);
        },
    },
};
</script>

<style lang="scss" scoped>
.share-popup-bs-iconlink{
    padding: 6px;
    width: 38px;
    height: 38px;
    border: 1px solid #000;
    border-radius: 100%;
    img {
        width: 18px;
        height: 18px;
    }
}
.anim-copy {
    transition: all 0.5s linear;
}
</style>
