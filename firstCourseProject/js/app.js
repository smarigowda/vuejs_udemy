new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.isGameRunning = true;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.turns = [];
    },
    attack: function() {
      const damage = this.calculateDamage(3, 10);
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + damage
      })
      this.monsterHealth -= damage;
      if(this.checkWin()) {
        return;
      }
      
      this.monsterAttacks();
    },
    specialAttack: function() {
      const damage = this.calculateDamage(10, 20);
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster hard for ' + damage
      })
      this.monsterHealth -= damage;
      if(this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    monsterAttacks: function() {
      const damage = this.calculateDamage(5, 15);
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + damage
      })
      this.playerHealth -= damage;
      this.checkWin()
    },
    heal: function() {
      if(this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      })
      this.monsterAttacks();
    },
    giveUp: function() {
      this.isGameRunning = false;
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