<script>
  import { page, settings } from './stores'

  import Home from './pages/Home'
  import Settings from './pages/Settings'
  import Footer from './components/Footer'
  import AddGithubStarModal from './components/AddGithubStarModal'

  const setThemeClassToBody = (theme) => {
    const bodyClassList = document.body.classList
    if (theme === 'dark') {
      bodyClassList.add('dark')
    } else {
      bodyClassList.remove('dark')
    }
  }

  $: setThemeClassToBody($settings.theme)
</script>

<style>
  @font-face {
    font-family: Avenir;
    src: url('./assets/fonts/AvenirLTStd-Roman.otf');
  }

  :global(:root) {
    --color-primary: #FAD961;
    --color-primary-darker: #df7f4a;
    --color-secondary: #ED6C25;

    --color-dark-primary: #434343;
    --color-dark-primary-darker: #272727;
    --color-dark-secondary: #242424;
    --color-dark-color: #eeeeee;
  }

  :global(html) {
    min-height: 300px;
    min-width: 400px
  }

  :global(body) {
    font-family: Avenir;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  :global(#popup-content) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
  }

  :global(header) {
    background-color: var(--color-primary);
    background: linear-gradient(0deg, var(--color-primary-darker) 0%, var(--color-primary) 100%);
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: space-between;
    max-width: 100%;
    padding: 0.5em;
  }

  :global(.dark header) {
    background-color: var(--color-dark-primary);
    background: linear-gradient(0deg, var(--color-dark-primary-darker) 0%, var(--color-dark-primary) 100%);
  }
</style>

{#if $page === 'home'}
  <Home />
{:else if $page === 'settings'}
  <Settings />
{/if}

<Footer />
<AddGithubStarModal />
