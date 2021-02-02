new Vue({
  el: '#app',

  data: {
    tasks: []
  },

  created() {
    fetch('https://sheetdb.io/api/v1/3j2gdlkr6svbj')
      .then(response => response.json())
      .then(data => this.tasks = data)
  },

  methods: {
    getStatus(task) {
      if (task.Pendiente === 'x') return 'to do';
      if (task['En Progreso'] === 'x') return 'doing';
      if (task.Hecho === 'x') return 'done';
      return false;
    }
  }
})
