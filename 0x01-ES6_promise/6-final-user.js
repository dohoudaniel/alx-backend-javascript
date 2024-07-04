import signUpUser from './4-user-promise.';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser(firstName, lastName);
  const newPhoto = uploadPhoto(fileName);

  return Promise.allSettled([newUser, newPhoto])
    .then((values) => {
      // Initialize an empty array to be returned
      const result = [];
      values.forEach((element) => {
        if (element.status === 'fulfilled') {
          // Appending the resolution result to the `result` array:
          // 'status: status_of_the_promise, value: value returned by the Promise'
          result.push({ status: element.status, value: element.value });
        } else {
          // Appending the rejection result to the `result` array:
          // 'status: status_of_the_promise, value: error returned by the Promise'
          result.push({ status: element.status, value: `${element.reason}` });
        }
      });
    });
}
