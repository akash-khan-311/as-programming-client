import { clearCoockie } from "./auth";

const fetchSecure = async (url, method = "GET", body = null) => {
  const fetchOptions = {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
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

      // throw new Error('Unauthorized');
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

    return data;
  } catch (error) {
    console.error("Error in fetchSecure:", error.message);
    throw error;
  }
};

export default fetchSecure;
