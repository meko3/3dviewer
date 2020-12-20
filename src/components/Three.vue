<template>
  <Renderer ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :size="1" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script lang="ts">
export default {
  name: 'Three',
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    if (renderer) {
      renderer.onBeforeRender(() => {
        box.rotation.x += 0.01;
      });
    }
  }
}
</script>
