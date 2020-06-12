<template>
  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2>Tareas</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Descripcion</label>
          <input
            type="text"
            id="descripcion"
            class="form-control"
            autocomplete="off"
            name="descripcion"
            v-model.trim="formData.descripcion"
            required
            :minlength="nombreChrMin"
            :maxlength="nombreChrMax"
          />
          <field-messages name="descripcion" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div
              v-if="formData.descripcion.length == nombreChrMax"
              class="alert alert-danger my-1"
            >Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            name="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreChrMin"
            :maxlength="nombreChrMax"
          />
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div
              slot="no-espacios"
              class="alert alert-danger my-1"
            >No se permiten espacios intermedios en este campo</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div
              v-if="formData.nombre.length == nombreChrMax"
              class="alert alert-danger my-1"
            >Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            autocomplete="off"
            name="email"
            v-model="formData.email"
            required
          />

          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
            <div slot="email" class="alert alert-danger my-1">Email no válido</div>
          </field-messages>
        </validate>
        <br />
        <button
          class="btn btn-success my-4"
          :disabled="formState.$invalid || enviando"
          type="submit"
        >Enviar</button>
        
      </vue-form>
        <br />
      <Http />
    
      <p>Rtas:
        1-C,
        2-C,
        3-C,
        4-B,
        5-A,
        6-B,
        7-D,
        8-D,
        9-B,
        10-B
      </p>
      <!-- <pre>{{formState}}</pre> -->
    </div>
    <br />
    <br />
    <br />
 
  </section>
</template>

<script lang="js">

import Http from './Http.vue'
import { urlPosts } from '../urls'
  export default  {
    name: 'src-components-formulario',
    props: [],
    components: {
    Http
  },
    mounted () {
    this.getTareas
    },
    data () {
      return {
      formState : {},
      formData : this.getInitialData(),
      enviando: false,
      edadMin: 18,
      edadMax: 120,
      nombreChrMin: 10,
      nombreChrMax: 50
      }
    },
   methods: {

    getInitialData() {
      return {
        descripcion: '',
        nombre: '',
        email: ''
      }
    },
    enviar() {
      this.enviando = true
      console.log(this.formData)
      
      /* ------------------------ */
      /* ENVIO DE DATOS CON AXIOS */
      /* ------------------------ */
      this.axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then( res => {
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
        this.getUsuarios()
      })
      .catch(error => {
        console.log('ERROR POST', error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
    }
  }
  

}


</script>

<style scoped lang="css">
.src-components-formulario {
}
.jumbotron {
  background-color: rgb(230, 230, 230);
  color: black;
}

hr {
  background-color: black;
}

pre {
  color: black;
}
</style>
