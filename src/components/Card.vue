<template>
    <div class="card">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Card"
}
</script>

<style>
.card {
    border: none;
    box-shadow: 2px 2px 2px gray;
    border-radius: 3px;
    padding: 2rem;
    margin: .3rem;
    background: #fff;
}
</style>