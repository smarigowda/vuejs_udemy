new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false
  },
  methods: {
    startGame: function() {
      this.isGameRunning = true;
      this.monsterHealth = 100;
      this.playerHealth = 100;
    },
    attack: function() {
      let max = 10;
      let min = 3;
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.monsterHealth -= damage;

      max = 15;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.playerHealth -= damage;

    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    }
  }
})