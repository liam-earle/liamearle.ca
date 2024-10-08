import { Github, Linkedin } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";


const Sidebar = () => {
	const scrollPosition = useScrollPosition();

	return (
		<div className="w-1/3 fixed hidden lg:block pl-24">
			<div className="pt-24 text-5xl font-bold">
				Liam Earle
			</div>
			<div className="pt-4 text-xl">
				Computer Engineering Student
			</div>
			<div className="pt-4 text-gray-400">
				I'm a Computer Engineering student at Memorial University of Newfoundland with strong interest and understanding of Full-Stack and Mobile Development.
			</div>
			<div className="pt-24 flex flex-col space-y-4 text-sm">
				<div className="flex flex-row items-center space-x-3 group">
					<hr className={`ease-in-out duration-150 h-px w-7 group-hover:w-12 border-0 bg-gray-500 ${scrollPosition <= 350 ? "w-12" : ""}`} />
					<a href="#about" className={`text-gray-300 group-hover:text-gray-100 ${scrollPosition <= 350 ? "text-gray-100" : ""}`}>
						ABOUT
					</a>
				</div>
				<div className="flex flex-row items-center space-x-3 group">
					<hr className={`ease-in-out duration-150 h-px w-7 group-hover:w-12 border-0 bg-gray-500 ${scrollPosition > 350 && scrollPosition <= 1120 ? "w-12" : ""}`} />
					<a href="#experience" className={`text-gray-300 group-hover:text-gray-100 ${scrollPosition > 350 && scrollPosition <= 1120 ? "text-gray-100" : ""}`}>
						EXPERIENCE
					</a>
				</div>
				<div className="flex flex-row items-center space-x-3 group">
					<hr className={`ease-in-out duration-150 h-px w-7 group-hover:w-12 border-0 bg-gray-500 ${scrollPosition > 1120 ? "w-12" : ""}`} />
					<a href="#projects" className={`ease-in-out duration-150 text-gray-300 group-hover:text-gray-100 ${scrollPosition > 1120 ? "text-gray-100" : ""}`}>
						PROJECTS
					</a>
				</div>
			</div>
			<div className="pt-24 flex flex-row space-x-5 text-sm">
				<a href="https://www.linkedin.com/in/liam-earle-98b553185/" className="opacity-50 hover:opacity-100">
					<Linkedin />
				</a>
				<a href="https://github.com/liam-earle" className="opacity-50 hover:opacity-100">
					<Github />
				</a>
			</div>
		</div>
	);
}

export default Sidebar;