<template>
  <div>
    <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="상품을 검색해보세요"
    ></v-text-field>
    <v-tabs
        fixed-tabs
        center-active
    >
      <v-tab>전체</v-tab>
      <v-tab>식품</v-tab>
      <v-tab>생활</v-tab>
      <v-tab>가전</v-tab>
      <v-tab>뷰티</v-tab>
      <v-tab>패션</v-tab>
      <v-tab>반려동물</v-tab>
      <v-tab>자동차용품</v-tab>
      <v-tab>문화﹒취미</v-tab>
      <v-tab>유아동</v-tab>
      <v-tab>여행﹒숙박</v-tab>
    </v-tabs>
    <div class="d-flex flex-wrap">
      <v-card
          class="mx-auto"
          width="48%"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover="true"
        ></v-img>
        <v-card-title><span style="color: red;">63%</span> 10,900원</v-card-title>
        <v-card-text>
          <div>영양가득 명품 구운란 대란 30구(1판)</div>
          <small>21,779명 구매중</small>
        </v-card-text>
      </v-card>
      <v-card
          class="mx-auto"
          width="48%"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover="true"
        ></v-img>
        <v-card-title><span style="color: red;">63%</span> 10,900원</v-card-title>
        <v-card-text>
          <div>영양가득 명품 구운란 대란 30구(1판)</div>
          <small>21,779명 구매중</small>
        </v-card-text>
      </v-card>
      <v-card
          class="mx-auto"
          width="48%"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover="true"
        ></v-img>
        <v-card-title><span style="color: red;">63%</span> 10,900원</v-card-title>
        <v-card-text>
          <div>영양가득 명품 구운란 대란 30구(1판)</div>
          <small>21,779명 구매중</small>
        </v-card-text>
      </v-card>
      <v-card
          class="mx-auto"
          width="48%"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover="true"
        ></v-img>
        <v-card-title><span style="color: red;">63%</span> 10,900원</v-card-title>
        <v-card-text>
          <div>영양가득 명품 구운란 대란 30구(1판)</div>
          <small>21,779명 구매중</small>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script setup>
</script>