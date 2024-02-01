const SIGNUP_ENDPOINT = `${import.meta.env.VITE_SERVER}/api/auth/signup`;

export const signup = async (username, password, email) => {
  try {
    const response = await fetch(SIGNUP_ENDPOINT, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
