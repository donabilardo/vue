<template>
    <div class="container">
        <div class="products">
            <article class="products__item" v-for="product in this.productListGetter" :key="product.id">
                <div class="product__top">
                    <img :src="product.img" :alt="product.name" class="product__top-img">
                    <span class="product__top-category">{{ product.name }}</span>
                </div>
                <div>Цена: {{ product.price }}</div>
                <button @click="ADD_TO_CARD">Добавить в корзину</button>
            </article>
        </div>
        <ProductCard></ProductCard>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '../products/ProductCard.vue';

export default {
    name: 'ProductComponent',
    components: {
        ProductCard
    },
    mounted() {
        // console.log(this.$store.state.product);
    },
    methods: {
        ADD_TO_CARD(){
            this.ADD_TO_CARD
        }
    },
    computed: {
        ...mapGetters(['productListGetter','productCardGetter']),

    }
}
</script>

<style scoped lang="scss">
.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    padding-bottom: 100px;
}

.products__item {
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    -webkit-box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);
    box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);
    width: 338px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.product__top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product__top-img {
    height: 270px;
}

.product__top-category {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px 20px;
    background-color: black;
    color: #fff;
}

button {
    padding: 10px 5px;
    border: 0px;
    width: 250px;
    color: #fff;
    border-radius: 10px;
    background-color: green;

    &:hover {
        background-color: red;
        cursor: pointer;
    }
}
</style>