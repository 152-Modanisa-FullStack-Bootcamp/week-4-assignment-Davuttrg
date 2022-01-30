<template>
  <div class="content" id="home-content">
    <Video
      :key="video.id"
      v-for="video in videos"
      :video="video"
      :data-id="video.id"
    ></Video>
  </div>
</template>

<script>
import Video from "../components/Video";
import API from "../api";
export default {
  name: "Home",
  components: { Video },
  data() {
    return {
      videos: [],
    };
  },
  async created() {
    this.videos = await API.getProductList();
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
}
</style>
