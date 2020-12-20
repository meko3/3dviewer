<template>
    <div class="card-list">
        <Card v-for="model in models" :key="model.name">
            <p>{{model.name}}</p>
            <img :src="'models/'+model.dir+'/'+model.thumbnail+'.png'">
            <Fbx :dir="model.dir" :name="model.file" />
        </Card>
    </div>
</template>

<script lang="ts">
import Card from "../components/Card.vue";
import modelJson from "../assets/models.json";
export default {
    name: "Home",
    data() {
        return { models: modelJson.models };
    },
    components: {
        Card,
    },
}
</script>

<style lang="scss">
.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
@media screen and (max-width: 768px) {
    .card-list {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>