// Import the functions from utils.js
import { uploadPhoto, createUser } from './utils';

// Define the asyncUploadUser function
const asyncUploadUser = async () => {
  try {
    // Await the results of both async functions
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Return an object with the results if both succeed
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Return an empty object if any function fails
    return {
      photo: null,
      user: null,
    };
  }
};
export default asyncUploadUser;
