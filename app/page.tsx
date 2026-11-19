import Image from "next/image";

/* This is the home page! */
export default function Home() {
  return (
    <div className="bg-[#D4CBB1] min-h-screen">

      <div className="flex flex-col text-center">
        <h1 className="pt-30 text-5xl font-bold text-center text-black">
          Build a Society, Watch it Evolve
        </h1>
        <p className="font-medium text-lg pt-10 text-center max-w-3xl mx-auto">
          Create simulated populations, define social behaviors, and watch them evolve. Observe how ideas, opinions and relationships evolve in your society over time.
        </p>
      </div>
      
      <div className="flex flex-row grid grid-cols-2 justify-around justify-content pt-30">
        <div className="text-center max-w-sm mx-auto">
          <h2 className="text-3xl font-bold py-4">Create Your Own Society</h2>
          <p>Design populations of simulated individuals with each having their own different interests, opinions, and behavioral traits</p>
        </div>
      </div>

      <div className="flex flex-row grid grid-cols-2 justify-around justify-end py-30">
        <div>
          {/* placeholder for an image */}
          <p className="text-center">placeholder</p>
        </div>
        <div className="text-center max-w-sm mx-auto">
          <h2 className="text-3xl font-bold py-4">Watch It Evolve</h2>
          <p>Visualize how interactions happen between individuals and observe how behaviors and opinions evolve through a simulation.</p>
        </div>
      </div>

      <div className="flex flex-row grid grid-cols-2 justify-around justify-content pb-30">
        <div className="text-center max-w-sm mx-auto">
          <h2 className="text-3xl font-bold py-4">Analyze the Results</h2>
          <p>Explore emerging patterns in behaviors and opinions, compare outcomes, and investigate the different variables that influence your simulated population.</p>
        </div>
      </div>

    </div>
  )
}
