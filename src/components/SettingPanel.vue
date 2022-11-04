<template>
    <div id="SettingPanel">
        <div class="toggleState">
            <input :checked="editor.enabled" @change="toggleState" type="checkbox" class="custom-control-input"
                id="editorState" />
            <label class="" for="editorState"> Enable edition</label>
        </div>

        <!-- <div v-if="settings" class="settings">
            <component v-for="(component, name) in settings" :key="name" :is="component" :node="selectedNode">
            </component>
            <button class="btn" v-if="selectedNode" @click="removeElement">Delete</button>
        </div> -->

        <div v-if="settings" class="wrapper">
            <ul>
                <li v-for="(component, name) in settings" :key="name">
                    <input type="checkbox" id="list-item-1">
                    <label for="list-item-1" class="first">
                        <p>
                            {{component.name}}
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </label>
                    <ul>
                        <li>
                            <component :is="component" :node="selectedNode" />
                            <!-- <component v-for="(component, name) in settings" :key="name" :is="component"
                                :node="selectedNode">
                            </component> -->

                        </li>
                    </ul>
                </li>
            </ul>
            <button v-if="selectedNode" @click="removeElement">Delete</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SettingPanel',

    inject: ['editor'],

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

        toggleState() {
            if (this.editor.enabled) {
                this.editor.disable();
            } else {
                this.editor.enable();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
$colorBg_panels: #2f2f2f;
$colorForward_panels: #f0f0f0;
$boxShadow_main: 0px 20px 18px -10px rgba(0, 0, 0, 0.75);
$boxShadow_minorOpacity: 0px 20px 18px -10px rgba(0, 0, 0, 0.35);

#SettingPanel {
    background-color: $colorBg_panels;
    color: $colorForward_panels;
    display: flex;
    flex-direction: column;
    min-width: 20vw;

    .toggleState {
        padding: 1rem;
        color: $colorBg_panels;
        font-weight: bold;
        background-color: $colorForward_panels;
        box-shadow: $boxShadow_main;
        margin-bottom: 2rem;
    }

    .settings {
        padding: 1rem;

        component {
            background-color: 2rem;
        }
    }

    .wrapper {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            label {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                padding: 1rem;
                // border: 1px solid #fff;
                box-shadow: $boxShadow_minorOpacity;
                border-bottom: none;
                transition: ease-in-out 0.25s;

                &:hover {
                    background: $colorForward_panels;
                    color: $colorBg_panels;
                    font-weight: bold;
                }
            }

            ul {
                li {
                    padding: 10px;
                    background: $colorForward_panels;
                    color: $colorBg_panels;
                    border: 1px solid #fff;
                    transition: ease-in-out 0.25s;

                    &:hover {
                        background-color: $colorBg_panels;
                        color: $colorForward_panels;
                        font-weight: bold;
                        cursor: crosshair;
                    }
                }
            }


            input[type="checkbox"] {
                position: absolute;
                opacity: 0;
            }

            input[type="checkbox"]~ul {
                height: 0;
                transform: scaleY(0);
            }

            input[type="checkbox"]:checked~ul {
                height: 100%;
                transform-origin: top;
                transition: transform .2s ease-out;
                transform: scaleY(1);
            }

            input[type="checkbox"]:checked+label {
                background: #26C281;
                // border-bottom: 1px solid #fff;
            }
        }

        button {
            position: sticky;
            margin-top: 2rem;
            width: 10rem;
            border-radius: 2rem;
            border: none;
            padding: 0.65rem;
            background-color: #f94f4f;
            color: #fff;
            transition: ease-in-out 0.25s;

            &:hover {
                filter: brightness(1.50);
                cursor: pointer;
            }


        }
    }



}
</style>