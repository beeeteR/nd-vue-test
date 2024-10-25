<script setup lang="ts">
import DialogAuth from "@/components/dialog/DialogAuth.vue";
</script>

<template>
  <div class="page-home section-wrapper">
    <div class="page-home__title">
      <h1>Мои заметки</h1>
      <h3 class="slogan">Не забывай о важном, храни его в облаке.</h3>
    </div>
    <div class="page-home__img"></div>
    <DialogAuth/>
  </div>
</template>

<style lang="scss">
.page-home {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding-top: 0;
  padding-bottom: 0;

  @media #{map-get($display-rules, 'sm')} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-height: 100vh;
    height: 100%;
    text-align: center;
  }

  &__title {
    .slogan {
      color: map-get($colors, 'gray');
      width: 400px;

      @media #{map-get($display-rules, 'sm')} {
        width: auto;
      }
    }
  }

  &__img {
    max-width: 900px;
    height: 100%;
    background-image: url("@/assets/img/home-img.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media #{map-get($display-rules, 'sm')} {
      width: 100%;
      height: 540px;
      max-height: 540px;
    }
    @media #{map-get($display-rules, 'xs')} {
      min-height: 290px;
      max-height: 320px;
    }
  }
}
</style>
