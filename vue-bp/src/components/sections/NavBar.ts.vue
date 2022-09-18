<template>
  <div class="c1" ref="barElement">
    <div class="c2 icon">
      <!-- Icon -->
      <font-awesome-icon icon="fa-regular fa-thumbs-up" />
      BallPort
    </div>
    <div class="c2">
      <div class="c3">
        <!-- Nav bar tabs -->
        <span class="btn">
          <a href="#Home">Homie</a>
        </span>
        <span class="btn">
          <a href="#About">Abort</a>
        </span>
        <span class="btn">
          <a href="#Feature">Feather</a>
        </span>
        <span class="btn">
          <a href="#Roadmap">Roadnap</a>
        </span>
        <span class="btn">
          <a href="#Team">Teem</a>
        </span>
        <span class="btn">
          <span>Fartners</span>
        </span>
        <span class="btn">
          <a href="">Blob</a>
        </span>
      </div>
      <div class="c3">
        <span class="special-btn">
          <CButtonTs>Merchant</CButtonTs>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import CButtonTs from "../widgets/CButton.ts.vue";

export default defineComponent({
  name: "NavBar",
  components: { CButtonTs },
  setup() {
    const barElement = ref(null) as unknown as Ref<HTMLElement>;
    const onscroll = () => {
      if (window.top?.scrollY === undefined) {
        return;
      }
      if (window.top?.scrollY > barElement.value.offsetHeight) {
        // become sticky
        if (!barElement.value.classList.contains("sticky")) {
          barElement.value.classList.add("sticky");
        }
      } else {
        // not sticky
        if (window.top.scrollY < 1) {
          if (barElement.value.classList.contains("sticky")) {
            barElement.value.classList.remove("sticky");
          }
        }
      }
    };

    document.addEventListener("scroll", onscroll);
    return { barElement, onscroll };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  display: flex;
  justify-content: space-between;
  padding: $page-side-padding;
  margin: 40px 0;
}

.c2 {
  padding: $padding-small;
}

.c3 {
  display: inline-block;
}

.icon {
  font-size: 2rem;
  font-weight: bold;
}

.btn {
  text-transform: uppercase;
  padding: 0 26px;
}
a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
.btn:hover {
  cursor: pointer;
}

.btn a {
  position: relative;
}

.btn a::before {
  content: "";
  position: absolute;
  bottom: -5px;
  width: 0%;
  height: 1px;
  background-color: red;
  transition: all 0.4s;
}
.btn:hover a::before {
  width: 100%;
}

.special-btn {
  margin-left: 30px;
  text-transform: uppercase;
}

.c1 {
  transition: all 0.5s;
}
.sticky {
  // background-color: red;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: $color-bg;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
