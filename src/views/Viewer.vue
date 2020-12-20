<template>
    <Fbx :dir="this.dir" :name="this.name" />
</template>

<script lang="ts">
import Fbx from "../components/Fbx.vue";
import modelJson from "../assets/models.json";

export default {
    name: "Home",
    data() {
        return {
            dir: "",
            name: ""
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
    }
}
</script>