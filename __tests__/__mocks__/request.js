const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
  const lastSlash = url.lastIndexOf('/')
  fs.readFile(`./src/api/__mockData__/mockData.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
});

export default request
