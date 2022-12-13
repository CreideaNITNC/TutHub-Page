<script lang="ts" setup>
import type { PropType } from "vue";
import type TutorialCommitData from "@/models/data/TutorialCommitData";
import type PictureData from "@/models/data/pictureData";
import type SourceCodeData from "@/models/data/sourceCodeData";

const props = defineProps({
  commits: {
    type: Object as PropType<readonly TutorialCommitData[]>,
    required: true,
  },
  pictures: Object as PropType<readonly PictureData[]>,
  codes: Object as PropType<readonly SourceCodeData[]>,
});

const emit = defineEmits<{
  (e: "update:pictures", value: readonly PictureData[]): void;
  (e: "update:codes", value: readonly SourceCodeData[]): void;
}>();

const onIntersect = (
  isIntersecting: boolean,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
  step: number,
  pictures: readonly PictureData[],
  codes: readonly SourceCodeData[]
) => {
  if (isIntersecting) {
    emit("update:pictures", pictures);
    emit("update:codes", codes);
  }
  console.log(step, isIntersecting);
};
</script>

<template>
  <div
    v-for="commit in commits"
    :key="commit.step"
    class="step"
    v-intersect.quiet="{
      handler: (i: Boolean, e: IntersectionObserverEntry[], o: IntersectionObserver) =>
        onIntersect(i, e, o, commit.step, commit.pictures, commit.codes),
      options: {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <p>{{ commit.step }}</p>
    <div v-for="description in commit.descriptions" :key="description.title">
      <v-card
        class="card"
        width="400"
        :title="description.title"
        :text="description.text"
      ></v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step {
  .card {
    margin-bottom: 30px;
  }
  margin-top: 20vh;
}
</style>
