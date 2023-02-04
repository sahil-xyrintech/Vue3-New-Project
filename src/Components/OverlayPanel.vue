<template>
  <div>
    <button @click="toggle" aria-haspopup="true" aria-controls="overlay_panel">
      <slot name="button"></slot>
    </button>

    <OverlayPanel
      ref="op"
      appendTo="body"
      :showCloseIcon="true"
      id="overlay_panel"
      style="width: 450px"
      :breakpoints="{ '960px': '75vw' }"
    >
      <slot name="body"></slot>
    </OverlayPanel>
  </div>
</template>

<script>
import { ref } from "vue";
import OverlayPanel from "primevue/overlaypanel";

export default {
  components: {
    OverlayPanel,
  },
  setup() {
    const op = ref();
    const toggle = (event) => {
      op.value.toggle(event);
    };

    return { op, toggle };
  },
};
</script>
