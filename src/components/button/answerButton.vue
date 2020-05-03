<template>
    <div>
        <button v-if="this.$store.state.answer === 1" @click="yesButton">YES</button>
        <button v-else @click="noButton">NO</button>
    </div>
</template>

<script>
    export default {
        name: "answerButton",
        methods: {
            yesButton() {
                this.$store.state.answer = 0
            },
            noButton() {
                this.$store.state.answer = 1
            }
        }
    }
</script>

<style scoped>

</style>