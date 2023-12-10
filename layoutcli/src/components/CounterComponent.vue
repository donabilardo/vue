<template>
    <div class="counter__footer">
        <span>Счётчик: {{ counter }}</span><button @click="increment">+</button><button @click="decrement">-</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    mounted() {
        console.log(this.$store);
    },
    name: 'CounterComponent',
    methods: {
        ...mapMutations(['INCREMENT', 'DECREMENT']),
        increment() {
            // this.$store.commit('INCREMENT');
            this.INCREMENT();
        },
        decrement() {
            // this.$store.commit('DECREMENT');
            this.DECREMENT();
        }
    },
    computed: {
        counter() {
            return this.$store.state.count
        }
    },
}
</script>

<style scoped lang="scss">
.counter__footer {
    display: flex;
    width: 100%;
    gap: 5px;
    justify-content: right;
    align-items: center;
}

button {
    height: 25px;
    width: 25px;
    background-color: green;
    font-size: 24px;
    color: #fff;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
}
</style>