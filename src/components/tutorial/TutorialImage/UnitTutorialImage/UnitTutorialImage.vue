<!--
Tutorialでコミットに対して画像が1つのみ添付された際に1つ画像を表示するコンポーネント
-->

<script lang="ts" setup>
import { PropType } from "vue";
import PictureData from "@/models/data/pictureData";

defineProps({
  /** 表示する画像データ */
  picture: {
    type: Object as PropType<PictureData>,
    required: true,
  },
  /**
   * 画像の最大の高さ
   * デフォルトで画面いっぱいに広がる
   */
  height: {
    type: Number,
    default: window.innerHeight,
  },
});
</script>

<template>
  <v-img
    class="unit-tutorial-image"
    :height="height"
    :src="picture.src"
    :alt="picture.filename"
  />
</template>

<style lang="scss" scoped>
.unit-tutorial-image {
  border-radius: 10px;
}
</style>
