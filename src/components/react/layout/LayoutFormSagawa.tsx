import { useState } from "react";
import Step2 from "../step2.tsx";
import Header from "../Header.tsx";
import Step3 from "../step3.tsx";
import Step4 from "../step4.tsx";
import Step1Sagawa from "../step1Sagawa.tsx";

export default function LayoutFormSagawa() {
  const [step, setStep] = useState<string>("step1");

  return (
    <div id="app">
      <Header step={step} />
      <div className="max-w-[960px] mx-auto">
        {step === "step1" ? <Step1Sagawa setStep={setStep} /> : ""}
        {step === "step2" ? <Step2 setStep={setStep} /> : ""}
        {step === "step3" ? <Step3 setStep={setStep} /> : ""}
        {step === "step4" ? <Step4 /> : ""}
      </div>
    </div>
  );
}
