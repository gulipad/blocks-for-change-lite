<template>
  <section class="section is-centered has-text-centered">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-two-thirds has-text-centered">
          <div data-aos="fade-in"  class="content">
            <h2 class="title-serif is-size-1">Change the <span class="is-text-highlight">world.</span> <br>One tab at a time 🤗🌍</h2>
            <p class="hello has-text-grey is-size-5"> We are on a mission to change the way charitable donations are made. By clicking this button, your computer will use its spare power to generate real funds for projects that <span class="shadow is-turquoise">matter</span>.</p>
          </div>
          <br>
          <div data-aos="fade-up"> <!-- Dirty trick so that fade works -->
            <div class="button is-large is-primary donation-button"
              @click="startMiner">
              START DONATING
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      startMiner: function () {
        this.$buefy.snackbar.open({
            message: 'This project was released in the early stages of JavaScript mining. Unfortunately, this practice has been banned by most antiviruses and browsers due to other projects using it unfairly. This is now for demo purposes only.',
            type: 'is-warning',
            position: 'is-top-right',
            actionText: 'OK',
            indefinite: true
        })
        this.$store.dispatch('startMiner')
      }
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

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 #00d1b2a6;
    box-shadow: inset 0 -6px 0 #00d1b2a6;
  }

  .button.donation-button {
    background-color: rgba(0, 209, 178, 0.8);
    font-weight: bold;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;  
    -webkit-transition-property: transform;
    transition-property: all;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .donation-button:hover {
    background-color: rgba(0, 209, 178, 0.8);
    box-shadow: 0 3px 15px rgba(10, 10, 10, 0.2);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }


</style>