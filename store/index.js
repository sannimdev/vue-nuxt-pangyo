import { fetchCartItems } from '~/api';

export const state = () => ({
    cartItems: [],
});

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const mutations = {
    addCartItem(state, cartItem) {
        state.cartItems.push(cartItem);
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems;
    },
};

export const actions = {
    // vue+ts에서 mutations와 actions의 속성은 ts에서 별도로 상수화시켜 import 하는 방식에서 다음과 같이 대문자 스네이크 케이스를 사용하는 것이 유리하다.
    async [FETCH_CART_ITEMS]({ commit }) {
        const { data } = await fetchCartItems();
        commit(
            'setCartItems',
            data.map((item) => ({
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            }))
        );
    },
    async nuxtServerInit(storeContext, nuxtContext) {
        await storeContext.dispatch(FETCH_CART_ITEMS);
        // const { data } = await fetchCartItems();
        // storeContext.commit(
        //     'setCartItems',
        //     data.map((item) => ({
        //         ...item,
        //         imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        //     }))
        // );
    },
};
