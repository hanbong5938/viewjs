<template>
    <div>
        <div>
            <h1>Home</h1>
        </div>
        <div>
            <router-link to="/routerTest">router test link</router-link>
        </div>
        <div>
            <router-link to="/vuexTest">vuex test link</router-link>
        </div>
        <div>
            <router-link to="/chart">char test link</router-link>
        </div>
        <div>
            <router-link to="/ifElseTest">if else test link</router-link>
        </div>
        <div>
            <router-link to="/modelTest">model test link</router-link>
        </div>
        <div>
            <router-link to="/connectionTest">connection test link</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>