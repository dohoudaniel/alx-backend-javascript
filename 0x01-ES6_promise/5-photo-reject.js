export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (!filename) {
      reject(`${filename} cannot be processed`);
    }
  });
}
