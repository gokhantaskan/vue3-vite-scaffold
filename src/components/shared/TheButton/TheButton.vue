<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "TheButton",
  setup(_props, { slots }) {
    return () => h(
      "button",
      {
        class: "bg-emerald-500 text-white rounded px-2 py-1 shadow",
      },
      slots.default?.()
    );
  },
});
</script>