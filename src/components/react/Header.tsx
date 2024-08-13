import HeaderItem from "./components/HeaderItem";

type HeaderProps = {
  step: string;
};

export default function Header({ step }: HeaderProps) {
  return (
    <header className="flex gap-4 items-center justify-center mb-[30px] pt-[5px]">
      <img
        className="w-auto h-[62px]"
        src="./assets/takaku_logo.svg"
        alt="高く売れるドットコム"
      />
      <div className="flex gap-1">
        <HeaderItem
          title="STEP 1"
          description="査定金額の確認"
          step={
            step == "step1"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-[#333] after:border-l-[#f1f1f1]"
          }
        />
        <HeaderItem
          title="STEP 2"
          description="情報の入力・確認"
          step={
            step == "step2"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-[#333] after:border-l-[#f1f1f1]"
          }
        />
        <HeaderItem
          title="STEP 3"
          description="申し込み完了"
          step={
            step == "step3" || step == "step4"
              ? "bg-[#0e7ac3] text-white after:border-l-[#0e7ac3]"
              : "bg-[#f1f1f1] text-[#333] after:border-l-[#f1f1f1]"
          }
        />
      </div>
    </header>
  );
}
