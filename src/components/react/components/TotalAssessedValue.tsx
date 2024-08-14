type TotalAssessedValueProps = {
  assessed_price: number[];
};

export default function TotalAssessedValue({assessed_price}: TotalAssessedValueProps) {
  return (
    <div className="border-b border-b-[#df4726] flex items-center gap-7 px-[13px] pb-2.5 mb-2.5">
      <div className="bg-[#df4726] text-white text-[15px] px-[10px] py-[3px] font-normal">
        査定額合計
      </div>
      <div className="text-[#df4726] leading-none">
        <span className="text-[45px] font-bold">{assessed_price[0]}</span>
        <span className="text-[30px] relative -top-2 font-normal"> ～ </span>
        <span className="text-[60px] font-bold">{assessed_price[1]}</span>
        <span className="text-[23px] font-bold">円</span>
      </div>
    </div>
  );
}
