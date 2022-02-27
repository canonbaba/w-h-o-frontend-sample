<template>
    <div class="page royalclub">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img v-if="$i18n.locale == 'en'" src="~/assets/images/royalclub/royalclub-en.jpg" alt="">
                    <img v-if="$i18n.locale == 'tc'" src="~/assets/images/royalclub/royalclub-tc.jpg" alt="">
                    <img v-if="$i18n.locale == 'sc'" src="~/assets/images/royalclub/royalclub-sc.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: `${this.$t('text_royal_club')} | The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong`,
        };
    },
};
</script>
