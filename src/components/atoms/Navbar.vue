<template>
  <div id="nav" class="navbar">
    <div class="container">
        <span> Tic Tac Toe</span>
      <!-- <transition name="fade">
        <router-link v-if="hasGameHistory" class="router-link" to="/history">
          <span>Game history</span>
        </router-link>
      </transition> -->
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  // computed: mapState({
  //   hasGameHistory: state => state.gameHistory.length
  // })
};
</script>