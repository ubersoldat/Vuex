<template>
  <section>
    <Navbar />
    <v-layout wrap mt-6 justify-center>
      <HelloWorld />
    </v-layout>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: { Navbar, HelloWorld }
};
</script>