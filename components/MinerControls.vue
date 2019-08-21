<template>
  <div class="box">
    <div>
      <p class="is-size-5">Miner settings</p>
    </div>
    <br>
    <div class="columns is-vcentered">
      <div class="column is-two-thirds has-text-centered">
        <div class="animation-container">
          <span class="is-size-2">👩‍💻</span>
          <div v-bind:class="{'my-loader': $store.state.isMining, 'my-loader-off': !$store.state.isMining}"></div>
          <img class="image loader-image is-32x32" src="../static/img/logos/plan.jpg">
        </div>
      </div>
      <div class="column is-one-third has-text-centered">
        <div class="button is-medium is-outlined"
          v-bind:class="{'is-danger': $store.state.isMining, 'is-success': !$store.state.isMining}"
          @click="toggleMiner">
          <span>
            <font-awesome-icon v-if="$store.state.isMining" :icon="['fas', 'pause']"/>
            <font-awesome-icon v-if="!$store.state.isMining" :icon="['fas', 'play']"/>
          </span>
          &nbsp;
          <span>{{ $store.state.isMining ? 'Pause' : 'Play' }}</span>
        </div>
      </div>   
    </div>
    <div class="columns is-vcentered">
      <div class="column is-two-thirds">
        <b-switch :disabled="!$store.state.isMining" class="is-small" v-model="isHighPowerMode">
          <span class="has-text-grey">{{ isHighPowerMode ? 'High power mode on' : 'High power mode off'  }}</span>
        </b-switch>
      </div>
      <div class="column is-one-third is-pulled-right has-text-centered is-hidden-mobile  
is-hidden-tablet-only 
">
        <p class="title is-size-5">{{ hashesPerSecond }} H/s</p>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        hashesPerSecond: 0,
      }
    },
    mounted() {
      this.updateStatistics();
    },
    computed: {
      isHighPowerMode: {
        get() {
          return this.$store.state.isHighPowerMode
        },
        set (value) {
          if (value) {
            this.$store.dispatch('turnOnHighPowerMode')
          } else {
            this.$store.dispatch('turnOffHighPowerMode')
          }
        }
      },
    },
    methods: {
      toggleMiner: function () {
        if (this.$store.state.isMining) {
          if (this.$store.state.isHighPowerMode) {
            this.$store.dispatch('turnOffHighPowerMode')
          }
          this.$store.dispatch('pauseMiner')
        } else {
          this.$store.dispatch('startMiner') 
        }
      },
      updateStatistics: function () {
        setTimeout(() => {
          const multiplier = this.$store.state.isHighPowerMode ? 2 : 1
          const reseter = this.$store.state.isMining ? 1 : 0
          this.hashesPerSecond = Math.round(Math.floor(Math.random() * (10 - 7 + 1) + 7)*10)/10 * multiplier * reseter
          console.log(this.hashesPerSecond)
          this.updateStatistics();
        }, 1500);
      },

    }
  }
</script>

<style scoped>

.loader-image {
  border-radius: 3px;
  margin-left: 5px;
}

.animation-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.my-loader-off {
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
}

.my-loader {
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
}
.my-loader:before{
  display: block;
  position: absolute;
  content: "";
  left: -200px;
  width: 200px;
  height: 4px;
  background-color: #00d1b2;
  animation: loading 2s linear infinite;
}

@keyframes loading {
    from {left: -200px; width: 30%;}
    50% {width: 30%;}
    70% {width: 70%;}
    80% { left: 50%;}
    95% {left: 100%;}
    to {left: 100%;}
}

</style>