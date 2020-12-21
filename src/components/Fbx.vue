<template>
  <Renderer ref="renderer">
    <Pointer @lon="onLon" @lat="onLat" />
    <Camera :position="{ z: 10 }" />
    <Scene id="scene">
      <PointLight :position="{ y: 50, z: 50 }" />
        <slot />
    </Scene>
  </Renderer>
</template>

<script lang="ts">
import Pointer from "../components/Pointer.vue";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Vector3 } from "three";
export default {
  name: 'Fbx',
  props: ["dir", "name"],
  data() {
    const lon = 0;
    const lat = 0;
    return { lon, lat };
  },
  methods: {
    onLon(event) {
      this.lon = event;
    },
    onLat(event) {
      this.lat = event;
    },
  },
  updated() {
    const renderer = this.$refs.renderer;
    const loader = new FBXLoader();
    loader.load(`models/${this.dir}/${this.name}`, (object) => {
      object.scale.set(0.05, 0.05, 0.05);
      renderer.three.scene.add(object);
      renderer.onBeforeRender(() => {
        object.rotation.x += this.lat;
        object.rotation.y += this.lon;
      });
    });
  },
  components: {
    Pointer,
  }
}
</script>


<style>
/* #scene {
  touch-action: pinch-zoom;
} */
</style>