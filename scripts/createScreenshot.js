/* eslint-disable no-console */
const path = require('path')
const fs = require('fs')
const Pageres = require('pageres')
const axios = require('axios')
const tinify = require('tinify')

require('dotenv').config()

const staticFolder = path.join(__dirname, '../static/')
const urlWebsite = 'http://localhost:1424'

const screenshotFiles = [
  'screenshot-640x400.png',
  'screenshot-640x400-search.png'
]

const TINIFY_API_KEY = process.env.TINIFY_API_KEY || null

const deleteScreenshots = async () => {
  console.log('Start deleting screenshots!')

  // eslint-disable-next-line no-restricted-syntax
  for (const screenshotFile of screenshotFiles) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await fs.unlinkSync(path.join(staticFolder, `/${screenshotFile}`))
    } catch (error) {
      // No Error
    }
  }

  console.log('Finished deleting screenshots!')
}

const optimizeScreenshots = async () => {
  if (TINIFY_API_KEY === null || TINIFY_API_KEY === '') {
    console.log('No optimization, no TINIFY_API_KEY')
    process.exit()
  }

  console.log('Start optimizing screenshots!')

  tinify.key = TINIFY_API_KEY

  // eslint-disable-next-line no-restricted-syntax
  for (const screenshotFile of screenshotFiles) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await tinify.fromFile(path.join(staticFolder, `/${screenshotFile}`)).toFile(path.join(staticFolder, `/n_${screenshotFile}`))
    } catch (error) {
      // No Error
    }
  }

  await deleteScreenshots()

  // eslint-disable-next-line no-restricted-syntax
  for (const screenshotFile of screenshotFiles) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await fs.rename(path.join(staticFolder, `/n_${screenshotFile}`), path.join(staticFolder, `/${screenshotFile}`), (err) => {
        if (err) {
          console.log('ERROR: ' + err)
        }
      })
    } catch (error) {
      // No Error
    }
  }

  console.log('Finished optimizing screenshots!')

  // You can go out :)
  process.exit()
}

const takeScreenshots = async () => {
  console.log('Start generating screenshots!')

  // eslint-disable-next-line no-restricted-syntax
  for (const screenshotFile of screenshotFiles) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await fs.unlinkSync(path.join(staticFolder, `/${screenshotFile}`))
    } catch (error) {
      // No Error
    }
  }

  await new Pageres({ delay: 2 })
    .src(urlWebsite, ['640x400'], {
      crop: false,
      filename: 'screenshot-<%= size %>'
    })
    .src(`${urlWebsite}#search=error`, ['640x400'], {
      crop: false,
      filename: 'screenshot-<%= size %>-search'
    })
    .dest(staticFolder)
    .run()

  console.log('Finished generating screenshots!')

  // Add a Small Delay before next action
  setTimeout(() => {
    optimizeScreenshots()
  }, 200)
}

const checkLocalWebsite = (i) => {
  setTimeout(() => {
    console.log(`Infinite Loop Test Website n:${i}`)

    axios.get(urlWebsite, { timeout: 500 })
      .then((response) => {
        if (response.status && parseInt(response.status, 10) === 200 && response.data && response.data !== '') {
          takeScreenshots()
        } else {
          checkLocalWebsite(i + 1)
        }
      })
      .catch(() => {
        checkLocalWebsite(i + 1)
      })
  }, 1000)
}

(async () => {
  await deleteScreenshots()

  checkLocalWebsite(0)
})()
