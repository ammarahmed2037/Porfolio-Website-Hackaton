import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1 className="text-6xl font-bold mx-10 my-8">REACH OUT TO ME</h1>

      <div className="flex flex-row my-3 mx-10">
        <Image src="/pic4.jpg" alt="pic4" width={450} height={150} className="mx-10 border-4 border-pink-700 rounded-lg" />
        <div className="flex flex-col mx-40 justify-center text-2xl my-3 p-5 text-purple-300 border-4 border-pink-700 rounded-lg">
       
          <h1 className="my-2"><b className="text-purple-900">ADDRESS</b><br /> A 365 Block "L" North Nazimabad</h1>
          <h1 className="my-2"><b className="text-purple-900">Email</b><br />ammarahmed2037@gmail.com</h1>
          <h1 className="my-2"><b className="text-purple-900">Contact</b><br />+92 319 3895181</h1>
        </div>
      </div>
    </div>
  );
}
