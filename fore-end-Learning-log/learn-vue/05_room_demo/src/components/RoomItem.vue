<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    defaults: () => { }
  }
})

const titleText = computed(() => {
  return props.itemData.verify_info.messages.join(' ')
})

const titleColor = computed(() => {
  return props.itemData.verify_info.text_color
})

const bottomInfo = computed(() => {
  return {
    content: props.itemData.bottom_info.content,
    style: {
      color: props.itemData.bottom_info.content_color,
      fontSize: props.itemData.bottom_info.font_size +'px'
    }
  }
})
</script>


<template>
  <div class="item-container">
    <div class="cover">
      <img :src="itemData.picture_url">
    </div>
    <div class="info">
      <div class="detail" :style="{ color: titleColor }">
        {{ titleText }}
      </div>

      <div class="name">
        {{ itemData.name }}
      </div>

      <div class="price">
        {{ itemData.price }}
      </div>

      <div class="tag" :style="bottomInfo.style">
        {{ bottomInfo.content }}
      </div>
    </div>
  </div>
</template>
  

<style>
.item-container {
  margin: 10px 0;

  width: 32%;

  .cover img {
    width: 100%;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>