<template>
  <div class="section-donar">
    <div class="form-post">
      <div class="container">
        <div class="row">
          <h4 class="card-title text-center">Formulario de donaciones</h4>
         
          <div class="col-md-12">
            <form action="">
              <div class="row">
                <div class="col-md-3">
                  <label for="nombre">Nombre del donante</label>
                  <input type="text" class="form-control" placeholder=""  v-model="name"/>

                </div>
                <div class="col-md-3">
                  <label for="direccion">Direccion de entrega</label>
                  <input type="text" class="form-control" placeholder="" v-model="address" />
                </div>
                <div class="col-md-3">
                  <label for="tel">Teléfono</label>
                  <input type="tel" class="form-control" placeholder="" v-model="phone" />
                </div>
                <div class="col-md-3">
                  <label for="monto">Monto:</label>
                  <input type="number" class="form-control" placeholder="" v-model="value_grant" />
                </div>
                
                <div class="form-group mt-4">
                  <button @click="saveDonation()"  class="btn btn-primary m-2">Realizar donación</button>
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "FormDonacionesComponents",
 props: {
   postId: 
    {
      type: Number,
    },
  },
  data() {
    return {
      name: "",
      address: '',
      phone: '',
      value_grant: '',
    };
  },
  mounted() {
    console.log(this.postId);
  },

  methods: {
    saveDonation() {
      this.$emit('saveDonation', this.postId, this.name, this.address, this.phone, this.value_grant);
    }
  },
};
</script>

<style>
.form-post {
  position: relative;
  top: 310px;
  border: 1px solid gray;
  padding: 20px;
  text-align: left;
}
</style>