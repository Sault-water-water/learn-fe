
import { ref } from 'vue'
export default function () {
  let counter = ref(0);
  const increment = () => {
    counter.value += 1;
    console.log(counter);
  }
  return {
    increment,counter
  }
}                     