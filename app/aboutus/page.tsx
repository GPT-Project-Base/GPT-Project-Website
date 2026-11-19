import Image from "next/image";

/* This is the about us page */
export default function AboutUs() {
    return(
        <div className="min-h-screen bg-[#D4CBB1]">
            <div className="flex flex-col text-center">
                <h1 className="pt-30 text-5xl font-bold text-center text-black">
                    About Team GPT
                </h1>
                <p className="font-medium text-lg pt-10 text-center max-w-3xl mx-auto">
                    Learn more about the team behind this project and what our strengths are.
                </p>
                <p className="font-medium text-lg pt-20 text-center max-w-3xl mx-auto">
                    We are a group of Computer Science students at the California State University of Northridge, 
                    each with a diverse set of skills and experiences that we all bring to the table.
                </p>
            </div>
        </div>
    )
}