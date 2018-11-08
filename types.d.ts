declare module "promise-polyfill" {
    export interface PromisePolyfillConstructor extends PromiseConstructor {
        _immediateFn?: (handler: (() => void) | string) => void;
    }

    const Promise: PromisePolyfillConstructor;

    export default Promise;
}
