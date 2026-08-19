import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const Resume = () => {
    useEffect(() => {
        document.title = "Sarthak Tajane - Resume";
    }, []);

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-16 print:p-0">
            {/* Print Controls */}
            <div className="max-w-[210mm] mx-auto mb-8 flex justify-end gap-4 print:hidden">
                <Button onClick={() => window.print()}>
                    <Printer className="mr-2 h-4 w-4" />
                    Print / Save PDF
                </Button>
            </div>

            {/* Resume Content - A4 Width */}
            <div className="max-w-[210mm] mx-auto bg-white print:max-w-none">

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-4 mb-6">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">Sarthak Sunil Tajane</h1>
                    <p className="text-xl font-medium mb-2">Aspiring Full-Stack Developer | IT Student</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>📍 Navi Mumbai</span>
                        <span>📧 sarthaktajane07@gmail.com</span>
                        <span>🔗 <a href="https://www.linkedin.com/in/sarthak-tajane-a3a05a312/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></span>
                        <span>🐙 <a href="https://github.com/sarthaktajane07" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></span>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Career Objective</h2>
                    <p className="text-sm leading-relaxed text-justify">
                        Motivated Information Technology student with hands-on experience in full-stack web development and a strong foundation in programming and data structures. Skilled in building responsive user interfaces and backend APIs using modern web technologies. Seeking internship and entry-level opportunities to apply technical skills and grow as a professional developer.
                    </p>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Education</h2>
                    <div className="mb-3">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold">Bachelor of Technology (Information Technology)</h3>
                            <span className="text-sm font-medium">2024 – 2028</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <p className="italic">ITM Skill University</p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Technical Skills</h2>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Languages:</span>
                            <span>C++, Python, Java, JavaScript</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Frontend:</span>
                            <span>HTML5, CSS3, JavaScript, React.js</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Backend:</span>
                            <span>Node.js, Express.js</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Databases:</span>
                            <span>MongoDB, MySQL, Firebase</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Tools:</span>
                            <span>Git, GitHub, VS Code, Postman</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold w-36 flex-shrink-0">Core Subjects:</span>
                            <span>Data Structures & Algorithms, Operating Systems, DBMS</span>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Projects</h2>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold">DineFlow – Restaurant Table Management System</h3>
                            <div className="text-sm">
                                <a href="https://github.com/sarthaktajane07/DineFlow" className="text-blue-800 hover:underline mr-3">GitHub</a>
                                <a href="https://dineflowapp.vercel.app/" className="text-blue-800 hover:underline">Live Demo</a>
                            </div>
                        </div>
                        <p className="text-sm italic mb-1">MERN-based Academic Project</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                            <li>Designed and developed a role-based restaurant management system.</li>
                            <li>Implemented backend REST APIs using Node.js & Express.js.</li>
                            <li>Used MongoDB for efficient data storage and handling.</li>
                            <li>Built responsive frontend using React.js.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold">Financial Fraud Detection System</h3>
                            <a href="https://github.com/sarthaktajane07/Financial_fraud_Detecto" className="text-sm text-blue-800 hover:underline">GitHub</a>
                        </div>
                        <p className="text-sm italic mb-1">Frontend + Logic-Based Project</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                            <li>Developed a financial fraud detection system using HTML, CSS, and JavaScript.</li>
                            <li>Implemented DSA-based logic (arrays, hash maps) to analyze transaction patterns.</li>
                            <li>Detected suspicious transactions (duplicate entries, abnormal amounts).</li>
                            <li>Built an interactive UI to display transaction status and flagged fraud cases.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold">Student Fun Moments Gallery</h3>
                            <div className="text-sm">
                                <a href="https://github.com/sarthaktajane07/-Student-Fun-Moments-Gallery" className="text-blue-800 hover:underline mr-3">GitHub</a>
                                <a href="https://sarthaktajane.netlify.app/" className="text-blue-800 hover:underline">Live Demo</a>
                            </div>
                        </div>
                        <p className="text-sm italic mb-1">Web Development Project</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                            <li>Developed a responsive multi-page gallery website using HTML, CSS, JS.</li>
                            <li>Implemented event-based image layout and navigation.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold">Coinzilla – Crypto Trading App (UI Prototype)</h3>
                            <a href="https://github.com/sarthaktajane07/Coinzilla-clone" className="text-sm text-blue-800 hover:underline">GitHub</a>
                        </div>
                        <p className="text-sm italic mb-1">Frontend Prototype Project</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                            <li>Created a responsive UI prototype inspired by Coinzilla trading platform.</li>
                            <li>Designed dashboard-style layout using HTML, CSS, JavaScript / React.js.</li>
                        </ul>
                    </div>

                </section>

                {/* Strengths */}
                <section>
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Strengths</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 grid grid-cols-2 gap-x-4">
                        <li>Strong problem-solving ability</li>
                        <li>Quick learner and adaptable</li>
                        <li>Good understanding of full-stack workflow</li>
                        <li>Team collaboration and communication</li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default Resume;
