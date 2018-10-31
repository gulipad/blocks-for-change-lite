<template>
	<section class="section is-centered">
	  <div class="container">
	    <div class="columns is-centered">
	      <div class="column is-one-half">
	        <div data-aos="fade-in" class="content">
	          <h2 class="title-serif is-size-2"> You are <span class="is-text-highlight">mining</span> for <br><a class="is-text-ngo" href="https://plan-international.org/" target="_blank">Plan International</a> 😇</h2>
	          <p class="hello has-text-grey is-size-5"> By keeping this tab open, you are helping advance children's rights and equality for girls in over 75 countries. <a class="is-learn-more-link" href="https://plan-international.org/"><u>Learn more</u></a></p>
	        </div>
          <div data-aos="fade-up"> <!-- Dirty trick for animation to work -->
            <miner-controls></miner-controls>
          </div>
	      </div>
        <div class="column is-one-half has-text-centered">
        
        </div>
	    </div>
	  </div>
	</section>
</template>

<script>
  import MinerControls from '~/components/MinerControls.vue'

  export default {
    components: {
      MinerControls
    }
  }
</script>

<style scoped>
	section {
    font-family: 'Roboto Mono', monospace;
  }

  .is-text-highlight {
    color: #00d1b2;
  }

  .is-text-ngo {
    color: #363636;
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 #00d1b2a6;
    box-shadow: inset 0 -6px 0 #00d1b2a6;
  }
</style>