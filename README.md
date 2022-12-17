## PushMe

> PushMe API for Node.js

https://www.pushme.cn

- Useage:

```js
const PushMe = require('pushme');

const pushme = new PushMe({
    sckey: 'PUSHME_KEY'
});

(async () => {
    const res = await pushme.send('node-pushme', 'hello world')
    console.log(res);
})();
```

MIT 