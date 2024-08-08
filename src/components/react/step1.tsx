type Step1Props = {
  setStep: (step: string) => void;
};

type Option = {
  label: string;
  value: string;
};

export default function Step1({ setStep }: Step1Props) {
  const optionsDay: Option[] = [
    { label: "08/08 (木)", value: "1723050000" },
    { label: "08/09 (金)", value: "1723136400" },
    { label: "08/10 (土)", value: "1723222800" },
    { label: "08/11 (日)", value: "1723309200" },
    { label: "08/12 (月)", value: "1723395600" },
    { label: "08/13 (火)", value: "1723482000" },
    { label: "08/14 (水)", value: "1723568400" },
    { label: "08/15 (木)", value: "1723654800" },
    { label: "08/16 (金)", value: "1723741200" },
    { label: "08/17 (土)", value: "1723827600" },
    { label: "08/18 (日)", value: "1723914000" },
    { label: "08/19 (月)", value: "1724000400" },
  ];

  const optionsTime: Option[] = [
    { label: "午前中(8時~12時)", value: "午前中(8時~12時)" },
    { label: "12時~14時", value: "12時~14時" },
    { label: "14時~16時", value: "14時~16時" },
    { label: "16時~18時", value: "16時~18時" },
    { label: "18時~21時", value: "18時~21時" },
  ];

  const listProduct = [
    { productName: "SDテスト 商品1", quantity: 1, amountMoney: "10〜20" },
    { productName: "SDテスト 商品2", quantity: 1, amountMoney: "20〜30" },
    { productName: "SDテスト 商品3", quantity: 1, amountMoney: "30〜40" },
    { productName: "SDテスト 商品4", quantity: 1, amountMoney: "40〜50" },
  ];

  function tsToDeliveryDateLabel(ts: number) {
    const wNames = ["日", "月", "火", "水", "木", "金", "土"];

    let res = new Date(ts * 1000);
    res.setHours(0, 0, 0, 0);
    res.setDate(res.getDate());
    const m = res.getMonth() + 1;
    const d = res.getDate();
    const w = res.getDay();

    return (
      ("0" + m).slice(-2) +
      "月" +
      ("0" + d).slice(-2) +
      "日 (" +
      wNames[w] +
      ")"
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b border-b-red-700 flex items-center gap-7">
        <div className="bg-red-700 text-white text-xs px-2 py-1">
          査定額合計
        </div>
        <div className="text-red-700">
          <span className="font-medium text-[35px]">40</span>
          <span className="text-[45px]">～</span>
          <span className="font-medium text-[50px]">400</span>
          <span className="font-medium text-[20px]">円</span>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-medium">
          査定金額の有効期限：{tsToDeliveryDateLabel(1382086394000)} (月)
        </span>{" "}
        <span className="text-12">※期限を過ぎると再び査定が必要です</span>
      </div>

      <div className="mt-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 flex flex-col gap-0.5">
            <div className="border border-[#fff3d0] bg-[#fffaea] p-3 flex items-center justify-between">
              <div>お届け日</div>
              <div className="rounded bg-orange-500 text-white p-1 text-xs">
                必須
              </div>
            </div>
            <div className="border border-[#fff3d0] bg-[#fffaea] p-3 flex items-center justify-between">
              <div>お届け時間</div>
              <div className="rounded bg-orange-500 text-white p-1 text-xs">
                必須
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 justify-evenly">
            <div className="flex items-center gap-2 relative">
              <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
                ✓
              </div>
              <select
                name="day"
                id="day"
                required
                className="rounded border border-[#53b300] px-3 py-2 bg-[#eff7e8] w-1/2 shadow-[0_0_3px_#53b300] outline-none"
              >
                <option value="">選択してください</option>
                {optionsDay.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div
                className="relative mb-2 rounded-md border border-red-600 px-2 py-1 text-[11px] text-red-600 font-medium 
                  before:absolute 
                  before:border-t-red-600 
                  before:border-t-[9px]
                  before:border-r-[8px] 
                  before:border-r-transparent
                  before:bottom-[-10px] 
                  before:left-[9px] 
                  
                  after:absolute 
                  after:border-t-white
                  after:border-t-[9px]
                  after:border-r-[7px] 
                  after:border-r-transparent
                  after:bottom-[-8px] 
                  after:left-[10px]
                  "
              >
                最短が選択されています
              </div>
            </div>
            <div className="flex items-center gap-2 relative">
              <div className="border border-[#53b300] bg-[#53b300] rounded-[50%] w-5 h-5 text-white flex items-center justify-center text-xs">
                ✓
              </div>
              <select
                name="day"
                id="day"
                required
                className="rounded border border-[#53b300] px-3 py-2 bg-[#eff7e8] w-1/2 shadow-[0_0_3px_#53b300] outline-none"
              >
                <option value="">選択してください</option>
                {optionsTime.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div
                className="relative mb-2 rounded-md border border-red-600 px-2 py-1 text-[11px] text-red-600 font-medium 
                  before:absolute 
                  before:border-t-red-600 
                  before:border-t-[9px]
                  before:border-r-[8px] 
                  before:border-r-transparent
                  before:bottom-[-10px] 
                  before:left-[9px] 
                  after:absolute 
                  after:border-t-white
                  after:border-t-[9px]
                  after:border-r-[7px] 
                  after:border-r-transparent
                  after:bottom-[-8px] 
                  after:left-[10px]
                  "
              >
                最短が選択されています
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setStep("step2")}
            className="font-bold tracking-wide h-20 leading-tight border border-[#3e6336] rounded-md shadow-[0_4px_0_0_#3e6336] transition-all duration-300 relative w-[444px] text-[25px] bg-[#5a8c4e] text-white hover:shadow-[0_0_0_0] hover:translate-y-2"
          >
            <span>お客様情報入力へ進む</span>
            <div
              className="before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:right-3 before:top-1/2 before:-translate-y-1/2
            after:absolute after:w-3 after:h-3 after:border-t-[7px] after:border-b-[7px] after:border-l-[7px] after:border-t-transparent after:border-l-[#5a8c4e] after:border-b-transparent after:right-3 after:top-1/2 after:-translate-y-1/2
            "
            ></div>
          </button>
        </div>
        <p className="mt-4 text-[#3e6336] font-medium text-center text-sm">
          送料、手数料など全て無料！発送後のキャンセルもOK！
        </p>
      </div>

      <div className="mt-5 mb-[50px]">
        <span className="font-light text-xs">事前査定明細</span>
        <div className="relative overflow-x-auto mt-1">
          <table className="w-full text-sm text-left rtl:text-center text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-[#fffaea] border">
              <tr>
                <th scope="col" className="px-6 py-2 border">
                  商品名
                </th>
                <th scope="col" className="px-6 py-2 border">
                  数量
                </th>
                <th scope="col" className="px-6 py-2 border">
                  金額
                </th>
              </tr>
            </thead>
            <tbody>
              {listProduct.map((product, key) => (
                <tr key={key} className="bg-white even:bg-[#f4f4f4]">
                  <th
                    scope="row"
                    className="px-6 py-2 border font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product.productName}
                  </th>
                  <td className="px-6 border py-2">{product.quantity}</td>
                  <td className="px-6 border py-2">{product.amountMoney}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
