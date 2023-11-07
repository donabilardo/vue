new Vue({
    el: '#app',
    data: {
        logoImg: 'img/logo.svg',
        siteName: 'GB - VUE.js',
        siteSlogan: 'It is a long established fact that a reader will be distracted lookings.',
        address: '55 East Birchwood Ave. Brooklyn, New York 11201',
        telephon: '(123) 456 - 7890',
        email: 'contact@interno.com',
        navbar: [
            {
                name: 'Home',
                link: 'index.html'
            },
            {
                name: 'Project',
                link: '#'
            },
            {
                name: 'Blog',
                link: 'blog.html'
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
        article: [
            {
                name: 'let`s get solution for building construction work',
                category: 'Kitchan design',
                date: '2017-02-06',
                img: 'img/article_news/1.png',
                imgR: 'img/article_news/1-r.png',
                text: ''
            },
            {
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '',
                img: 'img/article_news/2.png',
                imgR: 'img/article_news/2-r.png',
                text: ''
            },
            {
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '',
                img: 'img/article_news/3.png',
                imgR: 'img/article_news/3-r.png',
                text: ''
            },
            {
                name: 'let`s get solution for building construction work',
                category: 'Kitchan design',
                date: '',
                img: 'img/article_news/4.png',
                imgR: 'img/article_news/4-r.png',
                text: ''
            },
            {
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '',
                img: 'img/article_news/5.png',
                imgR: 'img/article_news/5-r.png',
                text: ''
            },
            {
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '',
                img: 'img/article_news/6.png',
                imgR: 'img/article_news/6-r.png',
                text: ''
            },
            {
                name: 'low cost latest invented interior designing ideas',
                category: 'Kitchan design',
                date: '',
                img: 'img/article_news/7.png',
                imgR: 'img/article_news/7-r.png',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
        ]
    },
    methods: {

    },
    computed: {

    }
})