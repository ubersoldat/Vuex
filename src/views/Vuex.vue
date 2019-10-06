<template>
  <section>
    <Navbar />
    <v-layout wrap ma-6 justify-center>
      <v-flex md12 px-2>
        <h1>Numero de Compras: {{ comprasTotales }}</h1>
        <h1>Costo Total: ${{ precioFormat(costosTotales) }}</h1>
        <h1>Promedio: ${{ precioFormat(promedio) }}</h1>
        <h1>Paises Favoritos: {{ cantidadLikes }}</h1>
        <v-btn @click="reset()">
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn rounded color="primary" dark>Paises con like</v-btn>
      </v-flex>
      <v-flex v-for="(pais, index) in paises" :key="index" sm3 xs12 px-2 mb-5>
        <v-card class="mx-auto">
          <v-img class="white--text" height="180px" v-bind:src="pais.flag" />
          <v-card-title>{{ pais.name }}</v-card-title>
          <v-card-text>
            <div class="subtitle-1">Capital: {{ pais.capital }}</div>
            <div class="subtitle-1">Precio: ${{ precioFormat(pais.population) }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :color="saveLikes[index] ? 'red' : 'default'"
              icon
              @click="like(saveLikes[index], index)"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn outlined @click="comprar(pais.population)">Comprar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  // data: () => ({
  //   // likes: [],
  //   saveLikes: this.$store.state.arregloLikes
  // }),
  data () {
    return {
      saveLikes: this.$store.state.arregloLikes
    };
  },
  computed: {
    // Getters
    comprasTotales() {
      return this.$store.state.compras;
    },
    costosTotales() {
      return this.$store.state.costos;
    },
    paises() {
      return this.$store.state.paises;
    },
    cantidadLikes() {
      return this.$store.state.likes;
    },
    promedio() {
      return this.$store.getters.promedio;
    }
  },
  watch: {
    // Watch creado con el objetivo de que cada país tengo un like asociado
    paises: function() {
      this.paises.forEach(pais => {
        saveLikes.push(false);
      });
    }
  },
  created() {
    // Se crea un action con el objetivo de obtener los países
    // (Consumir la API)
    this.$store.dispatch("getAllCountries");
  },
  methods: {
    // Método para cambiar el formato del precio mostrado en la vista
    // (Población de la respuesta obtenida de la API)
    precioFormat(population) {
      return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Método que realiza un commit (mutation) con el objetivo de aumentar o
    // disminuir la cantidad de likes según el estado del objeto al cual se le dio like
    like(estado, index) {
      this.saveLikes[index] = !estado;
      let like = this.saveLikes[index];
      this.$store.commit("setLikes", { like });
    },
    // Método que realiza un commit (mutation) con el objetivo de resetear los valores de los state 
    reset() {
      this.$store.commit("resetValues");
    },

    // Método que realiza un commit para aumentar el contador de compras y
    // asignar el precio a la variable state.costos creada y llamada en el mutation nuevaCompra
    comprar(precio) {
      this.$store.commit("nuevaCompra", { precio });
    }
  }
};
</script>

