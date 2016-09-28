// Inlets and outlets.
inlets = 1;
outlets = 1;

// Play nice with external editors.
autowatch = 1;

// Export functions for test.
exports.bang = bang;
exports.zero = zero;

// Sample source...

var buffer = Array.apply(null, Array(64)).map(Number.prototype.valueOf, 0);

function zero(buffer) {
  var len = buffer.length;
  while (len--) {
    buffer[len] = 0;
  }
}

function bang() {
  post("bang!"); // Note that this will get bound to the console.
  outlet(0, buffer); // And this too :)
}
