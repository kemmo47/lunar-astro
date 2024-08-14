import { dataDelivery, tsToDeliveryDateLabel } from "../../common/data";
import FormItem from "./components/FormItem";
import FormItemRadio from "./components/FormItemRadio";
import Products from "./components/Products";
import ButtonSubmitStep from "./components/ButtonSubmitStep";
import TotalAssessedValue from "./components/TotalAssessedValue";

type Step1YamatoProps = {
  setStep: (step: string) => void;
};

type Option = {
  label: string;
  value: string;
};

export default function Step1Yamato({ setStep }: Step1YamatoProps) {
  const optionsDay: Option[] =
    dataDelivery.form_settings.allowed.delivery_date_time_sets.sagawa.map(
      (item) => {
        return {
          label: tsToDeliveryDateLabel(item.date),
          value: item.date.toString(),
        };
      }
    );

  const optionsTime: string[] =
    dataDelivery.form_settings.allowed.delivery_date_time_sets.sagawa.find(
      (a) => a.date === Math.round(dataDelivery.item.expire)
    )?.time || [];

  const handleSubmit = () => {
    setStep("step2");
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <TotalAssessedValue
        assessed_price={dataDelivery.item.buy_items.reduce(
          (total, item) => {
            return [
              total[0] + item.assessed_price[0],
              total[1] + item.assessed_price[1],
            ];
          },
          [0, 0]
        )}
      />

      <div className="pl-[13px] mb-5 text-[#333]">
        <span className="font-bold text-[17px]">
          査定金額の有効期限：{tsToDeliveryDateLabel(dataDelivery.item.expire)}
        </span>{" "}
        <span className="text-sm font-light">
          ※期限を過ぎると再び査定が必要です
        </span>
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-1">
          <FormItem
            options={optionsDay}
            title="お届け日"
            note="※当日18~21時の集荷は13時まで、翌日午前中の集荷は21時まで可能です"
          />
          <FormItem
            options={optionsTime.map((time) => {
              return { label: time, value: time };
            })}
            title="お届け時間"
          />

          <FormItemRadio title="梱包用のダンボール" />
        </div>
      </div>

      <div className="mt-[38px] mb-5">
        <ButtonSubmitStep
          title="お客様情報入力へ進む"
          handleSubmit={handleSubmit}
          note={
            <p className="mt-[15px] text-[#3e6336] font-bold text-center text-[15px]">
              送料、手数料など全て無料！発送後のキャンセルもOK！
            </p>
          }
        />
      </div>

      <Products products={dataDelivery.item.buy_items} />
    </div>
  );
}
