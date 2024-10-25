<script setup lang="ts">

import UserInput from '../components/ui/UserInput.vue'
import BaseBtn from "@/components/ui/BaseBtn.vue";
import BaseNote from "@/components/pages/note/BaseNote.vue";

function result(arg: any) {
  console.log(arg)
}

</script>

<template>
  <main>
    <h1>dfasfsd</h1>
    <BaseBtn title="basebtn" :func="() => 'result func'" @btnClicked="result"/>
    <UserInput type="input" inputType="email" title="input" textError="dsadas" placeholder="Введите значение"/>
    <UserInput type="area" title="area" textError="" placeholder="Введите значение"/>
    <BaseNote title="Заголовок" text="А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных."/>
  </main>
</template>
