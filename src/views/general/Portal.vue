<template lang="html">
  <div class="container-fluid portal">
  <div class="row container-fluid contenidoPortal">
    <div class="col-sm-4 imagenPortal">
      One of three columns
    </div>
    <div class="col-sm-2 align-self-center botoneraPortal">
      <router-link to="/Login" class="btn btn-outline-info form-control">Conectarse</router-link>
      <router-link to="/Portafolios" class="btn btn-outline-info form-control">Contactarnos</router-link>
    </div>
    <div class="col-sm-4 detallePortal">
      One of three columns
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.portal{
  display: flex;
  justify-content: center;
  height: 900px;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
}

.contenidoPortal{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.imagenPortal{
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
}

.botoneraPortal{
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
}

.detallePortal{

  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
