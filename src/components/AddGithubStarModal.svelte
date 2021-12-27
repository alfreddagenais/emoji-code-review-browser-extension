<script>
  /* eslint-disable no-undef */
  import Modal from './Modal'
  import Icon from './Icon/Icon'

  import { isInExtension } from '../helpers/browser'

  let asAlreadyClicked = true
  $: isModalOpen = !asAlreadyClicked

  const AS_CLICKED_KEY = 'has-clicked'
  const OPEN_COUNTER_KEY = 'popup-open-counter'
  const MIN_OPEN_COUNTER = 5

  const setAsClickedStorage = () => {
    chrome.storage.local.set({ [AS_CLICKED_KEY]: true })
  }

  const setOpenCounterStorage = (count) => {
    chrome.storage.local.set({ [OPEN_COUNTER_KEY]: count })
  }

  if (isInExtension()) {
    chrome.storage.local.get([AS_CLICKED_KEY, OPEN_COUNTER_KEY], (result) => {
      const asClicked = result[AS_CLICKED_KEY]
      const openCounter = result[OPEN_COUNTER_KEY]

      if (openCounter !== undefined) {
        setOpenCounterStorage(openCounter + 1)

        const shouldModalBeOpen = openCounter >= MIN_OPEN_COUNTER && asClicked === undefined
        if (shouldModalBeOpen) {
          asAlreadyClicked = false
        }
      } else {
        setOpenCounterStorage(1)
      }
    })
  }

  const closeModal = () => {
    isModalOpen = false
    setAsClickedStorage()
  }
</script>

<Modal
  open={isModalOpen}
  onClose={closeModal}
>
  <h2>You like to use the extension? Then leave a star on GitHub 🎉</h2>
  <a 
    href="https://github.com/alfreddagenais/emoji-code-review-browser-extension" 
    target="_blank"
    on:click={setAsClickedStorage}
  >
    <Icon name='star' /> GitHub
  </a>
</Modal>

<style>
  h2 {
    color: #fff;
    font-size: 20px;
    line-height: 30px;
  }

  a {
    border: solid 2px black;
    border-radius: 4px;
    color: black;
    display: flex;
    font-size: 16px;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    padding: 5px 10px;
    text-decoration: none;
    transition-duration: .3s;
    width: fit-content;
  }

  a:hover {
    box-shadow: 2px 3px rgba(0, 0, 0, .2);
  }

  a :global(.icon) {
    color: var(--color-primary);
    margin-right: 5px;
  }
</style>
