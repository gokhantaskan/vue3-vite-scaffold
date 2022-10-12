<script lang="ts">
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NotFoundView",
  setup() {
    return () => (
      h("div", { class: "h-screen w-screen flex flex-col items-center justify-center" }, [
        h("h1", { class: "text-xl font-medium mb-4" }, "404 | Not Found"),
        h(RouterLink, { to: "/", class: "text-yellow hover:underline" }, "Return home"),
      ])
    );
  },
});
</script>
