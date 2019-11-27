export default {
    entry: './dist/hpen-jsonapi/@hpen-jsonapi/hpen-jsonapi.es5.js',
    dest: './dist/hpen-jsonapi/bundles/hpen-jsonapi.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'hpen-jsonapi',
    globals: {
        '@angular/core': 'ng.core'
    }
}
