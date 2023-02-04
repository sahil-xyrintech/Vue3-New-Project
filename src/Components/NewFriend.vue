<template>
  <form
    action=" "
    @submit.prevent="submitData"
    class="w-full flex justify-center mt-8"
  >
    <div
      class="bg-white px-10 pb-10 pt-5 rounded-xl border inline-block mx-auto space-y-5"
    >
      <h1 class="text-center text-lg font-semibold">Add New Friend</h1>
      <div class="flex justify-between">
        <label for="name" class="mr-2">name: </label>
        <input
          v-model="addName"
          type="text"
          id="name"
          class="border rounded-md border-blue-500"
        />
      </div>
      <div class="flex justify-between">
        <label for="Phone" class="mr-2">Phone: </label>
        <input
          v-model="addPhone"
          type="tel"
          id="Phone"
          class="border rounded-md border-blue-500"
        />
      </div>
      <div class="flex justify-between">
        <label for="email" class="mr-2">Email: </label>
        <input
          v-model="addEmail"
          type="email"
          id="email"
          class="border rounded-md border-blue-500"
        />
      </div>
      <button
        type="submit"
        class="border bg-cyan-400 w-full text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 rounded-md delay-75 duration-150 transition ease-linear py-1.5 px-4 hover:bg-white"
      >
        Add Friend
      </button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      addName: "",
      addPhone: "",
      addEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.addName, this.addPhone, this.addEmail);
    },
  },
};
</script>
