import fetchSecure from ".";

export const completePurchase = async (email, courseIds, shippingDetails) => {
  const result = await fetchSecure("/order", "POST", {
    email,
    courseIds,
    shippingDetails,
  });
  return result;
};
