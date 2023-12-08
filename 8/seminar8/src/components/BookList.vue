<template>
    <div class="book_box">
        <div class="book_box-item" v-for="item in books" :key="item.id">
            <h3>{{ item.name }}</h3>
            <p>{{ item.autor }}</p>
            <button @click="readDesc(item.name, item.desc)">Читать описание</button>
        </div>

        <PopUp v-show="visibleDesc" @closePopUp="closePopUp" :PopUpName="PopUpName">
        <p>{{ PopUpDesc }}</p>
        </PopUp>
    </div>
</template>

<!-- Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, 
такую как название, автор и год издания. 
Компонент "Книга" должен иметь возможность отображать дополнительные 
детали о книге по требованию пользователя. 
Также необходимо создать 
компонент "Список книг" (BookList), 
который будет отображать список книг из переданного массива. -->

<script>
import PopUp from './PopUp.vue';

export default {
    name: 'BookList',
    data() {
        return {
            PopUpDesc: '',
            PopUpName: '',
            visibleDesc: false,
            books: [
                {
                    id: 1,
                    name: 'Мастер и Маргарита',
                    autor: 'Булгаков',
                    desc: '111111Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    id: 2,
                    name: 'Роковые яйца',
                    autor: 'Булгаков',
                    desc: '2222222Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    id: 3,
                    name: 'Незнайка на луне',
                    autor: 'Носов',
                    desc: '33333333333333Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    id: 4,
                    name: 'Тарзан',
                    autor: 'Берроуз',
                    desc: '44444Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    id: 5,
                    name: 'Бесы',
                    autor: 'Достоевский',
                    desc: '55555Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    id: 6,
                    name: 'Преступление и наказание',
                    autor: 'Достоевский',
                    desc: '66666Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            ]
        };
    },
    components: { PopUp },
    methods: {
        readDesc(name, desc){
            this.PopUpDesc = desc;
            this.PopUpName = name;
            this.visibleDesc = true;
        },
        closePopUp(){
            this.visibleDesc = false
        }
    }
}
</script>




<style scoped lang="scss">
.book_box {
    padding-top: 100px;
    margin: 0 auto;
    width: 900px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.book_box-item {
    width: 280px;
    background-color: #fff;
    padding: 15px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>