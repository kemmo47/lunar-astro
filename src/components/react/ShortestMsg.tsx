type ShortestMsgProps = {
  mes: string;
};

export default function ShortestMsg({ mes }: ShortestMsgProps) {
  return (
    <div className="relative rounded-[7px] border border-[#ff0000] px-2.5 py-2 text-xs text-[#ff0000] font-bold before:absolute before:border-t-[#ff0000] before:border-t-[9px] before:border-r-[8px] before:border-r-transparent before:bottom-[-10px] before:left-[9px] after:absolute after:border-t-white after:border-t-[9px] after:border-r-[7px] after:border-r-transparent after:bottom-[-8px] after:left-[10px]">
      {mes}
    </div>
  );
}
