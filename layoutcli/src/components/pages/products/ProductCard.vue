<template>
    <div class="product__card">
        <h1>Корзина товаров</h1>
        <div class="product__card-item" v-for="item in this.productCardGetter" :key="item.id">
<h2>{{ item.name }}</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ProductCard',
    mounted() {
        if(this.$store.state.productCard.lenght === 0){
        console.log('Корзина пустая');
        console.log(this.$store.state.productCard.lenght);
        }
    },
    computed:{
        ...mapGetters(['productCardGetter'])
    }
}
</script>

<style scoped lang="scss">
.product__card {
    width: 100%;
    display: flex;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    -webkit-box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);
    box-shadow: 0px 10px 30px 0px rgb(255 255 255 / 25%);

}

.product__card-item{
    width: 280px;
}
</style>