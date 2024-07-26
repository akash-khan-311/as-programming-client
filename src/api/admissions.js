import fetchSecure from ".";

export const completePurchase = async (email, courseInfo, shippingDetails) => {
  const result = await fetchSecure("/order", "POST", {
    email,
    courseInfo,
    shippingDetails,
  });
  return result;
};
