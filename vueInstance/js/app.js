new Vue({
  el: '#app1',
  data: {
    title: 'The Vue js instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The Vue js instance (Updated)')
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    title: 'Second Vue instance'
  }
})