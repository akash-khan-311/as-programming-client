"use client";
import { getUserCartItems } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "react-query";

const FetchCartItems = () => {
  const { user } = useAuth();
  // Fetch user's cart items

  const {
    data: cartItems,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => await getUserCartItems(user?.email),
    enabled: !!user?.email,
  });

  return { cartItems, isError, isLoading, refetch };
};
export default FetchCartItems;
