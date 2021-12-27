<script>
  export let onChange
</script>

<style>
  .theme-switch {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 10%;
    padding: 5px 10px;
  }

  .light {
    background-color: white;
    border-color: black;
  }
  
  .dark {
    background-color: black;
    border-color: white;
    color: white;
  }
</style>

<div class="theme-switch">
  <button 
    type="button" 
    class="light" 
    on:click={() => { onChange('light') }}
  >
    Light
  </button>
  <button 
    type="button" 
    class="dark" 
    on:click={() => { onChange('dark') }}
  >
    Dark
  </button>
</div>