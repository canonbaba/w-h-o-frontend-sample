<template>
    <div>
        <b-modal id="subscribe-popup-bs" dialog-class="subscribe-popup cus-modal-dialog-class" hide-header hide-footer :centered="true" :visible="false" @show="initSubscribePopup">
            <div class="popup-close" @click="$bvModal.hide('subscribe-popup-bs')" />
            <div class="w-100 d-flex flex-column flex-lg-row row px-0 mx-0 subscribe-popup-wrapper">
                <div class="col-md-12 col-lg-6 px-0 mx-0 subscribe-popup-kv">
                    <img class="d-none d-lg-block" src="~/assets/images/subscribe_kv-dc.png" alt="">
                    <img class="d-block d-lg-none" src="~/assets/images/subscribe_kv-mo.png" alt="">
                </div>
                <div v-if="fillForm" class="col-md-12 col-lg-6 d-flex flex-column justify-content-center text-center subscribe-popup-form">
                    <div class="my-5">
                        <div class="mx-auto container row">
                            <div class="col-sm-12">
                                <h1 class="color-main">{{ $t('text_subscribe_us') }}</h1>
                                <div class="my-4">{{ $t('text_subscribe_us_content') }}</div>
                            </div>
                        </div>
                        <div class="mx-auto container row text-left">
                            <div class="col-sm-6">
                                <input v-model="postSubscribe.first_name" :placeholder="$t('text_fname')" class="">
                                <div class="error">{{ error_mes.first_name }}</div>
                            </div>
                            <div class="col-sm-6">
                                <input v-model="postSubscribe.last_name" :placeholder="$t('text_lname')" class="">
                                <div class="error">{{ error_mes.last_name }}</div>
                            </div>
                            <!-- <div class="clearfix"></div> -->
                            <div class="col-sm-5">
                                <select v-model="postSubscribe.area">
                                    <option value="852">+852</option>
                                    <option value="853">+853</option>
                                    <option value="86">+86</option>
                                </select>
                            </div>
                            <div class="col-sm-7">
                                <input v-model="postSubscribe.tel" type="tel" :placeholder="$t('text_mobile_phone_no')">
                                <div class="error">{{ error_mes.tel }}</div>
                            </div>
                            <!-- <div class="clearfix"></div> -->
                            <div class="col-sm-12">
                                <input v-model="postSubscribe.email" :placeholder="$t('text_email_address')">
                                <div class="error">{{ error_mes.email }}</div>
                            </div>
                            <div class="col-sm-12">
                                <div class="d-flex">
                                    <input id="subscribe-tnc" v-model="postSubscribe.tnc" class="mt-1" type="checkbox">
                                    <label class="form-check-label ml-3" for="subscribe-tnc">
                                        {{ $t('text_subscribe_us_tnc') }}<nuxt-link :to="localePath('tnc')" target="_blank"><u>{{ $t('text_terms_and_conditions') }}</u></nuxt-link>
                                    </label>
                                </div>
                                <div class="error">{{ error_mes.tnc }}</div>
                            </div>
                            <div class="col-sm-12 pt-3 text-center" @click="submitSubscribe">
                                <span class="cursor btn-underline">{{ $t('text_submit') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!fillForm" class="col-md-12 col-lg-6 d-flex flex-column justify-content-center text-center subscribe-popup-form">
                    <div class="my-5">
                        <div class="mx-auto container row">
                            <div class="col-sm-12">
                                <h1 class="color-main">{{ $t('text_thank_you') }}</h1>
                                <div class="my-4">{{ $t('text_thank_you_content') }}</div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <span class="cursor btn-underline" @click="$bvModal.hide('subscribe-popup-bs')">{{ $t('text_back_to_home') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue';
import { subscribe } from '../../static/api';

export default {
    components: {
        BModal,
    },
    data() {
        return {
            fillForm: true,
            postSubscribe: {
                first_name: '',
                last_name: '',
                area: '852',
                tel: '',
                email: '',
                tnc: '',
            },
            error_mes: {
                email: '',
                first_name: '',
                last_name: '',
                tel: '',
                tnc: '',
            },
        };
    },
    mounted() { },
    methods: {
        async submitSubscribe() {
            // console.log(this.postSubscribe);
            this.$nuxt.$loading.start();
            const res = await subscribe(this, this.postSubscribe).catch((err) => err);
            if (res.status !== true) {
                Object.keys(res.data.errors).forEach((key) => {
                    this.error_mes[key] = res.data.errors[key][0];
                });

                this.$nuxt.$loading.finish();
            } else {
                this.fillForm = false;
                this.error_mes = '';
                Object.keys(this.postSubscribe).forEach((key) => {
                    this.postSubscribe[key] = '';
                });

                this.$nuxt.$loading.finish();
            }
            // console.log(res);
        },
        initSubscribePopup() {
            this.fillForm = true;

            Object.keys(this.error_mes).forEach((key) => {
                this.error_mes[key] = '';
            });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
