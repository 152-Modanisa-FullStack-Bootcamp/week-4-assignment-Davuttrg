<template>
  <div class="container">
    Watching Video Id <span id="query-id">{{ $route.query.videoId }}</span>
  </div>
</template>

<script>
export default {
  name: "Watch",
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
  font-weight: 600;
}
.container > span {
  color: red;
}
</style>