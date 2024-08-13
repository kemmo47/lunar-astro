import { useState } from "react";
import Step2 from "../step2.tsx";
import Header from "../Header.tsx";
import Step3 from "../step3.tsx";
import Step4 from "../step4.tsx";
import Step1Sagawa from "../step1Sagawa.tsx";

export type dataDeliveryProps = {
  form_settings: {
    allowed: {
      delivery_date_time_sets: {
        sagawa: {
          date: number;
          time: string[];
        }[];
      };
      delivery_vendor: string[];
    };
    fields: {};
    max: {
      indivisual_cushions: number;
      total_boxes: number;
    };
    min: {};
    rules: {
      delivery_date_time: {
        sagawa: {
          day_max: number;
          day_min: number;
          times: {
            day_min: number;
            hour_limit: number;
            value: string;
          }[];
        };
      };
    };
  };
  item: {
    buy_items: {
      amount: number;
      assessed_price: number[];
      category: string;
      not_buy: boolean;
      title: string;
    }[];
    customer_id: number;
    expire: number;
    kit_delivery_info: {
      address: string;
      delivery_date: string;
      delivery_vendor: string;
      kana: string;
      name: string;
      phone_number: string;
      pref: string;
      zip_code: string;
    };
    offer_id: number;
    total_assessed_price: number[];
    url_code: string;
    url_shortening: string;
  };
};

export default function LayoutFormSagawa() {
  const [step, setStep] = useState<string>("step2");

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
