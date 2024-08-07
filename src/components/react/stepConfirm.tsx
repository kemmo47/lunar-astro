type StepConfirmProps = {
  setStep: (step: string) => void;
};

export default function StepConfirm({ setStep }: StepConfirmProps) {
  return (
    <div>
      <div>step confirm</div>

      <button
        onClick={() => setStep("step1")}
        className="px-5 py-2.5 text-white bg-green-700 rounded"
      >
        Confirm 1
      </button>
      <button
        onClick={() => setStep("step2")}
        className="px-5 py-2.5 text-white bg-green-700 rounded"
      >
        Confirm 2
      </button>
    </div>
  );
}
