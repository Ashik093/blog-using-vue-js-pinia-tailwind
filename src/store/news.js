import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
    state: () => ({ news: [], newsById: {} }),
    getters: {

    },
    actions: {
        async getNews(category) {
            try {
                let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
                if (category !== 0) {
                    url = 'https://basic-blog.teamrabbil.com/api/post-list/' + category
                }
                let data = await (await fetch(url)).json()
                this.news = data
            } catch (error) {
                console.log(error)
            }
        },
        async getNewsById(newsId) {
            try {
                let url = 'https://basic-blog.teamrabbil.com/api/post-details/' + newsId

                let data = await (await fetch(url)).json()
                this.newsById = data.postDetails
            } catch (error) {
                console.log(error)
            }
        }

    },
})