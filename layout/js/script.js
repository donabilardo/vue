const v = new Vue({
    el: '#app',
    data: {
        logoImg: 'img/logo.svg',
        siteName: 'GB - VUE.js',
        siteSlogan: 'It is a long established fact that a reader will be distracted lookings.',
        address: '55 East Birchwood Ave. Brooklyn, New York 11201',
        telephon: '(123) 456 - 7890',
        email: 'contact@interno.com',
        tags: [],
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
                id: 1,
                name: 'let`s get solution for building construction work',
                category: 'Kitchan design',
                date: '2017-02-06',
                img: 'img/article_news/1.png',
                imgR: 'img/article_news/1-r.png',
                text: ''
            },
            {
                id: 2,
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '2017-03-16',
                img: 'img/article_news/2.png',
                imgR: 'img/article_news/2-r.png',
                text: ''
            },
            {
                id: 3,
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '2019-08-01',
                img: 'img/article_news/3.png',
                imgR: 'img/article_news/3-r.png',
                text: ''
            },
            {
                id: 4,
                name: 'let`s get solution for building construction work',
                category: 'Kitchan design',
                date: '2017-12-12',
                img: 'img/article_news/4.png',
                imgR: 'img/article_news/4-r.png',
                text: ''
            },
            {
                id: 5,
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '2023-04-07',
                img: 'img/article_news/5.png',
                imgR: 'img/article_news/5-r.png',
                text: ''
            },
            {
                id: 6,
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '2022-02-06',
                img: 'img/article_news/6.png',
                imgR: 'img/article_news/6-r.png',
                text: ''
            },
            {
                id: 7,
                name: 'low cost latest invented interior designing ideas',
                category: 'Kitchan design',
                date: '2017-09-076',
                img: 'img/article_news/7.png',
                imgR: 'img/article_news/7-r.png',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.' + '\n' + 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
        ]
    },
    methods: {

    },
    computed: {
        getTags() {
            let result = this.article.map(elem => {
                this.tags.push(elem.category)
            });
            return new Set(this.tags);


        }
    }
})