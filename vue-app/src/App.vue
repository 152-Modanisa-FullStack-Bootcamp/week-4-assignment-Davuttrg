<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="../src/assets/logo.png" alt="" />
          <router-link to="/">Home</router-link>
        </div>
      </div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}
.container > .header {
  height: 70px;
  box-shadow: 0px 3px 14px -6px rgb(0 0 0 / 75%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}
.container > .header > .logo {
  display: flex;
  height: 30px;
  align-items: center;
  gap: 20px;
  font-weight: 600;
}
.container > .header > .logo > img {
  height: 100%;
}
.container > .header > .favorite-button {
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
