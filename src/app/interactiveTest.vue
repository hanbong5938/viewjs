<template>
    <div>
        <AnswerButton></AnswerButton>
        <br>
        <Answer2Button></Answer2Button>
    </div>
</template>

<script>
    import AnswerButton from "../components/button/answerButton";
    import Answer2Button from "../components/button/answer2Button";
    export default {
        name: "ifElseTest",
        components: {Answer2Button, AnswerButton}
    }
</script>

<style scoped>

</style>