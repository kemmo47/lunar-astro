import { useState } from "react";
import { Check } from "../icon/Check";

type FormItemRadioProps = {
  title: string;
};

export default function FormItemRadio({ title }: FormItemRadioProps) {
  const [cardboardPackaging, setCardboardPackaging] = useState<string>("");

  return (
    <div className="flex gap-2">
      <div className="border border-[#fff3d0] max-w-[35%] w-[360px] bg-[#fffaea] px-5 py-[15px] flex flex-wrap items-center justify-between">
        <div className="text-[17px]">{title}</div>
        <div className="bg-[#ff6c00] rounded-md text-white py-[3px] px-1.5 text-sm">
          必須
        </div>
      </div>

      <div className="max-w-[65%] py-2">
        <div className="grid grid-cols-[20px_auto] items-center gap-3">
          <Check
            classNameI={cardboardPackaging ? "visible" : "invisible"}
            classNameSvg="w-6 h-6 text-[#53b300]"
            strokeWidth={0}
            solid={true}
          />

          <div>
            <div className="flex items-center ml-2">
              <label
                htmlFor="cardboardPackagingNeed"
                className="max-w-[170px] w-full flex items-center gap-x-[20px]"
              >
                <input
                  type="radio"
                  className="scale-[2]"
                  value="true"
                  name="cardboardPackaging"
                  id="cardboardPackagingNeed"
                  onChange={() => setCardboardPackaging("true")}
                />
                <span className="text-[17px] text-[#333]">必要</span>
              </label>
              <label
                htmlFor="cardboardPackagingNotNeed"
                className="max-w-[170px] w-full flex items-center gap-x-[20px]"
              >
                <input
                  type="radio"
                  className="scale-[2]"
                  value="false"
                  name="cardboardPackaging"
                  id="cardboardPackagingNotNeed"
                  onChange={() => setCardboardPackaging("false")}
                />
                <span className="text-[17px] text-[#333]">不要</span>
              </label>
            </div>
            <p className="text-[14px] text-[#333] mt-2">
              ※「必要」にチェックされた場合は集荷時にドライバーがお持ちします
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
