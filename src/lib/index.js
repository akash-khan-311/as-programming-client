import { useQuery } from "@tanstack/react-query";

const GetAllCourse = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => data);
    },
  });
  return { data, isLoading, isError };
};

export default GetAllCourse;
