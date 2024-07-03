// Importing functions from the utils.js module
import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  //
  // Fulfilling multiple promises using the Promise.all() method
  return new Promise.all([photo, user])
    .then((promisesFulfilled) => { console.log(`${promisesFulfilled[0].body} ${promisesFulfilled[1].firstName} ${promisesFulfilled[1].lastName}`); })
    .catch(() => { console.log('Signup system offline'); })
}
