<template>
    <v-slide-group v-if="products">
        <v-slide-item v-for="(p, i) in products" :key="i">
            <v-card :to="`/products/${p.id}`" color="surface" width="300" class="m-5">
                <v-img height="200" :src="p.src" cover>
                    <template #placeholder>
                        <v-row class="fill-height" justify="center" align="center">
                            <v-progress-circular width="2" size="100" color="primary"
                                indeterminate></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
                <v-card-title class="text-md-body-1 font-weight-bold">{{
                    p.name
                }}</v-card-title>
                <v-card-subtitle class="primary--text pb-3">
                    ${{ p.price }}
                </v-card-subtitle>
                <v-card-text>
                    <v-chip x-small label outlined class="mr-1" v-for="(t, i) in p.tags" :key="`prod${p.id}-${i}`">
                        {{ t }}
                    </v-chip>
                </v-card-text>
            </v-card>
        </v-slide-item>
    </v-slide-group>
    <v-slide-group v-else>
        <div class="loader p-10 mx-auto">
            <v-row class="fill-height" justify="center" align="center">
                <v-progress-circular width="2" size="50" color="primary" indeterminate></v-progress-circular>
            </v-row>
            <v-row>
                <p class="p-2">Products not Available</p>
            </v-row>
        </div>
    </v-slide-group>


</template>
<script>
export default {
    props: {
        products: Array,
    },
    data() {
        return {
            // products: null,
            products: [
                {
                    id: 1,
                    name: "Silky Smooth Beats",
                    price: 20000,
                    tags: ["Headphone", "People"],
                    src: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 2,
                    name: "Lady Luck Is Smiling",
                    price: 10000,
                    tags: ["Perfume", "Women"],
                    src: 'https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 3,
                    name: "Green Nike Zoom",
                    price: 30000,
                    tags: ["Nike", "Men"],
                    src: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 4,
                    name: "New Home Living Room Set",
                    price: 50000,
                    tags: ["Home", "Pretty"],
                    src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 5,
                    name: "Classic Man Watch",
                    price: 50500,
                    tags: ["Watch", "Men"],
                    src: 'https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
            ],
        }
    },
}
</script>