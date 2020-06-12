<template>
  <section class="src-components-http">
    <div class="jumbotron mt-3">
       <h2>Tareas </h2>
       <br />
       <br />
      <div v-if="this.$store.state.tareas.length ==0">No hay Tareas</div>
      <div v-else>
        <table class="table">
          <thead>
            <tr>
              <th class="text-white">Descripcion</th>
              <th class="text-white">Nombre</th>
              <th class="text-white">Email</th>
              <th class="text-white">Creada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tarea, index) in this.$store.state.tareas" :key="index">
              <!-- <td class="text-white" scope="row">{{ tarea.id }}</td> -->
              <td class="text-white">{{tarea.descripcion |pasarAminuscula |pasarMayus }}</td>
              <td class="text-white">{{tarea.nombre |pasarAminuscula |pasarMayus}}</td>
              <td class="text-white">{{tarea.email}}</td>
              <td class="text-white">{{tarea.creada |formatDate}}</td>
              <td class="text-white"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>


<script lang="js">

  import { urlTareas } from '../urls'
   export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
     this.getTareas()
    },
    created(){
    this.getUsuarios()
    },
    updated(){
    this.getUsuarios()
    },
    data () {
      return {
  
      }
    },
    methods: {
        getTareas() {
        this.axios(urlTareas)
        .then( res => {
          this.$store.dispatch('getTareas',res.data)
          console.log(res.data)
    /*       this.usuarios = res.data */
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      }
    },
    computed: {
    }
}

</script>

<style scoped lang="css">
.src-components-http {
}

.jumbotron {
  background-color: rgb(33, 35, 62);
  color: rgb(153, 153, 153);
}

hr {
  background-color: white;
}

</style>