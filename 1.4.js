// In this code, the _object is defined with properties like "name" and "age". We create a handler object with a get trap that always returns "404" for any property access.

// Next, we create a manipulatedObject using the Proxy constructor, passing in the _object and the handler. This creates a proxy object that wraps the original _object.

// When accessing properties on the manipulatedObject, the get trap intercepts the access and always returns "404" instead of the actual property value.

// So, in this case, no matter which property you access (name, age, or any other property), the output will always be "404".

const _object = {
    "name": "John",
    "age": 30
};

const handler = {
  get: function(target, prop) {
    return "404"; // Always return "404" for any property access
  }
};

const manipulatedObject = new Proxy(_object, handler);

console.log(manipulatedObject.name); // Output: "404"
console.log(manipulatedObject.age); // Output: "404"
console.log(manipulatedObject.anyProperty); // Output: "404"
