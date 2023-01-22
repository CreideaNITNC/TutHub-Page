<!--
渡された画像データ配列によって、何も返さない・単一画像・複数画像の要素を返す
-->

<script lang="ts" setup>
import { computed, PropType } from "vue";
import PictureData from "@/models/data/pictureData";
import UnitTutorialImage from "@/components/tutorial/TutorialImage/UnitTutorialImage/UnitTutorialImage.vue";
import MultipleTutorialImage from "@/components/tutorial/TutorialImage/MultipleTutorialImage/MultipleTutorialImage.vue";

const props = defineProps({
  pictures: {
    type: Object as PropType<readonly PictureData[]>,
    required: true,
  },
});

const isUnit = computed(() => props.pictures.length === 1);
const isMultiple = computed(() => props.pictures.length > 1);
</script>

<template>
  <UnitTutorialImage v-if="isUnit" :picture="pictures[0]" />
  <MultipleTutorialImage v-if="isMultiple" :pictures="pictures" />
</template>

<style scoped></style>
