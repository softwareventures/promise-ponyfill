import Polyfill from "promise-polyfill";
import setasap = require("setasap");

Polyfill._immediateFn = setasap;

const p = Promise || Polyfill;

export default p;
