# 🦄 Contributing to emoji-code-review-browser-extension

Hello! 👋

Thanks for contributing on [emoji-code-review-browser-extension](https://github.com/alfreddagenais/emoji-code-review-browser-extension). Before implementing new features and changes, feel free to [submit an issue](https://github.com/alfreddagenais/emoji-code-review-browser-extension/issues/new/choose). We're going to talk here :stuck_out_tongue_winking_eye:.

This project uses [Svelte](https://svelte.dev/) to create the interface and is build using [Parceljs](https://parceljs.org/).

## 🌱 How to submit a pull request?

1. Fork this repository.
2. Create a new feature branch. (Eg: `feature/improve-footer-design`)
3. Make your changes.
4. Make a little check using `yarn lint && yarn test`
5. Commit your changes using the convention.
6. Submit your pull request.

## 🔨 How to start emoji-code-review-browser-extension locally

If you want to make changes to the site, follow the next steps:

1. Clone the project

```sh
git clone https://github.com/alfreddagenais/emoji-code-review-browser-extension.git
cd emoji-code-review-browser-extension
```

2. Install the dependencies and start the development task.

```sh
yarn install && yarn start
```

The development task will compile, watch and open the extension in a sandbox webpage. Your are ready to make your changes 👍

## 🚀 Build emoji-code-review-browser-extension

1. Build the extension to test it in your browser

```sh
yarn watch
```

It will compile and watch the extension under the `dist/` folder. Just load this folder has an unpacked extension in your browser:

- in Chrome : See point **1** of [Create the manifest step](https://developer.chrome.com/extensions/getstarted#manifest)
- in Microsoft Edge: Same process than for Chrome

2. Build the extension

```sh
yarn build
```

It will create the extension as a zip file called `extension.zip` in the root of the project.

---

<p align="center">
  Made with ❤ by <a href="https://github.com/AlfredDagenais">AlfredDagenais</a> (<a href="https://github.com/AlfredDagenais.com">AlfredDagenais.com</a>)
</p>
