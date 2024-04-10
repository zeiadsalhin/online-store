<template>
    <div class="mt-20">
        <!-- <Nav /> -->
        <v-container v-if="products" class="w-1/2">
            <v-text-field prepend-inner-icon="mdi-magnify" outlined v-model="search" clearable
                placeholder="Search"></v-text-field>
            <div class="w-full md:flex md:space-x-10 h-fit">
                <v-list v-if="!$vuetify.display.mobile" color="transparent" subheader>
                    <v-subheader class="px-2 text-xl">Categories</v-subheader>
                    <v-list-item v-if="categories" link v-for="(c, i) in categories" :key="`category${i}`" class="m-5">
                        <v-list-item-avatar>
                            <v-img :src="c.image" cover width="200" class="mx-auto"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="m-3 text-h7 text-center">
                                {{ c.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <div v-else class="p-5 font-semibold text-red-600">Categories Error404</div>
                </v-list>


                <div v-if="products" class="w-11/12 justify-center flex flex-wrap gap-4">
                    <div v-for="(p, i) in filteredProducts" :key="`product${p.id}-${i}`" class="w-fit">
                        <v-fade-transition>
                            <v-card :to="'/products/' + p.id" color="surface" class="mb-5 mx-auto ml-6">
                                <v-img :src="p.image" width="300" height="200" cover>
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
                                    <v-chip x-small label outlined class="mr-1" v-for="(t, i) in p.tags"
                                        :key="`prod${p.id}-${i}`">
                                        {{ t }}
                                    </v-chip>
                                </v-card-text>
                            </v-card>
                        </v-fade-transition>
                    </div>
                </div>
            </div>
        </v-container>
        <div v-else class="loader w-full h-full">
            <div class="p-5 flex-col justify-center mx-auto">
                <div class="flex justify-center p-5"><v-progress-circular color="dark-blue"
                        indeterminate></v-progress-circular>
                </div>
                <p class="p-2 text-center">Products not Available at the moment</p>
            </div>
        </div>
        <br /><br />
        <Footer />
    </div>
</template>
<script>
export default {
    async created() {
        // this.products = await this.$content("products").fetch();
        // this.categories = await this.$content("category").fetch();
    },
    data() {
        return {
            // products: true,
            categories: [
                {
                    id: 1,
                    name: "Shoes",
                    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 2,
                    name: "Handbags",
                    image: "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 3,
                    name: "Perfumes",
                    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 4,
                    name: "Cosmetics",
                    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 5,
                    name: "Food",
                    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
            ],
            products: [
                {
                    id: 1,
                    name: "Silky Smooth Beats",
                    "onSale": false,
                    "tags": ["Headphone", "People"],
                    "image": "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 20000,
                    "salePrice": null,
                    "ratings": 4.0
                },
                {
                    id: 2,
                    name: "Lady Luck Is Smiling",
                    "onSale": true,
                    "tags": ["Perfume", "Women"],
                    "image": "https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 3500,
                    "salePrice": 3000,
                    "ratings": 4.5
                },
                {
                    id: 3,
                    name: "Green Nike Zoom",
                    "onSale": true,
                    "tags": ["Nike", "Men"],
                    "image": "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 10500,
                    "salePrice": 9000,
                    "ratings": 4.5
                },
                {
                    id: 4,
                    name: "New Home Living Room Set",
                    "onSale": false,
                    "tags": ["Home", "Pretty"],
                    "image": "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 100500,
                    "salePrice": null,
                    "ratings": 4
                },
                {
                    id: 5,
                    name: "Classic Man Watch",
                    "onSale": true,
                    "tags": ["Watch", "Men"],
                    "image": "https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
                    price: 50500,
                    "salePrice": 40000,
                    "ratings": 3.5
                }
            ],
            search: null,
        };
    },
    computed: {
        filteredProducts() {
            if (!this.products || !this.search) return this.products;
            return this.products.filter((p) => {
                const s = this.search.toLowerCase();
                const n = p.name.toLowerCase();
                const price = p.price.toString();
                const sprice = p.salePrice?.toString() || "";
                const r = p.ratings.toString();
                return (
                    n.includes(s) ||
                    price.includes(s) ||
                    sprice.includes(s) ||
                    r.includes(s)
                );
            });
        },
    },
}
</script>