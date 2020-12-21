<template>
    <div id='viewer'>
        <div class="control">
            <input id="size-adjuster" name="size-adjuster" type="range" max="1.0" min="0.1" step="0.1" placeholder="0.5" />
            <div>{{this.size}}</div>
        </div>
        <Fbx :dir="this.dir" :name="this.name" :size="this.size" />
    </div>
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
            size: 0.5
        };
    },
    components: {
        Fbx,
    },
    mounted() {
        if (modelJson) {
            modelJson.models.forEach((object) => {
                if (object.id === this.$route.query.id) {
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

<style lang="scss">
.control {
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    #size-adjuster {
        width: 200px;
        touch-action: none;
    }
}
</style>