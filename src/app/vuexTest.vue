<template>
    <div>
        <PlusButton></PlusButton>
        <MinusButton></MinusButton>
        <h1>{{this.$store.state.count}}</h1>
    </div>
</template>

<script>
    import MinusButton from "../components/button/minusButton";
    import PlusButton from "../components/button/plusButton";

    export default {
        name: "VuexTest",
        components: {PlusButton, MinusButton},
    }
</script>

<style scoped>

</style>