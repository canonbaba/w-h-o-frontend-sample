<template>
    <div class="page news">
        <!-- <pre>{{ getNews }}</pre> -->
        <div class="container">
            <div class="pb-4"><nuxt-link :to="localePath('newslist')" class="">{{ $t('text_news') }}</nuxt-link> / <span class="text-capitalize">{{ $t('news_cate_'+getNews.category) }}</span></div>
            <img :src="getNews.full_image_path" class="w-100 d-none d-lg-block">
            <img :src="getNews.mobile_path" class="w-100 d-block d-lg-none">
            <!-- <img v-if="getNews.full_image_path" :src="getNews.full_image_path"> -->
            <div class="py-5 text-center">
                <h1 class="pt-4" v-html="getNews.title" />
                <div class="pb-4" v-html="getNews.content" />
            </div>
            <!-- DC -->
            <img v-for="(v, k) in getNews.visual_paths" :key="`visual_paths_${k}`" :src="v" class="d-none d-lg-block w-100 pb-5">
            <!-- MO -->
            <img v-for="(v, k) in getNews.visual_mobile_paths" :key="`visual_paths_${k}`" :src="v" class="d-block d-lg-none w-100 pb-5">
            <nuxt-link :to="localePath('newslist')">
                <img src="~assets/images/btn-warrowL.svg" alt="">
                {{ $t('text_back') }}
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { news } from '~/static/api';

export default {
    async asyncData({ app, route }) {
        const getNews = await news(app, route, {
            uid: route.params.uid,
        });
        console.log(getNews);
        return {
            getNews,
        };
    },
};
</script>
