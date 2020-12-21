<template>
  <Renderer ref="renderer" id="renderer">
    <Pointer @lon="onLon" @lat="onLat" />
    <Camera :position="{ z: 10 }" />
    <Scene id="scene">
      <PointLight :position="{ y: 200, x: 200, z: 100 }"  />
      <PointLight :position="{ y: 200, x: -200, z: 100 }"  />
      <PointLight :position="{ y: -100, x: 100, z: 100 }"  />
        <slot />
    </Scene>
  </Renderer>
</template>

<script>
import Pointer from "../components/Pointer.vue";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Vector3, Group, Color } from "three";
import { toRaw } from 'vue';
export default {
  name: 'Fbx',
  props: ["dir", "name", "size"],
  data() {
    const lon = 0;
    const lat = 0;
    const per = 0.05;
    const scale = 0.5;
    let group = new Group();
    return { lon, lat, group, per, scale };
  },
  methods: {
    onLon(event) {
      this.lon = event;
    },
    onLat(event) {
      this.lat = event;
    },
  },
  watch: {
    size: function(newVal, oldVal) {
      if (!isNaN(newVal)) {
        this.scale = newVal;
      }
    }
  },
  updated() {
    const renderer = this.$refs.renderer;
    renderer.three.scene.background = new Color( 0x444444 );
    const loader = new FBXLoader();
    loader.load(`models/${this.dir}/${this.name}`, (object) => {
      this.group.add(object);
      renderer.three.scene.add(toRaw(this.group));
      renderer.onBeforeRender(() => {
        this.group.rotation.x += this.lat;
        this.group.rotation.y += this.lon;
        this.group.scale.set(this.scale * this.per, this.scale * this.per, this.scale * this.per);
      });
    });
  },
  components: {
    Pointer,
  }
}
</script>


<style>
#renderer {
  touch-action: none;
}
</style>