<template lang="html">

  <div class="container">

  <div class="row">
    <div class="col-sm-12">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand btn btn-outline-info" href="#">Mis detalles</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link" href="#">Usuario</span>
          </li>
          <li class="nav-item">
            <span class="nav-link" href="#">Perfil</span>
          </li>
          <li class="nav-item">
            <router-link to="/Portafolios" class="btn btn-outline-info form-control">Desconectarse</router-link>
          </li>
        </ul>
      </div>
    </nav>
      </div>
    </div>
  </div>

  <div class="row container">

  <div class="row container">
    <div class="col-sm-3">
      1
    </div>
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">
      2
    </div>
  </div>

  <div class="row container">
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">
      <router-link to="/Administracion/" class="btn btn-outline-info form-control">Madulo Admnistracion</router-link>
    </div>
    <div class="col-sm-3">
      <router-link to="/Stock/Articulos" class="btn btn-outline-info form-control">Modulo Stock</router-link>
    </div>
    <div class="col-sm-3">

    </div>
  </div>
  <div class="row container">
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">
      <router-link to="/Produccion" class="btn btn-outline-info form-control">Modulo Produccion</router-link>
    </div>
    <div class="col-sm-3">
      <router-link to="/Compras/OrdenCompa" class="btn btn-outline-info form-control">Modulo Compras</router-link>
    </div>
    <div class="col-sm-3">

    </div>
  </div>
  <div class="row container">
    <div class="col-sm-3">
      7
    </div>
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">
      8
    </div>
  </div>

</div>

</div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
