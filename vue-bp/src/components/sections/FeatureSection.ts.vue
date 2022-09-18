<template>
  <div class="c1" id="Feature">
    <SectionTitleTs text="BALLPORT FEATURES"></SectionTitleTs>
    <h2>For Individuals</h2>
    <div class="c2">
      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Safe & Secure</h3>
        <p>
          User data is encrypted using a mutating encryption algorithm and never
          shared. Wallet payments are powered by Algorand. ALL transactions are
          final.
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Simple & Secure KYC</h3>
        <p>
          Backed by Filecoin, we provide a secure easy-to-use UI to perform KYC
          ID and Biometrics verification. The process takes minutes...Scan,
          Smile, Send
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Low Cost P2P Payments</h3>
        <p>
          As low as 0.5% in fees, you can complete payments to local mobile
          wallets and banks. BallPort to BallPort wallet transfers are FREE!
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Merchant Payments</h3>
        <p>
          With just a scan of QR code, you can use any currency to make secure
          payments to your merchants.
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Direct Deposit</h3>
        <p>
          You can send money to your personal checking account or families',
          friends', business partners' bank account across borders.
        </p>
      </div>
    </div>

    <h2>For Merchants</h2>
    <div class="c2">
      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Safe & Secure</h3>
        <p>
          Data is encrypted using a mutating encryption algorithm and never
          shared. Payments are powered by Algorand. ALL transactions are final.
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Simple Integration</h3>
        <p>
          We provide a modern, trusted blockchain powered API as a solution to
          collections, payouts, and exchanges via blockchain for SMEs and other
          FinTechs.
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Merchant Dashboard</h3>
        <p>
          Generate reports, download payment history, Initiate payment, share
          payment links to your customers from our Dashboard.
        </p>
      </div>

      <div class="c3">
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-thumbs-up"
          size="2xl"
        />
        <h3>Multi-currency Collection</h3>
        <p>
          With our blockchain powered API, you can collect funds in any
          currency. Don't lose value for what you sweat for.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitleTs from "../widgets/SectionTitle.ts.vue";

export default defineComponent({
  name: "FeatureSection",
  components: { SectionTitleTs },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";

.c1 {
  padding: $section-padding-size $page-side-padding-size;
  text-align: center;
  background-color: $color-sec-1;
}

h2 {
  margin-top: 1rem;
}

h3 {
  margin-bottom: 0;
}

.c2 {
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
}
.icon {
  // transform: scale(4, 4);
  color: red;
}
.c3 {
  display: inline-block;
  padding: $padding-small;
  margin-bottom: 2rem;
  p {
    width: 80%;
    margin-top: 0;
  }
}
</style>
