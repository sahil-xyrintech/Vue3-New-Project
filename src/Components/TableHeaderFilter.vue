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
                v-for="(filter, index) in showFilters"
                :key="index"
              >
                <span class="w-4/5" @click="isFilterClicked(index)">
                  {{ filter.name }}
                </span>
                <span class="w-1/5" @click="setFavFilter(index, filter.id)">
                  <i :class="filter.fav ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                </span>
              </li>
            </ul>
          </div></div
      ></template>
    </OverlayPanel>
    <!-- <div class="p-2 border rounded-md">{{ appliedFilter }}</div> -->
    <div class="flex gap-3 ml-3">
      <!-- <div v-for="item in favFilter" :key="item" class="p-2 border rounded-md">
        {{ item }}
      </div>
      <div>{{ favFilter.value }}</div> -->
      {{ showFilters }}
    </div>
  </div>
</template>
<script setup>
// import axios from "axios";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const showFilters = computed(() => {
  return store.getters.showFilters;
});
const setFavFilter = (index, filterId) => {
  store.dispatch("setFavFilter", {
    index: index,
    id: filterId,
  });
};
onMounted(() => {
  store.dispatch("getFilter");
});
</script>
