<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <h1>Administracion de usuarios</h1>
    </div>
    <div class="row">
      <div class="col-sm-6">
        Listado de articulos
        <router-link to="/Administracion/Usuarios/Alta" class="btn btn-outline-info">Nuevo</router-link>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in Usuarios" :key="usuario.Id">
              <th scope="row">{{ usuario.Id }}</th>
              <td>{{ usuario.Nombre }}</td>
              <td>{{ usuario.Apellido }}</td>
              <td><button type="button" name="button">Detalle</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-6">
        Detalle
      </div>
    </div>
    <div class="row">
      <footer>Un pie tal vez</footer>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Usuarios: []
    }
  },
  methods:{
    CargarListaUsuarios: function(){
      fetch('https://localhost:44360/api/Usuario')
      .then((res) => res.json())
      .then((usuarios) => this.Usuarios = usuarios)
    }
  },
  mounted() {
    this.CargarListaUsuarios();
  }

}
</script>

<style lang="css" scoped>
</style>
