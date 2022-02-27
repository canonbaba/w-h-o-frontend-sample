<template>
    <div class="page news">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10 col-12">
                    <h1>{{ $t('text_news') }}</h1>
                    <!--<p>{{ $t('newslist_desc') }}</p>-->
                    <div class="news-filter">
                        <p :class="(postListNews.category == 'all')?'roundBtn-active':''" class="roundBtn d-inline-block" @click="toPage('all')">{{ $t('text_all') }}</p>
                        <p :class="(postListNews.category == 'news')?'roundBtn-active':''" class="roundBtn d-inline-block" @click="toPage('news')">{{ $t('text_news') }}</p>
                        <br class="d-block d-md-none">
                        <br class="d-block d-md-none">
                        <p :class="(postListNews.category == 'shopping_privileges')?'roundBtn-active':''" class="roundBtn d-inline-block" @click="toPage('shopping_privileges')">{{ $t('text_shopping_privileges') }}</p>
                        <p :class="(postListNews.category == 'royal_club_exclusives')?'roundBtn-active':''" class="roundBtn d-inline-block" @click="toPage('royal_club_exclusives')">{{ $t('text_royal_club_exclusives') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div v-for="(item, key) in listNewsResponse.items" :key="key" class="news-section col-12 row">
                <div class="col-md-6 col-sm-4 col-4 news-photo">
                    <img class="full-width" :src="item.mobile_path" alt="">
                </div>
                <div class="col-md-6 col-sm-8 col-8 news-title">
                    <div class="grayText"><span class="pr-1">{{ item.date }}</span> | <span class="text-capitalize pl-1">{{ $t('text_'+item.category) }}</span></div>
                    <h2>
                        {{ item.title }}
                    </h2>
                    <div class="btn-underline"><nuxt-link :to="localePath({ name: 'news-uid', params: { uid: item.uid }})">{{ $t('text_discover_more') }}</nuxt-link></div>
                </div>
                <div class="col-12 line" />
            </div>
        </div>
        <div class="container py-5">
            <b-pagination
                v-model="postListNews.page"
                pills
                :total-rows="totalPages"
                :per-page="1"
                first-number
                last-number
                class="customPagination"
                @input="toPage()"
            />
        </div>
    </div>
</template>

<script>
import { listNews } from '~/static/api';

export default {
    components: {

    },
    data() {
        return {
            totalPages: 10,
            postListNews: {
                page: '1',
                per_page: 4,
                category: 'all',
            },
            listNewsResponse: '',
        };
    },
    head() {
        return {
            title: `${this.$t('text_news')} | The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong`,
        };
    },
    mounted() {
        this.getListNews();
    },
    methods: {
        async getListNews() {
            await listNews(this, this.$route, this.postListNews)
                .then((res) => {
                    this.$nuxt.$loading.finish();

                    this.listNewsResponse = res;
                    this.totalPages = res.last_page;
                })
                .catch((err) => {
                    this.$nuxt.$loading.finish();

                    console.log(err);
                });

            console.log(this.listNewsResponse);
        },
        toPage(target) {
            this.$nuxt.$loading.start();

            if (target) { this.postListNews.category = target; }
            this.getListNews();
        },
    },
};
</script>

<style lang="scss" scoped>
.customPagination::v-deep {
    justify-content: center;
}
.customPagination::v-deep .page-link {
    border: none;
    color: #000;
}
.customPagination::v-deep .page-link:focus {
    box-shadow: none;
}
.customPagination::v-deep .page-item.active .page-link {
    background-color: $color-main;
    color: #fff;
}
</style>
