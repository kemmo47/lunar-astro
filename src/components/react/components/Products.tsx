type ProductsProps = {
  products: Product[];
};

type Product = {
  amount: number;
  assessed_price: number[];
  category: string;
  not_buy: boolean;
  title: string;
};

export default function Products({ products }: ProductsProps) {
  return (
    <>
      <span className="text-base text-[#333]">事前査定明細</span>
      <div className="relative overflow-x-auto mt-1">
        <table className="w-full">
          <thead className="bg-[#fffaea] border border-[#ccc]">
            <tr>
              <th
                scope="col"
                className="border text-center text-base font-medium"
              >
                商品名
              </th>
              <th
                scope="col"
                className="border text-center text-base font-medium w-20"
              >
                数量
              </th>
              <th
                scope="col"
                className="border text-center text-base font-medium w-60"
              >
                金額
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => (
              <tr key={key} className="bg-white even:bg-[#f4f4f4] text-base">
                <th
                  scope="row"
                  className="px-2.5 py-1.5 leading-[23px] border font-medium text-[#333] text-start"
                >
                  {product.title}
                </th>
                <td className="border px-2.5 py-1.5 leading-[23px] text-end max-w-20">
                  {product.amount}
                </td>
                <td className="border px-2.5 py-1.5 leading-[23px] text-end">
                  {product.assessed_price[0]}〜{product.assessed_price[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
