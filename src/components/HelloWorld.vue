<template>
  <v-layout wrap mt-6 justify-center>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <router-link :to="{name: 'Form'}">
          <v-btn rounded color="primary" dark>Formulario</v-btn>
        </router-link>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <router-link :to="{name: 'Paises'}">
          <v-btn rounded color="primary" dark>Paises</v-btn>
        </router-link>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <router-link :to="{name: 'Vuex'}">
          <v-btn rounded color="primary" dark>Vuex</v-btn>
        </router-link>
      </div>
    </v-col>
  </v-layout>
</template>
