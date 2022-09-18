<template>
  <div class="c1" id="About">
    <div class="c2 centered">
      <SectionTitleTs text="WHAT IS BALLPORT"></SectionTitleTs>
      <h2>Web3 FinTech Solution</h2>
      <p>
        BallPort is a Web3 FinTech solution combining the power of frictionless,
        blockchain-based pathway for cross-border payments for consumers and
        merchants. We have built APIs to power collections, payouts, and
        currency exchanges via blockchain for individuals, small and medium
        enterprises (SMEs) and other FinTechs.
      </p>
    </div>
    <div class="c2 flex">
      <div class="c3 col-list">
        <h3>Solution for Individuals.</h3>
        <ul>
          <li>Blockchain Encryption</li>
          <li>Simple, Fast, Secure KYC Verification</li>
          <li>Blockchain/ Fiat Payments and Transfers</li>
          <li>Currency Exchange</li>
          <li>Scan to pay your Merchants</li>
        </ul>
      </div>
      <div class="c3 spacer"></div>
      <div class="c3 col-list">
        <h3>Solution for Merchants.</h3>
        <ul>
          <li>Blockchain Encryption</li>
          <li>API & SDK Integration</li>
          <li>Fiat Collections and Payouts</li>
          <li>Fiat Exchange</li>
          <li>Easy scan-to-pay checkout for customers</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitleTs from "../widgets/SectionTitle.ts.vue";

export default defineComponent({
  name: "IntroSolution",
  components: { SectionTitleTs },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  background-color: $color-sec-2;
  padding: $section-padding-size $page-side-padding-size;
}

h2 {
  margin-top: 1rem;
}
.centered {
  text-align: center;
  padding-bottom: calc($section-padding-size / 2);
  p {
    max-width: max(40%, 100px);
    margin: auto;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
}

.col-list {
  min-width: max(30%, 300px);
}

h3 {
  margin-bottom: 1rem;
}
.spacer {
  width: 20%;
}

ul {
  line-height: 2rem;
  padding-left: 0;
  list-style: none;
}

li:before {
  position: relative;
  content: "\1F95E";
  margin-right: 10px;
}
</style>
