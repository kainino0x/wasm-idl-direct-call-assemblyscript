import * as __import0 from "../clearCalls.js";
async function instantiate(module, imports = {}) {
  const __module0 = imports["../clearCalls.js"];
  const adaptedImports = {
    "../clearCalls.js": __module0,
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  return exports;
}
export const {
  memory,
  clearManyTimesThruJS,
  clearManyTimesNoJS,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    "../clearCalls.js": __maybeDefault(__import0),
  }
))(new URL("release.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
