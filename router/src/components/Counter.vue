<template>
    <div class="container">
        <div class="counter">
            <span>{{ counterComponent }}</span>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounterComponent',
    components:{
    },
    data() {
        return {

        }
    },
    methods: {
        increment() {
            this.$store.commit('INCREMENT')
        },
        decrement() {
            this.$store.commit('DECREMENT')
        }
    },
    computed: {
        counterComponent() {
            return this.$store.state.counterComponent;
        }
    },
}
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
    width: 1260px;
    padding: 0px 30px 0px 30px;
    margin-bottom: 30px;
}

.counter {
    display: flex;
    padding: 5px;
    border: 1px solid black;
    width: auto;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
}

span {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>