<template>
    <div class="container">
        <h1 class="list-title">카트 페이지</h1>
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
        <div class="extra-panel">
            <button>구매하기</button>
        </div>
    </div>
</template>

<script>
export default {};
/*
    현재 구현 방식의 문제점
    새로고침 시 장바구니의 내용이 다 날아간다. => 정상 (자바스크립트는 새로고침될 때 웹브라우저가 코드를 실행한다.)
    따라서 새로고침 하기 전의 상태 값을 어딘가에 보관할 필요가 있음 => backend API를 이용하는 방식으로 처리 예정
*/
</script>
<style scoped>
.container {
    margin: 2rem 10rem;
}
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
.extra-panel {
    text-align: right;
    padding: 0.2rem 0;
}
</style>
