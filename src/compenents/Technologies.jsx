import { SiGitlab } from "react-icons/si";
import { FaJenkins } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



  const Technologies = () => {
   return (
     <div className="border-b border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl"> Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGitlab className="text-5xl text-orange-700" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJenkins className="text-5xl text-black" />
            </div>


            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLinux className="text-5xl text-black" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-5xl text-blue-500" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTerraform className="text-5xl text-indigo-900" />
            </div>


            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl text-cyan-700" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes className="text-5xl text-sky-500" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-5xl text-orange-500" />
            </div>

            

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-5xl text-cyan-700" />
            </div>

        </div>
       
     </div>
   )
 }
 
 export default Technologies
 