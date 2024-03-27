<template>
    <div>
        <Nav />
        <Carousel :sale_items="sale_items" />
        <Footer />
    </div>
</template>
<script>
export default {
    async created() {
        this.sale_items = await useAsyncData(() => queryContent('products').where({ onSale: true }).find());
        // this.products = await this.queryContent('products').fetch();
    },
    data() {
        return {
            products: null,
            sale_items: null
        }
    },
}
</script>