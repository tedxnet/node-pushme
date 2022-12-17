const https = require('https');
const assert = require('assert');

const {
  SERVERCHAN_API = 'https://send.pushme.cn',
  SERVERCHAN_SENDKEY,
} = process.env;

const get = url =>
  new Promise(done => https.get(url, done));

const readStream = res => new Promise((resolve, reject) => {
  const buffer = [];
  res
    .on('error', reject)
    .on('data', chunk => buffer.push(chunk))
    .on('end', () => resolve(Buffer.concat(buffer)))
});

/**
 * PushMe
 * https://send.pushme.cn
 */
class PushMe {
  constructor({ api = SERVERCHAN_API, sckey = SERVERCHAN_SENDKEY } = {}) {
    assert.ok(api);
    assert.ok(sckey, "must provide a sckey");
    this.api = api;
    this.sckey = sckey;
  }
  send(title, content, tpl) {
    const { api, sckey } = this;
    return Promise
      .resolve()
      .then(() => get(`${api}/${sckey}.send?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`+(tpl?'&tpl='+tpl:'')))
      .then(readStream)
      .then(JSON.parse)
      .then(res => {
        assert.equal(res.status, 1, res.message);
        return res;
      });
  }
}

module.exports = PushMe;
