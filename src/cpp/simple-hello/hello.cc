#include <napi.h>
#include <iostream>

Napi::Value Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  // cout showing up in the console lets us know that we can
  // print to the console from c++ (as expected)
  // and make the assumption we can most likely do so much more..
  std::cout << "Invoking hello.cc#L7" << "\n";
  return Napi::String::New(env, "meow!");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "showcaseNodeGypImpl"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
