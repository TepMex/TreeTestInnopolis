<template>
  <div id="app">
    <ValidateComponent 
      v-if="ready"
      :value="tree.value"
      :children="tree.childs"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ValidateComponent from './components/ValidateComponent'

export default {
  name: 'App',
  components: {
    ValidateComponent,
  },

  data() {
    return {
      ready: false,
      tree: null,
    };
  },

  methods: {
    async getTreeFromApi() {
      try {
        const { data } = await axios.get('http://localhost:8080/api/tree');
        this.tree = data;
        this.ready = true;
        console.log(this.tree);
      }
      catch(e) {
        console.log(e);
      }
    }
  },

  async created() {
    await this.getTreeFromApi();
  }
  
}
</script>

