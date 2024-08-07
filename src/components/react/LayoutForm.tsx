import { useState } from "react";
import Step1 from "./step1.tsx";
import Step2 from "./step2.tsx";
import StepConfirm from "./stepConfirm.tsx";
import Header from "./Header.tsx";

export default function LayoutForm() {
  const [step, setStep] = useState<string>("step1");

  return (
    <>
      <Header step={step} />
      {step === "step1" ? <Step1 setStep={setStep} /> : ""}
      {step === "step2" ? <Step2 setStep={setStep} /> : ""}
      {step === "stepConfirm" ? <StepConfirm setStep={setStep} /> : ""}
    </>
  );
}
