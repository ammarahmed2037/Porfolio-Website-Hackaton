import Image from "next/image"


export default function Home(){
  return(
    <div className="flex flex-col justify-center items-center font-extrabold">
        <h1 className="text-8xl ">AMMAR AHMED</h1>
        
          <Image src="/ammar.jpg" alt="LOGO" width={400} height={140} className="curve-right" />
        
        <h1 className="text-7xl ">PORTFOLIO</h1>
        <h1 className="text-2xl my-1 text-purple-600" >THE NEXT.JS DEVELOPER</h1>
        
        

    </div>
  )
}
