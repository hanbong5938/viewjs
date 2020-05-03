<template>
    <div>
        <button @click="filtering">짝수</button>
    </div>
</template>

<script>
    import FilterData from '../../data/filterData'

    export default {
        name: "filterButton",
        methods: {
            filtering() {
                const temp = [];
                FilterData.filter((n) => {
                    if (n % 2 === 0) {
                        temp.push(n);
                    }
                })
                while (FilterData.shift() !== undefined){
                    //
                }
                return FilterData.push(temp.slice())
            }
        }
    }
</script>

<style scoped>

</style>