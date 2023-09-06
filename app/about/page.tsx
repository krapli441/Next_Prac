import Link from "next/link";
import Header from "@/components/header";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p>about 페이지</p>
        <Link href={"/"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            메인으로 돌아가기
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
