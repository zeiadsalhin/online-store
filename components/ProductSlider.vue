<template>
    <v-slide-group v-if="products">
        <v-slide-item v-for="(p, i) in products" :key="`product-${i}`">
            <v-card nuxt color="surface" width="300" class="m-5">
                <v-img height="300" :src="p.image">
                    <template #placeholder>
                        <v-row class="fill-height" justify="center" align="center">
                            <v-progress-circular width="2" size="100" color="primary"
                                indeterminate></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
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
            products: null,
        }
    },
}
</script>