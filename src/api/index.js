import { clearCoockie } from "./auth";

const fetchSecure = async (url, method = "GET", body = null) => {
  const fetchOptions = {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "include", // Ensures cookies are sent
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  console.log(process.env.NEXT_PUBLIC_BASE_URL, url);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      fetchOptions
    );

    if (response.status === 401 || response.status === 403) {
      await clearCoockie();

      // Redirect or handle unauthorized access
      window.location.href = "/login"; // Redirect to login
      return;
    }

    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else if (!contentType) {
      throw new Error("No content-type provided in the response");
    } else {
      const text = await response.text();
      throw new Error(
        `Unexpected content-type: ${contentType}\nResponse: ${text}`
      );
    }

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch");
    }

    return data;
  } catch (error) {
    console.error("Error in fetchSecure:", error.message);
    throw new Error("Something went wrong. Please try again later.");
  }
};

export default fetchSecure;
