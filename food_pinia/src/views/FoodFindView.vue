<template>
    <div class="container">
        <div class="row">
            <select class="input-sm" v-model="column">
                <option value="all" selected>전체목록</option>
                <option value="address">주소</option>
                <option value="name">맛집명</option>
                <option value="type">음식종류</option>
            </select>
            <input type="text" size="20" class="input-sm" v-model="ss" @keyup.enter="find()">
            <button class="btn-sm btn-danger" @click="find()">검색</button>
        </div>
        <div class="row" style="margin-top: 20px;">
            <div class="col-md-3" v-for="(vo, index) in find_data.list" :key="index">
                <div class="thumbnail">
                    <router-link :to="{name:'food_detail', params:{fno:vo.fno}}">
                        <img :src="vo.poster" :title="vo.address" style="width:240px;height: 130px">
                        <div class="caption">
                            <p>{{ vo.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row text-center" style="margin-top: 20px">
            <ul class="pagination">
                <li v-if="find_data.startPage > 1"><a class="a-link" @click="foodFindData(column,find_data.startPage-1,ss)">&laquo;</a></li>
                <li v-for="i in range(find_data.startPage, find_data.endPage)" :key="i"
                    :class="find_data.curpage == i ? 'active' : ''"><a class="a-link" @click="foodFindData(column,i,ss)">{{ i }}</a></li>
                <li v-if="find_data.endPage < find_data.totalpage" ><a class="a-link" @click="foodFindData(column,find_data.endPage+1,ss)">&raquo;</a></li>
            </ul>
        </div>
    </div>
</template>
<script setup>
// 1. Route(전송된 값 얻기) / Router(이동)

// 2. store : state (데이터 저장) : storeToRefs
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useFoodStore } from '@/stores/food'
// 3. useFoodStore를 얻어와서 actions에 있는 함수
const ss=ref('')
const column=ref('all')
const foodStore=useFoodStore()
const {find_data}=storeToRefs(foodStore)

// action 호출 준비
const foodFindData=async (column,page,ss)=>{
    await foodStore.foodFindData({
        column,
        page,
        ss
    })
}
onMounted(()=>{
    foodFindData('all',1,null)
})
// 4. onMounted() : 한번 실행
//    => useEffect()
// 페이지 나누기 
const range = (start, end) => {
    const arr = []
    const len = end - start
    for (let i = 0; i <= len; i++) {
        arr[i] = start
        start++
    }
    return arr
}

const find = () => {
    foodFindData(column.value,1,ss.value)
}
</script>
<style scoped>
.row {
    margin: 0px auto;
    width: 960px;
}

p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>