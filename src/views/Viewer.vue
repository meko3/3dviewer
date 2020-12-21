<template>
    <input id="size-adjuster" name="size-adjuster" type="range" max="1.0" min="0.1" step="0.1" />
    <div>{{this.size}}</div>
    <Fbx :dir="this.dir" :name="this.name" :size="this.size" />
</template>

<script lang="ts">
import Fbx from "../components/Fbx.vue";
import modelJson from "../assets/models.json";

export default {
    name: "Home",
    data() {
        return {
            dir: "",
            name: "",
            size: 1
        };
    },
    components: {
        Fbx,
    },
    mounted() {
        if (modelJson) {
            modelJson.models.forEach((object) => {
                if (object.id = this.$route.query.id) {
                    this.dir = object.dir;
                    this.name = object.file;
                }
            });
        }
        document.getElementById("size-adjuster")?.addEventListener("change", (event: Event) => {
            this.size = event.target?.value;
        });
    }
}
</script>

<style>
#size-adjuster {
    touch-action: none;
}
</style>