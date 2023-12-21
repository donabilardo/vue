<template>
    <div class="container">
        <div class="add_card">
            <h1>Форма добавления нового товара</h1>
            <label for="name">Введите название товара</label>
            <input type="text" id="name" placeholder="Название товара" v-model="name">

            <label for="name">Введите стоимость товара</label>
            <input type="text" id="price" placeholder="Цена товара" v-model="price">

            <label for="img">Ссылка на изображение</label>
            <input type="text" id="img" placeholder="Ссылка на изображение" v-model="img">
            <button @click="add_product">Добавить товар</button>
        </div>
        <CardSumm></CardSumm>
    </div>
</template>

<script>
//import { mapGetters } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import CardSumm from './CardSumm.vue'
export default {
    name: 'CardAdd',
    components:{
        CardSumm
    },
    data() {
        return {
            name: '',
            price: 0,
            img: ''
        }
    },
    methods: {
        add_product() {
            const newProduct = {
                id: uuidv4(),
                name: this.name,
                price: this.price,
                img: this.img
            }
           // this.$emit('add_product', newProduct)
            this.$store.commit('ADD_TO_CART', newProduct)
           // console.log(newProduct);
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
    width: 1260px;
    padding: 0px 30px 0px 30px;
}

.add_card {
    width: 400px;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

input {
    margin-bottom: 20px;
    width: 50%;
    height: 30px;
}
</style>