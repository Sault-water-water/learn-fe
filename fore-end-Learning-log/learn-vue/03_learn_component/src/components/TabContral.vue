<template>
  <div class="container">

    <template v-for="item, index in titles" :key="item">

      <div class="tab-contral-item" :class="{ active: index === currentIndex }" @click="onTabItemTap(index)">

        <!-- slot可以把数据传出 -->
        <slot :item="item" abc="111">
          <span>
            {{ item }}
          </span>
        </slot>



      </div>

    </template>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  emits: ['onTabItemTap'],
  methods: {
    onTabItemTap(index) {
      console.log(index);
      this.currentIndex = index;
      this.$emit('onTabItemTap', index)
    }
  },


  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  components: {

  }
}
</script>

<style scoped>
.container {
  display: flex;

}

.tab-contral-item {
  flex: 1;
  text-align: center;
}

.tab-contral-item.active {
  color: red;
}

.tab-contral-item.active span {
  padding: 8px;
  border-bottom: 3px solid red;
}
</style> 