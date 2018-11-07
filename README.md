# promise-ponyfill

Preconfigured `Promise` [ponyfill][1] based on [promise-polyfill][2] and
[setasap][3].

A ponyfill is like a polyfill, but it does not alter the global
namespace.


## Why?

This ponyfill is based on promise-polyfill. Out of the box
promise-polyfill implements `Promise` using `setImmediate` if
available, and otherwise it falls back to `setTimeout`.

This leads to a significant performance degradation on platforms where
neither `Promise` nor `setImmediate` are available natively. For optimal
performance on these platforms it is necessary to configure
promise-polyfill to use a setImmediate polyfill such as setasap.

This module preconfigures promise-polyfill to use setasap so you don't
have to think about it. Just import this module and use it like a
regular `Promise`.


## Installation and usage

```bash
npm install --save promise-ponyfill
```

```typescript
import Promise from "promise-ponyfill";

const promise = new Promise((resolve, reject) =>
                            setTimeout(resolve, 1000));

promise.then(value => console.log("Promise resolved."))
    .catch(reason => console.error("Promise rejected", reason));
```

If the platform provides a native implementation of `Promise`, then this
module will simply return the native implementation.

This is a wilful violation of the usual philosophy of ponyfills, which
advocate returning the polyfill implementation in all cases. I believe
that this is the best choice in this case because native `Promise`
provides better error reporting, and I am not aware of any platforms
that provide a bad native `Promise` implementation. If you are aware of
any please let me know by [raising an issue][4].


## Copyright

See [LICENSE.md](LICENSE.md) for copyright and licensing information
pertaining to this module.

promise-polyfill and setasap have their own separate copyright and
licensing terms. See the documentation for those modules.


  [1]: https://ponyfill.com/
  [2]: https://www.npmjs.com/package/promise-polyfill
  [3]: https://www.npmjs.com/package/setasap
  [4]: https://github.com/softwareventures/promise-ponyfill/issues