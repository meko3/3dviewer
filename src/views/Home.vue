<template>
    <div class="home">
        <div class="card-list">
            <Card v-for="model in models" :key="model.id">
                <router-link :to="'/viewer?id='+model.id">
                    <p>{{model.name}}</p>
                    <div class="image">
                        <img :src="'models/'+model.dir+'/'+model.thumbnail" />
                    </div>
                </router-link>
            </Card>
        </div>
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
.home {
  margin-top: 3vh;
}
.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .image img {
        width: 100%;
        max-width: 300px;
    }
}
@media screen and (max-width: 768px) {
    .card-list {
        display: flex;
        flex-wrap: wrap;
        a {
            text-decoration: none;
            color: #333;
        }
    }
}
</style>