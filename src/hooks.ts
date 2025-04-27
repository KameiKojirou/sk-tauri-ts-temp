// src/hooks.ts

// This code runs once when the app boots.
console.log("Client hook: App is booting up!");

// You can also export functions (like handleError) if you need hooks
// to intercept client navigation errors, for instance.
export function handleError(error: Error, event: unknown) {
  console.error("Client hook error:", error, event);
}