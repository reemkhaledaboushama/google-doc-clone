<script>
  import Header from "./components/Header.svelte";
  import SideNav from "./components/SideNav.svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
  
  import {posts, timeout} from "./stores.js"
 onMount(async () => {
   if($posts.length<1 || $timeout == true){
     const res = await fetch(apiBaseUrl + "/documents");
     $posts = await res.json();
   }
});
</script>

  {#each posts as post}
    <h5>{post.title}</h5>
  {/each}

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

