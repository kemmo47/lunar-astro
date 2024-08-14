import { listCity } from "../../common/data";
import ButtonSubmitStep from "./components/ButtonSubmitStep";
import { Check } from "./icon/Check";

type Step2Props = {
  setStep: (step: string) => void;
};

export default function Step2({ setStep }: Step2Props) {
  const zipToAddress = (data: { focus: boolean }) => {
    console.log("zipToAddress: ", data);
  };

  const handleSubmit = () => {
    setStep("step3");
  };

  return (
    <div className="mt-8">
      <div className="bg-[#655f5a] px-[15px] py-1.5 text-white text-xl">
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
            value="1040031"
            placeholder="例）1040031"
            required
          />
          <button
            onClick={() => zipToAddress({ focus: true })}
            className="text-white ml-2 text-base text-center py-1.5 px-[21px] bg-[#f39800] rounded-[22px] shadow-[0_2px_0_1px_#c07801] transition-all duration-200 hover:shadow-none hover:translate-y-0.5"
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
            className="rounded w-[300px] border border-[#53b300] px-[7px] py-[8px] bg-[#eff7e8] shadow-[0_0_3px_#53b300] outline-none"
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
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
            className="w-[300px] bg-[#eff7e8] border border-[#53b300] shadow-[0_0_3px_#53b300] outline-none px-[7px] py-[8px] rounded"
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
