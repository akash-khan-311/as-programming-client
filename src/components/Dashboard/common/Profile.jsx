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
  const { user, updateUserProfile } = useAuth();
  const [role, setRole] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(coverPhoto);
  const [profileImage, setProfileImage] = useState(
    user.photoURL ||
      "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
  );
  const imageRef = useRef(null);
  const coverImgRef = useRef(null);
  const handleCoverImgChange = async () => {
    try {
      const file = coverImgRef.current.files[0];

      if (file) {
        const data = await imageUpload(file);
        if (!data) {
          toast.error("Image not found");
        }
        const imgUrl = data.data.display_url;
        const result = await updateUserCoverImg(user?.email, imgUrl);
        console.log(result);
      } else {
        toast.error("Please select an image");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        await updateUserProfile(user.displayName, imgUrl);
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
    const getCoverImg = async () => {
      const coverImg = await getUserCoverImg(user?.email);
      setCoverPhoto(coverImg);
    };

    getCoverImg();
    getRoleFromDb();
  }, [user.email]);

  return (
    <div className="mx-auto max-w-242.5">
      <div className="overflow-hidden rounded-sm border border-stroke backdrop-blur-sm bg-white/10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative mt-5 z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 ">
              <Image
                src={user?.photoURL}
                width={160}
                height={160}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="profile"
              />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <FaCamera />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-white">
              Akash Khan
            </h3>
            <p className="font-medium text-white uppercase">{role}</p>
            <div className="mx-auto mb-5.5 mt-4.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-white">259</span>
                <span className="text-sm text-white">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-white">129K</span>
                <span className="text-sm text-white">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-white">2K</span>
                <span className="text-sm text-white">Following</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-white">About Me</h4>
              <p className="mt-4.5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
