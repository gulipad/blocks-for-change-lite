import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      miner: null,
      isMining: false,
      minerStarted: false,
      isHighPowerMode: false
    }),
    mutations: {
      PAUSE_MINER (state) {
        state.miner.stop()
        state.isMining = false
        console.log('Miner stopped')
      },
      START_MINER (state) {
        if (!state.miner) {
          try {
            state.miner = new CoinHive.Anonymous('fHSt65FRrG5fpLG3bmHxhEqQpGNnHi2M', {throttle: 0.8})
          } catch (e) {
            alert('Ooops. Looks like your firewall or anti-virus is blocking our miner. Get in touch to learn how to solve this issue.')
          }
        }
        state.miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)
        state.miner.on('open', function(params) {
          state.isMining = true
          state.minerStarted = true
          console.log('Miner started')
        });
      },
      TURN_ON_HIGH_POWER_MODE (state) {
        state.isHighPowerMode = true
        state.miner.setThrottle(0.5)
        console.log(state.isHighPowerMode)
      },
      TURN_OFF_HIGH_POWER_MODE (state) {
        state.isHighPowerMode = false
        state.miner.setThrottle(0.8)
        console.log(state.isHighPowerMode)
      }
    },
    actions: {
      pauseMiner: function ({ commit, state }, data) {
        commit('PAUSE_MINER');
      },
      startMiner: function ({ commit, state }, data) {
        commit('START_MINER');
      },
      turnOnHighPowerMode: function ({ commit, state }, data) {
        commit('TURN_ON_HIGH_POWER_MODE');
      },
      turnOffHighPowerMode: function ({ commit, state }, data) {
        commit('TURN_OFF_HIGH_POWER_MODE');
      }
    }
  })
}

export default createStore
