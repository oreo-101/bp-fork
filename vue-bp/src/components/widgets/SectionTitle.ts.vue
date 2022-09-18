<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
div {
  color: #28508b;
  text-align: center;
  font-weight: 600;
}
</style>
