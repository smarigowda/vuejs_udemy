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
      this.monsterHealth -= this.calculateDamage(3, 10);
      if(this.checkWin()) {
        return;
      }
      this.playerHealth -= this.calculateDamage(5, 15);
      this.checkWin()
    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if(confirm('You won :=) Start new Game ?')) {
          this.startGame();
        }
        this.isGameRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        if(confirm('You lost :=( Start new Game ?')) {
          this.startGame();
        }
        this.isGameRunning = false;
        return true;
      }
      return false;
    }
  }
})