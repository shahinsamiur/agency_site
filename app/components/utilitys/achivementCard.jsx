export default function AchivementCard({ data }) {
  return (
    <div className="flex justify-start items-start gap-5 ">
      <div className=" border box-border border-text relative w-20 h-10! lg:w-24! lg:h-18! flex justify-center items-center">
        <h1 className="text-center text-2xl! lg:text-5xl! text-secondary!">
          {data.index}
        </h1>

        <div className="size-2 -top-1 -left-1 absolute rounded-full bg-text"></div>
        <div className="size-2 -top-1 -right-1 absolute rounded-full bg-text"></div>
        <div className="size-2 -bottom-1 -left-1 absolute rounded-full bg-text"></div>
        <div className="size-2 -bottom-1 -right-1 absolute rounded-full bg-text"></div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl">{data.title}</h2>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
