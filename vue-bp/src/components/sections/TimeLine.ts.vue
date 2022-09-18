<template>
  <div class="c1 centered" id="Roadmap">
    <SectionTitleTs text="ROADNAP"></SectionTitleTs>
    <h2>The Timeline</h2>
    <p>
      We are emerging as a global leader in delivering world-class FinTech
      solutions since 2020, the year BallPort was founded.
    </p>

    <div class="c2">
      <TimeLineGraphTs :dates="dates"></TimeLineGraphTs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitleTs from "../widgets/SectionTitle.ts.vue";
import TimeLineGraphTs, { TimeLineData } from "../widgets/TimeLineGraph.ts.vue";

export default defineComponent({
  name: "TimeLine",
  components: { SectionTitleTs, TimeLineGraphTs },
  setup() {
    const dates: TimeLineData[] = [
      { date: "Janurary 2020", title: "BallPort was founded" },
      { date: "June 2020", title: "Website Development" },
      { date: "July 2020", title: "Peer to peer product development" },
      { date: "November 2020", title: "Beta release and testing" },
      { date: "December 2020", title: "Multi-wallet development" },
      { date: "March 2021", title: "App release" },
      { date: "August 2021", title: "Algorand Blockchain Accelerator" },
      { date: "March 2022", title: "Techstars Seattle Accelarator" },
      { date: "June 2022", title: "Fundraising" },
      {
        date: "September 2022",
        title: "Forming strategic partnerships to grow",
      },
    ];
    return { dates };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  background-color: $color-sec-2;
  padding: $section-padding-size $page-side-padding-size;
}
.centered {
  text-align: center;
  padding-bottom: calc($section-padding-size / 2);
  p {
    max-width: max(40%, 100px);
    margin: auto;
  }
  h2 {
    margin-top: 1rem;
  }
}
</style>
