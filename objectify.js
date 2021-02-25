import * as fs from 'fs';

// The sources and the name of the module from CONTENT ROOT
const buildModules = [
    { name: "hello", sources: [ "src/cpp/simple-hello/hello.cc" ] },
 // TODO:   { name: "executable", sources: [ "src/cpp/executable/exec.cc", "src/cpp/nested/exec_impl.h" ] }
]

// Global Include directories
const include_dirs = [ "<!@(node -p \"require('node-addon-api').include\")" ]

// Global defines
const defines = [ "NAPI_DISABLE_CPP_EXCEPTIONS" ]

// Generate our targets the same way
function generateTargets(name, mod) {
    return {
        "target_name": name,
        "sources": mod,
        include_dirs,
        defines
    }
}

// Generate and append JSON style
let json = '{ \"targets\": [';

buildModules.forEach(mod => {
    let str = JSON.stringify(generateTargets(mod.name, mod.sources));
    json += str;
})

json += '] }';

// Write to GLOBAL binding.gyp
fs.writeFileSync('binding.gyp', json);

