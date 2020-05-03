<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "connectionTest",
        data() {
            return {
                view: false,
                country: '',
                city: '',
                humidity: ''
            }
        },
        computed: {
            hasResult: ()=>{
                return this.posts.length > 0;
            }
        },
        methods: {
            searchWeather(){
                const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=5dc753fbb35d7e99e7fd80b06a9a18a7'
                this.$http.get(`${BASE_URL}`)
                .then((result)=>{
                    this.country = result.data.sys.country
                    this.city = result.data.name
                })
            }
        }
    }
</script>

<style scoped>

</style>