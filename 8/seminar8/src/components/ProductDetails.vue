<template>
    <div class="main">
        <button @click="visible = !visible">{{ visible ? "скрыть товары" : "отобразить товары" }}</button>
        <div v-show="visible">
            <PopUp v-if="popUpVisible" @closePopUp="closePopUp" :PopUpName="qurentImgAlt">
                <img :src="qurentImgUrl" :alt="qurentImgAlt" class="big">
            </PopUp>

            <div class="product__box">
                <h1 class="product__box-title">{{ namePage }}</h1>
                <div class="product__box-item" v-for="product in products" :key="product.id">
                    <h2 class="product__item-title">{{ product.name }}</h2>
                    <img :src="product.img" :alt="product.name" @click="imagePeview(product.id)" class="product__item-img">
                    <p class="product__item-price">{{ Intl.NumberFormat("ru").format(product.price) }}$</p>
                    <p>На складе:{{ product.qnt }} </p>
                    <p>{{ qqq(product.qnt) }}</p>
                    <button @click="addCard(product.id, product.name, product.img, product.price)">Добавить в
                        корзину</button>
                </div>
                <ProductCard :itemProduct="productCardAll" @deleteInCard="deleteInCard"></ProductCard>
            </div>



        </div>
    </div>
</template>

<script>
import PopUp from '../components/PopUp.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'ProductDetails',
    components: {
        PopUp,
        ProductCard
    },
    data() {
        return {
            visible: false,
            popUpVisible: false,
            qurentImgIndex: 0,
            qntProduct: [],
            namePage: 'Каталог товаров',
            productCardAll: [],
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
        addCard(id, name, img, price) {
            if (this.products[id - 1].qnt > 0) {
                this.products[id - 1].qnt--;
                const clickAddCard = {
                    id: id,
                    name: name,
                    img: img,
                    price: price,
                    qnt: 0
                }
                clickAddCard.qnt += 1;
                this.productCardAll.push(clickAddCard)
                console.log();
            } else {
                alert('Товар закончился');
            }

        },
        deleteInCard(index) {
            this.productCardAll.splice(index, 1)
            //this.products[index].qnt++
        },
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
            this.openPopUp();
        },

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
button {
    padding: 10px 15px;
    border: 1px solid green;
    border-radius: 10px;
    background-color: #fff;

    &:hover {
        cursor: pointer;
        background-color: green;
        color: #fff;
    }
}

.product__box {
    width: 900px;
    margin: 0 auto;
    margin-top: 30px;
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
    background-color: #fff;
    padding: 20px 15px;
    box-sizing: border-box;
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