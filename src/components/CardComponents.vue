<template>
  <div class="all-content">
    <div class="card-container">
      <div class="row">
        <div class="col-md-8 cards" style="">
          <div class="card" style="width: 18rem">
          <div class="card-img-top">
            <img :src="post.imagen" class="" alt="..." />
          </div>
            <div class="card-body">
              
              <h5 class="card-title" label="title">{{ post.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                cantidad :
                {{ post.value_required }}
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Donadas :
                {{ post.value_grant }}
              </h6>
              <p class="card-text">
                {{ post.description }}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  v-bind:style="{ width: valor + '%' }"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ valor }}%
                </div>
              </div>
              <br />
              <button @click="buscarid()" class="btn btn-primary">Donar</button>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponents",
  components: {},

  props: {
    post: Object,
  },
  position: { type: Number, default: -1 },
  data() {
    return {
      valor: 0,
      cambio: 0,
    };
  },

  mounted() {
    
    this.valor = (
      (this.post.value_grant / this.post.value_required) *
      100
    ).toFixed(1);
  },
  methods: {
    buscarid() {
      this.$emit("buscarid", this.position);
    
    },
  },
};
</script>

<style>
.card-container {
  position: relative;
  top: 230px;
  left: -25%;
  width: 100%;
  height: 100%;
}
.cards {
  margin: 10px;
}
.cards .card {
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 20px 0px;
  height: 590px;
}
.cards .card .card-img-top img{
  height: 200px;
  width: 100%;
}
</style>
