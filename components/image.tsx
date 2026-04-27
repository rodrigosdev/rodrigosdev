import Image from "next/image";

const Portrait = () => {
  return (
    <div className="px-4 sm:px-0 w-full max-w-full sm:max-w-lg mx-auto xl:mx-0 xl:w-48 xl:max-w-none mb-4 xl:mb-0 xl:absolute xl:top-6 xl:right-6">
      <Image
        src="/portrait.png"
        alt="Rodrigo Santos - Portrait photo"
        width={512}
        height={512}
        loading="eager"
        className="object-cover w-32 h-32 sm:w-48 sm:h-48 xl:w-full xl:h-full grayscale"
      />
    </div>
  );
};

export { Portrait };
