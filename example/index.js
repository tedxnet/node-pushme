const PushMe = require('..');

const pushme = new PushMe({
  sckey: 'PUSHME_KEY'
});

(async () => {
  const res = await pushme.send('node-pushme', 'hello world')
  console.log(res);
})();