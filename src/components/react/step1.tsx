type Step1Props = {
  setStep: (step: string) => void;
};

export default function Step1({ setStep }: Step1Props) {
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
      <div className="border-b border-b-red-700 py-4 flex items-center gap-4">
        <div className="bg-red-700 text-white text-xs px-2 py-1">
          査定額合計
        </div>
        <div>
          <span>{tsToDeliveryDateLabel(40)}</span>
          <span>～</span>
          <span>{tsToDeliveryDateLabel(400)}</span>
        </div>
      </div>
      Step1
      <button
        onClick={() => {
          setStep("step2");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Step2
      </button>
    </div>
  );
}
