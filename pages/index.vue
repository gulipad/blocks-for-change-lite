<template>
  <div>
    <navbar></navbar>
    <hero v-if="!$store.state.minerStarted">
    </hero>
    <mining v-if="$store.state.minerStarted"></mining>
    <custom-footer v-if="!$store.state.minerStarted"></custom-footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Mining from '~/components/Mining.vue'
import CustomFooter from '~/components/CustomFooter.vue'

export default {
  components: {
    Navbar,
    Hero,
    Mining,
    CustomFooter
  }
}
</script>

<style>

</style>

