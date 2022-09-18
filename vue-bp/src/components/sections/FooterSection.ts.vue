<template>
  <div class="c1">
    <div class="row">
      <div class="column">
        <div>
          <h2>
            <font-awesome-icon icon="fa-regular fa-thumbs-up" />
            BallPort
          </h2>
        </div>
        <div class="socials">
          <span
            ><font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl"
          /></span>
          <span
            ><font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl"
          /></span>
          <span
            ><font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl"
          /></span>
          <span
            ><font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl"
          /></span>
          <span
            ><font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl"
          /></span>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div class="column padding-small">
            <span class="field">Email:</span> support@ballport.com
          </div>
          <div class="column padding-small">
            <span class="field">Phone:</span> +1 0000000 000 0
          </div>
          <div class="column padding-small">
            <span class="field">Phone:</span> +1 00 0000 000 0
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="column">© BallPort all Rights Reserved</div>
      <div class="column text-align-right">Privacy Policy</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection",
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  padding: $section-padding-size $page-side-padding-size;
  background-color: $color-sec-2;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

h2 {
  margin-top: 0;
}

.socials span {
  display: inline-block;
  background-color: #ddd;
  border-radius: 100px;
  padding: 15px;
  margin-right: 20px;
}
.divider {
  margin: 4rem 0;
  border: 1px solid #ccc;
}

.padding-small {
  padding: $padding-small;
}

.field {
  color: #999;
}

.text-align-right {
  text-align: right;
}
</style>
