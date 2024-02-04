const GETUSERS_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/user/`;

export const getUserByName = async (username) => {
  try {
    const response = await fetch(`${GETUSERS_ENDPOINT}${username}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
