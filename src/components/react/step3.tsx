import ButtonSubmitStep from "./components/ButtonSubmitStep";

type Step3Props = {
  setStep: (step: string) => void;
};

export default function Step3({ setStep }: Step3Props) {
  const handleSubmit = () => {
    setStep("step4");
  };

  return (
    <>
      <div className="mt-8">
        <div className="bg-[#655f5a] px-[15px] py-1.5 text-white text-xl">
          お届け日時
        </div>
        <div className="grid grid-cols-[35%_auto] gap-[3px]">
          <div className="bg-[#fffaea] text-[17px] border border-[#fff3d0] px-5 py-[8px] flex items-center">
            お届け日
          </div>
          <div className="px-[33px] py-[8px] text-[17px] flex items-center break-all whitespace-pre-line">
            08月12日 (月)
          </div>
          <div className="bg-[#fffaea] text-[17px] border border-[#fff3d0] px-5 py-[8px] flex items-center">
            お届け時間帯
          </div>
          <div className="px-[33px] py-[8px] text-[17px] flex items-center break-all whitespace-pre-line">
            午前中(8時~12時)
          </div>
        </div>
        <div className="flex justify-center items-center mt-[23px]">
          <button
            className="text-white px-7 py-[5px] text-base bg-[#655f5a] border border-white shadow-[0px_0px_1px_1px_#655f5a] transition-all duration-200 hover:shadow-[0px_0px_4px_2px_#655f5a] hover:bg-[#83817f]"
            onClick={() => setStep("step1")}
          >
            お届け日時を修正する
          </button>
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="bg-[#655f5a] px-[15px] py-1.5 text-white text-xl">
          お客様情報
        </div>
        <div className="grid grid-cols-[35%_auto] gap-[3px]">
          <div className="bg-[#fffaea] text-[17px] border border-[#fff3d0] px-5 py-[8px] flex items-center">
            お名前
          </div>
          <div className="px-[33px] py-[8px] text-[17px] flex items-center break-all whitespace-pre-line">
            SDテスト（SDテスト）
          </div>
          <div className="bg-[#fffaea] text-[17px] border border-[#fff3d0] px-5 py-[8px] flex items-center">
            電話番号
          </div>
          <div className="px-[33px] py-[8px] text-[17px] flex items-center break-all whitespace-pre-line">
            00000000000
          </div>
          <div className="bg-[#fffaea] text-[17px] border border-[#fff3d0] px-5 py-[8px] flex items-center">
            住所
          </div>
          <div className="px-[33px] py-[8px] flex justify-center flex-col">
            <div className="text-[17px]">
              <p>1040031</p>
              <p>東京都中央区京橋1-1-1 東京建物ビル</p>
            </div>
            <div className="flex items-center gap-1 mt-3.5 mb-3">
              <img
                className="w-9"
                src="/assets/address_attention.png"
                alt="address attention"
              />
              <ul className="text-[13px] leading-5 list-disc ml-7">
                <li>古物営業法上、本人確認書類に記載の住所に限ります</li>
                <li>建物名、部屋番号がある場合は必ずご記入ください</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[23px]">
          <button
            className="text-white px-7 py-[5px] bg-[#655f5a] border border-white shadow-[0px_0px_1px_1px_#655f5a] transition-all duration-200 hover:shadow-[0px_0px_4px_2px_#655f5a] hover:bg-[#94928f]"
            onClick={() => setStep("step2")}
          >
            お客様情報を修正する
          </button>
        </div>
      </div>

      <div className="mt-[50px]">
        <ButtonSubmitStep
          handleSubmit={handleSubmit}
          title={"この内容で申し込む"}
        />
      </div>
    </>
  );
}
