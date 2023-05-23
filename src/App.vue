<template>
  <v-app>
    <v-layout class="d-flex justify-center">
      <v-card width="1000">
        <v-app-bar>
          <v-app-bar-title>투스페이</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn>주문내역</v-btn>
        </v-app-bar>
        <v-main>
          <router-view/>
        </v-main>
        <v-bottom-navigation grow="true">
          <v-btn max-width="100%" to="/">
            <v-icon icon="mdi-map-marker"/>
            투스페이
          </v-btn>
        </v-bottom-navigation>
      </v-card>
    </v-layout>
  </v-app>
</template>


<script setup>
</script>