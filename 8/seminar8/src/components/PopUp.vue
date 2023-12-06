<template>
    <div class="popup">
        <div class="popup__header">
            <div class="popup__header-title">
                popup name
            </div>
            <div class="popup__header-close" @click="closePopUp">X</div>
        </div>
        <div class="popup__body">
            <slot></slot>
        </div>
        <div class="popup__footer">
            <button @click="closePopUp">ЗАКРЫТЬ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUp',
    data() {
        return {
            key: 1
        }
    },

    methods: {
        closePopUp() {
            this.$emit('closePopUp')
        }
    },
}
</script>

<style scoped lang="scss">
.popup {
    margin: 0 auto;
    background-color: #fff;
}

.popup__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.popup__header-title {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.popup__header-close {
    font-size: 30px;
    color: red;
    font: bold;

    & {
        cursor: pointer;
    }
}

.popup__body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup__footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>