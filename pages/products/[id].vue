<script setup>
// import { ref, onMounted } from 'vue';

// const product = ref(null);
// const route = useRoute()
// onMounted(async () => {
//     try {
//         const productId = route.params.id;
//         const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
//         product.value = await response.json();
//         console.log(product.value)
//     } catch (error) {
//         console.error('Error fetching product:', error);
//     }
// });
import Swal from 'sweetalert2'
import { useMainStore } from '@/store';

const mainStore = useMainStore();

const addToCart = (product) => {
    mainStore.addToCart(product);

};
</script>
<template>
    <div>
        <!-- <Nav /> -->
        <v-container class="mt-20">
            <v-row justify="center">
                <v-col cols="11" md="7">
                    <h2 class="text-center text-h4 font-weight-bold">
                        {{ product.name }}
                    </h2>
                    <div class="mt-2 text-center">
                        <v-rating readonly half-increments class="p-5" color="yellow darken-2"
                            background-color="grey lighten-1" :value="product.ratings" dense size="20"></v-rating>
                        <v-chip small label outlined class="mr-1" v-for="(t, i) in product.tags"
                            :key="`prod${product.id}-${i}`">
                            {{ t }}
                        </v-chip>
                    </div>
                    <br />
                    <v-img width="100%" class="el rounded-lg" height="50vh" :src="product.image"></v-img>
                    <p class="mt-5 mb-5">
                        {{ product.description }}
                    </p>
                    <p class="text-h5 mb-7">
                        Price: {{ product.price + ' $' }}
                    </p>
                    <v-btn @click="addToCart(product)" min-height="45" min-width="170" class="text-capitalize"
                        color="primary">Add To Cart</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <br /><br />
        <Footer />
        <ScrollTop />
    </div>
</template>

<script>
export default {
    async created() {
        const productId = parseInt(this.$route.params.id);
        console.log(productId + 'Product id');
        this.product = this.product.find(item => item.id === productId);
    },
    data() {
        return {
            // product: null,
            product: [
                {
                    id: 1,
                    name: "Silky Smooth Beats",
                    "onSale": false,
                    tags: ["Headphone", "People"],
                    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 20000,
                    "salePrice": null,
                    ratings: 4.0
                },
                {
                    id: 2,
                    name: "Lady Luck Is Smiling",
                    "onSale": true,
                    tags: ["Perfume", "Women"],
                    image: "https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 3500,
                    "salePrice": 3000,
                    ratings: 4.5
                },
                {
                    id: 3,
                    name: "Green Nike Zoom",
                    "onSale": true,
                    tags: ["Nike", "Men"],
                    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 10500,
                    "salePrice": 9000,
                    ratings: 4.5
                },
                {
                    id: 4,
                    name: "New Home Living Room Set",
                    "onSale": false,
                    tags: ["Home", "Pretty"],
                    image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 100500,
                    "salePrice": null,
                    ratings: 4
                },
                {
                    id: 5,
                    name: "Classic Man Watch",
                    "onSale": true,
                    tags: ["Watch", "Men"],
                    image: "https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 50500,
                    "salePrice": 40000,
                    ratings: 3.5
                }
            ],
        };
    },
};
</script>

<style></style>