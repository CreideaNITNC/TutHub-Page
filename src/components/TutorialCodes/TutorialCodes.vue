<script lang="ts" setup>
import type SourceCodeData from "@/models/data/sourceCodeData";
import TutorialCode from "@/components/TutorialCodes/TutorialCode.vue";
import type { PropType } from "vue";
import { reactive, ref } from "vue";

const props = defineProps({
  codes: {
    type: Object as PropType<readonly SourceCodeData[]>,
  },
});
const tab = ref();
const items = reactive(["a", "b", "c"]);
</script>

<template>
  <div class="tutorial-codes">
    <v-tabs v-model="tab" align-with-title>
      <v-tab
        v-for="source in codes"
        :key="source.filename.filename"
        :value="source.filename"
      >
        {{ source.filename.filename }}
      </v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
          v-for="source in codes"
          :key="source.filename.filename"
          :value="source.filename"
        >
          <TutorialCode :source="source" />
        </v-window-item>
      </v-window>
    </v-card-text>
    <!--    <div v-for="code in codes" :key="code.filename">-->
    <!--      <TutorialCode :source="code" />-->
    <!--    </div>-->
  </div>
</template>
