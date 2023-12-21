<template>
    <div class="summ">
<div>Общая стоимость: {{ productSummGetter }}</div>
<div>Количество товара: {{ productQntGetter }}</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'CardSumm',
    computed:{
        ...mapGetters(['productSummGetter','productQntGetter'])
    }
}
</script>

<style>
.summ{
    font-size: 40px;
    color: green;
}
</style>