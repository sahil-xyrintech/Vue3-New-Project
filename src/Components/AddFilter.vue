<template>
  <form
    action=""
    class="border m-5 rounded-lg p-7 [&_label]:block"
    @submit.prevent="addFilter"
  >
    <div>
      <label for="name">name</label>
      <input
        class="border rounded-md py-1 px-3 mt-1 mb-3"
        type="text"
        id="name"
        v-model="filterName"
      />
    </div>
    <div>
      <label for="fav">Is Favorite</label>
      <select
        class="border bg-transparent rounded-md py-1 w-32 mt-1 mb-3"
        name="fav"
        id="fav"
        v-model="isFav"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
    <button class="border rounded-md py-1 px-4 bg-" type="submit">
      Submit
    </button>
    {{ isFav }}{{ filterName }}
  </form>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const filterName = ref();
const isFav = ref();
const addFilter = () => {
  return store.dispatch("setFilter", {
    name: filterName.value,
    fav: isFav.value,
  });
};
</script>
