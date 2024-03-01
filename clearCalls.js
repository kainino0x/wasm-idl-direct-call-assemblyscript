export function clearThruJS(gl, mask) {
    gl.clear(mask);
}

export const clearNoJS = Function.prototype.call.bind(WebGLRenderingContext.prototype.clear);
