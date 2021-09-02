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
    async asyncData() {
        // asyncData 메서드는 pages 이하 컴포넌트에서만 적용할 수 있는 것에 주의한다.
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
