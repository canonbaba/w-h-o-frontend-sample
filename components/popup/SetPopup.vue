<template>
    <div>
        <b-modal id="set-popup-bs" dialog-class="cus-modal-dialog-class" hide-header hide-footer size="lg" :centered="true" :visible="false">
            <div class="popup-close" @click="$bvModal.hide('set-popup-bs')" />
            <div class="container text-center py-5 px-5">
                <p v-html="description">
                    <!-- {{ description }} -->
                </p>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue';

export default {
    components: {
        BModal,
    },
    props: {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
    },
    methods: {

    },
};
</script>

<style lang="scss">
#set-popup-bs {
    letter-spacing: 1px !important;
    line-height: 25px !important;
}
</style>
