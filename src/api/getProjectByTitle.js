const GETPROJECTS_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/project/`;

export const getAllByTitle = async (title) => {
  try {
    const response = await fetch(`${GETPROJECTS_ENDPOINT}${title}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
