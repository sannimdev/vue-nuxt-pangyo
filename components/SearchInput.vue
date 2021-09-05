<template>
    <div class="input-wrapper flex">
        <input
            class="search-input"
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <button class="button" type="button" @click="$emit('search')">search</button>
    </div>
</template>

<script>
export default {
    props: {
        // v-model을 상위컴포넌트에서 attribute로 적용할 때 양방향바인딩되는 속성 키의 이름은 'value'이다.
        value: {
            type: String,
            default: () => '',
        },
    },
};
</script>

<style scoped>
.input-wrapper {
    height: 40px;
    margin: 1rem 0;
}
.search-input {
    width: 200px;
    font-size: 1.2rem;
    font-weight: 500;
}
.btn {
    font-size: 1.2rem;
    font-weight: 500;
}
</style>
