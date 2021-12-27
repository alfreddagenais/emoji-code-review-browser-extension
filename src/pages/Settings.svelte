<script>
  import { page, settings } from '../stores'

  import ToggleButton from '../components/ToggleButton'
  import Icon from '../components/Icon/Icon'
  import ThemeSwitch from '../components/ThemeSwitch'

  const onThemeChange = (theme) => {
    settings.setTheme(theme)
  }

  $: arrowLeft = ($settings.theme === 'dark' ? 'arrow-left-light' : 'arrow-left-regular')
</script>

<style>
  h1 {
    align-items: center;
    color: black;
    display: flex;
  }

  :global(body.dark) h1{
    color: var(--color-dark-color);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1em;
    padding: 0;
  }

  header :global(.icon) {
    margin-right: .3em;
  }

  .settings {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 .5em;
    padding-top: 20px;
  }

  :global(body.dark) .settings {
    background-color: black;
    color: white;
  }

  .setting {
    align-items: center;
    display: flex;
  }

  .center {
    justify-content: center;
  }

  .settings :global(.checkbox) {
    margin-right: 1em;
  }

  h2 {
    font-size: 1.5em;
  }
</style>

<header>
  <h1>
    <button on:click={() => { page.goTo('home') }}>
      <Icon name={arrowLeft} />
    </button>
    Settings
  </h1>
</header>

<div class="settings">
  <div class="setting center">
    <ThemeSwitch onChange={onThemeChange}/>
  </div>
  <div class="setting">
    <ToggleButton 
      checked={$settings.autoCloseAfterCopy} 
      onClick={() => {
        settings.setAutoCloseAfterCopy(!$settings.autoCloseAfterCopy)
      }}
    />
    <h2>Close extension after copying a emoji code</h2>
  </div>
  <div class="setting">
    <ToggleButton 
      checked={$settings.showDescription} 
      onClick={() => {
        settings.setShowDescription(!$settings.showDescription)
      }}
    />
    <h2>Show description on hover or focus</h2>
  </div>
</div>
