<template>
  <div class="flex">
    <OverlayPanel>
      <template #button>
        <div @click="toggleIcon" class="p-2 border rounded-md">
          <i :class="isClicked ? 'pi pi-angle-up' : 'pi pi-angle-down'"></i>
        </div>
      </template>
      <template #body>
        <div class="">
          <h2>Saved Filter:</h2>
          <div>
            <ul class="space-y-3">
              <li
                class="flex px-3 py-2 border rounded-md"
                :class="{ 'border-indigo-500': filterApplied === index }"
                v-for="(filter, index) in filters"
                :key="index"
              >
                <span class="w-4/5" @click="isFilterClicked(index)">
                  {{ filter.name }}
                </span>
                <span class="w-1/5" @click="isFavClicked(filter)">
                  <i :class="filter.fav ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                </span>
              </li>
            </ul>
          </div></div
      ></template>
    </OverlayPanel>
    <div class="p-2 border rounded-md">{{ appliedFilter }}</div>
    <div class="flex gap-3 ml-3">
      <div v-for="item in favFilter" :key="item" class="p-2 border rounded-md">
        {{ item }}
      </div>
      <div>{{ favFilter.value }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const filters = ref([
  {
    id: 1,
    name: "filter 1",
    value: "abcdef",
    fav: false,
  },
  {
    id: 2,
    name: "filter 2",
    value: "abcdef",
    fav: false,
  },
  {
    id: 3,
    name: "filter 3",
    value: "abcdef",
    fav: false,
  },
  {
    id: 4,
    name: "filter 4",
    value: "abcdef",
    fav: false,
  },
]);
const filterApplied = ref(0);
const appliedFilter = ref(filters.value[filterApplied.value].name);
const favFilter = ref([]);
const isClicked = ref(false);
const toggleIcon = () => {
  isClicked.value = !isClicked.value;
};
const isFilterClicked = (index) => {
  filterApplied.value = index;
  appliedFilter.value = filters.value[index].name;
};
const isFavClicked = (filter) => {
  filter.fav = !filter.fav;
  if (filter.fav) {
    favFilter.value.push(filter.name);
  } else {
    favFilter.value = favFilter.value.filter((f) => f !== filter.name);
  }
};
</script>
