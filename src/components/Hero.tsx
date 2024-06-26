import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImage from "../../public/images/profile.png";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="profile"
        // import 해오는 이미지는 width, height 을 제공하지 않아도 자동으로 처리해준다.
        // src="/images/profile.png"
        // width={250}
        // height={250}
        priority
      />
      <h2 className="text-xl font-bold">{`Hi, I'm yiwoojung`}</h2>
      <h3 className="text-lg font-semibold">Frontend Engineer</h3>
      <p className="text-sm">꿈을 코딩하는 사람, 드림코더 앨리</p>

      <Link href="/contact">
        <button className="bg-yellow-500 rounded-xl text-sm font-medium py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
