const data = {
  title: 'The Vue js instance',
  showParagraph: false
}
const vm1 = new Vue({
  el: '#app1',
  data: data,
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
  },
  watch: {
    title: function() {
      alert('title changed: new title = ' + this.title)
    }
  }
})

console.log(vm1._data);
console.log(vm1._data === data);

setTimeout(function() {
  vm1.title = 'Changed by timer !';
  vm1.show();
}, 3000);

vm1.newProp = 'New !';
console.log(vm1);

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Second Vue instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Title is updated by vm2'
    }
  }
})
console.log(vm2);