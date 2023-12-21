<template>
    <div class="container">
        <div class="card__list">
            <div class="card__item" v-for="item in this.productListGetter" :key="item.id">
                <img :src="item.img" :alt="item.name">
                <div>Цена товара: {{ item.price }}</div>
                <button @click="DELL_IN_CARD(item.id)">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CardList',
    data() {
        return {
            cardEmpty: true
        }
    },
    computed: {
        ...mapGetters(['productListGetter'])
    },
    methods: {
        DELL_IN_CARD(id) {
            this.$store.commit('DELL_IN_CARD', id)
            console.log(id);
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

.card__list {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.card__item {
    width: 280px;
    padding: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    img {
        height: 200px;
    }
}
</style>