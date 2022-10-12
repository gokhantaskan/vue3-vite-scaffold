import { defineComponent } from "vue";

import { TheButton } from "@/components/shared";
import { useCounterStore } from "@/store/counter";

const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const counterStore = useCounterStore();

    return {
      counterStore,
    };
  },
  render() {
    return (
      <>
        <h1 class="text-2xl font-semibold">{this.msg}</h1>

        <div class="text-center">
          <TheButton onClick={() => this.counterStore.increment()}>
            Count is {this.counterStore.count}
          </TheButton>

          <TheButton
            class="ml-2"
            onClick={() => this.counterStore.$reset()}
          >
            Reset Count
          </TheButton>

          <p class="mt-2">Double count: {this.counterStore.doubleCount}</p>
        </div>
      </>
    );
  },
});

export default HelloWorld;
