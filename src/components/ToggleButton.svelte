<script>
  export let checked = false
  export let onClick = () => {}
</script>

<style>
  .checkbox {
    display: inline-block;
    position: relative;
  }

  .checkbox label {
    background: #ccc;
    border-radius: 46px;
    display: inline-block;
    height: 21px;
    position: relative;
    transition: 0.4s;
    width: 38px;
  }

  .checkbox label:after {
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    content: '';
    height: 25px;
    left: 0;
    position: absolute;
    top: -5px;
    transition: 0.4s;
    width: 25px;
    z-index: 2;
  }

  .checkbox input {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  .checkbox input:hover + label:after {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }

  .checkbox input:checked + label:after {
    left: 10px;
  }

  .checkbox label:after {
    top: 0;
    width: 21px;
    height: 21px;
  }

  .checkbox input:checked + label {
    background: #4BD865;
  }

  .checkbox input:checked + label:after {
    left: 17px;
  }
</style>

<div class="checkbox" on:click={onClick}>
  <input type="checkbox" checked={checked} />

  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label></label>
</div>