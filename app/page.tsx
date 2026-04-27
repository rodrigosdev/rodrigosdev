export default function Home() {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });

  return <div className="h-[300vh]">{promise}</div>;
}
