<template>
  <div class="c1" id="Team">
    <div class="c2 centered">
      <SectionTitleTs text="MEET THE TEAM"></SectionTitleTs>
      <h2>Our Team</h2>
      <p>
        BallPort's team consists of highly skilled, qualified and experienced
        professionals bringing together over 17 years of management experience
        across the IT, Retail and Financial Services sectors. Based in the US
        the Team comprises of:
      </p>
    </div>

    <div class="c2 flex">
      <div class="profile">
        <div class="c-img">
          <img src="@/assets/images/C.png" />
        </div>
        <div>
          <div class="name">CCCCC CCCCC</div>
          <div class="title">Co-founder & Chief Executive Officer</div>
          <span>
            As CEO of BallPort, Charles is responsible for the company’s
            mission, vision and strategic direction. He oversees global
            operations, organisational planning and business development.
            Charles brings over 10 years of experience in business analysis, IT
            solutions design and implementation and senior management skills to
            the business
          </span>
          <div class="more-info">
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
          </div>
        </div>
      </div>

      <div class="profile">
        <div class="c-img">
          <img src="@/assets/images/T.png" />
        </div>
        <div>
          <div class="name">TTTTT TTTTT</div>
          <div class="title">Co-founder & Chief Technology Officer</div>
          <span>
            Eric is a highly experienced full-stack engineer focusing on
            technology and innovation at BallPort. He has been involved with the
            Internet and Open Source technologies since the very early days. He
            is responsible for managing the technology resources of the company
            and developing IT strategies to achieve corporate goals and assist
            with future industry needs
          </span>
          <div class="more-info">
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
          </div>
        </div>
      </div>

      <div class="profile">
        <div class="c-img">
          <img src="@/assets/images/L.png" />
        </div>
        <div>
          <div class="name">LLLLL LLLLL</div>
          <div class="title">Co-founder & Chief Technology Officer</div>
          <span>
            Eric is a highly experienced full-stack engineer focusing on
            technology and innovation at BallPort. He has been involved with the
            Internet and Open Source technologies since the very early days. He
            is responsible for managing the technology resources of the company
            and developing IT strategies to achieve corporate goals and assist
            with future industry needs
          </span>
          <div class="more-info">
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
            <font-awesome-icon
              class="icon"
              icon="fa-regular fa-thumbs-up"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitleTs from "../widgets/SectionTitle.ts.vue";

export default defineComponent({
  name: "TheTeam",
  components: { SectionTitleTs },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  padding: $section-padding-size $page-side-padding-size;
  background-color: $color-sec-1;
  background-color: $color-sec-1;
  h2 {
    margin-top: 1rem;
  }
  p {
    max-width: max(40%, 100px);
    margin: auto;
  }
}
.centered {
  text-align: center;
  padding-bottom: calc($section-padding-size / 2);
}
.flex {
  display: flex;
}
.c2.flex {
  flex-wrap: wrap;
}

.profile {
  width: 50%;
  display: flex;
  margin-bottom: calc($section-padding-size / 2);
  padding: $padding-small;

  .name {
    color: $color-fg;
  }
  .title {
    font-weight: 800;
    font-size: 1.5rem;
    color: #999;
  }
  span {
    line-height: 1.5rem;
  }
}

.profile img {
  border-radius: 900px;
}

.c-img {
  display: flex;
  align-items: center;
  padding: $padding-small;
}

.more-info {
  padding-top: 15px;

  * {
    padding-right: 15px;
  }

  *:hover {
    cursor: pointer;
  }
}
</style>
