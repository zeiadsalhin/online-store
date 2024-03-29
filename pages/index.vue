<template>
    <div>
        <Nav />
        <Carousel :sale_items="sale_items" />
        <v-container>
            <h1 class="text-2xl">Check out</h1>
            <ProductSlider :products="products" />
            <Newsletter />
        </v-container>
        <Footer />
    </div>
</template>
<script>
export default {
    async created() {
        this.sale_items = await useAsyncData(() => queryContent('/products').where({ onSale: true }).findOne());
        this.products = await useAsyncData(() => queryContent('/products').findOne());

    },
    data() {
        return {
            products: null,
            sale_items: null
        }
    },
    methods: {

    },
}
</script>