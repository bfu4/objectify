import * as fs from 'fs';

const buildModules = [
    { name: "hello", sources: [ "src/cpp/hello.cc" ] }
]

const include_dirs = [ "<!@(node -p \"require('node-addon-api').include\")" ]
const defines = [ "NAPI_DISABLE_CPP_EXCEPTIONS" ]

function generateTargets(name, mod) {
    return {
        "target_name": name,
        "sources": mod,
        include_dirs,
        defines
    }
}


let json = '{ \"targets\": [';

buildModules.forEach(mod => {
    let str = JSON.stringify(generateTargets(mod.name, mod.sources));
    json += str;
})

json += '] }';

fs.writeFileSync('binding.gyp', json);

