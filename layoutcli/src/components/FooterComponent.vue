<template>
    <div class="container">
        <footer class="footer">
            <div class="footer_left">
                <div class="nav__logo">
                    <a href="#" class="nav__logo-link" :title="siteName">
                        <img :src="logoImg" :alt="siteName" class="nav__logo-img">
                        <span>Interno</span>
                    </a>
                </div>
                <p class="footer__left-text">{{ siteSlogan }}</p>
                <div class="social">
                    <img src="img/social/twitter.svg" alt="twitter">
                    <img src="img/social/in.svg" alt="In XZ">
                    <CounterComponent></CounterComponent>
                </div>
            </div>
            <div class="footer_center">
                <h3>Pages</h3>
                <ul class="footer__center-list">
                    <li class="footer_list-item" v-for="item in menu" :key="item.id">
                        <a :href="item.link" class="footer__item-link" :title="item.name">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <address class="footer_right">
                <h3>Contact</h3>
                <p>{{ address }}</p>
                <p>{{ email }}</p>
                <p>{{ telephon }}</p>
            </address>
        </footer>
    </div>
</template>

<script>
import CounterComponent from '../components/CounterComponent.vue';
export default {
    name: 'FooterComponent',
    components:{
        CounterComponent
    },
    data() {
        return {
            siteSlogan: this.$store.state.siteSlogan,
            address: this.$store.state.address,
            telephon: this.$store.state.telephon,
            email: this.$store.state.email,
            menu: this.$store.state.menuLink,
            logoImg: this.$store.state.logoImg,
            siteName: this.$store.state.siteName,
        }
    },
}
</script>

<style scoped lang="scss">
.social{
    display: flex;
    justify-content: left;
    gap: 20px;
}

</style>