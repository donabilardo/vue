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
        counter: [
            {
                name: 'Years of experiance',
                num: 12,
                counterID: 1
            },
            {
                name: 'Success project',
                num: 85,
                counterID: 2
            },
            {
                name: 'Active project',
                num: 15,
                counterID: 3
            },
            {
                name: 'Happy customers',
                num: 95,
                counterID: 4
            },
        ],
    },
    methods: {

    },
    computed: {

    }
})