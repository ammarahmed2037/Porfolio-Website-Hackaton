import Image from "next/image";

export default function Projects() {
  return (
    <div className="justify-center my-6">
      <h1 className="text-7xl font-extrabold text-center my-6">MY PROJECTS</h1>
      <div className="flex flex-row justify-center items-center gap-x-6  my-6">
        <div>
          <Image src="/s1.png" alt="project1" width={650} height={300} className="border-4 border-pink-700 rounded-lg"/>
          <h1 className="text-center text-balance my-2 font-semibold">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero</h1>
        </div>

 
        <div className="mt-24">
          <Image src="/s2.png" alt="project2" width={650} height={300} className="border-4 border-pink-700 rounded-lg" />
          <h1 className="text-center text-balance my-2 font-semibold">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero</h1>
        </div>

        <div>
          <Image src="/s3.png" alt="project3" width={650} height={300} className="border-4 border-pink-700 rounded-lg" />
          <h1 className="text-center text-balance my-2 font-semibold">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero</h1>
        </div>
      </div>
      <br/>
      <br/>

      
    </div>
  );
}
