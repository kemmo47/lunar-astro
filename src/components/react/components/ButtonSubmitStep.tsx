type ButtonSubmitStepProps = {
  handleSubmit: () => void;
  title: string;
  note?: React.ReactNode;
};

export default function ButtonSubmitStep({
  title,
  handleSubmit,
  note,
}: ButtonSubmitStepProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-3.5">
        <button
          onClick={handleSubmit}
          className="font-bold tracking-wide h-20 leading-tight border border-[#3e6336] rounded-md shadow-[0_4px_0_0_#3e6336] transition-all duration-300 relative w-[444px] text-[25px] bg-[#5a8c4e] text-white hover:shadow-[0_0_0_0] hover:translate-y-1"
        >
          <span>{title}</span>
          <div
            className="before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:right-3 before:top-1/2 before:-translate-y-1/2
            after:absolute after:w-3 after:h-3 after:border-t-[7px] after:border-b-[7px] after:border-l-[7px] after:border-t-transparent after:border-l-[#5a8c4e] after:border-b-transparent after:right-3 after:top-1/2 after:-translate-y-1/2
            "
          ></div>
        </button>
      </div>
      {note}
    </>
  );
}
