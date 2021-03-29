import Polyfill = require("promise-polyfill");
import setasap = require("setasap");

Polyfill._immediateFn = setasap;

const p: PromiseConstructor = Promise || Polyfill;

export default p;