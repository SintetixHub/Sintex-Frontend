const GETPROJECTS_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/project/`;

export const getAllProjects = async () => {
    try {
        const response = await fetch(GETPROJECTS_ENDPOINT);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};