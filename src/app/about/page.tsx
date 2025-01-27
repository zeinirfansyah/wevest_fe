import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#fff] transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen">
          <div className=" flex flex-col lg:flex-row justify-between gap-10 px-4 ">
            <div
              id="foto"
              className="lg:w-1/3 flex justify-center items-center lg:my-7"
            >
              <Image
                src="https://images.unsplash.com/photo-1737749309296-4aacdefecdae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={420}
                alt="Zein Irfansyah"
                className="transition duration-500 w-[320px] h-[420px] object-cover rounded-2xl lg:rounded-br-[100px] shadow outline-dashed outline-primary text-gray-400 outline-2 outline-offset-8"
              />
            </div>
            <div id="about" className="flex flex-col gap-4  lg:w-2/3">
              <h1 className="text-2xl lg:text-3xl font-bold">
                <span className="text-primary">We</span>Vest.
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quo vel harum asperiores consectetur autem earum
                aut iusto ea quos libero quibusdam voluptatum, incidunt dicta
                voluptatem numquam. Accusamus, incidunt accusantium! Totam,
                reiciendis fugiat nemo at, natus culpa quasi dolor consequuntur
                nobis animi optio eos dicta suscipit unde sunt quis sint.
              </p>
              <p className="text-gray-400">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cupiditate delectus ea dolores suscipit esse natus. Atque, nam hic, debitis labore voluptatibus natus eos repellendus facere omnis vero quibusdam suscipit.
              </p>
              <hr className="border-[#E5E5E5] w-full md:w-1/2 my-2" />
              <div id="contact" className="flex flex-col">
                <a
                  href=""
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-all duration-500 flex gap-2"
                >
                  <MessageCircle/>
                  +620 1234 ****
                </a>
                <a
                  href=""
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-all duration-500 flex gap-2"
                >
                  <MessageCircle/>
                  wevest_instagram
                </a>
                <a
                  href=""
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-all duration-500 flex gap-2"
                >
                 <MessageCircle/>
                  Bogor, Jawa Barat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
