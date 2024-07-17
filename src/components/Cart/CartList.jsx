"use client";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";

import useAuth from "@/hooks/useAuth";
import { getUserCartItems, removeCourseFromCart } from "@/api/courses";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Link from "next/link";
import Loader from "../Shared/Loader";
import toast from "react-hot-toast";

const CartList = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  // Fetch cart items count using React Query
  const {
    data: cartItems,
    refetch,
    isLoading,
  } = useQuery(
    ["cartItems", user?.email],
    async () => await getUserCartItems(user?.email),
    {
      enabled: !!user?.email, // Only fetch if user email is available
    }
  );

  const mutation = useMutation(
    (courseId) => removeCourseFromCart(courseId, user?.email),
    {
      onSuccess: () => {
        // Invalidate and refetch the cart items query
        queryClient.invalidateQueries(["cartItems", user?.email]);
        toast.success("Course removed from cart");
      },
    }
  );
  const handleRemoveFromCart = (courseId) => {
    mutation.mutate(courseId);
  };
  // Calculate total price
  const getTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) return 0;

    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price; // Assuming item.price is the price of each item
    });
    return totalPrice;
  };

  if (isLoading) return <Loader />;

  return (
    <section className="py-24 relative">
      <div className="w-full px-4 md:px-5 lg-6 mx-auto backdrop-blur-sm bg-white/10 rounded-3xl py-10">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center ">
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <>
            <div>
              <h1>No items in cart</h1>
            </div>
          </>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="backdrop-blur-3xl bg-white/10 rounded-3xl border-2 text-white border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8  gap-y-4 "
            >
              <div className="col-span-12 lg:col-span-2 img box">
                <Image
                  width={180}
                  height={180}
                  src={item.img}
                  alt={item.title}
                  className="max-lg:w-full lg:w-[300px] h-full "
                />
              </div>
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 ">
                    {item.title}
                  </h5>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="rounded-full transition-all duration-200 border hover:bg-red-200 p-2.5  hover:text-red-400"
                  >
                    <MdOutlineDeleteOutline className="text-xl h-6 w-6  " />
                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-200 mb-6">
                  {item.description.slice(0, 150)}...
                  <Link href={`/course/${item._id}`} className="text-pink-600">
                    More....
                  </Link>
                </p>
                <div className="flex justify-between items-center">
                  <h6 className="text-pink-600 font-manrope font-bold text-2xl leading-9 text-right">
                    Price : {item.price} (BDT)
                  </h6>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5 ">
            <button className="rounded-full py-2.5 px-3 bg-pink-50 text-pink-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-pink-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-pink-600 flex items-center">
              <span>{getTotalPrice()}</span> <span className="">(BDT)</span>
            </h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-white text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <Link
            href={"/checkout"}
            disabled={getTotalPrice() === 0}
            className="rounded-full flex justify-center py-4 px-6 bg-pink-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold text-lg  text-center transition-all duration-500 hover:bg-pink-700 "
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CartList;
