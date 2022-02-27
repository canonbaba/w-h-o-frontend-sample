<template>
    <div class="page aboutwhoo">
        <div class="aboutwhoo-bg" />

        <div class="brandstoryContainer">
            <div class="container">
                <div class="row">
                    <div class="col-12 aboutwhoo-title">
                        <div class="brownText"><h1>{{ $t('brand_story_title1a') }}</h1></div>
                        <h3 v-html="$t('brand_story_title1b')" />
                    </div>
                </div>
            </div>
            <b-container class="bv-example-row bv-example-row-flex-cols brandstory">
                <b-row align-v="center">
                    <b-col md="6" sm="12" class="brandstory-img"><img src="~/assets/images/aboutwhoo/aboutwhoo-01.jpg" alt=""></b-col>
                    <b-col class="brandstory-text" md="6" sm="12">{{ $t('brand_story_1a') }}</b-col>
                </b-row>
            </b-container>
            <b-container class="bv-example-row bv-example-row-flex-cols brandstory">
                <b-row align-v="center">
                    <b-col class="brandstory-text d-md-block d-sm-none d-none" md="6">{{ $t('brand_story_1b') }}</b-col>
                    <b-col md="6" sm="12" class="brandstory-img"><img src="~/assets/images/aboutwhoo/aboutwhoo-02.jpg" alt=""></b-col>
                    <b-col class="brandstory-text d-md-none d-sm-block" sm="12">{{ $t('brand_story_1b') }}</b-col>
                </b-row>
            </b-container>
            <div class="container">
                <div class="row">
                    <div class="col-12 embed-responsive embed-responsive-16by9 brandstory-video">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iRsARrmpPRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                </div>
            </div>
        </div>

        <div class="brandhistory">
            <div class="container">
                <div class="row">
                    <div class="col-12 brandhistory-title">
                        <img src="~/assets/images/whoo-icon.svg" alt="">
                        <h3 v-html="$t('brand_story_title1b')" />
                        <div class="brownText">
                            <h1>{{ $t('brand_story_title2b') }} – <br class="d-sm-none d-xs-block">{{ $t('brand_story_title2c') }}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <b-container class="bv-example-row bv-example-row-flex-cols historySection">
                <b-row align-v="center">
                    <b-col md="6" sm="12"><img src="~/assets/images/aboutwhoo/aboutwhoo-03.jpg" alt=""></b-col>
                    <b-col md="6" sm="12" class="brandhistory-text">
                        <div class="historySection-title"><h3>{{ $t('brand_story_2c_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2c') }}</p>
                    </b-col>
                </b-row>
            </b-container>

            <b-container class="bv-example-row bv-example-row-flex-cols historySection">
                <b-row align-v="center">
                    <b-col class="d-md-block d-sm-none d-none" md="6">
                        <div class="historySection-title"><h3>{{ $t('brand_story_2d_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2d') }}</p>
                        <br>
                        <div class="historySection-title"><h3>{{ $t('brand_story_2e_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2e') }}</p>
                    </b-col>
                    <b-col md="6" sm="12"><img src="~/assets/images/aboutwhoo/aboutwhoo-04.jpg" alt=""></b-col>
                    <b-col class="brandhistory-text d-md-none d-sm-block" sm="12">
                        <div class="historySection-title"><h3>{{ $t('brand_story_2d_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2d') }}</p>
                        <br>
                        <div class="historySection-title"><h3>{{ $t('brand_story_2e_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2e') }}</p>
                    </b-col>
                </b-row>
            </b-container>

            <b-container class="bv-example-row bv-example-row-flex-cols historySection">
                <b-row align-v="center">
                    <b-col md="6" sm="12"><img src="~/assets/images/aboutwhoo/aboutwhoo-05.jpg" alt=""></b-col>
                    <b-col md="6" sm="12" class="brandhistory-text">
                        <div class="historySection-title"><h3>{{ $t('brand_story_2f_subtitle') }}</h3></div>
                        <p>{{ $t('brand_story_2f') }}</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: `${this.$t('text_about_whoo')} | The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong`,
        };
    },
};
</script>
