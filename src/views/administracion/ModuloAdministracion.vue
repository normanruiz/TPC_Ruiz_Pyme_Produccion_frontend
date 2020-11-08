<template lang="html">
  <div class="">
    <BarraNavegacion> </BarraNavegacion>
    <Botonera></Botonera>
  </div>
</template>

<script>
  import BarraNavegacion from '@/components/administracion/BarraNavegacion.vue'
  import Botonera from '@/components/administracion/Botonera.vue'
  export default {
    name: 'Administracion',
    components: {
      BarraNavegacion,
      Botonera
    }
  }
</script>

<style lang="css" scoped>
</style>
