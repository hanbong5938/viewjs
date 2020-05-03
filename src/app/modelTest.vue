<template>
    <div>
        <InputModel></InputModel>
        <ListRendering></ListRendering>
        <Filtering></Filtering>
    </div>
</template>

<script>

    import InputModel from "../components/input/inputModel";
    import ListRendering from "../components/for/listRendering";
    import Filtering from "../components/filter/filtering";

    export default {
        name: "modelTest",
        components: {Filtering, ListRendering, InputModel},
    }
</script>

<style scoped>

</style>