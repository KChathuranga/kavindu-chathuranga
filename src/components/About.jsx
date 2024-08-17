import { SKILLS } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-5 text-center text-4xl">Skills</h1>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{ x: 0 , opacity: 1 }}
                initial={{ x: -100 , opacity: 0 }}
                transition={{ duration: 0.5}}
                className="w-full lg:w-1/2">
                <div className="flex items-center justify-center">
                    <p className="my-2 max-w-xl py-12">
                        <h2 className="my-5 underline text-2xl">Soft Skills</h2>
                        <ul className="list-disc pl-5">
                            {SKILLS.softSkills.map((skill, index) => (
                            <li key={index} className="my-1">{skill}</li>
                            ))}
                        </ul>
                    </p>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{x: 0 , opacity: 1 }}
                initial={{ x: 100 , opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-12">
                        <h2 className="my-5 underline text-2xl">Technical Skills</h2>
                        <div className="flex flex-wrap">
                            <ul className="list-disc pl-5 w-full sm:w-1/2">
                            {SKILLS.technicalSkills.slice(0, Math.ceil(SKILLS.technicalSkills.length / 2)).map((skill, index) => (
                                <li key={index} className="my-1">{skill}</li>
                            ))}
                            </ul>
                            <ul className="list-disc pl-5 w-full sm:w-1/2">
                            {SKILLS.technicalSkills.slice(Math.ceil(SKILLS.technicalSkills.length / 2)).map((skill, index) => (
                                <li key={index} className="my-1">{skill}</li>
                            ))}
                            </ul>
                        </div>
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
