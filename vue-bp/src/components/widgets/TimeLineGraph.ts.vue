<template>
  <div
    class="outter"
    @mousedown="mousedown"
    @mousemove="mousemove"
    @mouseup="mouseup"
    ref="scrollBox"
  >
    <div class="full-width">
      <div class="date-column" v-for="(date, index) in dates" :key="date.date">
        <div class="circle"></div>
        <template v-if="index % 2 == 0">
          <div class="top">
            <div class="date">{{ date.date }}</div>
          </div>
          <div class="bottom">
            <div class="v-line">.</div>
            <div class="title">{{ date.title }}</div>
          </div>
        </template>
        <template v-else>
          <div class="top">
            <div class="v-line">.</div>
            <div class="title">{{ date.title }}</div>
          </div>
          <div class="bottom">
            <div class="date">{{ date.date }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";

export type TimeLineData = {
  date: string;
  title: string;
};

export default defineComponent({
  name: "TimeLineGraph",
  props: {
    dates: {
      type: Array as PropType<TimeLineData[]>,
      required: true,
    },
  },
  setup() {
    const scrollBox: Ref<HTMLElement | null> = ref(null);
    let mouseIsDown = false;
    let lastMouseX = 0;
    const mousedown = (e: MouseEvent) => {
      mouseIsDown = true;
      lastMouseX = e.clientX;
    };
    const mousemove = (e: MouseEvent) => {
      if (mouseIsDown && scrollBox.value) {
        const amountMoved = e.clientX - lastMouseX;
        scrollBox.value.scrollBy({ left: -amountMoved });
        lastMouseX = e.clientX;
      }
    };
    const mouseup = () => {
      mouseIsDown = false;
    };
    return {
      mousedown,
      mousemove,
      mouseup,
      scrollBox,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";
.outter {
  overflow-x: scroll;
  // hide horizontal scroll bar
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  user-select: none;
}
.outter::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.full-width {
  width: max-content;
}

.date-column {
  display: inline-block;
  height: 350px;
  position: relative;

  .title {
    line-height: 2rem;
  }

  .top,
  .bottom {
    display: flex;
    height: 50%;
    padding: 30px;
  }

  .top {
    border-bottom: 1px dashed red;
    flex-direction: column-reverse;
    div {
      align-self: center;
    }
  }

  .bottom {
    flex-direction: column;
    div {
      align-self: center;
    }
  }

  .v-line {
    position: relative;
    height: 100px;
    width: 0px;
    border: 1px dashed red;
  }

  .bottom .v-line::after {
    content: "";
    position: absolute;
    bottom: 0;
    transform: translate(-50%, 0);
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: red;
  }
  .top .v-line::after {
    content: "";
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: red;
  }

  .date {
    color: $color-date;
    font-weight: bold;
  }
}

.circle {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  border: 1px solid red;
  background-color: $color-bg;
}
.circle::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background-color: red;
  z-index: -1;
}
</style>
