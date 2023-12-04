<template>
    <div>
        <div class="calc">
            <input type="text" class="calc__data" v-model="result">
            <div class="nums">
                <button v-for="num in nums" :key="num.id" class="num" @click="$event => addButton(num)">
                    {{ num }}
                </button>
                <button v-for="tab in tabs" :key="tab.id" class="tab" @click="$event => addButton(tab)">
                    {{ tab }}
                </button>
                <button class="tab" @click="reset">
                    С
                </button>
                <button class="result" @click="calcResult">Результат</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcComponent',
    data() {
        return {
            result: 0,
            nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            tabs: ['+', '-', '*', '/']
        }
    },

    methods: {
        addButton(char) {
            this.result += char;
            this.result = this.result.toString();
        },
        calcResult() {
            this.result = eval(this.result)
        },
        reset(){
            this.result = 0;
        }
    }
}

</script>

<style lang="css" scoped>
.calc {
    width: 200px;
    height: 490px;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.calc__data {
    height: 60px;
    margin-bottom: 20px;
    font-size: 30px;
    color: green;
    text-align: center;
}

.num {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 44px;
}

.tab {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(193, 166, 166);
    font-size: 44px;
    border: 0px;
}

.result {
    height: 60px;
    width: 100%;
    font-size: 35px;
    background-color: rgb(16, 132, 94);
    border: 0px;
}

.nums {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}
</style>