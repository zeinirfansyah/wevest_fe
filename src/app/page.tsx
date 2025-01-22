import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center">
          <div>
            <Image
              src="/bookora.png"
              alt="bookora"
              width={200}
              height={200}
              className="w-80"
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            velit?
          </div>
        </div>
      </div>
    </>
  );
}
