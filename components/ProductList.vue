<template>
    <div>
        {{ products }}
    </div>
</template>

<script>
export default {
    // asyncData 메서드를 이곳에 작성하면 오류가 발생한다.
    /*
    [Vue warn]: Property or method "products" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
    found in

    ---> <ProductList> at components/ProductList.vue
        <Pages/main.vue> at pages/main.vue
            <Nuxt>
            <Layouts/default.vue> at layouts/default.vue
                <Root>
    */
};
</script>
