// @ts-check

// access('') // here it should suggest in 'hello-world' in quotation marks
// access("hello-world", { }); // here in {} it should suggest properties for 'hello-world' from types/indexExtensions.d.ts

// in both cases it ignores ts-check directive and does not report any errors

// Try this in VS Code for comparison