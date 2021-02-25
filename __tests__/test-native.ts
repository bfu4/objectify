import { binaryFrom } from "../src";

test("Fail Unknown Binary", () => {
    expect(binaryFrom('nothing')).toBeNull();
})

test("Pass Found Binary", () => {
    expect(binaryFrom('hello')).toBeDefined();
})

test("Run Native Print", () => {
    console.log(binaryFrom('hello').showcaseNodeGypImpl());
})
