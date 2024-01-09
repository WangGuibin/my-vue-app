<template>
  <div class="bookmark-grid">
    <div v-for="(item, index) in bookmarks" :key="index" class="bookmark-item">
      <a :href="item.link" target="_blank" class="link">
        <img :src="item.cover" alt="bookmark-cover" class="bookmark-cover" />
        <div class="bookmark-title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template> <script>
export default {
  name: "BookmarkGrid",
  props: { bookmarks: { type: Array, required: true } },
};
</script>

<style scoped>
.bookmark-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.bookmark-item {
  margin: 10px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}
.bookmark-item:hover {
  border: 1px solid red;
  border-radius: 6px;
  transform: translateY(-2px);
  box-shadow: 1px 6px 6px rgba(0, 0, 0, 0.1);
}
.bookmark-cover {
  width: 100%;
  height: 10rem;
  object-fit: contain;
  border-radius: 0.25rem;
}
.bookmark-title {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link {
  text-decoration: none;
}
</style>