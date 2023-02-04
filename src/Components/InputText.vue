<template>
  <form
    action=""
    @submit.prevent="formSubmitted"
    class="grid grid-cols-1 w-96 p-10 bg-white mt-10 mx-auto rounded-xl space-y-4"
  >
    <label for="name">Name</label>
    <input class="border rounded-md" type="text" v-model="inputName" />
    <button class="border">Submit name</button>
    <button class="border" @click="$emit('delete')">Delete</button>
  </form>
</template>
<script>
export default {
  emits: ["input-name", "delete"],
  data() {
    return {
      inputName: "",
    };
  },
  methods: {
    formSubmitted() {
      this.$emit("input-name", this.inputName);
    },
  },
};
</script>
