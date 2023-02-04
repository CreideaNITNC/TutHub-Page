<script lang="ts" setup>
import { PropType } from "vue";
import PictureData from "@/models/data/pictureData";

defineProps({
  /** スライドで表示する複数の画像 */
  pictures: {
    type: Object as PropType<readonly PictureData[]>,
    required: true,
  },
  /**
   * スライドボタンの直径
   * default: 20px
   */
  diameter: {
    type: Number,
    default: 40,
  },
});
</script>

<template>
  <v-carousel hide-delimiters>
    <!-- 左へスライドするボタン -->
    <template v-slot:prev="{ props }">
      <v-btn
        icon
        color="white"
        :width="diameter"
        :height="diameter"
        @click="props.onClick"
      />
    </template>

    <!-- 右へスライドするボタン -->
    <template v-slot:next="{ props }">
      <v-btn
        icon
        color="white"
        :width="diameter"
        :height="diameter"
        @click="props.onClick"
      />
    </template>

    <!-- メイン画像 -->
    <v-carousel-item
      v-for="picture in pictures"
      :key="picture.filename"
      :src="picture.src"
      progress="primary"
    />
  </v-carousel>
</template>
