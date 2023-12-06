<template>
    <div class="main">
        <PopUp v-if="popUpVisible" @closePopUp="closePopUp">
            <img :src="qurentImgUrl" :alt="qurentImgAlt" class="big">
        </PopUp>

        <div class="product__box">
            <h1 class="product__box-title">{{ namePage }}</h1>
            <div class="product__box-item" v-for="product in products" :key="product.id" @click="openPopUp">
                <h2 class="product__item-title">{{ product.name }}</h2>
                <img :src="product.img" :alt="product.name" @click="imagePeview(product.id)" class="product__item-img">
                <p class="product__item-price">{{ Intl.NumberFormat("ru").format(product.price) }}$</p>
                <p>На складе:{{ product.qnt }} </p>
                <p>{{ qqq(product.qnt) }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import PopUp from '../components/PopUp.vue'
export default {
    name: 'ProductDetails',
    components: {
        PopUp
    },
    data() {
        return {
            popUpVisible: false,
            qurentImgIndex: 0,
            qntProduct: [],
            namePage: 'Каталог товаров',
            products: [
                {
                    id: 1,
                    name: 'Телевизор',
                    img: 'https://shop.tricolor.ru/upload/resize_cache/iblock/a5e/unyg56nqlc7wkch2df0qu4j8ton2cqb2/1280_1280_1/Televizor_32_5.jpg',
                    qnt: 2,
                    av: '',
                    price: 12224.56
                },
                {
                    id: 2,
                    name: 'Планшет',
                    img: 'https://vl.shop.megafon.ru/images/goods/1180/118043_p_8_7.jpg',
                    qnt: 0,
                    av: '',
                    price: 105.44
                },
                {
                    id: 3,
                    name: 'Телефон',
                    img: 'https://img.mvideo.ru/Pdb/30041492b.jpg',
                    qnt: 5,
                    av: '',
                    price: 1127
                },
            ],

        }
    },
    methods: {
        openPopUp() {
            this.popUpVisible = true
        },
        closePopUp() {
            this.popUpVisible = false
        },
        qqq(val) {
            if (val < 1) {
                return 'Out of stock'
            } else {
                return 'Available'
            }
        },
        imagePeview(id) {
            this.qurentImgIndex = id - 1
        }
    },
    computed: {
        qurentImgUrl() {
            return this.products[this.qurentImgIndex].img
        },
        qurentImgAlt() {
            return this.products[this.qurentImgIndex].name
        }
    }

}
</script>

<style scoped lang="scss">
.product__box {
    width: 900px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 15px;
    justify-content: space-between;
}

.product__box-title {
    text-align: center;
    width: 100%;
}

.product__box-item {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    width: 280px;
}

.product__item-img {
    width: 100%;
    max-height: 150px;
}

.big {
    width: 100%;
    height: 100%;
    align-self: center;
}
</style>