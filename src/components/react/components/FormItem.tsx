import ShortestMsg from "../ShortestMsg";
import { Check } from "../icon/Check";

type FormItemProps = {
  options: Option[];
  title: string;
  shortestMsg?: boolean;
  note?: string;
};

type Option = {
  label: string;
  value: string;
};

export default function FormItem({
  options,
  title,
  shortestMsg,
  note,
}: FormItemProps) {
  return (
    <div className="flex gap-2">
      <div className="border border-[#fff3d0] max-w-[35%] w-[360px] bg-[#fffaea] px-5 py-[15px] flex flex-wrap items-center justify-between">
        <div className="text-[17px]">{title}</div>
        <div className="bg-[#ff6c00] rounded-md text-white py-[3px] px-1.5 text-sm">
          必須
        </div>
      </div>

      <div className="max-w-[65%] py-1.5 flex items-center gap-2">
        <Check
          classNameSvg="w-6 h-6 text-[#53b300]"
          strokeWidth={0}
          solid={true}
        />

        <div>
          <div className="my-auto flex items-start flex-wrap gap-2.5">
            <select
              name="day"
              id="day"
              required
              className="rounded-[3px] w-[250px] border border-[#53b300] px-3 py-2.5 bg-[#eff7e8] shadow-[0_0_3px_#53b300] outline-none"
            >
              <option value="">選択してください</option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {shortestMsg ? <ShortestMsg mes="最短が選択されています" /> : ""}
          </div>

          {note ? <p className="text-[13px] text-[#333] my-2">{note}</p> : ""}
        </div>
      </div>
    </div>
  );
}
