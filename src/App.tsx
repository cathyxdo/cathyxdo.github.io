import { useState, useEffect } from "react";
import "./App.css";
import { FaGithub, FaEnvelope } from "react-icons/fa"; // Import the specific icons you need
import Launch from "@mui/icons-material/Launch";
import AssignmentIcon from '@mui/icons-material/Assignment';
function App() {
    const hobbies = [
      "🥾 hiking",
      "🏕️ camping",
      "🎒 backpacking",
      "🪡 sewing",
      "🎨 crafting",
      "🍰 baking",
    ];
    
    const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentHobbyIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
      }, 2000); // Change every 2 seconds
  
      return () => clearInterval(interval); // Clean up on component unmount
    }, [hobbies.length]);

  return (
    <div className=" mt-10 px-20 selection:bg-violet-200">
      <div className="flex flex-col lg:flex-row gap-10 justify-center px-6 md:px-20">
        <div className="flex justify-center md:items-center">
          <img src={"/cathy.jpg"} alt="cd" className="rounded-full w-80 lg:w-auto" />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <div>
            <h1 className="text-xl mb-4"> Hi 👋🏼 I'm</h1>
            <h2 className="text-5xl font-extrabold">Cathy Do</h2>
          </div>
          <p className="text-xl">
            I am a software engineer based in Washington State. I like data and
            coding digital experiences.
          </p>
          <p>
            Previously I have been a business/data analyst, where some of my
            responsibilities included: scoping out business requirements, leading
            technical projects, training internal teams on process improvements,
            analyzing data to determine gaps in systems, and building data
            dashboards.
          </p>
          <p>
            I have a Bachelor's of Science in Applied & Computational Math Sciences
            <a
              href="https://acms.washington.edu/"
              target="_blank"
              className="pl-1 font-semibold text-violet-600"
            >
              (ACMS)
            </a>{" "}
            from the University of Washington. My degree concentration is in
            Discrete Math and Algorithms.
          </p>
          <div className="flex gap-4">
            <a href="mailto:catherinexdo@gmail.com" className="hover:text-violet-500">
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/cathyxdo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-500"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h2 className="font-bold text-4xl mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-stone-300 rounded-md p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Weigh My Pack</h3>
            <div className="flex ">
              <div className="">
                <div className="mb-4">
                  Create packing lists for your backpacking trip, visualize pack weights, and share with others
                </div>
                <div className="my-4">
                  <img src={"/weighmypack.png"} alt="weighmypack" className="" />

                </div>
                <div className="">
                  <div className="font-semibold  text-stone-500 mb-2">
                    Tools Used
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      Django Rest Framework
                    </p>
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      React
                    </p>
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      Chart.js
                    </p>

                  </div>
                  <div className="mt-8 flex gap-4 font-semibold items-center">
                    <button className="items-center font-semibold rounded-md text-lg border-2 border-black p-2.5 hover:text-white hover:bg-black "><AssignmentIcon className="mr-2"/>Project Write Up</button>
                    <a href="https://github.com/cathyxdo" target="_blank" className="flex items-center gap-1 hover:border-violet-600 hover:text-violet-600 hover:border-b-2"><Launch /><p>Website</p></a>
                    <a href="https://github.com/cathyxdo" target="_blank" className="flex items-center gap-1  hover:border-violet-600 hover:text-violet-600 hover:border-b-2"><FaGithub /> <p>Code</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-stone-300 rounded-md p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Linknbio</h3>
            <div className="flex ">
              <div className="">
                <div className="mb-4">
                  Create personalized page to share as a single link on social
                  media accounts. Similar to apps like Linktree.
                </div>
                <div className="my-4">
                  <img src={"/linknbio.png"} alt="linknbio" className="" />

                </div>
                <div className="">
                  <div className="font-semibold  text-stone-500 mb-2 tracking-wide">
                    TOOLS USED
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      Django Rest Framework
                    </p>
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      Docker
                    </p>
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      d3
                    </p>
                    <p className="bg-violet-200 text-violet-900 rounded-full font-semibold text-sm py-2 px-4 whitespace-nowrap">
                      Next.js
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4 font-semibold items-center">
                    <button className="items-center font-semibold rounded-md text-lg border-2 border-black p-2.5 hover:text-white hover:bg-black"><AssignmentIcon className="mr-2"/>Project Write Up</button>
                    <a href="https://github.com/cathyxdo" target="_blank" className="flex items-center gap-1 hover:border-violet-600 hover:text-violet-600 hover:border-b-2"><Launch /><p>Website</p></a>
                    <a href="https://github.com/cathyxdo" target="_blank" className="flex items-center gap-1  hover:border-violet-600 hover:text-violet-600 hover:border-b-2"><FaGithub /> <p>Code</p></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="mb-12">
        <h3 className="font-semibold text-xl ">Just for fun</h3>
        <div>
            Obsessed with all things related to <p className="text-violet-900 bg-violet-200 rounded-full px-4 py-2 inline font-semibold">{hobbies[currentHobbyIndex]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
