<template>
  <div id="app">
    <div v-show="!start">
      <h2>사용자 이름 입력</h2>
      <input 
      type="text" v-model="name" placeholder="이름을 입력하세요" @keyup.enter="handleStart">
      <button @click="handleStart">시작</button>
      
    </div>
    <div v-if="start">
      <p>{{name}}님 타이핑 화이팅!</p>
      <button @click="start=false">다시시작</button>
    </div>
    <!-- <StopWatch/> -->
    <Typing 
      v-if="start"
      :handleStop="handleStop"
      :questionDate="questionDate"
    />
  </div>
</template>

<script>
import Typing from './components/Typing.vue'
import StopWatch from './components/StopWatch.vue'

export default {
  name: 'app',
  data () {
    return {
      name: '',
      start: false,
      questionDate: [
        '안녕하세요',
        '반갑습니다',
        '뷰는 처음이지?',
        '타이핑 화이팅'
      ]
    }
  },
  components: {
    Typing,
    StopWatch
  },
  methods: {
    handleStart() {
      if( this.name !== '' ) {
        this.start = true
        this.handleStopWatch
      } else {
        alert('이름을 입력하세요')
      }
    },
    handleStop() {
      this.start = false
    },
    handleStopWatch() {
      // console.log('123')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
