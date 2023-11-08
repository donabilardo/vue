const v = new Vue({
    el: '#app',
    data: {
        product: [
            {
                name: 'Телевизор',
                price: 125,
                img: 'https://static.nix.ru/images/sony-kd-50x81jr-5418432254.jpeg?good_id=541843&width=500&height=500&view_id=2254'
            },
            {
                name: 'Клавиатура',
                price: 15,
                img: 'https://img.mvideo.ru/Pdb/50174469b.jpg'
            },
            {
                name: 'Телефон',
                price: 76,
                img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'
            },
            {
                name: 'Зарядка',
                price: 6,
                img: 'https://avatars.dzeninfra.ru/get-zen_doc/128694/pub_5d999bc08600e100ad72d117_5d999eb9ec575b00b0154545/scale_1200'
            },
            {
                name: 'Планшет',
                price: 23,
                img: 'https://vl.shop.megafon.ru/images/goods/1180/118043_p_8_7.jpg'
            },
            {
                name: 'Мышь',
                price: 12,
                img: 'https://www.adverti.ru/media/catalog/product/1/0/102106.jpg'
            },
        ],
    },
    methods: {
        al: function () {
            alert(this.test)
        }
    },
    computed: {

    }
})