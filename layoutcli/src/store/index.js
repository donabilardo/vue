
export default {
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
        ],
        product: [
            {
                id: 1,
                name: 'Телевизор',
                price: 125,
                img: 'https://static.nix.ru/images/sony-kd-50x81jr-5418432254.jpeg?good_id=541843&width=500&height=500&view_id=2254',
                date: new Date(Date.UTC(2017, 1, 2)),
                qnt: 10,
                bought: false
            },
            {
                id: 2,
                name: 'Клавиатура',
                price: 15,
                img: 'https://img.mvideo.ru/Pdb/50174469b.jpg',
                date: new Date(Date.UTC(2018, 11, 12)),
                qnt: 12,
                bought: false
            },
            {
                id: 3,
                name: 'Планшет',
                price: 111,
                img: 'https://moscow.shop.megafon.ru/images/goods/1517/151780_p_20.png',
                date: new Date(Date.UTC(2015, 1, 1)),
                qnt: 12,
                bought: false
            },
            {
                id: 4,
                name: 'Телефон',
                price: 76,
                img: 'https://img.mvideo.ru/Pdb/30041492b.jpg',
                date: new Date(Date.UTC(2019, 12, 11)),
                qnt: 5,
                bought: false
            },
            {
                id: 5,
                name: 'Зарядка',
                price: 6,
                img: 'https://avatars.dzeninfra.ru/get-zen_doc/128694/pub_5d999bc08600e100ad72d117_5d999eb9ec575b00b0154545/scale_1200',
                date: new Date(Date.UTC(2022, 4, 5)),
                qnt: 9,
                bought: false
            },
            {
                id: 6,
                name: 'Планшет',
                price: 23,
                img: 'https://vl.shop.megafon.ru/images/goods/1180/118043_p_8_7.jpg',
                date: new Date(Date.UTC(2013, 7, 8)),
                qnt: 36,
                bought: false
            },
            {
                id: 7,
                name: 'Мышь',
                price: 12,
                img: 'https://www.adverti.ru/media/catalog/product/1/0/102106.jpg',
                date: new Date(Date.UTC(2023, 9, 5)),
                qnt: 120,
                bought: false
            },
        ],
        productCard: [

        ],
    },
    getters: {
        productListGetter(state) {
            return state.product;
        },
        productCardGetter(state) {
            return state.productCard;
        }
        //         siteInfoGetteg(state) {
        // return
        //         }
    },
    mutations: {
        ADD_TO_CARD(state, name, img, price) {
            const card = {
                name: name,
                img: img,
                price: price,
                qnt: 0
            }
            console.log(card);
            state.productCard.push(card)
        },
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        }
    }
};