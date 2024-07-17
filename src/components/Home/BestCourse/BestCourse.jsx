"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CourseCard from "@/components/Shared/CourseCard";
import Container from "@/components/Shared/Container";

import { getBeginnerCourses } from "@/api/courses";
import { useEffect, useState } from "react";

const BestCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getBeginnerCourses();
        setCourses(data);
      } catch (error) {}
    };
    fetchCourses();
  }, []);

  return (
    <section className="">
      <Container>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Explore Our Best Courses
        </h1>
        <div className="mt-10">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            spaceBetween={30}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className=""
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id} className="">
                <CourseCard data={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
export default BestCourse;
