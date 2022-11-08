<template>
    <v-app-bar app color="dark" dark>
        <div class="d-flex align-center">
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