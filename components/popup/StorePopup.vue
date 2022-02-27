<template>
    <div>
        <b-modal id="store-popup-bs" dialog-class="store-locator cus-modal-dialog-class" hide-header hide-footer :centered="true" :visible="false" @shown="getData">
            <div class="popup-close" @click="$bvModal.hide('store-popup-bs')" />
            <div class="container store-locator-wrapper">
                <div class="text-center">
                    <p class="color-main">{{ $t('text_store_locator') }}</p>
                    <h1>{{ $t('text_find_whoo') }}</h1>
                </div>
                <div v-for="(area, areaKey, areaIndex) in store" :key="areaKey">
                    <h2 v-b-toggle="'storeLocator-'+areaKey" class="cus-collapse-btn pt-5">{{ area.name }}</h2>
                    <b-collapse :id="'storeLocator-'+areaKey" :visible="(areaIndex==0)?true:false">
                        <div v-for="(list, listKey) in area.list" :key="listKey" class="row">
                            <p class="col-10">
                                {{ list.location }}<br>
                                <a :href="`tel:${list.link_tel}`" class="store-locator-tel">
                                    {{ list.tel }}
                                </a>
                            </p>
                            <p class="col-2 text-right">
                                <a :href="list.link" target="_blank"><img class="search-ico" src="~/assets/images/ico-search.svg" alt=""></a>
                            </p>
                        </div>
                    </b-collapse>
                    <div class="col-12 line py-2" />
                </div>
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
    data() {
        return {
            store: this.$t('store'),
        };
    },
    mounted() { },
    methods: {
        getData() {
            this.store = this.$t('store');
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
