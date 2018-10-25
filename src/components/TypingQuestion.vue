<template>
    <li>
        <p>{{question}}</p>
        <input type="text" @keyup.enter="handleTextCheck">
    </li>
</template>

<script>
export default {
    name: 'TypingQuestion',
    props: {
        question: String,
        active: Boolean,
        index: Number,
        onSuccess: Function
    },
    methods: {
        handleTextCheck(e) {
            if (this.question === e.target.value) {
                this.onSuccess(this.index)
            } else {
                alert('오타가 있습니다. 다시 치세요')
            }
        },
    }
}
</script>

<style scoped>

</style>