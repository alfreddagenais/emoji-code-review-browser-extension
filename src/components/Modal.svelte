<script>
  export let open = false
  export let onClose
</script>

{#if open}
  <div class="modal">
    <div class="body">
      <button on:click={onClose} class="close">×</button>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal {
    animation-delay: .5s;
    animation: apparition .5s forwards;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .body {
    background-color: #ff5a79;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    position: relative;
    width: 100%;
  }

  .close {
    background-color: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 25px; 
    margin: 0;
    position: absolute;
    right: 5px;
    text-decoration: none;
    top: 0;
  }

  @keyframes apparition {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>