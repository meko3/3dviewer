<template>
  <Pointer @lon="onLon" @lat="onLat" />
  <Renderer ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene ref="scene">
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :size="1" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script lang="ts">
import Pointer from "../components/Pointer.vue";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
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
    loadObject() {
      const loader = new FBXLoader();
      loader.load(`~/models/${this.dir}/${this.name}.fbx`, (object) => {
        this.$refs.scene.add(object);
      });
    }
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += this.lat;
      box.rotation.y += this.lon;
    });
  },
  components: {
    Pointer,
  }
}
</script>
