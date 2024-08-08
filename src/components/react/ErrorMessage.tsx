type ErrorMessageProps = {
  mes: string;
};

export default function ErrorMessage({ mes }: ErrorMessageProps) {
  return (
    <div
      className="relative mb-2 rounded-md border border-red-600 px-2 py-1 text-[11px] text-red-600 font-medium 
        before:absolute 
        before:border-t-red-600 
        before:border-t-[9px]
        before:border-r-[8px] 
        before:border-r-transparent
        before:bottom-[-10px] 
        before:left-[9px] 
        after:absolute 
        after:border-t-white
        after:border-t-[9px]
        after:border-r-[7px] 
        after:border-r-transparent
        after:bottom-[-8px] 
        after:left-[10px]
      "
    >
      {mes}
    </div>
  );
}
