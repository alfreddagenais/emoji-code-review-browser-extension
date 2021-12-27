<script>
  import { settings } from '../stores'
  import { setClipboard } from '../helpers/clipboard'

  export let code
  export let emoji
  export let description
  export let onSave

  const copyToClipboard = (value) => {
    setClipboard(value)
    onSave()
  }
</script>

<style>
  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
  }

  .emojiCode {
    align-items: flex-start;
    display: flex;
    margin: 0.5em;
    margin-bottom: 4em;
    position: relative;
    vertical-align: top;
  }

  .emojiCode, .name {
    text-align: left;
  }

  .emojiCode, .description {
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
    opacity: 0.7;
  }

  :global(body.dark) .emojiCode {
    box-shadow: 0 1px 2px 0 rgb(50, 50, 50);
  }

  .emoji {
    border-radius: 4px 0 0 4px;
    box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
    font-size: 2em;
    height: 1.7em;
    margin: 0;
    min-width: 1.9em;
  }

  .groups .emoji {
    min-width: 1.7em;
    display: block;
  }

  .emoji span {
    box-sizing: border-box;
    display: block;
    position: relative;
  }

  .emoji:hover,
  .emoji:focus {
    background-color: white;
    box-shadow: inset 0 0 1px 3px #7a7a7a;
    transition: background-color 0.2s;
  }

  .emoji:hover span,
  .emoji:focus span {
    animation: 0.5s bounce;
  }

  .item {
    font-size: 1.7em;
    font-weight: 600;
    padding-left: 0.5em;
    text-align: left;
    width: 100%;
  }

  .item span {
    border-radius: 4px;
    border-bottom: 4px transparent;
    position: relative;
    transition-duration: 0.3s;
    z-index: 1;
  }

  .item span::before {
    border-radius: 4px;
    content: "";
    height: 0.2em;
    margin-top: 1em; /* put it under the text */
    position: absolute;
    transition: width 0.15s;
    width: 0;
    z-index: -1;
  }

  .item:hover span::before,
  .item:focus span::before {
    width: 100%;
  }

  .description {
    border-top: solid 1px #e3e3e3;
    box-shadow: none;
    font-size: 0.8em;
    margin: 0;
    padding: 15px 0 5px;
  }

  /*
  This code has been obtained from:
  https://github.com/daneden/animate.css/blob/master/source/attention_seekers/bounce.css
  */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.2em, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.1em, 0);
    }

    90% {
      transform: translate3d(0, -0.05em, 0);
    }
  }
</style>

<li class="emojiCode">
  {#if typeof emoji === 'object'}
    <div class="groups">
      {#each emoji as emojiSingle }
        <button class="emoji" on:click={copyToClipboard(emojiSingle)}>
          <span>{emojiSingle}</span>
        </button>
      {/each}
    </div>
  {:else}
    <button class="emoji" on:click={copyToClipboard(emoji)}>
      <span>{emoji}</span>
    </button>
  {/if}
  <div class="item">
    <button class="name" on:click={copyToClipboard(code)}>
      <span>{code}</span>
    </button>
    {#if $settings.showDescription}
      <p class="description">{description}</p>
    {/if}
  </div>
</li>
