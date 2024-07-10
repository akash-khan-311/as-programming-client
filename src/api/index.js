import { mutate } from "swr";
import { clearCoockie } from "./auth";

export const fetchSecure = async (url, method = "GET", body = null) => {
  console.log(body);
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
      `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      fetchOptions
    );

    if (response.status === 401 || response.status === 403) {
      await clearCoockie();
      window.location.replace("/login");
      throw new Error("Unauthorized");
    }

    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      throw new Error(
        `Unexpected content-type: ${contentType}\nResponse: ${text}`
      );
    }

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch");
    }

    // Revalidate data for mutating requests
    if (["POST", "PATCH", "PUT", "DELETE"].includes(method)) {
      mutate(url); // Revalidate data
    }

    return data;
  } catch (error) {
    console.error("Error in fetchSecure:", error.message);
    throw error;
  }
};
