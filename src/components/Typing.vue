<template>
  <div>
    <ul>
      <li v-for="(question, i) in questionDate" :key="i">
        <p>{{question}}</p>
        <input
          type="text"
          ref="questionText"
          :autofocus="active === i"
          :readonly="active !== i"
          @keyup.enter="handleCheck"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import TypingQuestion from './TypingQuestion.vue'
export default {
  name: 'TypingExercise',
  props: {
    questionDate: Array
  },
  components: {TypingQuestion},
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleCheck(e) {
      if (this.questionDate[this.active] === e.target.value) {
        this.active++
        if ( this.active < this.questionDate.length) {
          alert('ok! 다음문장을 치세요')
          this.$refs.questionText[this.active].focus()
        } else {
          alert('end')
        }
      } else {
        alert('오타가 있습니다. 다시 치세요')
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  display: block;
  margin: 10px auto 20px;
  height: 40px;
  width: 600px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 3px 10px;
  font-size: 16px;
  text-align: center;
}
section {
  text-align: center;
  padding: 30px;
  background: #f9f9f9;
}
</style>
