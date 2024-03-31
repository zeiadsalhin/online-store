<template>
    <div class="mt-20">
        <!-- <Nav /> -->
        <v-container v-if="products">
            <v-row dense>
                <v-col md="5">
                    <div style="position: sticky; top: 92px">
                        <v-text-field prepend-inner-icon="mdi-magnify" outlined v-model="search" clearable
                            placeholder="Search"></v-text-field>
                        <v-list v-if="!$vuetify.display.mobile" color="transparent" subheader>
                            <v-subheader class="px-2">Categories</v-subheader>
                            <v-list-item v-if="categories" link v-for="(c, i) in categories" :key="`category${i}`">
                                <v-list-item-avatar>
                                    <v-img :src="c.image"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ c.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <div v-else class="p-5 font-semibold text-red-600">Categories Error404</div>
                        </v-list>
                    </div>
                </v-col>
                <v-col v-if="products" md="9">
                    <v-row>
                        <template v-for="(p, i) in filteredProducts" :key="`product${p.id}-${i}`">
                            <v-fade-transition>
                                <v-col cols="12" md="6">
                                    <v-card nuxt :to="`/products/${p.id}`" color="surface" class="el ma-2 mb-5 mr-5">
                                        <v-img :src="p.image" height="300">
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
                                </v-col>
                            </v-fade-transition>
                        </template>
                    </v-row>
                </v-col>
            </v-row>
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
        this.products = await this.$content("products").fetch();
        this.categories = await this.$content("category").fetch();
    },
    data() {
        return {
            products: null,
            categories: null,
            search: null,
        };
    },
}
</script>