<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img
            src="https://w7.pngwing.com/pngs/605/139/png-transparent-computer-icons-logo-rain-rain-cloud-logo-monochrome.png"
            alt=""
          />
        </a>
      </div>
      <div class="menu navbar-menu">
        <ul>
          <li>
            <router-link to="/inicio">
              <a href="#">Inicio</a>
            </router-link>
              
            </li>
        
            <li><a href="#">Donaciones</a></li>
          <li>
            <router-link to="/post/create">
              <a href="#">Donaciones Publicadas</a>
            </router-link>
          </li>
          <li>
            <router-link to="/ayudas">
              <a href="#">Donaciones Recibidas</a>
            </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

 <router-view />

</template>

<script>


export default {
  name: 'App',

};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 10px;
  width: 100%;
  z-index: 1;
  background-color: rgb(0, 33, 54);
}
.navbar ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
}
.navbar ul li {
  padding: 10px;
  font-size: 20px;
}
.navbar ul li a {
  text-decoration: none;
  color: #fff;
  margin-top: 25px;
}
.navbar .navbar-header {
  height: 80px;
}
.navbar .navbar-header img {
  width: 200px;
  height: 80px;
}
.navbar .navbar-brand img{

border-radius: 50px;
width: 100px;
}
.header {
  padding-top: 0%;
  text-align: center;
  font-weight: bold;
  height: 200px;
  border-bottom: 50px solid rgb(0, 33, 54);
}

.header .header-content {
  padding-top: 10%;
  padding-bottom: 10%;
  background-image: url("https://i.blogs.es/995b57/dl_u489851_004/450_1000.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: #fff;
}

.header .header-content h1 {
  font-size: 4rem;
  color: #fff;
  font-weight: bold;
}

.header .header-content a {
  color: black;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(255, 136, 0);
  border: none;
}
</style>
