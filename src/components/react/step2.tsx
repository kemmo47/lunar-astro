type Step2Props = {
  setStep: (step: string) => void;
};

export default function Step2({ setStep }: Step2Props) {
  return (
    <div>
      <div>step 2</div>

      <button
        onClick={() => setStep("stepConfirm")}
        className="px-5 py-2.5 text-white bg-green-700 rounded"
      >
        Next step confirm
      </button>
    </div>
  );
}
