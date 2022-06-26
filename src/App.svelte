<script>
  import Header from "./components/Header.svelte";
  import SideNav from "./components/SideNav.svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
  import { onMount } from "svelte";

</script>

<Header imageSrc="images/LogoMakr-38S17p.png" />
<div class="wrapper">
  <CodeEditor />
  <SideNav />
</div>

<style>
  .wrapper {
    display: flex;
    height: 95%;
  }
</style>

