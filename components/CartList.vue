<template>
    <div class="list-wrapper">
        <ul>
            <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id" class="list-item">
                <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
                <div class="description">
                    <p>{{ cartItem.name }}</p>
                    <span>{{ cartItem.price }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store';

export default {
    // 일반 컴포넌트에서는 asyncData를 못 쓰는데...! 🙄
    // asyncData({ store }) {
    //     store.dispatch(FETCH_CART_ITEMS);
    // },

    async fetch() {
        await this.$store.dispatch(FETCH_CART_ITEMS);
    },
};
</script>

<style scoped>
.list-title {
    font-weight: 700;
    font-size: 1.4rem;
}
.list-wrapper {
    margin: 0.4rem 0;
}
.list-item {
    display: flex;
}
.thumbnail {
    width: 100px;
    height: 100px;
}
.description {
    padding: 2rem 1rem;
}
</style>
