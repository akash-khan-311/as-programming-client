"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { getOnly6Courses } from "@/data/data";
import CourseCard from "../../CourseCard";

const BestCourse = () => {
    const courses = getOnly6Courses();
    console.log(courses);
    return (
        <section className=''>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Explore Our Best Courses</h1>
            <Swiper breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} modules={[Autoplay, Pagination, Navigation]} className=''>
                {
                    courses.map(course => (
                        <SwiperSlide key={course.id} className=''>

                            <CourseCard data={course} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}
export default BestCourse;