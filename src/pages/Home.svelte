<script>
  import { settings } from '../stores'
  import Searchbar from '../components/Searchbar'
  import EmojiCodeList from '../components/EmojiCodeList'
  import logoRegular from '../assets/emoji-code-review-logo.svg'
  import logoLight from '../assets/emoji-code-review-logo-light.svg'

  const emojisCodeList = require('../data/emojisCodeList.json')

  let emojisCode = emojisCodeList
  let filter = ''

  const getEmojisCodeWords = (emojiCode) => {
    const getCodeWithoutColon = (code) => {
      return code.slice(1, -1)
    }

    const descriptionWords = emojiCode.description.toLowerCase().split(' ')
    const codeWords = getCodeWithoutColon(emojiCode.code).split(' ')

    return [...descriptionWords, ...codeWords, emojiCode.name, ...emojiCode.tags]
  }

  const getFilteredEmojisCodes = (emojisCodeToFilter, filterToApply) => {
    const wordsInFilter = filterToApply.trim().match(/[^ ]+/g)

    const emojiCodeMatchAllWordsInFilter = (emojiCode, words) => {
      return !words.some(wordInFilter => {
        return !getEmojisCodeWords(emojiCode).some(emojiCodeWord => {
          return emojiCodeWord.startsWith(wordInFilter)
        })
      })
    }

    // filter according to filter
    if (wordsInFilter !== null) {
      emojisCodeToFilter = emojisCode.filter((emojiCode) => {
        return emojiCodeMatchAllWordsInFilter(emojiCode, wordsInFilter)
      })
    }

    // filter according to presence in tab
    emojisCodeToFilter = emojisCodeToFilter.sort((emojiCodeA, emojiCodeB) => {
      const shouldBeInverted = !!(!emojiCodeA.present && emojiCodeB.present) // use !! to cast undefined to boolean

      return shouldBeInverted ? -1 : 1
    })

    return emojisCodeToFilter
  }

  $: filteredEmojisCodes = getFilteredEmojisCodes(emojisCode, filter)

  const setFilter = (value) => {
    filter = value.target.value.toLowerCase()
  }

  const setFilterManual = (value) => {
    filter = value.toLowerCase()
  }

  $: logo = ($settings.theme === 'dark' ? logoLight : logoRegular)
</script>

<style>
  .emojicodereview-logo {
    margin-right: 1em;
    margin-top: -1px;
    min-width: 30%;
  }
</style>

<header>
  <a href="https://emojicodereview.dev/" target="_blank" class="emojicodereview-logo">
    <img src={logo} alt="Emoji Code Review logo" />
  </a>
  <Searchbar on:input={setFilter} setFilterManual={setFilterManual} />
</header>

<EmojiCodeList emojisCode={filteredEmojisCodes} />
