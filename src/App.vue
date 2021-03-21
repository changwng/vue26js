<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/axiostest">Axios</router-link> |
      <router-link to="/buttontab">Button Tab Container</router-link> |
      <router-link to="/formtest">Form Test</router-link> |
      <router-link to="/slotscope">Slot Scope Test</router-link> |
      <router-link to="/mixincomp">Mix in Component Test</router-link> |
      <router-link to="/a10mixin">a10mixin</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
