<script>
  import { settings } from '../stores'
  import { closePopup } from '../helpers/browser'

  import Portal from 'svelte-portal'
  import EmojiCode from './EmojiCode'

  export let emojisCode

  let clicked = false
  let SAVE_ANIMATION_DURATION = 500

  const restartSaveAnimation = () => {
    clicked = false

    setTimeout(() => {
      clicked = true
    }, 0)
  }

  const animateSavedToClipboard = () => {
    restartSaveAnimation()

    setTimeout(() => {
      clicked = false
    }, SAVE_ANIMATION_DURATION)
  }

  const onEmojisCodeSave = () => {
    animateSavedToClipboard()

    if ($settings.autoCloseAfterCopy) {
      setTimeout(() => {
        closePopup()
      }, 200)
    }
  }
</script>

<style>
  #emojiCodeList {
    flex-grow: 1;
    list-style: none;
    margin: 0;
    overflow-y: scroll;
    padding-inline-start: 0;
  }

  :global(body.dark) #emojiCodeList {
    background-color: black;
    color: white;
  }

  #saveAnimationAnchor {
    animation: saved var(--saveAnimationDuration) forwards;
    background-color: #c5e763;
    bottom: 0;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  :global(body.dark) #saveAnimationAnchor {
    background-color: #455a08;
  }

  @keyframes saved {
    0% {
      width: 0;
    }

    45% {
      width: 100%;
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>

<ul id="emojiCodeList">
  {#each emojisCode as { code, description, emoji }}
    <EmojiCode
      {code}
      {emoji}
      {description}
      onSave={onEmojisCodeSave} 
    />
  {/each}
</ul>

{#if clicked}
  <Portal target="footer">
    <span 
      id="saveAnimationAnchor" 
      style="--saveAnimationDuration: {SAVE_ANIMATION_DURATION}ms"
    />
  </Portal>
{/if}
