<template>
  <div>
    <h1>{{ msg }}</h1>
    <section>
      <button @click="handleStart">Start</button>
      <ul>
        <li
          v-for="item in TypingData"
          v-bind:key="item.id">
            {{item.text}}
            <input
              type="text"
              :readonly="item.readonly"
              :disabled="item.disabled == 1" 
              ref="item.ref"
              v-model="item.inputValue"
              @keyup.enter="handleTextCheck(item)">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypingExercise',
  props: {
    msg: String
  },
  data () {
    return {
      TypingData: [{
        id: 0,
        readonly: true,
        disabled: 0,
        ref: "first",
        inputValue: '',
        text: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세'
      }, {
        id: 1,
        readonly: true,
        disabled: 0,
        ref: "second",
        inputValue: '',
        text: '무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세'
      }]
    }
  },
  methods: {
    handleStart() {
      this.TypingData[0].readonly = false
    },
    handleTextCheck(item) {
      if(item.text === item.inputValue) {
        item.disabled = 1
        this.TypingData[1].readonly = false
        this.setFocus()
      } else {
        alert('오타가 있습니다. 다시 치세요')
      }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  display: block;
  margin: 0 auto;
  height: 40px;
  width: 600px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 3px 10px;
  margin: 10px;
  font-size: 16px;
  text-align: center;
}
section {
  text-align: center;
  padding: 30px;
  background: #f9f9f9;
}
</style>
