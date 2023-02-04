<script lang="ts" setup>
import type SourceCodeData from "@/models/data/sourceCodeData";
import TutorialCode from "@/components/TutorialCodes/TutorialCode.vue";
import type { PropType } from "vue";
import { ref } from "vue";

defineProps({
  codes: {
    type: Object as PropType<readonly SourceCodeData[]>,
  },
});
const tab = ref(null);
</script>

<template>
  <div v-if="codes?.length === 0" />
  <div v-else class="tutorial-codes">
    <v-tabs v-model="tab" align-with-title class="tabs">
      <v-tab
        v-for="source in codes"
        :key="source.filename.filename"
        :value="source.filename"
        class="tab"
      >
        {{ source.filename.filename }}
      </v-tab>
    </v-tabs>
    <v-card-text class="card">
      <v-window v-model="tab" class="window">
        <v-window-item
          class="item"
          v-for="source in codes"
          :key="source.filename.filename"
          :value="source.filename"
        >
          <TutorialCode :source="source" />
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style lang="scss" scoped>
.tutorial-codes {
  background-color: #2d2d2d;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  .tabs {
    color: white;

    & > .tab {
      color: white;
    }
  }

  .card {
    width: 100%;
    height: 90%;

    .window {
      width: 100%;
      height: 100%;

      .item {
        width: 100%;
        height: 100%;
        overflow: scroll;
      }
    }
  }
}
</style>
