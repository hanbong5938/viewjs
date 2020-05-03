<template>
    <div>
        <button @click="plusButton">plus</button>
    </div>
</template>

<script>
    export default {
        name: "plusButton",
        methods: {
            plusButton() {
                this.$store.state.count++;
            }
        }
    }
</script>

<style scoped>

</style>