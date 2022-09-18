<template>
  <div class="c1" id="Home">
    <div class="c2">
      <h1>Delivering <span>Cross-Border</span> payment solutions</h1>
      <p>Next generation Web3 FinTech solution that aims to erase borders.</p>
      <CButtonTs>Learn More</CButtonTs>
    </div>
    <div class="c2">
      <img class="img" src="@/assets/images/BP.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CButtonTs from "../widgets/CButton.ts.vue";

export default defineComponent({
  name: "TagLine",
  components: { CButtonTs },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  display: flex;
  justify-content: space-between;
  padding: $page-side-padding;
  margin-bottom: $section-padding-size;
  margin-top: 4rem;
}

.c2 {
  width: 40%;
}

h1 {
  margin-top: 3rem;
  font-size: 3rem;
}

h1 span {
  color: #28508b;
}

.img {
  width: 100%;
  animation: floating 5s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(40px);
  }
  100% {
    transform: translateY(0px);
  }
}

.c1:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: black;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  z-index: -1;

  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/moon.jpg");
  filter: invert(100%);
  opacity: 0.2;

  background-position-y: top;
  background-position-x: right;
}
</style>
