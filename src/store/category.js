import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', {
    state: () => ({ category: [] }),
    getters: {},
    actions: {
        async getAllCategory() {
            try {
                let data = await (await fetch('https://basic-blog.teamrabbil.com/api/post-categories')).json()
                this.category = data

            } catch (error) {
                console.log(error)
            }


        }
    },
})