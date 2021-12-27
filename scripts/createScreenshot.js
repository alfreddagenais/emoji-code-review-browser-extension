const path = require('path')
const fs = require('fs');
const Pageres = require('pageres');

(async () => {
    const staticFolder = path.join(__dirname, '../static/');

    const screenshotFiles = [
      'screenshot-640x400.png',
      'screenshot-640x400-search.png',
    ];
    for(const screenshotFile of screenshotFiles) {
      try {
        await fs.unlinkSync(path.join(staticFolder, `/${screenshotFile}`));
      } catch (error) {
        // No Error
      }
    }

    await new Pageres({delay: 2})
        .src('http://localhost:1424', ['640x400'], {
          crop: false,
          filename: 'screenshot-<%= size %>',
        })
        .src('http://localhost:1424#search=error', ['640x400'], {
          crop: false,
          filename: 'screenshot-<%= size %>-search',
        })
        .dest(staticFolder)
        .run();

    console.log('Finished generating screenshots!');
})();