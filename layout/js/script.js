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
        tagsClick: 'all',
        articleList: [],
        projectSelectTag: 'all',
        projectList: [],
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
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 2,
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '2017-03-16',
                img: 'img/article_news/2.png',
                imgR: 'img/article_news/2-r.png',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 3,
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '2019-08-01',
                img: 'img/article_news/3.png',
                imgR: 'img/article_news/3-r.png',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 4,
                name: 'let`s get solution for building construction work',
                category: 'Kitchan design',
                date: '2017-12-12',
                img: 'img/article_news/4.png',
                imgR: 'img/article_news/4-r.png',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 5,
                name: 'Low cost latest invented interior designing ideas.',
                category: 'Living design',
                date: '2023-04-07',
                img: 'img/article_news/5.png',
                imgR: 'img/article_news/5-r.png',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 6,
                name: 'Best for any office & business interior solution',
                category: 'Interior design',
                date: '2022-02-06',
                img: 'img/article_news/6.png',
                imgR: 'img/article_news/6-r.png',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
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
        ],
        projectPage: [
            {
                id: 1,
                name: 'Minimal Bedroom',
                category: 'Bathroom',
                date: '2017-02-06',
                img: 'img/project/page/1.jpg',
                imgR: 'img/project/page/1-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 2,
                name: 'Minimal Bedroom',
                category: 'Bathroom',
                date: '2017-02-06',
                img: 'img/project/page/2.jpg',
                imgR: 'img/project/page/2-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 3,
                name: 'Living Area',
                category: 'Bathroom',
                date: '2017-02-06',
                img: 'img/project/page/3.jpg',
                imgR: 'img/project/page/3-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 4,
                name: 'Living Area',
                category: 'Living Area',
                date: '2017-02-06',
                img: 'img/project/page/4.jpg',
                imgR: 'img/project/page/4-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 5,
                name: 'Kitchan',
                category: 'Kitchan',
                date: '2017-02-06',
                img: 'img/project/page/5.jpg',
                imgR: 'img/project/page/5-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 6,
                name: 'Kitchan',
                category: 'Kitchan',
                date: '2017-02-06',
                img: 'img/project/page/6.jpg',
                imgR: 'img/project/page/6-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 7,
                name: 'Bed Room',
                category: 'Bed Room',
                date: '2017-02-06',
                img: 'img/project/page/7.jpg',
                imgR: 'img/project/page/7-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            },
            {
                id: 8,
                name: 'Bed Room',
                category: 'Bed Room',
                date: '2017-02-06',
                img: 'img/project/page/8.jpg',
                imgR: 'img/project/page/8-r.jpg',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ex!'
            }

        ]
    },
    methods: {
        listArticleByTags(item) {
            this.articleList = [];
            this.tagsClick = item;
            console.log(this.articleList);
            console.log(this.tagsClick);
        },
        listAllArticle() {
            this.articleList = [];
            this.tagsClick = 'all';
        },
        selectProject(tag) {
            this.projectList = [];
            this.projectSelectTag = tag;
            console.log(this.projectSelectTag);
            console.log(this.projectList);
        }

    },
    computed: {

        getTags() {
            this.article.map(elem => {
                this.tags.push(elem.category)
            });
            this.tags = new Set(this.tags);
            return this.tags;
        },
        getAllArticleByTag() {
            if (this.tagsClick != 'all') {
                this.article.forEach(article => {
                    if (article.category === this.tagsClick) {
                        this.articleList.push(article)
                    }
                });
            } else {
                this.article.forEach(article => {
                    this.articleList.push(article)
                })
            }
            return this.articleList
        },

        getProjectList() {
            if (this.projectSelectTag != 'all') {
                this.projectPage.forEach(projectItem => {
                    if (projectItem.category === this.projectSelectTag) {
                        this.projectList.push(projectItem)
                    }
                });
                return this.projectList
            } else {
                return this.projectPage
            }

        }

    }
})