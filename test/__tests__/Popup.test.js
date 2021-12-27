import { render, fireEvent } from '@testing-library/svelte'
import Popup from '../../src/Popup.svelte'

describe('<Popup />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Popup)
  })

  describe('DOM', () => {
    it('should contain a header', () => {
      const { container } = wrapper

      expect(container).toContainHTML('<header ')
    })

    it('should contain emoji code logo', () => {
      const { container } = wrapper
      const imageLink = container.querySelector('header a')
      const image = imageLink.querySelector('img')

      expect(image).not.toBeNull()
      expect(imageLink).toHaveAttribute('href', 'https://emojicodereview.dev/')
    })

    it('should contain a searchbar', () => {
      const { container } = wrapper
      const searchbar = container.querySelector('header input[type=text]')

      expect(searchbar).not.toBeNull()
    })

    it('should contain a footer', () => {
      const { container } = wrapper
      const footer = container.querySelector('footer')

      expect(footer).not.toBeNull()
    })
  })

  describe('filter emojis', () => {
    let input

    beforeEach(() => {
      const { container } = wrapper
      input = container.querySelector('header input[type=text]')
    })

    describe('match by tag', () => {
      const emojiCodeToMatch = {
        code: 'pin',
        emoji: '📌'
      }
      let matchingEmojisCode

      beforeEach(async () => {
        const { container } = wrapper
        await fireEvent.input(input, { target: { value: 'pin' } })

        matchingEmojisCode = container.querySelectorAll('li.emojiCode')
      })

      it('should contain a single emojiCode', () => {
        expect(matchingEmojisCode.length).toBe(1)
      })

      it('should be the right emojiCode', () => {
        expect(matchingEmojisCode[0]).toContainHTML(emojiCodeToMatch.emoji)
      })
    })

    describe('match by description', () => {
      let matchingEmojisCode

      beforeEach(async () => {
        const { container } = wrapper
        await fireEvent.input(input, { target: { value: 'include' } })

        matchingEmojisCode = container.querySelectorAll('li.emojiCode')
      })

      it('should contain a single emojiCode', () => {
        expect(matchingEmojisCode.length).toBe(1)
      })
    })
  })

  it('should go to settings page', async () => {
    const { container } = wrapper
    const goToSettingsBtn = container.querySelector('nav > button')

    await fireEvent.click(goToSettingsBtn)
    expect(container).toContainHTML('Settings')
  })
})
