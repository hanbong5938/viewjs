<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" v-bind:key="index">
                {{ item.message }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "listRendering",
        data() {
            return {
                items: [
                    {message: 'Hi'},
                    {message: 'Bye'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>