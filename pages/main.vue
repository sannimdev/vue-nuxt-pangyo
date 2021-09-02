<template>
    <div>
        <h1>홈페이지</h1>
        <p>메인페이지입니다</p>
        <div>
            {{ products }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // eslint (vue/order-in-components) 순서에 따라서 맨 위에 작성해야 한다.
    async asyncData() {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;

        return {
            products,
        };
    },
    data() {
        return {
            products: [],
        };
    },
};
</script>

<style scoped></style>
