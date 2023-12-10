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
                <li class="nav__list-item" v-for="item in navbar" :key="item.id">
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
            logoImg: 'img/logo.svg',
            siteName: 'GB - VUE.js',
            navbar: [
                {
                    name: 'Home',
                    link: 'index.html'
                },
                {
                    name: 'Project',
                    link: 'projects.html'
                },
                {
                    name: 'Blog',
                    link: 'blog.html'
                },
            ],
        }
    },
}
</script>

<style lang="scss">
$vertical_line: #E6E6E6;
$yellow: #CDA274;
$text_color: #4D5053;
$text_accent: #292F36;
.navbar {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-bottom: 70px;
}

.nav__logo {
    display: flex;
    align-items: center;
   // margin-left: 20px;
}

.nav__logo-link {
    display: flex;
    align-items: center;
    font-family: 'DM', sans-serif;
    font-size: 40px;
    line-height: 125%;
    /* 50px */
    color: $text_accent;
}

.nav__logo-img {
    margin-right: 10px;
}

.nav {
    display: flex;
}

.nav__list {
    list-style: none;
    display: flex;
}

.nav__list-item {
    margin-left: 30px;

    &:first-child {
        margin-left: 0px;
    }

    &:last-child {
        margin-right: 20px;
    }
}

.nav__list-link {
    color: $text_accent;
    text-align: center;
    font-family: 'Jost', serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
}
</style>