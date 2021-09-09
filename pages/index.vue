<template>
    <div class="app">
        <main>
            <SearchInput v-model="searchKeyword" @search="searchProducts" />
            <ul>
                <li
                    v-for="product in products"
                    :key="product.id"
                    class="item flex"
                    @click="moveToDetailPage(product.id)"
                >
                    <img class="product-image" :src="product.imageUrl" :alt="product.name" />
                    <p>{{ product.name }}</p>
                    <span>{{ product.price }}</span>
                </li>
            </ul>
            <div class="cart-wrapper">
                <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
            </div>
        </main>
    </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductByKeyword, fetchProducts } from '~/api';

export default {
    components: { SearchInput },
    async asyncData() {
        // VueRoute에서 beforeEnter 사이클(즉, 라우터에 진입하기 전 시점)에서 동작하는 것과 같다고 할 수 있다.
        // asyncData 메서드는 pages 이하 컴포넌트에서만 적용할 수 있는 것에 주의한다.
        const response = await fetchProducts();
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
            searchKeyword: '',
        };
    },
    methods: {
        moveToDetailPage(id) {
            this.$router.push(`detail/${id}`);
        },
        async searchProducts() {
            const response = await fetchProductByKeyword(this.searchKeyword);
            this.products = response.data.map((item) => ({
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            }));
        },
        moveToCartPage() {
            this.$router.push('/cart');
        },
    },
};
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: center;
}
.item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
}
.product-image {
    width: 400px;
    height: 250px;
}
.app {
    position: relative;
}
.cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
}
.cart-wrapper .btn {
    display: inline-block;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
}
</style>
