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

      if (this.monsterHealth <= 0) {
        alert('You won :=)');
        this.isGameRunning = false;
        return;
      }

      max = 15;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert('You lost :=(');
        this.isGameRunning = false;
      }

    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    }
  }
})