<template>
    <div>
        <v-app-bar color="gray" :elevation="2" app>
            <v-toolbar-title class="md:ml-10">
                <nuxt-link to="/">
                    <v-toolbar-title>
                        <h1 class="font-semibold text-xl">E-commerce - ايكومرس</h1>
                    </v-toolbar-title>
                </nuxt-link>
            </v-toolbar-title>
            <v-spacer />
            <nuxt-link to="/products"><v-btn class="mr-md-2" icon>
                    <v-icon size="20">mdi-store-outline</v-icon>
                </v-btn></nuxt-link>
            <!-- <v-badge v-if="$store.state.cart.cart.length > 0" overlap :content="`${$store.state.cart.cart.length}`">
                <v-btn nuxt to="/cart" icon>
                    <v-icon size="20">mdi-cart-outline</v-icon>
                </v-btn>
            </v-badge> -->
            <!-- <v-btn v-else nuxt to="/cart" icon>
                <v-icon size="20">mdi-cart-outline</v-icon>
            </v-btn> -->
            <v-divider vertical class="mx-md-5 mx-2" />
            <v-btn @click="toggleTheme" icon>
                <v-icon size="20">mdi-brightness-7</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    methods: {
        toggleTheme() {
            // theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
            localStorage.scheme === 'light' ? localStorage.scheme = 'dark' : localStorage.scheme = 'light';
            this.$router.go()
        },
    },
};
</script>