
export default{
    state: {
        count: 0,
        logoImg: 'img/logo.svg',
        siteName: 'GB - VUE.js',
        siteSlogan: 'It is a long established fact that a reader will be distracted lookings.',
        address: '55 East Birchwood Ave. Brooklyn, New York 11201',
        telephon: '(123) 456 - 7890',
        email: 'contact@interno.com',
        menuLink: [
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
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        }
    }
};