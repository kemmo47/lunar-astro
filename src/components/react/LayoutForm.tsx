import { useState } from "react";
import Step1 from "./step1.tsx";
import Step2 from "./step2.tsx";
import Header from "./Header.tsx";
import Step3 from "./step3.tsx";

export default function LayoutForm() {
  const [step, setStep] = useState<string>("step1");

  return (
    <>
      <Header step={step} />
      <div className="max-w-2xl mx-auto">
        {step === "step1" ? <Step1 setStep={setStep} /> : ""}
        {step === "step2" ? <Step2 setStep={setStep} /> : ""}
        {step === "step3" ? <Step3 setStep={setStep} /> : ""}
      </div>
    </>
  );
}
