<template>
    <div>
        <h1>상세 페이지</h1>
        <div>
            {{ product }}
            <img :src="product.imageUrl" :alt="product.name" />
            <p>name: {{ product.name }}</p>
            <p>price: {{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import { fetchProductById } from '@/api';
export default {
    async asyncData({ params }) {
        // asyncData는 페이지를 진입하기 전에  사용하므로 this를 사용할 수가 없다.
        const response = await fetchProductById(params.id);
        const product = response.data;
        return { product };
    },
    created() {},
};
</script>

<style></style>
