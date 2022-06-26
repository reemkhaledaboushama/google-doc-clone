<script>
  import { downloadCodeFromEditor } from "../services/texteditor.service";

  const downloadCode = () => {
    downloadCodeFromEditor("document.txt");
  };
</script>

<div class="side-bar">
  <i on:click={downloadCode} class="fa fa-download icons" />
  <i on:click={() => (window.location.href = "/")} class="fa fa-plus icons" />
</div>

<style>
  .side-bar {
    display: flex;
    flex-direction: column;
    background: #d0e8f3;
  }
  .icons {
    font-size: 20px;
    padding: 10px;
    color: #0f1010;
    border-bottom: 1px solid #000;
  }

  .icons:hover {
    cursor: pointer;
  }
</style>
