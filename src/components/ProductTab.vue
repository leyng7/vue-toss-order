<template>
  <v-tabs
      v-model="tab"
      fixed-tabs
      center-active
  >
    <v-tab>전체</v-tab>
    <v-tab
        v-for="menu in menus"
        :key="menu.id"
    >
      {{ menu.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
import menus from "@/assets/api/menus.json";

export default {
  data() {
    return {
      tab: null,
      menus: menus
    }
  },
  created() {
    console.log(menus);
  },
}
</script>

<style scoped>
</style>
