<script setup lang="ts">
import DialogAuth from "@/components/dialog/DialogAuth.vue";
</script>

<template>
  <div class="page-home section-wrapper">
    <div class="page-home__title">
      <h1>Мои заметки</h1>
      <h3 class="slogan">Не забывай о важном, храни его в облаке.</h3>
    </div>
    <img src="@/assets/img/home-img.png" alt="" class="page-home__img">
    <DialogAuth />
  </div>
</template>

<style lang="scss">
.page-home {
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;

  &__title {
    .slogan {
      color: map-get($colors, 'gray');
      width: 400px;
    }
  }

  &__img {
    max-width: 900px;
  }
}
</style>
