{ "targets": [{"target_name":"hello","sources":["src/cpp/hello.cc"],"include_dirs":["<!@(node -p \"require('node-addon-api').include\")"],"defines":["NAPI_DISABLE_CPP_EXCEPTIONS"]}] }