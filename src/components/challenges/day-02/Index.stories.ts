import { action } from "@storybook/addon-actions";
import { ref, watch } from "vue";
import Index from "./Index.vue";

export default {
  title: "Month-1/Week-1/Day-1: Contador com Props e Emits",
  component: Index,
  argTypes: {
    count: { control: "number" },
  },
};

export const Default = (args: any) => ({
  components: { Index },
  // setup: () => ({ args }),
  setup() {
    const count = ref(args.count);

    watch(
      () => args.count,
      (currentValue) => {
        count.value = currentValue;
      }
    );

    const increment = () => {
      count.value++;
      action("increment")();
    };

    const decrement = () => {
      count.value--;
      action("decrement")();
    };

    return {
      args: {
        ...args,
        count,
        onIncrement: increment,
        onDecrement: decrement,
      },
    };
  },
  template: `
  <h2 class="m-auto mb-4" style="width: fit-content;">V-bind</h2>
  <Index v-bind="args"/>
  <br/>
  <h2 class="m-auto mb-4" style="width: fit-content;">Props e Emit</h2>
  <Index :count="args.count" @increment="args.onIncrement" @decrement="args.onDecrement"/>`,
});

Default.args = {
  count: 0,
};
