<template>
    <span>
        <v-toolbar app color="orange darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up grey--text lighten-4" @click="drawer = !drawer">
                <v-icon>home</v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" v-if="loged" to="control-panel">Panel de control</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <span v-if="!loged">
                <v-btn flat class="hidden-sm-and-down" to="sign-in">Ingresar</v-btn>
                <v-btn color="orange lighten-1" class="hidden-sm-and-down" to="join">Registrarse</v-btn>
            </span>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="orange darken-2" dark disable-resize-watcher>
            <v-list>
                    <v-toolbar flat>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-title to="home" class="title">
                                    {{appTitle}}
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-list dense class="pt-0">
                        <v-list-tile v-for="(item, index) in items" :key="item.key" @click="">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-list>
        </v-navigation-drawer>

    </span>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Elsevier Tester',
            drawer: false,
            loged: false,
            items: [
                { title: 'Panel de control' },
                { title: 'Ingresar'},
                { title: 'Registrarse' },
            ],
        };
    },
});
</script>

<style scoped>

</style>
