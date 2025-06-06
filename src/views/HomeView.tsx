import "../app/globals.css";
import Image from "next/image";
export const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col text-center items-center justify-center bg-white p-[16px] pb-[40px] rounded-[20px] max-w-[320px]">
        <Image
          src="/image-qr-code.png"
          alt="QR Code"
          width={288}
          height={288}
          className="rounded-[10px]"
        />
        <p className="text-preset-1 text-slate-900 pt-[24px] pb-[16px]">
          Improve your front-end skills by building projects
        </p>
        <p className="text-preset-2 text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
