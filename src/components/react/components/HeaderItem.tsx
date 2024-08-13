type HeaderItemProps = {
  title: string;
  description: string;
  step: string;
};

export default function HeaderItem({
  title,
  description,
  step,
}: HeaderItemProps) {
  return (
    <div
      className={`${step} flex flex-col relative pt-3.5 pb-2.5 pl-[60px] w-[260px] before:absolute before:z-[9] before:left-0 before:top-0 before:h-full before:border-t-[30px] before:border-b-[30px] before:border-l-[20px] before:border-t-transparent before:border-b-transparent before:border-l-white after:absolute after:z-10 after:right-[-20px] after:top-0 after:h-full after:border-t-[30px] after:border-b-[30px] after:border-l-[20px] after:border-t-transparent after:border-b-transparent`}
    >
      <span className="text-[13px] font-normal leading-3 clear-both">
        {title}
      </span>
      <span className="text-lg font-bold">{description}</span>
    </div>
  );
}
