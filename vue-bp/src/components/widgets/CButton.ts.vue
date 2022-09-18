<template>
  <button class="button" @click="emit()">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CButton",
  props: {
    disabled: {
      type: Boolean,
    },
  },
  setup(props, ctx) {
    const emit = () => {
      ctx.emit("click");
    };
    return {
      emit,
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  padding: 9px;
  display: inline-block;
  background-color: #28508b;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  line-height: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.button:hover {
  cursor: pointer;
}
</style>
