const GETUSERS_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/user/`;

export const signup = async () => {
  try {
    const response = await fetch(GETUSERS_ENDPOINT);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
