<script>
  import { InitEditor } from "../services/texteditor.service";
  import { onMount } from "svelte";

  onMount(() => {
    InitEditor("text-editor");
  });
</script>

<div id="text-editor" />

<style>
  #text-editor {
    height: 100%;
    width: 100%;
  }
</style>
