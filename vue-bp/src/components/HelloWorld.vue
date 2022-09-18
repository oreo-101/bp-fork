<template>
  <div>
    <NavBarTs></NavBarTs>
    <TagLineTs></TagLineTs>
    <IntroSolutionTs></IntroSolutionTs>
    <FeatureSectionTs></FeatureSectionTs>
    <TimeLineTs></TimeLineTs>
    <TheTeamTs></TheTeamTs>
    <FooterSectionTs></FooterSectionTs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarTs from "./sections/NavBar.ts.vue";
import TagLineTs from "./sections/TagLine.ts.vue";
import IntroSolutionTs from "./sections/IntroSolution.ts.vue";
import FeatureSectionTs from "./sections/FeatureSection.ts.vue";
import TimeLineTs from "./sections/TimeLine.ts.vue";
import TheTeamTs from "./sections/TheTeam.ts.vue";
import FooterSectionTs from "./sections/FooterSection.ts.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    NavBarTs,
    TagLineTs,
    IntroSolutionTs,
    FeatureSectionTs,
    TimeLineTs,
    TheTeamTs,
    FooterSectionTs,
  },
});
</script>

<style scoped lang="scss"></style>
