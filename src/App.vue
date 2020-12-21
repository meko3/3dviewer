<template>
  <div>
    <div id="header">
        <router-link to="/">Home</router-link>
    </div>
    <div id="body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#header {
    height: 12vh;
    box-shadow: 1px 1px 1px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    a {
      text-decoration: none;
    }
  touch-action: none;
}
#body {
  margin-bottom: 3vh;
  touch-action: none;
}
</style>
