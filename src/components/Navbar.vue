<template>
    <v-app-bar app color="dark" dark>
        <div class="d-flex align-center">
            <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->

            <h4 class="text-h4 font-weight-bold text-capitalize">{{ $route.name }}</h4>
        </div>

        <v-spacer></v-spacer>

        <router-link to="/">
            <v-btn>
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </router-link>

        <router-link to="/test">
            <v-btn>
                <v-icon>mdi-test-tube</v-icon>
            </v-btn>
        </router-link>
        
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>

</style>