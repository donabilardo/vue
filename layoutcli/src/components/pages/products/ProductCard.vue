<template>
    <div class="product__card">
        
        <div class="product__card-item" v-for="item in this.productCardGetter" :key="item.id">
            <h2>{{ item.name }}</h2>
            <img :src="item.img" :alt="item.name">
            <span>Цена: {{ item.price }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ProductCard',
    mounted() {
        if (this.$store.state.productCard.lenght === 0) {
            console.log('Корзина пустая');
            console.log(this.$store.state.productCard.lenght);
        }
    },
    computed: {
        ...mapGetters(['productCardGetter','productCardGetter'])
    }
}
</script>

<style scoped lang="scss">
h1{
    width: 100%;
}
.product__card {
    width: 100%;
    display: flex;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    -webkit-box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);
    box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);

}

.product__card-item {
    width: 280px;
    border: 1px solid black;
}
img{width: 260px;}
</style>