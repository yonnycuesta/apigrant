<template>
  <div class="home home-ayudas">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="d-flex">
            <card-components
              v-for="post in posts.data"
              v-bind:post="post"
              v-bind:key="post.id"
              v-bind:position="post.id"
              @buscarid="buscarid(post.id)">
            </card-components>
            </div>
            <div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
        
      <div  v-if="this.postId > 0 " class="row" style="">
        <form-donaciones-components
          :postId="postId"
          @saveDonation="newDonation"
        ></form-donaciones-components>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CardComponents from "@/components/CardComponents.vue";
import FormDonacionesComponents from "@/components/FormDonacionesComponents.vue";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
  name: "HomeView",
  components: {
    CardComponents,
    FormDonacionesComponents,
  },

  data() {
    return {
      posts: [],
      postId: 0,
      name: "",
      address: "",
      phone: "",
      value_grant: "",
      mon:0,
      url: "http://localhost:8000/api"
    };
  },

  mounted() {
    this.allPost();
  
  },

  methods: {
    allPost() {
      axios.get(this.url +"/posts").then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      });
    },
    buscarid(id) {
      axios.get("http://localhost:8000/api/posts/" + id).then((response) => {
        this.postId = response.data.id;
        this.mon = response.data.value_required;
      });
    },

    newDonation(id, value, a, b, c) {
      //this.postId = saveDonation.postId;
      this.postId = id;
      this.name = value;
      this.address = a;
      this.phone = b;
      this.value_grant = c;

      
      //console.log(this.postId, this.name, this.address, this.value_grant);
        axios.put("http://localhost:8000/api/posts/" + id + "/" +  c).then((response) => {
          console.log(response);
      });

      axios
        .post(this.url +"/Grant", {
          post_id: this.postId,
          name: this.name,
          address: this.address,
          phone: this.phone,
          value_grant: this.value_grant,
        })
        .then((response) => {
          console.log(response);
          // reset form
          this.name = "";
          this.address = "";
          this.phone = "";
          this.value_grant = "";
          this.postId = 0;
          this.allPost();
           
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se guardo Donacion con exito',
        showConfirmButton: false,
        timer: 1500
})
        })
       

     .catch(function (error) {
        console.log(error);
        Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'no es posible guardar la donacion',
  showConfirmButton: false,
  timer: 1500
})

 });
    },

    


  },
  
};
</script>

<style>
.home-ayudas {
  position: relative;
  top: -150px;
}	
</style>