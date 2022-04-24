<template>
  <div id="tic-tac-vue">
    <transition name="fade" mode="out-in" :duration=120>
      <div class="page-wrapper" >
        <Navbar />
        <transition name="fade" mode="out-in" :duration=120>
          <router-view />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { 
  mapState, 
} from 'vuex';

import Navbar from '../src/components/Navbar.vue';

export default {
  name: 'TicTacVue',
  components: {
    Navbar,
  },
  
  computed: {
    ...mapState([
      'gameHistory'
    ]),
   
  }
};
</script>

<style lang="scss">
@import 'src/scss/app.scss';
</style>
