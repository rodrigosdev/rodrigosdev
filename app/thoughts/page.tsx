import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
};

const Thoughts = () => {
  return (
    <div className="px-4 sm:px-0 max-w-full sm:max-w-lg w-full mx-auto text-xs pt-0 xl:pt-14 pb-14">
      <h1 className="text-left text-white mb-1">
        Thoughts<span className="animate-blink">_</span>
      </h1>
      <p className="text-left mb-4">Writing and Reflections</p>
    </div>
  );
};

export default Thoughts;
