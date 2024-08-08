type HeaderProps = {
  step: string;
};

export default function Header({ step }: HeaderProps) {
  return (
    <header className="flex gap-4 items-center justify-center">
      <div className="p-2">
        <img
          className="w-auto h-16"
          src="./assets/takaku_logo.svg"
          alt="高く売れるドットコム"
        />
      </div>
      <div className="flex gap-2">
        <div
          className={`${
            step == "step1"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-black after:border-l-[#f1f1f1]"
          } flex flex-col relative py-3 pl-[60px] w-[200px] 
            before:absolute
            before:z-[9]
            before:left-0
            before:top-0
            before:h-full
            before:border-t-[30px]
            before:border-b-[30px]
            before:border-l-[20px]
            before:border-t-transparent
            before:border-b-transparent
          before:border-l-white
            after:absolute
            after:z-10
            after:right-[-20px]
            after:top-0
            after:h-full
            after:border-t-[30px]
            after:border-b-[30px]
            after:border-l-[20px]
            after:border-t-transparent
            after:border-b-transparent
          `}
        >
          <span className="text-xs">STEP 1</span>
          <span className="text-[14px]">査定金額の確認</span>
        </div>

        <div
          className={`${
            step == "step2"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-black after:border-l-[#f1f1f1]"
          } flex flex-col relative py-3 pl-[60px] w-[200px]
                        before:absolute
            before:z-[9]
            before:left-0
            before:top-0
            before:h-full
            before:border-t-[30px]
            before:border-b-[30px]
            before:border-l-[20px]
            before:border-t-transparent
            before:border-b-transparent
          before:border-l-white
            after:absolute
            after:z-10
            after:right-[-20px]
            after:top-0
            after:h-full
            after:border-t-[30px]
            after:border-b-[30px]
            after:border-l-[20px]
            after:border-t-transparent
            after:border-b-transparent
          `}
        >
          <p className="text-xs">STEP 2</p>
          <span className="text-[14px]">情報の入力・確認</span>
        </div>

        <div
          className={`${
            step == "step3"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-black after:border-l-[#f1f1f1]"
          } flex flex-col relative py-3 pl-[60px] w-[200px]
            before:absolute
            before:z-[9]
            before:left-0
            before:top-0
            before:h-full
            before:border-t-[30px]
            before:border-b-[30px]
            before:border-l-[20px]
            before:border-t-transparent
            before:border-b-transparent
          before:border-l-white
            after:absolute
            after:z-10
            after:right-[-20px]
            after:top-0
            after:h-full
            after:border-t-[30px]
            after:border-b-[30px]
            after:border-l-[20px]
            after:border-t-transparent
            after:border-b-transparent
          `}
        >
          <p className="text-xs">STEP 3</p>
          <span className="text-[14px]">申し込み完了</span>
        </div>
      </div>
    </header>
  );
}
