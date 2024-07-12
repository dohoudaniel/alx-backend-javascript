export default function cleanSet(set, startString) {
  // Check if the startString is empty and return an empty string
  if (!startString || startString.length === 0) {
    return '';
  }
  const cleanSet = [];
  for (const value of set) {
    // Checking if value starts with startString
    if (value.startsWith(startString)) {
      cleanSet.push(value.substring(startString.length));
    }
  }
  // Join the final array with a hyphen and a resulting string
  return cleanSet.join('-');
}
