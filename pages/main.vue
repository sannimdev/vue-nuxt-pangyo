<template>
    <div>
        <h1>홈페이지</h1>
        <p>메인페이지입니다</p>
        <div>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <img :src="product.imageUrl" :alt="product.name" />
                    <p>{{ product.name }}</p>
                    <p>{{ product.price }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData() {
        // VueRoute에서 beforeEnter 사이클(즉, 라우터에 진입하기 전 시점)에서 동작하는 것과 같다고 할 수 있다.
        // asyncData 메서드는 pages 이하 컴포넌트에서만 적용할 수 있는 것에 주의한다.
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data.map((item) => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }));

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
