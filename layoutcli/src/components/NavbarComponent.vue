<template>
    <div class="navbar">

        <div class="nav__logo">
            <a href="#" class="nav__logo-link" :title="siteName">
                <img :src="logoImg" :alt="siteName" class="nav__logo-img">
                <span>Interno</span>
            </a>
        </div>

        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__list-item" v-for="item in menu" :key="item.id">
                    <a :href="item.link" class="nav__list-link" :title="item.name">{{ item.name }}</a>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            menu: this.$store.state.menuLink,
            logoImg: this.$store.state.logoImg,
            siteName: this.$store.state.siteName,
        }
    },
}
</script>
