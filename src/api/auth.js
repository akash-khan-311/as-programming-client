import fetchSecure from ".";

// Save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "student",
    status: "verified",
  };
  const data = await fetchSecure(`/users/${user?.email}`, "PUT", currentUser);
  return data;
};

// Get Token from server
export const getToken = async (email) => {
  const data = await fetchSecure(`/jwt`, "POST", { email });
  console.log("token paichi==============>", data);
  return data;
};

// Remove Token From Browser
export const clearCoockie = async () => {
  const data = await fetchSecure("/logout", "GET");
  return data;
};
// Get All user for admin
export const getAllUsers = async () => {
  const data = await fetchSecure("/users", "GET");
  return data;
};

// Get user role
export const getRole = async (email) => {
  const data = await fetchSecure(`/user/${email}`, "GET");
  return data.role;
};

// get all user cover image
export const getUserCoverImg = async (email) => {
  const data = await fetchSecure(`/user/${email}`, "GET");
  return data.coverImg;
};

// Get user data from database
export const getUser = async (email) => {
  const data = await fetchSecure(`/users/${email}`, "GET");
  return data;
};

// Update user cover image
export const updateUserCoverImg = async (email, coverImg) => {
  const currentUser = {
    email,
    coverImg,
    status: "verified",
  };
  const data = await fetchSecure(`/users/update/${email}`, "PUT", currentUser);
  return data;
};

// Update user role
export const updateUserRole = async (email, role) => {
  const currentUser = {
    email,
    role,
    status: "verified",
  };
  const data = await fetchSecure(`/users/update/${email}`, "PUT", currentUser);
  return data;
};

// Become a instructor
export const becomeAnInstructor = async (email) => {
  const currentUser = {
    email,
    status: "requested",
  };
  const data = await fetchSecure(`/users//${email}`, "PUT", currentUser);
  return data;
};
