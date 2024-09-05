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
  const [coverPhotoLoading, setCoverPhotoLoading] = useState(false);
  const [profileImgLoading, setProfileImgLoading] = useState(false);

  const [profileImage, setProfileImage] = useState(
    user.photoURL ||
      "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
  );
  const [coverPhoto, setCoverPhoto] = useState(
    "https://img.freepik.com/free-photo/light-gray-abstract-background_53876-101909.jpg"
  );
  const imageRef = useRef(null);
  const coverImgRef = useRef(null);

  const handleFileChange = async () => {
    try {
      setProfileImgLoading(true);
      const file = imageRef.current.files[0];

      if (file) {
        const data = await imageUpload(file); // Upload image
        const imgUrl = data.data.display_url;
        console.log("Uploaded image URL:", imgUrl);

        if (!imgUrl) {
          toast.error("Image upload failed");
          return;
        }

        // Update user profile image in authentication state (Firebase or your custom auth system)
        await updateUserProfileImage(imgUrl);

        // Update the frontend state with the new image
        setProfileImage(imgUrl);

        toast.success("Profile image updated successfully");
      } else {
        toast.error("Please select an image");
      }
    } catch (error) {
      console.log("Error uploading image:", error);
      toast.error("Failed to update profile image");
    } finally {
      setProfileImgLoading(false);
    }
  };

  const handleCoverImgChange = async () => {
    try {
      setCoverPhotoLoading(true);
      const file = coverImgRef.current.files[0];
      if (file) {
        const data = await imageUpload(file);
        const imgUrl = data?.data?.display_url;
        console.log("Uploaded cover image URL:", imgUrl);
        if (!imgUrl) {
          toast.error("Image upload failed");
          return;
        }
        const result = await updateUserCoverImg(user?.email, imgUrl);
        console.log(result);
        setCoverPhoto(imgUrl);
        if (result.acknowledged && modifiedCount > 0) {
          toast.success("Cover image updated successfully");
        } else {
          toast.error("Failed to update cover image");
        }
      } else {
        toast.error("Please select an image");
      }
    } catch (error) {
      console.error("Error uploading cover image:", error);
    } finally {
      setCoverPhotoLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const role = await getRole(user?.email);
      const coverImg = await getUserCoverImg(user?.email); // Fetch cover image from DB
      setRole(role);
      if (coverImg) {
        setCoverPhoto(coverImg); // Update the cover photo state
      }
    };
    fetchUserData();
  }, [user.email]);

  return (
    <div className="mx-auto max-w-242.5 mt-10 lg:mt-0">
      <div className="overflow-hidden rounded-sm border border-stroke backdrop-blur-lg bg-white/10 shadow-default dark:border-strokedark ">
        <div className="relative -z-20 h-min-[140px] md:h-96">
          {coverPhotoLoading ? (
            <div className="animate-pulse bg-gray-300 h-full w-full rounded-tl-sm rounded-tr-sm"></div> // Skeleton
          ) : (
            <Image
              src={coverPhoto}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-center "
              width={800}
              height={800}
            />
          )}

          <div className="border absolute top-1 transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-25 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <input
                ref={coverImgRef}
                onChange={handleCoverImgChange}
                type="file"
                name="cover"
                id="cover"
                className="sr-only"
                accept="image/*"
              />
              <div className="flex items-center gap-x-5 ">
                <FaCamera />
                <span>Change Cover Photo</span>
              </div>
            </label>
          </div>
        </div>
        <div className="px-4  text-center lg:pb-8 ">
          <div className="mx-auto  bottom-0 w-full overflow-hidden ">
            <div className="relative inline-block">
              {profileImgLoading ? (
                <div className="animate-pulse bg-gray-300 h-32 w-32 rounded-full mx-auto"></div>
              ) : (
                <Image
                  width={500}
                  height={500}
                  alt="profile"
                  src={profileImage}
                  className="mx-auto  object-cover rounded-full h-32 w-32  border-2 border-white "
                />
              )}

              <label
                htmlFor="profile"
                className="absolute flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <FaCamera className="h-4 w-4" />
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
            <h3 className="mb-1.5 text-2xl font-semibold text-white">
              {user?.displayName}
            </h3>
            <p className="font-medium uppercase text-white">{role}</p>
          </div>
          <div className="">
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
