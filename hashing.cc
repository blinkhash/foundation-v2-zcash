#include <node.h>
#include <node_buffer.h>
#include <v8.h>
#include <stdint.h>
#include <iostream>
#include "nan.h"

// Main Imports
#include "algorithms/equihash/equihash.h"
#include "algorithms/sha256d/sha256d.h"

using namespace node;
using namespace v8;

#define THROW_ERROR_EXCEPTION(x) Nan::ThrowError(x)
const char* ToCString(const Nan::Utf8String& value) {
  return *value ? *value : "<string conversion failed>";
}

// Equihash Algorithm
NAN_METHOD(equihash) {

  // Handle Main Scope
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  // Check Arguments for Errors [1]
  if (info.Length() < 5)
    return THROW_ERROR_EXCEPTION("You must provide five arguments.");
  if (!info[3]->IsInt32() || !info[4]->IsInt32())
    return THROW_ERROR_EXCEPTION("The fourth and fifth parameters should be equihash parameters (n, k)");

  // Define Passed Parameters
  Isolate *argsIsolate = info.GetIsolate();
  Local<Context> context = argsIsolate->GetCurrentContext();
  Local<Object> header = info[0]->ToObject(context).ToLocalChecked();
  Local<Object> solution = info[1]->ToObject(context).ToLocalChecked();

  // Check Arguments for Errors [2]
  if (!Buffer::HasInstance(header) || !Buffer::HasInstance(solution))
    return THROW_ERROR_EXCEPTION("The first two arguments should be buffer objects");
  if (!info[2]->IsString())
    return THROW_ERROR_EXCEPTION("The third argument should be the personalization string");

  // Header Length !== 140
  const char *hdr = Buffer::Data(header);
  if (Buffer::Length(header) != 140) {
    info.GetReturnValue().Set(false);
    return;
  }

  // Process Passed Parameters
  const char *soln = Buffer::Data(solution);
  vector<unsigned char> vecSolution(soln, soln + Buffer::Length(solution));
  Nan::Utf8String str(info[2]);
  const char* personalizationString = ToCString(str);
  unsigned int N = info[3].As<Uint32>()->Value();
  unsigned int K = info[4].As<Uint32>()->Value();

  // Hash Input Data and Check if Valid Solution
  bool isValid;
  crypto_generichash_blake2b_state state;
  EhInitialiseState(N, K, state, personalizationString);
  crypto_generichash_blake2b_update(&state, (const unsigned char*)hdr, 140);
  EhIsValidSolution(N, K, state, vecSolution, isValid);
  info.GetReturnValue().Set(isValid);
}

// Sha256d Algorithm
NAN_METHOD(sha256d) {

  // Check Arguments for Errors
  if (info.Length() < 1)
    return THROW_ERROR_EXCEPTION("You must provide one argument.");

  // Process/Define Passed Parameters
  char * input = Buffer::Data(Nan::To<v8::Object>(info[0]).ToLocalChecked());
  uint32_t input_len = Buffer::Length(Nan::To<v8::Object>(info[0]).ToLocalChecked());
  char output[32];

  // Hash Input Data and Return Output
  sha256d_hash(input, output, input_len);
  info.GetReturnValue().Set(Nan::CopyBuffer(output, 32).ToLocalChecked());
}

NAN_MODULE_INIT(init) {
  Nan::Set(target, Nan::New("equihash").ToLocalChecked(), Nan::GetFunction(Nan::New<FunctionTemplate>(equihash)).ToLocalChecked());
  Nan::Set(target, Nan::New("sha256d").ToLocalChecked(), Nan::GetFunction(Nan::New<FunctionTemplate>(sha256d)).ToLocalChecked());
}

NODE_MODULE(hashing, init)
