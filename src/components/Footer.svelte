<script>
  import { page } from '../stores'
</script>

<style>
  footer {
    position: relative;
    z-index: 1;
  }

  :global(body.dark) footer {
    background-color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  :global(body.dark) a,
  :global(body.dark) button {
    color: white;
  }

  nav {
    display: flex;
    justify-content: center;
    padding: 0.25em 0;
  }

  nav > *:not(:last-child):after {
    content:"•";
    margin: 0 .3em;
  }

  nav button,
  nav a{
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.2em;
    height: 16px;
    line-height: 16px;
    padding: 0;
    vertical-align: middle;
  }

  nav a{
    line-height: 18px;
  }

  nav a span {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
  }

  nav a:hover span,
  nav a:focus span{
    animation: 0.5s bounce;
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
      color: #fff;
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.2em, 0);
      color: red;
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.1em, 0);
      color: rgb(158, 0, 0);
    }

    90% {
      transform: translate3d(0, -0.05em, 0);
      color: rgb(158, 0, 0);
    }
  }
</style>

<footer>
  <nav>
    <button on:click={() => { page.goTo('settings') }}>
      Settings
    </button>
    <a
      href="https://github.com/alfreddagenais/emoji-code-review-browser-extension"
      target="_blank">
      GitHub
    </a>
    <a
      href="https://AlfredDagenais.com"
      target="_blank">
      Made with <span>❤</span> by AlfredDagenais
    </a>
  </nav>
</footer>
