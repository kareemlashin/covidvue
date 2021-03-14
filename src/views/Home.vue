<template>
  <div :dir="dir">
    <div  v-if="load">
         <Loading />

</div>


    <Nav @dir="dir=$event"/>
    <Header />
    <Egypt />
    <World />
    <Symptoms />
    <Table />
    <Rules />

  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "./../components/Loading.vue";
import Egypt from "./../components/Egypt.vue";
import Header from "./../components/Header.vue";
import Nav from "./../components/Nav.vue";
import Rules from "./../components/Rules.vue";
import Symptoms from "./../components/Symptoms.vue";
import World from "./../components/World.vue";
import Table from "./../components/Table.vue";
export default {
  name: 'Home',
  components: {
    Table,World,Symptoms,Rules,Nav,Header,Egypt,Loading
  },
  data() {
    return {
      dir:''
    }
  },
  mounted(){
    this.dir=localStorage.getItem('dir')||'ltr';
      this.$i18n.locale = localStorage.getItem('dir')=='ltr'?'en':'ar';
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchEgypt");
    this.$store.dispatch("fetchWorld");
  },computed: {
      
    load() {

      return this.$store.getters.loading;
    },
  }
}
</script>
