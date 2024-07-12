export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer of size length
  // An ArrayBuffer is a fixed-length raw binary data buffer.
  const buffer = new ArrayBuffer(length);
  // Handling errors
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  // Create a DataView to interact with, and manipulate buffer's raw binary data
  const view = new DataView(buffer);
  // Setting the Int8 value at position
  view.setInt8(position, value);
  // Returning the view
  return view;
}
