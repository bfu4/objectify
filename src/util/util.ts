import bindings from "bindings";

export function LOG(... str: any[]) {
    console.log("( LOG ) \u2728", str);
}

export function ERR(...optionalParams : any[]) {
    console.error("( ERROR ) \u26D4 ", optionalParams.join(", "));
}

export function binaryFrom(mod: string | bindings.Options) : any {
    try {
        return bindings(mod);
    } catch (err) {
        ERR("Could not find the binding! @ " + err.message);
        return null;
    }
}
