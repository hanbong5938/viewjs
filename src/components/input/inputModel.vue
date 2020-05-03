<template>
    <div>
        <label>v-model: </label><input type="text" v-model="message"/>
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
    export default {
        name: "inputModel",
        data() {
            return {
                message: ""
            }
        }
    }
</script>

<style scoped>

</style>