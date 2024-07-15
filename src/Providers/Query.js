"use client";

import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

const Query = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default Query;
