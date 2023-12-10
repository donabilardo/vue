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
                </div>
            </div>
            <div class="footer_center">
                <h3>Pages</h3>
                <ul class="footer__center-list">
                    <li class="footer_list-item" v-for="item in navbar" :key="item.id">
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
export default {
    name: 'FooterComponent',
    data() {
        return {
            siteSlogan: 'It is a long established fact that a reader will be distracted lookings.',
            address: '55 East Birchwood Ave. Brooklyn, New York 11201',
            telephon: '(123) 456 - 7890',
            email: 'contact@interno.com',
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
            ]
        }
    },
}
</script>

<style scoped lang="scss">

</style>