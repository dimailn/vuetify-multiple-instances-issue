<template>
  <v-app>
    <v-main>
      <h1 class="display-2 font-weight-bold mb-3">
          App#2
      </h1>

      <v-text-field v-model="text" />
      id="input-0"
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App_2',

  data: () => ({
    text: 'Some other text'
  }),
}
</script>
