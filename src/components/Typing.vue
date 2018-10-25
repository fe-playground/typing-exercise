<template>
  <div>
    <ul>
      <TypingQuestion
        v-for="(x, i) in questionDate"
        :key="i"
        :index="i"
        :question="x"
        :active="active === i"
        :onSuccess="onSuccess"
      />
    </ul>
  </div>
</template>

<script>
import TypingQuestion from './TypingQuestion.vue'
export default {
  name: 'TypingExercise',
  props: {
    name: String,
    handleStop: Function,
    questionDate: Array
  },
  components: {TypingQuestion},
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleStart() {
      this.TypingData[0].readonly = false
    },
    onSuccess(index) {
      this.active = index + 1
    },
    setFocus() {
      this.$refs.second.focus()
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
