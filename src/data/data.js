const courses = [
  {
    id: 1,
    name: "Python for Beginners",
    description: "Learn the fundamentals of Python programming from scratch.",
    price: 99.99,
    duration: 1,
    img: "https://i.ibb.co/Bj3w38K/python.jpg",
    instructors: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "https://i.ibb.co/jZsqKJ3/instructor1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "JavaScript Web Development",
    description: "Master JavaScript and build dynamic web applications.",
    price: 129.99,
    duration: 5,
    img: "https://i.ibb.co/x6DMk2m/js.png",
    instructors: [
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avatar: "https://i.ibb.co/C1rmMxz/instructor2.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Java Programming Essentials",
    description: "Get started with Java and develop robust applications.",
    price: 149.99,
    duration: 4,
    img: "https://i.ibb.co/4V3J3vf/java.jpg",
    instructors: [
      {
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        avatar: "https://i.ibb.co/YZ5Cvkm/instructor3.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "C++ Advanced Techniques",
    description:
      "Take your C++ skills to the next level with advanced concepts.",
    price: 169.99,
    duration: 2,
    img: "https://i.ibb.co/NNb7TtZ/c.webp",
    instructors: [
      {
        name: "Alice Williams",
        email: "alice.williams@example.com",
        avatar: "https://i.ibb.co/7yk7RHq/instructor4.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Ruby on Rails Development",
    description: "Build web applications using Ruby on Rails framework.",
    price: 139.99,
    duration: 7,
    img: "https://i.ibb.co/ZJy2Nsd/ruby.png",
    instructors: [
      {
        name: "Robert Brown",
        email: "robert.brown@example.com",
        avatar: "https://i.ibb.co/WF45qhh/instructor5.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "PHP Web Development",
    description: "Learn PHP for server-side web development.",
    price: 119.99,
    duration: 11,
    img: "https://i.ibb.co/1XNWFnm/php.jpg",
    instructors: [
      {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        avatar: "https://i.ibb.co/Jc6x7qg/instructor6.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Swift iOS App Development",
    description: "Create iOS apps using the Swift programming language.",
    price: 159.99,
    duration: 13,
    img: "https://i.ibb.co/ggfrD5Q/ios.jpg",
    instructors: [
      {
        name: "James Wilson",
        email: "james.wilson@example.com",
        avatar: "https://i.ibb.co/9r6k8kQ/instructor7.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Go Programming Masterclass",
    description:
      "Become an expert in Go programming for systems and web development.",
    price: 179.99,
    duration: 4,
    img: "https://i.ibb.co/qkCht68/go.jpg",
    instructors: [
      {
        name: "Patricia Taylor",
        email: "patricia.taylor@example.com",
        avatar: "https://i.ibb.co/S0vq6Pv/instructor8.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "SQL Database Fundamentals",
    description: "Master SQL for database design and management.",
    price: 109.99,
    duration: 9,
    img: "https://i.ibb.co/c6djTpP/sql.jpg",
    instructors: [
      {
        name: "Linda Martinez",
        email: "linda.martinez@example.com",
        avatar: "https://i.ibb.co/3sVZp1P/instructor9.jpg",
      },
    ],
  },
];

export const getAllCourse = () => {
  return courses;
};

export const getOnly6Courses = () => {
  return courses.slice(0, 6);
};
