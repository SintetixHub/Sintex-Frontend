const GETPOSTS_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/post/`;

export const getAllPosts = async () => {
  try {
    const response = await fetch(GETPOSTS_ENDPOINT);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
