new Vue({
    el: '#app',
    data: {
        logoImg: 'img/logo.svg',
        siteName: 'GB - VUE.js',
        navbar: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Project',
                link: '#'
            },
            {
                name: 'Blog',
                link: '#'
            },
        ],
        project: [
            {
                name: 'Modern kitchan',
                text: 'Decor / Artchitecture',
                img: 'img/project/1.png',
                idCSS: '1'
            },
            {
                name: 'Modern kitchan',
                text: 'Decor / Artchitecture',
                img: 'img/project/2.png',
                idCSS: '2'
            },
            {
                name: 'Modern kitchan',
                text: 'Decor / Artchitecture',
                img: 'img/project/3.png',
                idCSS: '3'
            },
            {
                name: 'Modern kitchan',
                text: 'Decor / Artchitecture',
                img: 'img/project/4.png',
                idCSS: '4'
            },
        ],
    },
    methods: {

    },
    computed: {

    }
})