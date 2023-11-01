
import { onMounted, onUnmounted, ref } from 'vue'
import throttle from '@/utils/throttle'
const clientHeight = ref(0)
const scrollTop = ref(0)
const scrollHeight = ref(0)

export default function useScroll(...callbackFns) {



  const scrollListenerHandler =throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 500) {
      console.log('到底部');
      callbackFns.forEach(fn => { 
        if (typeof fn === 'function') {
          fn();
        }
      });
    }
  }, 200, { trailing:true})

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return { clientHeight, scrollHeight, scrollTop }
}