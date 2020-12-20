<template>
    <div class="card-list">
        <Card />
    </div>
</template>

<script lang="ts">
import Card from "../components/Card.vue";
export default {
    name: "Home",
    components: {
        Card,
    }
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