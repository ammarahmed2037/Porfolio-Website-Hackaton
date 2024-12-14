import Image from "next/image"

export default function Skills(){
    return(
        <div>
            <h1 className="font-bold text-7xl text-center my-11">SKILLS & <br/>EXPERTISE</h1>

            <div className="flex flex-row mx-28 my-12 justify-center items-center">
                <Image src="/i11.jpg" alt="pic1" width={290} height={50} className="border-4 border-pink-600"/>
                    <div className="text-purple-500">
                        <h1 className="font-bold text-2xl my-3 mx-11">DEVELOPMENT:</h1>
                            <ol className="mx-16">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>TAILWIND CSS</li>
                                <li>NEXT.JS</li>
                            </ol>

                        <h1 className="font-bold text-2xl my-3 mx-11">LANGUAGES:</h1>
                            <ol className="mx-16">
                                <li>PYTHON</li>
                                <li>C#</li>
                                <li>TYPESCRIPT</li>
                            </ol>
                </div>
            </div>


        </div>
    )
}