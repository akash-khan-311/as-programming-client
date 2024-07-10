import createFetchSecure from ".";

const fetchSecure = createFetchSecure();

// Save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "user",
    status: "verified",
  };
  const data = await fetchSecure(`users/${user?.email}`, "PUT", currentUser);
  return data;
};

// Get Token from server
export const getToken = async (email) => {
  const data = await fetchSecure(`/jwt`, "POST", { email });
  console.log("token paichi==============>");
  return data;
};

// Remove Token From Browser
export const clearCoockie = async () => {
  const data = await fetchSecure("/logout");
  return data;
};
// Get user role
export const getRole = async (email) => {
  const data = await fetchSecure(`/users/${email}`);
  return data.role;
};

// get all users
export const getAllUsers = async () => {
  const data = await fetchSecure("/users");
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
