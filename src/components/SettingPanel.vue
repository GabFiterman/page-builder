<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col>
                <ToggleEditable />
            </v-col>
        </v-row>

        <div v-if="settings">
            <v-row justify="center">

                <v-expansion-panels>
                    <v-expansion-panel v-for="(component, name) in settings" :key="name">
                        <v-expansion-panel-header>
                            {{ name }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <component class="form-control" :is="component" :node="selectedNode">
                            </component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>


            </v-row>

            <v-row justify="center">
                <v-btn depressed color="error" @click="removeElement">Delete</v-btn>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import ToggleEditable from '@/components/ToggleEditable.vue';

export default {
    name: 'SettingPanel',

    inject: [
        'editor',
    ],

    components: {
        ToggleEditable,
    },

    computed: {
        selectedNode() {
            return this.editor.selectedNode;
        },

        settings() {
            if (!this.selectedNode) {
                return null;
            }

            return this.editor.getSettings(this.selectedNode);
        },
    },

    methods: {
        removeElement() {
            return this.editor.removeNode(this.selectedNode);
        },
    },
};
</script>

<style lang="scss" scoped>
.form-control {
    margin: 1rem 0.5rem;
}
</style>