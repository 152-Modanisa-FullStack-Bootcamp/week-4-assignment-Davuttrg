<template>
  <div class="card">
    <img
      :src="showedImage"
      @mouseover="showedImage = video.hoverImage"
      @mouseleave="showedImage = video.coverImage"
      @click="routingWatch"
      alt="Video Image"
      :class="showedImage == video.hoverImage && 'hovered'"
    />
    <div class="info">
      <div>
        <img :src="video.ownerImage" alt="" />
        <span class="material-icons add-favorites"> favorite_border </span>
        <div class="texts">
          <div class="title" id="title">{{ video.title }}</div>
          <div class="owner">{{ video.ownerName }}</div>
          <div class="counts">
            <span> {{ video.viewCount }} viewed </span>
            <span>•</span>
            <span> {{ video.publishDateInMonth }} mont ago </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: ["video", "diplayMode"],
  data() {
    return {
      showedImage: this.video.coverImage,
    };
  },
  methods: {
    routingWatch() {
      this.$router.push(`/watch?videoId=${this.video.id}`);
    },
  },
};
</script>

<style scoped>
.card {
  width: 360px;
  background: rgba(0, 0, 0, 0.03);
  position: relative;
}
.card > #video-id {
  /* display: none; */
}
.card > img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card > .info > div {
  display: flex;
  margin-top: 1em;
  gap: 20px;
  padding: 0 5px;
}
.card > .info > div > .add-favorites {
  position: absolute;
  top: 10px;
  right: 10px;
  color: darkorange;
  cursor: pointer;
}
.card > .info > div > img {
  align-self: flex-start;
  border-radius: 50%;
  width: 36px;
  height: 36px;
}
.card > .info > div > .texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 10px;
  gap: 10px;
}
.card > .info > div > .texts > div {
  text-align: start;
}
.card > .info > div > .texts > .title {
  font-size: 0.9em;
  font-weight: 600;
}
.card > .info > div > .texts > .owner {
  font-size: 0.8em;
  font-weight: 500;
}
.card > .info > div > .texts > .counts {
  display: flex;
  gap: 10px;
  font-size: 0.7em;
}
.card > .info > div > .texts > .description {
  font-size: 0.9rem;
}
</style>
