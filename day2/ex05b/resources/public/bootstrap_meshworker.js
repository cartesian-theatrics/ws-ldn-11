// We're a webworker if document is undefined.
if (self.document === undefined) {
    importScripts("js/compiled/out/base.js");
    importScripts("js/compiled/out/meshworker.js");
}
