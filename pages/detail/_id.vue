<template>
    <div>
        <div class="container">
            <div class="main-panel">
                <img class="product-image" :src="product.imageUrl" :alt="product.name" />
            </div>
            <div class="side-panel">
                <p class="name">{{ product.name }}</p>
                <p class="price">{{ product.price }}</p>
                <button type="button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchProductById } from '@/api';
export default {
    // context는 넉스트 프레임워크 전반에 걸쳐 공용으로 사용되는 속성으로써 플러그인, 미들웨어 드으이 속성에도 접근할 수 있음.
    async asyncData({ params }) {
        // asyncData는 페이지를 진입하기 전이라서 페이지 컴포넌트를 가리키고자 할 때는 this 키워드를 사용할 수가 없다.
        const response = await fetchProductById(params.id);
        const product = response.data;
        return { product };
    },
    created() {},
    methods: {
        addToCart() {
            this.$store.commit('addCartItem', this.product);
            this.$router.push('/cart');
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
.product-image {
    width: 500px;
    height: 375px;
}
.side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
}
</style>
