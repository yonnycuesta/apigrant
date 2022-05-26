<template>
  <div>
    <div class="form-group d-flex mr-4">
      <input
        type="text"
        class="form-control"
        id="searchInput"
        v-model="searchInput"
        placeholder="Ingrese el parametro de busqueda"
      />
      <button @click="searchValue()" class="btn btn-search btn-primary">Buscar</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "SearchComponents",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    searchValue() {
      this.$emit("searchValue", this.searchInput);
    },
  },
};
</script>
