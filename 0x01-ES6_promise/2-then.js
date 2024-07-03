export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: success
      }).then(console.log('Got a response from the API'));
    } else {
      reject(new Error());
    }
  });
}
