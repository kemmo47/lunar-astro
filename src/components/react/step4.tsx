export default function Step4() {
  return (
    <div className="mt-8">
      <h3 className="bg-[#655f5a] px-[15px] py-1.5 text-white text-xl">
        お申し込み完了
      </h3>
      <div className="p-[1.5em_1em]">
        <p className="mb-3 text-[23px]">
          <strong>お申し込みを受け付けました。</strong>
        </p>
        <p className="text-lg">確認のメールをお送りしました。</p>
        <p className="text-lg">
          申し込み内容に変更がある場合は、お電話でご連絡ください。
        </p>
        <p className="mt-4 text-lg">
          電話：0120-945-991（年末年始除く<time>9:15～21:00</time>）
        </p>
      </div>

      <div className="max-w-[700px] mx-auto mt-[30px] mb-10">
        <div className="border border-[#2b2b2b]">
          <p className="text-[21px] font-bold text-white text-center bg-[#575757] py-2 mb-3.5">
            お取引の流れ
          </p>
          <div className="p-[15px_15px_15px_20px] flex gap-6">
            <div className="flex-1 flex flex-col items-center relative after:absolute after:top-1/3 after:-right-3 after:-translate-y-1/2 after:border-t-[8px] after:border-b-[8px] after:border-l-[10px] after:border-t-transparent after:border-b-transparent after:border-l-[#fe9901]">
              <img className="mb-5" src="/assets/logo_sagawa.png" alt="logo" />
              <p className="font-semibold mb-3 text-base">梱包キットのお届け</p>
              <p className="text-gray-600 text-sm">
                ご指定の日時に佐川急便のドライバーが梱包キットをお届けします。
                商品を梱包し、伝票に記載の集荷用電話番号へお電話ください。
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center relative after:absolute after:top-1/3 after:-right-3 after:-translate-y-1/2 after:border-t-[8px] after:border-b-[8px] after:border-l-[10px] after:border-t-transparent after:border-b-transparent after:border-l-[#fe9901]">
              <img className="mb-5" src="/assets/price.png" alt="price" />
              <p className="font-semibold mb-3 text-base">買取金額のお知らせ</p>
              <p className="text-gray-600 text-sm">
                届いた商品を確認し、買取金額をご連絡します。
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img className="mb-5" src="/assets/payment.png" alt="payment" />
              <p className="font-semibold mb-3 text-base">お支払い</p>
              <p className="text-gray-600 text-sm">
                金額にご了承いただけたらご指定の口座にお振り込みします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
