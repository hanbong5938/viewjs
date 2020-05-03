<script src="../../data/filterData.js"></script>
<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" v-bind:key="index">
                {{ item }}
            </li>
            <FilterButton></FilterButton>
        </ul>
    </div>
</template>

<script>
    import FilterButton from "../button/filterButton";
    import FilterData from "../../data/filterData";

    export default {
        name: "filtering",
        components: {FilterButton},
        data() {
            return {
                items: FilterData
            }
        }
    }
</script>

<style scoped>

</style>