<template>
  <li
    class="border rounded-xl mx-auto inline-block p-6 bg-white/30 min-w-[300px]"
  >
    <h2 @click="toggleTrueFalse">
      {{ name }} ({{ checkTrueFalse ? "True" : "False" }})
    </h2>
    <button
      class="border py-2 px-4 rounded-md bg-sky-500"
      @click="toggleDetails"
    >
      Show Details
    </button>
    <ul v-if="detailsAreVisible">
      <li @click="showHide = !showHide">Phone: {{ phoneNumber }}</li>
      <li v-if="showHide">Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    trueFalse: Boolean,
  },
  data() {
    return {
      detailsAreVisible: false,
      checkTrueFalse: this.trueFalse,
      showHide: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleTrueFalse() {
      this.checkTrueFalse = !this.checkTrueFalse;
    },
  },
};
</script>
