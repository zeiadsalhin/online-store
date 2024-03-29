<template>
    <v-slide-group>
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


</template>
<script>
export default {
    props: {
        products: Array,
    }
}
</script>