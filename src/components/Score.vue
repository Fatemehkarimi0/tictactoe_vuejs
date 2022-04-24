<template>
  <li class="game">
    <div class="game__winner">
      <span>Winner: <strong>{{ game.winnerName }}</strong></span>
    </div>
    <div class="game__cta ">

    </div>
  </li>
</template>

<script>
export default {
  name: 'Score',
  data() {
    return {
      winnersLocal : ''
    }
  },
  props: {
    game: {
      type: Object,
      required: true,
    },
    
  },
  // mounted() {
  //   if(localStorage())

  // },
  computed: {
    // isGoldenWin() {
    //   return this.game.isGoldenWin;
    // }
  }
}
</script>
