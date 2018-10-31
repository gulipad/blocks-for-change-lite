<template>
  <section class="section is-header">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <div class="navbar-item logo">
            <h1 class="nav-title is-size-5">Blocks for Change</h1>
            <p class="is-lite">lite</p>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button" @click="activateHowItWorks">How it works</a>
            </div>
            <div class="navbar-item">
              <a class="button" @click="activateCharities">Charities</a>
            </div>
            <div class="navbar-item">
              <a class="is-brand" href="https://github.com/gulipad" target="_blank" rel="nofollow">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </a>
            </div>
            <div class="navbar-item">
              <a class="is-brand" href="https://medium.com/helloleia" target="_blank" rel="nofollow">
                <font-awesome-icon :icon="['fab', 'medium-m']"/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Modal goes here because why not -->
    <b-modal :active.sync="isHowItWorksActive" :width="720" scroll="keep">
      <div class="box has-text-centered">
        <div class="content has-text-centered">
          <h2>We turn computer power into real <span class="is-text-highlight">funds</span></h2>
        </div>
        <br>
        <div class="content">
          <p>While you stay in this page, your web browser uses your computing power to solve mathematical algorithms: this is called mining. This generates a cryptocurrency that we can later trade for real funds.</p>
          <br>
          <div class="columns">
            <div class="column">
              <p class="is-size-1">💻</p>
            </div>
            <div class="column">
              <p class="is-size-1">→</p>
            </div>
            <div class="column">
              <p class="is-size-1">💰</p>
            </div>
            <div class="column">
              <p class="is-size-1">→</p>
            </div>
            <div class="column">
              <p class="is-size-1">👐</p>
            </div>
          </div>
          <br>
          <p> We then donate these funds to charity. 100% of it. This process is not harmful to your computer, and you can turn it off at any time.</p>
        </div>
      </div>
    </b-modal>
    <!-- Modal goes here because why not -->
    <b-modal :active.sync="isCharitiesActive" :width="720" scroll="keep">
      <div class="box has-text-centered">
        <div class="content has-text-centered">
          <h2>We are looking for charities to join our <span class="is-text-highlight">cause</span></h2>
          <span class="is-size-1 has-text-grey">🙌</span>
          <p class="is-size-5 has-text-grey">If you are part of one, reach out at <b>ignaciomorenopubul@gmail.com</b></p>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        isHowItWorksActive: false,
        isCharitiesActive: false
      }
    },
    methods: {
      activateHowItWorks: function () {
        this.isHowItWorksActive = true
      },
      activateCharities: function () {
        this.isCharitiesActive = true
      }
    }
  }
</script>

<style scoped>
  .is-text-highlight {
    color: #00d1b2;
  }

  .box {
    font-family: 'Roboto Mono', monospace;
  }

  .nav-title {
    font-family: 'Roboto Mono', monospace;
  }

  .is-brand {
    color: #363636;
  }

	.is-lite {
      background-color: #00d1b2a8;
      font-weight: 100;
      color: #fff;
      float: right;
      margin-left: 0.8em;
      padding: .2em .5em;
      border-radius: .3em;
      font-size: 15px!important;
      font-weight: 700;
      -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.05);
      box-shadow: 0 5px 10px 0 rgba(0,0,0,.05);
  }
</style>