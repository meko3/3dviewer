<template>
  <Renderer ref="renderer" id="renderer">
    <Pointer @lon="onLon" @lat="onLat" />
    <Camera :position="{ z: 10 }" />
    <Scene id="scene" background="#444444">
      <AmbientLight color="#eeeeee" :intensity="1.0" />
      <SpotLight :position="{ x: 100, y: 100, z: 100 }" :angle="Math.PI/2" color="#ffffff" :intensity="1.0" :shadowMapSize="{width: 1024, height: 1024}" />
      <SpotLight :position="{ x: -100, y: 100, z: -100 }" :angle="Math.PI/2" color="#ffffff" :intensity="1.0" :shadowMapSize="{width: 1024, height: 1024}" />
      <SpotLight :position="{ x: -100, y: 0, z: 0 }" :angle="Math.PI/2" color="#ffffff" :intensity="1.0" :shadowMapSize="{width: 1024, height: 1024}" />
        <slot />
    </Scene>
  </Renderer>
</template>

<script lang="ts">
import Pointer from "../components/Pointer.vue";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Vector3, Group, Color, MeshBasicMaterial, Mesh } from "three";
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
    if(this.group.children.length <= 0){ 
      const loader = new FBXLoader();
      loader.load(`models/${this.dir}/${this.name}`, (object) => {
        this.group.add(object);
        this.$refs.renderer.three.scene.add(toRaw(this.group));
      });
    }
  },
  mounted() {
    this.$refs.renderer.onBeforeRender(() => {
      this.group.rotation.x += this.lat;
      this.group.rotation.y += this.lon;
      this.group.scale.set(this.scale * this.per, this.scale * this.per, this.scale * this.per);
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