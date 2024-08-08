type Step2Props = {
  setStep: (step: string) => void;
};

export default function Step2({ setStep }: Step2Props) {
  const listCity = [
    { value: "北海道", label: "北海道" },
    { value: "青森県", label: "青森県" },
    { value: "岩手県", label: "岩手県" },
    { value: "宮城県", label: "宮城県" },
    { value: "秋田県", label: "秋田県" },
    { value: "山形県", label: "山形県" },
    { value: "福島県", label: "福島県" },
    { value: "茨城県", label: "茨城県" },
    { value: "栃木県", label: "栃木県" },
    { value: "群馬県", label: "群馬県" },
    { value: "埼玉県", label: "埼玉県" },
    { value: "千葉県", label: "千葉県" },
    { value: "東京都", label: "東京都" },
    { value: "神奈川県", label: "神奈川県" },
    { value: "新潟県", label: "新潟県" },
    { value: "富山県", label: "富山県" },
    { value: "石川県", label: "石川県" },
    { value: "福井県", label: "福井県" },
    { value: "山梨県", label: "山梨県" },
    { value: "長野県", label: "長野県" },
    { value: "岐阜県", label: "岐阜県" },
    { value: "静岡県", label: "静岡県" },
    { value: "愛知県", label: "愛知県" },
    { value: "三重県", label: "三重県" },
    { value: "滋賀県", label: "滋賀県" },
    { value: "京都府", label: "京都府" },
    { value: "大阪府", label: "大阪府" },
    { value: "兵庫県", label: "兵庫県" },
    { value: "奈良県", label: "奈良県" },
    { value: "和歌山県", label: "和歌山県" },
    { value: "鳥取県", label: "鳥取県" },
    { value: "島根県", label: "島根県" },
    { value: "岡山県", label: "岡山県" },
    { value: "広島県", label: "広島県" },
    { value: "山口県", label: "山口県" },
    { value: "徳島県", label: "徳島県" },
    { value: "香川県", label: "香川県" },
    { value: "愛媛県", label: "愛媛県" },
    { value: "高知県", label: "高知県" },
    { value: "福岡県", label: "福岡県" },
    { value: "佐賀県", label: "佐賀県" },
    { value: "長崎県", label: "長崎県" },
    { value: "熊本県", label: "熊本県" },
    { value: "大分県", label: "大分県" },
    { value: "宮崎県", label: "宮崎県" },
    { value: "鹿児島県", label: "鹿児島県" },
    { value: "沖縄県", label: "沖縄県" },
  ];

  return (
    <div className="mt-9">
      <div className="bg-[#655f5a] px-3.5 py-1.5 text-white">お客様情報</div>
      <div className="grid grid-cols-5 gap-0.5">
        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>お名前（漢字）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="SDテスト"
            placeholder="例）買取 太郎"
            required
          />
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>お名前（カナ）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="SDテスト"
            placeholder="例）カイトリ タロウ"
            required
          />
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>電話番号</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="000000000000"
            placeholder="0123456789"
            required
          />
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>郵便番号</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-2 items-center gap-3">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="1040031"
            placeholder="例）1040031"
            required
          />
          <div className="grid grid-cols-[auto_20px] items-center gap-3">
            <button className="text-white text-xs text-center py-2 bg-[#f39800] rounded-3xl w-full shadow-[0_2px_0_1px_#c07801] transition-all duration-200 hover:shadow-none hover:translate-y-0.5">
              住所を自動入力
            </button>
            <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
              ✓
            </div>
          </div>
        </div>

        {/* //// */}
        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>都道府県</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <select
            required
            className="rounded border border-[#53b300] px-3 py-2.5 bg-[#eff7e8] shadow-[0_0_3px_#53b300] outline-none"
          >
            <option value="">選択してください</option>
            {listCity.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>
        {/* //// */}

        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>住所（町名）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="中央区京橋"
            placeholder="例：中央区京橋"
            required
          />
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div className="col-span-2 bg-[#fffaea] border border-[#ffe8a6] px-5 py-2 flex items-center justify-between">
          <span>住所（番地・建物名）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="col-span-3 border border-gray-200 px-5 py-2 grid grid-cols-[auto_20px] items-center gap-2">
          <input
            type="text"
            className="w-full bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="123"
            placeholder="例：1-1-1 東京建物ビル"
            required
          />
          <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>
      </div>

      <div className="my-9">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setStep("step3")}
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
    </div>
  );
}
