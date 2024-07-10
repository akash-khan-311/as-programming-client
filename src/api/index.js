import { mutate } from "swr";
import { clearCoockie } from "./auth";

const createFetchSecure = () => {
  const fetchSecure = async (url, method = "GET", body = null) => {
    const fetchOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${process.env.BASE_URL}${url}`,
        fetchOptions
      );

      if (response.status === 401 || response.status === 403) {
        await clearCoockie();
        window.location.replace("/login");
        throw new Error("Unauthorized");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch");
      }

      // Revalidate data for mutating requests
      if (["POST", "PATCH", "PUT", "DELETE"].includes(method)) {
        // Assuming you have a revalidate function or use SWR's mutate function here
        mutate(url); // Revalidate data
      }

      return data;
    } catch (error) {
      console.error("Error in fetchSecure:", error);
      throw error;
    }
  };

  return fetchSecure;
};

export default createFetchSecure;
