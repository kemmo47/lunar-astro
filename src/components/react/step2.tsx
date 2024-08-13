import ButtonSubmitStep from "./components/ButtonSubmitStep";
import { Check } from "./icon/Check";

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

  const zipToAddress = (data: { focus: boolean }) => {
    console.log("zipToAddress: ", data);
  };

  const handleSubmit = () => {
    setStep("step3");
  };

  return (
    <div className="mt-9">
      <div className="bg-[#655f5a] px-3.5 py-1.5 text-white text-xl">
        お客様情報
      </div>
      <div className="grid grid-cols-[340px_auto] gap-0.5">
        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>お名前（漢字）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="SDテスト"
            placeholder="例）買取 太郎"
            required
          />
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>お名前（カナ）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="SDテスト"
            placeholder="例）カイトリ タロウ"
            required
          />
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>電話番号</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="000000000000"
            placeholder="0123456789"
            required
          />
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>郵便番号</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>

        <div className="pl-1 py-2 flex items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="1040031"
            placeholder="例）1040031"
            required
          />
          <button
            onClick={() => zipToAddress({ focus: true })}
            className="text-white ml-2 text-base text-center py-[5px] px-5 bg-[#f39800] rounded-[22px] shadow-[0_2px_0_1px_#c07801] transition-all duration-200 hover:shadow-none hover:translate-y-0.5"
          >
            住所を自動入力
          </button>
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>都道府県</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <select
            required
            className="rounded w-[300px] border border-[#53b300] px-3 py-2.5 bg-[#eff7e8] shadow-[0_0_3px_#53b300] outline-none"
          >
            <option value="">選択してください</option>
            {listCity.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>住所（町名）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value="中央区京橋"
            placeholder="例：中央区京橋"
            required
          />
        </div>

        <div className="bg-[#fffaea] border border-[#fff3d0] px-5 py-2 flex items-center justify-between">
          <span>住所（番地・建物名）</span>
          <div className="rounded-md bg-[#ff6c00] p-1.5 text-white text-xs">
            必須
          </div>
        </div>
        <div className="pl-1 py-2 grid grid-cols-[24px_auto] items-center gap-1">
          <Check
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />
          <input
            type="text"
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-3 py-2 rounded"
            value=""
            placeholder="例：1-1-1 東京建物ビル"
            required
          />
        </div>
      </div>

      <div className="mt-[33px]">
        <ButtonSubmitStep
          title="この内容で申し込む"
          handleSubmit={handleSubmit}
          note={
            <div className="flex items-center justify-center gap-4">
              <img
                className="w-[34px]"
                src="/assets/address_attention.png"
                alt="address attention"
              />
              <ul className="text-[13px] leading-5 list-none">
                <li>古物営業法上、本人確認書類に記載の住所に限ります</li>
                <li>建物名、部屋番号がある場合は必ずご記入ください</li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
}
