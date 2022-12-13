<script lang="ts" setup>
import type SourceCodeData from "@/models/data/sourceCodeData";
import type { PropType } from "vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-tomorrow.css";
import { computed } from "vue";

const props = defineProps({
  source: {
    type: Object as PropType<SourceCodeData>,
    required: true,
  },
});

const highlighter = computed(() => {
  return (code: string) => {
    return highlight(code, languages[props.source.filename.language]);
  };
});
</script>

<template>
  <prism-editor
    class="my-editor"
    :model-value="source.code"
    :highlight="highlighter"
    readonly
    line-numbers
    inline
  />
</template>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
