"use client";
import { getRole, getUserCoverImg, updateUserCoverImg } from "@/api/auth";
import useAuth from "@/hooks/useAuth";
import { imageUpload } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaCamera } from "react-icons/fa6";

const Profile = () => {
  const { user, updateUserProfileImage } = useAuth();
  const [role, setRole] = useState(null);

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState(
    user.photoURL ||
      "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
  );
  const imageRef = useRef(null);

  // const handleCoverImgChange = async () => {
  //   try {
  //     const file = coverImgRef.current.files[0];
  //     console.log(file);
  //     if (file) {
  //       const data = await imageUpload(file);
  //       if (!data) {
  //         toast.error("Image not found");
  //       }
  //       const imgUrl = data.data.display_url;
  //       console.log(imgUrl);
  //       const result = await updateUserCoverImg(user?.email, imgUrl);
  //       console.log(result);
  //     } else {
  //       toast.error("Please select an image");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleFileChange = async () => {
    try {
      setLoading(true);
      const file = imageRef.current.files[0];

      if (file) {
        const data = await imageUpload(file);
        const imgUrl = data.data.display_url;
        console.log(imgUrl);
        if (!imgUrl) {
          toast.error("Image not found");
          return;
        }
        await updateUserProfileImage(imgUrl);

        setProfileImage(imgUrl);
      } else {
        toast.error("Please select an image");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getRoleFromDb = async () => {
      const role = await getRole(user?.email);
      setRole(role);
    };
    // const getCoverImg = async () => {
    //   const coverImg = await getUserCoverImg(user?.email);
    //   if (!coverImg) {
    //     toast.error("Image not found");
    //     setCoverPhoto(
    //       "https://img.freepik.com/free-photo/light-gray-abstract-background_53876-101909.jpg"
    //     );
    //   }

    //   setCoverPhoto(coverImg);
    // };

    // getCoverImg();
    getRoleFromDb();
  }, [user.email]);

  return (
    <div className="mx-auto max-w-242.5">
      <div className="overflow-hidden rounded-sm border border-stroke backdrop-blur-lg bg-white/10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative -z-20 h-[140px] md:h-72">
          <Image
            src={
              "https://img.freepik.com/free-photo/light-gray-abstract-background_53876-101909.jpg"
            }
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={660}
          />
          <div className=" absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <input
                // ref={coverImgRef}
                // onChange={handleCoverImgChange}
                type="file"
                name="cover"
                id="cover"
                className="sr-only"
                accept="image/*"
              />
              <FaCamera />
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 text-center lg:pb-8">
          <div className=" mx-auto   w-full overflow-hidden ">
            <div className="relative block ">
              <Image
                width={100}
                height={100}
                alt="profile"
                src={profileImage}
                className="mx-auto object-cover rounded-full h-32 w-32  border-2 border-white "
              />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-1 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <FaCamera className="absolute bottom-0 right-2" />
                <input
                  ref={imageRef}
                  onChange={handleFileChange}
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <div className="">
            <h3 className="mb-1.5 text-2xl font-semibold text-white">
              {user?.displayName}
            </h3>
            <p className="font-medium uppercase text-white">{role}</p>

            <div className="mt-6 flex flex-col-reverse md:flex-row-reverse justify-between items-center">
              <div>
                <button className="bg-pink-500 py-1 px-3 text-white rounded-md">
                  Update Password
                </button>
              </div>
              <div className="mt-6.5 flex flex-col md:justify-start md:items-start">
                <p className="text-base font-medium text-white">
                  Email: {user?.email}
                </p>
                <p className="text-base font-medium text-white">
                  Name: {user?.displayName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
