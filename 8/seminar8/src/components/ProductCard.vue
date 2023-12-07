<template>
    <div class="card">
        <h1>Корзина товаров</h1>
        <div class="card__item" v-for="(item, index) in itemProduct" :key="index">
            <img :src="item.img" :alt="item.name" class="card__item-img">
            <span>Количество: {{ item.qnt }}</span>
            <button @click="deleteInCard(index, item.id)">Удалить</button>
        </div>
        <div class="total__price">Всего к оплате: {{ totalPrice }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        itemProduct: {
            type: Array,
            default() {
                return ['Корзина пуста']
            }
        },
        
    },
    data() {
        return {

        }
    },
    methods: {

        deleteInCard(index, id) {
            this.$emit('deleteInCard', [index, id]);
        }
    },
    computed: {
        totalPrice() {
            return this.itemProduct.reduce((accumulator, current) => {
                return accumulator + +current.price
            }, 0)
        }
    }

}
</script>

<!-- Разработать интерфейс корзины товаров, в котором пользователь
может изменять количество товаров в корзине и видеть общую сумму покупки. 
Каждый товар представлен в виде блока, содержащего поле ввода для изменения
количества товара и отображение его цены. При изменении количества товаров 
в поле ввода, необходимо автоматически пересчитывать стоимость каждого 
товара и обновлять общую сумму покупки. -->

<style scoped lang="scss">
.card {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #fff;
    padding: 20px 15px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.card__item {
    display: flex;
    align-items: center;

}

.card__item-img {
    height: 100px;
}
</style>