<template>
    <div>
        <button v-show="this.$store.state.answer2===1" @click="answerHi">Hi</button>
        <button v-show="this.$store.state.answer2===0" @click="answerBye">Bye</button>
    </div>
</template>

<script>
    export default {
        name: "answer2Button",
        methods: {
            answerHi() {
                this.$store.state.answer2 = 0;
            },
            answerBye() {
                this.$store.state.answer2 = 1;
            }
        }
    }
</script>

<style scoped>

</style>