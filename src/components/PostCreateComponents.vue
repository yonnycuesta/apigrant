<template>
  <div class="container-post">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Formulario de donaciones</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="title">Titulo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="title"
                    placeholder="Titulo"
                  />
                </div>
                <div class="form-group">
                  <label for="imagen">Url Imagen</label>
                  <input
                    type="text"
                    class="form-control"
                    id="imagen"
                    v-model="imagen"
                    placeholder="Ingrese la url de la imagen"
                  />
                </div>
                <div class="form-group">
                  <label for="value_required">Valor requerido</label>
                  <input
                    type="number"
                    class="form-control"
                    id="value_required"
                    v-model="value_required"
                    placeholder="Valor requerido"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Descripcion</label>
                  <textarea
                    class="form-control"
                    id="description"
                    v-model="description"
                    rows="3"
                  ></textarea>
                </div>
                <button @click="savePost()" class="btn btn-primary mt-4">
                  Crear
                </button>

                <button @click="updatePost()" class="btn btn-primary mt-4">
                  Actualizar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-md-12" style="text-align: left">
                  <h4 class="card-title">Listado de donaciones publicadas</h4>
                </div>
                <div class="col-md-12">
                  <search-components
                    @searchValue="searchPost($event)"
                  ></search-components>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Cantidad solicitada</th>
                    <th scope="col">Cantidad donada</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in filterPosts" :key="post.id">
                    <td scope="row">{{ post.title }}</td>
                    <td>
                      <img :src="post.imagen" alt="" class="img-fluid" />
                    </td>
                    <td scope="row">{{ post.value_required }}</td>
                    <td scope="row">{{ post.value_grant }}</td>
                    <td scope="row">{{ post.description }}</td>
                    <td>fdf</td>
                    <td>
                      <button
                        class="btn btn-primary"
                        @click="editarPost(post.id)"
                      >
                        Editar
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="deletePost(post.id)"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <pagination
                :data="posts"
                @pagination-change-page="allPost"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import pagination from "/node_modules/laravel-vue-pagination";
import Swal from "sweetalert2/dist/sweetalert2.js";
import SearchComponents from "@/components/SearchComponents.vue";

export default {
  name: "PostCreateComponents",
  components: {
    pagination,
    SearchComponents,
  },
  data() {
    return {
      posts: {},
      title: "",
      imagen: "",
      value_required: "",
      description: "",
      search: "",
      idPost: "",
      
    };
  },

  mounted() {
    this.allPost();
  },

  computed: {
    filterPosts() {
      if (this.search == "") {
        return this.posts.data;
      } else {
        return this.posts.data.filter((post) => {
          return (
            post.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
          );
        });
      }
    },
  },
  methods: {
    searchPost(valueInput) {
      this.search = valueInput;
      console.log(this.search);
    },
    allPost(page = 1) {
      axios
        .get("http://localhost:8000/api/posts?page=" + page)
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        });
    },

    savePost() {
      axios
        .post("http://localhost:8000/api/posts", {
          title: this.title,
          imagen: this.imagen,
          value_required: this.value_required,
          description: this.description,
        })
        .then((response) => {
          console.log(response);
          // reset page
          this.title = "";
          this.imagen = "";
          this.value_required = "";
          this.description = "";
          this.allPost();

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se guardo Donacion con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "no es posible guardar la donacion",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    deletePost($id) {
      axios
        .delete("http://localhost:8000/api/posts/" + $id)
        .then((response) => {
          console.log(response);
          this.allPost();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se elimino la donacion con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "no es posible eliminar la donacion",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    editarPost($id) {
      axios
        .get("http://localhost:8000/api/posts/" + $id)
        .then((response) => {
          console.log(response);
          this.title = response.data.title;
          this.imagen = response.data.imagen;
          this.value_required = response.data.value_required;
          this.description = response.data.description;
          this.idPost = response.data.id;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    updatePost() {
     
     axios.post("http://localhost:8000/api/posts/" + this.idPost, {
        title: this.title,
        imagen: this.imagen,
        value_required: this.value_required,
        description: this.description,
      })
      .then((response) => {
        console.log(response);
        this.title = "";
        this.imagen = "";
        this.value_required = "";
        this.description = "";
        this.allPost();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se actualizo la donacion con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "no es posible actualizar la donacion",
          showConfirmButton: false,
          timer: 1500,
        });
      });
     
    },
  },
};
</script>

<style>
.container-post {
  position: relative;
  top: 30px;
  width: 100%;
  height: 100%;
}
.container-post .card {
  text-align: left;
}

.form-group label {
  font-size: 1rem;
  color: rgb(51, 51, 51);
  margin: 5px;
}
</style>