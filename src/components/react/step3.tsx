type Step3Props = {
  setStep: (step: string) => void;
};

export default function Step3({ setStep }: Step3Props) {
  return (
    <>
      <div className="mt-9">
        <div className="bg-[#655f5a] px-3 py-1 text-white">お届け日時</div>
        <div className="grid grid-cols-3 gap-0.5">
          <div className="col-span-1 bg-[#fffaea] border border-[#ffe8a6] px-5 py-3">
            お届け日
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            08月12日 (月)
          </div>
          <div className="col-span-1 bg-[#fffaea] border border-[#ffe8a6] px-5 py-3">
            お届け時間帯
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            午前中(8時~12時)
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            className="text-white px-7 py-1.5 bg-[#655f5a] border border-white shadow-[0px_0px_1px_1px_#655f5a] transition-all duration-200 hover:shadow-[0px_0px_4px_2px_#655f5a] hover:bg-[#94928f]"
            onClick={() => setStep("step1")}
          >
            お届け日時を修正する
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[#655f5a] px-3 py-1 text-white">お客様情報</div>
        <div className="grid grid-cols-3 gap-0.5">
          <div className="flex items-center col-span-1 bg-[#fffaea] border border-[#ffe8a6] px-5 py-3">
            お名前
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            SDテスト（SDテスト）
          </div>
          <div className="flex items-center col-span-1 bg-[#fffaea] border border-[#ffe8a6] px-5 py-3">
            電話番号
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            0000000000
          </div>
          <div className="flex items-center col-span-1 row-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-3">
            住所
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            1040031 東京都中央区京橋123
          </div>
          <div className="col-span-2 border border-gray-200 px-5 py-3">
            <div className="flex items-center gap-1">
              <img
                className="w-9"
                src="/assets/address_attention.png"
                alt="address attention"
              />
              <ul className="text-xs leading-5 list-disc ml-7">
                <li>古物営業法上、本人確認書類に記載の住所に限ります</li>
                <li>建物名、部屋番号がある場合は必ずご記入ください</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            className="text-white px-7 py-1.5 bg-[#655f5a] border border-white shadow-[0px_0px_1px_1px_#655f5a] transition-all duration-200 hover:shadow-[0px_0px_4px_2px_#655f5a] hover:bg-[#94928f]"
            onClick={() => setStep("step2")}
          >
            お客様情報を修正する
          </button>
        </div>
      </div>

      <div className="my-12">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setStep("step4")}
            className="font-bold tracking-wide h-20 leading-tight border border-[#3e6336] rounded-md shadow-[0_4px_0_0_#3e6336] transition-all duration-300 relative w-[444px] text-[25px] bg-[#5a8c4e] text-white hover:shadow-[0_0_0_0] hover:translate-y-2"
          >
            <span>この内容で申し込む</span>
            <div
              className="before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:right-3 before:top-1/2 before:-translate-y-1/2
            after:absolute after:w-3 after:h-3 after:border-t-[7px] after:border-b-[7px] after:border-l-[7px] after:border-t-transparent after:border-l-[#5a8c4e] after:border-b-transparent after:right-3 after:top-1/2 after:-translate-y-1/2
            "
            ></div>
          </button>
        </div>
      </div>
    </>
  );
}
