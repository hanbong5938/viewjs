<template>
    <div>
        <button @click="minusButton">minus</button>
    </div>
</template>

<script>
    export default {
        name: "minusButton",
        methods: {
            minusButton() {
                this.$store.state.count--;
            }
        }
    }
</script>

<style scoped>

</style>