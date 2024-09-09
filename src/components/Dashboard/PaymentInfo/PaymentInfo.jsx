"use client";

import { getPaymentInfo } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "react-query";
import PaymentInfoRow from "../TableRows/PaymentInfoRow";

const PaymentInfo = () => {
  const {
    data: paymentInfo,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paymentInfo"],
    queryFn: async () => await getPaymentInfo(),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(paymentInfo);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {paymentInfo.length ? (
              <table className="min-w-full leading-normal">
                <thead className="border-b backdrop-blur-lg bg-white/20 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      User Email
                    </th>
                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      tran id
                    </th>

                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Enrollment Date
                    </th>
                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Course PUrchase
                    </th>
                    <th
                      scope="col"
                      className="px-8 font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                  {/* Assignment row data */}{" "}
                  {paymentInfo &&
                    paymentInfo.map((payment) => (
                      <PaymentInfoRow
                        refetch={refetch}
                        key={payment._id}
                        info={payment}
                      />
                    ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-3xl text-white min-h-[calc(100vh-268px)] md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                No Assignment Details
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentInfo;
