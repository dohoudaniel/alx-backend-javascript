import signUpUser from './4-user-promise.';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser();
  const newPhoto = uploadPhoto();

  return Promise.all([newUser, newPhoto])
    .then(() => { [ {} ] })
}
