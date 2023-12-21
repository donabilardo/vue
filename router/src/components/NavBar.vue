<template>
    <nav>
        <router-link class="qqq" v-for="(item, index) in  menuGetter " :key="index" :to="item.link">{{ item.name }}
        </router-link>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

    name: 'NavBar.vue',
    computed: {
        ...mapGetters(['menuGetter'])
    }
}
</script>

<style scoped lang="scss">
nav {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #fff;

}

.qqq {
    color: #fff;
    padding: 0px 20px 0px 20px;
    text-decoration: none;
    font-size: 24px;
    text-transform: uppercase;
}
</style>