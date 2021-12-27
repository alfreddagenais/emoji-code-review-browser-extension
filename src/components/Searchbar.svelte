<script>
  import { onMount, onDestroy } from 'svelte'

  export let setFilterManual

  let searchbar

  const keyboardEventListener = (event) => {
    if (
      searchbar
      && (event.ctrlKey || event.metaKey)
      && event.key === 'k'
    ) {
      event.preventDefault()
      searchbar.focus()
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', keyboardEventListener, false)
    }
  })

  onDestroy(() => {
    document.removeEventListener('keydown', keyboardEventListener, false)
  })

  const filterManual = () => {
    setTimeout(() => {
      const input = document.getElementById('emojiCodeSearchInput');
      const valueInput = input.value
      setFilterManual(valueInput);
    }, 1500);
  }
</script>

<style>
  .input {
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(168, 182, 191, 0.6);
    display: flex;
    padding: 5px 10px;
    width: 60%;
  }

  .input:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
  }

  input {
    border: none;
    width: 100%;
  }

  :global(body.dark) .input,
  :global(body.dark) input{
    color: white;
    background-color: black;
  }

  input:focus {
    outline: none;
  }
</style>

<!-- svelte-ignore a11y-autofocus -->
<div class="input">
  <input
    id="emojiCodeSearchInput"
    maxlength="70"
    type="text"
    placeholder="Search your emoji code..."
    autofocus
    onChange={filterManual()}
    bind:this={searchbar}
    on:input
  />
</div>
