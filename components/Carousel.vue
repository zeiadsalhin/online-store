<template>
    <v-carousel height="80vh" hide-delimiter-background>
        <v-carousel-item v-if="items" v-for="(item, i) in items" :key="i" :src="item.src" cover>
            <v-img height="100vh">
                <v-container class="fill-height mt-32">
                    <v-row dense>
                        <v-col md="7">
                            <div class="pa-md-10 pa-3 rounded-lg black--text text-white text-center text-md-left"
                                style="background-color: rgba(0, 0, 0, 0.5)">
                                <h2 class="text-md-h4 text-h5">
                                    {{ item.name }}
                                </h2>
                                <p
                                    class="text-h7 inline-block mr-4 mt-2 text-red-70 line-through decoration-2 decoration-red-700">
                                    {{ (Math.random() * (item.price * 1.3 - item.price) + item.price).toFixed() + ' $'
                                    }}
                                </p>-30% off
                                <p class="text-h5 primary--text mt-3">
                                    {{ item.price + ' $' }}
                                </p>
                                <p class="text-md-body-2 md:mb-5 mb-2"></p>
                                <v-btn depressed :to="`/products/${item.id}`" color="primary" class="text-capitalize"
                                    min-height="40">Check It Out</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-carousel-item>
        <v-carousel-item v-else>
            <div class="h-full flex justify-center p-10">
                <div class="m-10 p-5 bg-zinc-900 my-auto shadow-sm">
                    <h2 class="text-2xl">
                        Error404
                    </h2>
                </div>

            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    props: {
        // sale_items: Array,
    },
    data() {
        return {
            sale_items: true,
            items: [
                {
                    id: 1,
                    name: "Silky Smooth Beats",
                    price: 20000,
                    src: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 2,
                    name: "Lady Luck Is Smiling",
                    price: 3500,
                    src: 'https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 3,
                    name: "Green Nike Zoom",
                    price: 10500,
                    src: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
                {
                    id: 4,
                    name: "New Home Living Room Set",
                    price: 100500,
                    src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
            ],
        }
    },
}
</script>

<style></style>