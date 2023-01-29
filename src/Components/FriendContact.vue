<template>
  <li
    class="border rounded-xl mx-auto inline-block p-6 bg-white/30 min-w-[300px]"
  >
    <h2 @click="toggleTrueFalse">
      {{ name }} ({{ checkTrueFalse === "1" ? "True" : "False" }})
    </h2>
    <button
      class="border py-2 px-4 rounded-md bg-sky-500"
      @click="toggleDetails"
    >
      Show Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "trueFalse"],
  data() {
    return {
      detailsAreVisible: false,
      checkTrueFalse: this.trueFalse,
      friend: {
        id: "manish",
        name: "Manish Suthar",
        phone: "9999999999",
        email: "manish@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleTrueFalse() {
      if (this.checkTrueFalse === "1") {
        this.checkTrueFalse = "0";
      } else {
        this.checkTrueFalse = "1";
      }
    },
  },
};
</script>
