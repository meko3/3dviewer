<template></template>

<script lang="ts">
export default {
    name: "Pointer",
    data() {
        const EVENT = {
            TOUCH_START: "touchstart",
            TOUCH_MOVE: "touchmove",
            TOUCH_END: "touchend"
        };
        const onMouseDownMouseX = 0;
        const onMouseDownMouseY = 0;
        const onMouseDownLon = 0;
        const onMouseDownLat = 0;
        const lon = 0;
        const lat = 0;
        const per = 0.001;
        return { 
            EVENT,
            onMouseDownMouseX,
            onMouseDownMouseY,
            onMouseDownLon,
            onMouseDownLat,
            lon,
            lat,
            per,
        };
    },
    methods: {
        initEventListener() {
            this.$parent?.$el.addEventListener(this.EVENT.TOUCH_START, this.onDocumentMouseDown, false);
        },
        onDocumentMouseDown(event: MouseEvent | TouchEvent) {
            event.preventDefault();
            if (event instanceof MouseEvent) {
                this.onMouseDownMouseX = event.clientX;
                this.onMouseDownMouseY = event.clientY;
            } else if (event instanceof TouchEvent) {
                if (event.touches) {
                    this.onMouseDownMouseX = event.touches[0].clientX;
                    this.onMouseDownMouseY = event.touches[0].clientY;
                } else {
                    this.onMouseDownMouseX = event.changedTouches[0].clientX;
                    this.onMouseDownMouseY = event.changedTouches[0].clientY;
                    this.$parent?.$el.getElementById("header")?.setAttribute("style", "background: #F0C93F");
                }
            }
            this.onMouseDownLon = this.lon;
            this.onMouseDownLat = this.lat;
            this.$parent?.$el.addEventListener(this.EVENT.TOUCH_MOVE, this.onDocumentMouseMove, false);
            this.$parent?.$el.addEventListener(this.EVENT.TOUCH_END, this.onDocumentMouseUp, false);
        },
        onDocumentMouseMove(event: MouseEvent | TouchEvent) {
            event.preventDefault();
            let touchClientX, touchClientY;
            if (event instanceof MouseEvent) {
                touchClientX = event.clientX;
                touchClientY = event.clientY;
            } else if (event instanceof TouchEvent) {
                if (event.touches) {
                    touchClientX = event.touches[0].clientX;
                    touchClientY = event.touches[0].clientY;
                } else {
                    touchClientX = event.changedTouches[0].clientX;
                    touchClientY = event.changedTouches[0].clientY;
                }
            }
            this.lon = ( touchClientX - this.onMouseDownMouseX ) * this.per + this.onMouseDownLon;
            this.lat = ( touchClientY - this.onMouseDownMouseY ) * this.per + this.onMouseDownLat;
            if (!isNaN(this.lon) && !isNaN(this.lat)) {
                this.$emit("lon", this.lon);
                this.$emit("lat", this.lat);
            }
        },
        onDocumentMouseUp(event: MouseEvent | TouchEvent) {
            this.$parent?.$el.removeEventListener(this.EVENT.TOUCH_MOVE, this.onDocumentMouseMove, false);
            this.$parent?.$el.removeEventListener(this.EVENT.TOUCH_END, this.onDocumentMouseUp, false);
            this.lon = 0;
            this.lat = 0;
            if (!isNaN(this.lon) && !isNaN(this.lat)) {
                this.$emit("lon", this.lon);
                this.$emit("lat", this.lat);
            }
        },
    },
    mounted() {
        if ("ontouchstart" in window) {
            this.EVENT = {
                TOUCH_START: "touchstart",
                TOUCH_MOVE: "touchmove",
                TOUCH_END: "touchend"
            };
        } else {
            this.EVENT = {
                TOUCH_START: "mousedown",
                TOUCH_MOVE: "mousemove",
                TOUCH_END: "mouseup"
            }
        }
        this.initEventListener();
    }
}
</script>