<template>
  <div class="page-game">
    <div class="container">
<Score v-for="(game, index) in games" 
              :key="index" 
              :game="game"
        />
    </div>
     

    <Cells :positions="positions" />
    <div class="container">

      <div class="row">
        <div class="col">
          <h3 class="footer__player ">
            <span v-if="winner">
              <strong>{{ getWinnerName }}</strong> wins!
            </span>
            <span v-else-if="!winner && hasEmptyCells">{{ getPlayerName }} plays!</span>
            <span v-else>Draw!</span>
          </h3>
        </div>
        <div class="col">
          <div class="text--right">
            <transition name="bounce">
              <button
                class="btn btn--primary"
                v-if="winner || !hasEmptyCells"
                @click="$store.dispatch('newGame')">
                <span>Play again</span>
              </button>
            </transition>
          </div>
        </div>
      </div>
          </div>

  </div>
</template>

<script>
import { 
  mapState,
  mapGetters,
} from 'vuex';

import Cells from '../components/Cells.vue';
import Score from '../components/Score.vue';
export default {
  name: 'Game',
  components: {
    Cells,
    Score
  },

  computed: {
    ...mapState([
      'player',
      'winner',
      'positions',
            'gameHistory',

    ]),

    ...mapGetters([
      'getPlayerName',
      'getWinnerName',
      'hasEmptyCells',

    ]),
   
    games() {
      return this.gameHistory;
    }
  },
  
  beforeCreate() {
    document.title = 'Game';
  },
};
</script>