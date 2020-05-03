<template>
    <div>
        <h1>그림 클릭시 홈으로 이동</h1>
        <img src="@/assets/test/fewClouds.jpg" @click="test">
    </div>
</template>

<script>
    export default {
        name: "RouterTest",
        methods: {
            test() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>