<template>

  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-md-12" style="text-align:left;">
                  <h4 class="card-title">Listado de donaciones</h4>
                </div>
                <div class="col-md-12">
                  <search-components
                    @searchValue="searchGrant($event)"
                  ></search-components>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <th>Donación solicitada</th>
                    <th>Nombre del donante</th>
                    <th>Direccion de entrega</th>
                    <th>Teléfono del donante</th>
                    <th>Cantidad donada</th>
                  </thead>
                  <tbody>
                    <tr v-for="grant in filterGrant" :key="grant.id">
                      <td>{{ grant.title }}</td>
                      <td>{{ grant.name }}</td>
                      <td>{{ grant.address }}</td>
                      <td>{{ grant.phone }}</td>
                      <td>{{ grant.value_grant }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card-footer">
              <pagination
                :data="grants"
                @pagination-change-page="allGrant"
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
import SearchComponents from "@/components/SearchComponents.vue";

export default {
  name: "AyudasView",
  components: {
    SearchComponents,
    pagination,
  },

  data() {
    return {
      grants: {},
      name: "",
      address: "",
      phone: "",
      value_grant: "",
      title: "",
      url: "http://localhost:8000/api",
      search: "",
    };
  },

  mounted() {
    this.allGrant();
  },

  computed: {
    filterGrant() {
      if (this.search == "") {
        return this.grants.data;
      } else {
        return this.grants.data.filter((grant) => {
          return (
            grant.name.toLowerCase().indexOf(this.search.toLowerCase()) !==
              -1 ||
            grant.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          );
        });
      }
    },
  },

  methods: {
    allGrant(page = 1) {
      axios.get(this.url + "/Grant?page=" + page).then((response) => {
        this.grants = response.data;
        console.log(this.grants);
      });
    },

    searchGrant(searchInput) {
      this.search = searchInput;
    },
  },
};
</script>

<style>
.header-inicio {
  width: 100%;
  height: 400px;
  background-image: url("/public/img/10.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.header-inicio-content {
  padding: 10%;
  color: #fff;
  text-align: center;
}
.header-inicio-content h1 {
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "san serif";
}

.section-one {
  margin: 5%;
  text-align: left;
  word-wrap: break-word;
}
.section-one img {
  width: 80%;
  height: 80%;
  border-radius: 10px;
}
.section-one .paragraph {
  font-size: 17px;
  font-weight: 400;
  font-family: "san serif";
  margin-top: 20px;
  margin-right: 20px;
}
.section-two {
  display: flex;
}
.section-two ul {
  list-style: none;
}
.section-two ul li {
  display: inline-block;
  margin: 50px auto auto auto;
}
.section-two ul li img {
  width: 210px;
  height: 180px;
  border: none;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  font-family: "Arial";
  margin: 45px auto 30px auto;
}
.about .title {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Arial";
  margin: 25px auto 5px auto;
}
.about .paragraph {
  font-weight: 400;
  font-family: "Arial";
}
.about .row {
  margin: 10px;
}
.about .row .col-md-6 {
  border: none;
  padding: 10px;
  box-shadow: 0px 1px 0px 1px #ccc;
}

.footer {
  margin-top: 15%;
  text-align: left;
  background-color: #000;
  color: white;
  padding: 20px;
}
.footer ul {
  list-style: disc;
}
.footer ul li {
  margin: 10px;
}
.footer ul li a {
  color: white;
  text-decoration: none;
}
</style>