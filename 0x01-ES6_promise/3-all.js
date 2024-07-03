// Importing functions from the utils.js module
import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default function handleProfileSignup() {
  .then(() => { console.log(`${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`); })
  .catch(() => { console.log('Signup system offline'); })
}
