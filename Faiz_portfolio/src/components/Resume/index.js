import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Experience
      </div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <br/><br/><br/><br/><br/><br/><br/>
            
            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white ml-28">
              Associate Software Engineer
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              June, 2023 - present
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
              I work here as a back end developer in python FastAPI module. My role here is to develop APIs with REST standards and storing it in the database. I also have worked on ReactJS, used tools and services like AWS Cognito, AWS amplify, terraform, and worked on MySQL and PostgreSQL database along with liquibase.
            </p>
            
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"C/C++"} percent={65} />
            <BarGraph name={"Html/CSS"} percent={60} />
            <BarGraph name={"Javascript"} percent={60} />
            <BarGraph name={"ReactJS"} percent={65} />
            <BarGraph name={"Python"} percent={80} />
            <BarGraph name={"FastAPI"} percent={70} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"AWS"} percent={20} />
          </div>

          <a
            href={require("../../assets/files/Daniel Resume.pdf")}
            download={"Dani's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
