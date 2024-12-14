import Image from "next/image"

export default function Intro(){
    return(

        <div >
            <div className="flex mx-36">
                <h1 className="font-extrabold text-7xl">A LITTLE<br/>ABOUT ME</h1>
                <Image src="/pic2.jpg" alt="pic1" width={350} height={150} className="mx-24" />
            </div>

            
                <h1 className=" mx-64 my-11 font-bold text-center border-4 border-purple-700 text-balance p-2 text-purple-300  ">Assalam-u-Alaikum Dear, My Name Is Ammar Ahmed. I am <br/>the Student Of 3rd Semester In Sir Syed University.
                    I have <br/> a Good Skills In Developing the  Websites Of Various Models.<br/> Having Complete HandSet On "HTML,CSS,TAILWIND CSS" <br/>
                    And Utilize These skills In the Next.Js Framework In a Very <br/>Professinal Way. I am Able To Create Website Of Multiple <br/> And Single Pages.
                    I am also Design The Different kind Of <br/>Website like Porfolio,E-commerce And Any Kind Of Bussiness.
                </h1>

                



        </div>
        

        
    )
}