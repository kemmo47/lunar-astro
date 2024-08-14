export const dataDelivery = {
  form_settings: {
    allowed: {
      delivery_date_time_sets: {
        sagawa: [
          {
            date: 1723647600,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1723734000,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1723820400,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1723906800,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1723993200,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724079600,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724166000,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724252400,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724338800,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724425200,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724511600,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
          {
            date: 1724598000,
            time: [
              "午前中(8時~12時)",
              "12時~14時",
              "14時~16時",
              "16時~18時",
              "18時~21時",
            ],
          },
        ],
      },
      delivery_vendor: ["sagawa", "onday", "kazaibin"],
    },
    fields: {},
    max: {
      indivisual_cushions: 5,
      total_boxes: 20,
    },
    min: {},
    rules: {
      delivery_date_time: {
        sagawa: {
          day_max: 13,
          day_min: 1,
          times: [
            {
              day_min: 1,
              hour_limit: 12,
              value: "午前中(8時~12時)",
            },
            {
              day_min: 1,
              hour_limit: 12,
              value: "12時~14時",
            },
            {
              day_min: 1,
              hour_limit: 12,
              value: "14時~16時",
            },
            {
              day_min: 1,
              hour_limit: 12,
              value: "16時~18時",
            },
            {
              day_min: 1,
              hour_limit: 12,
              value: "18時~21時",
            },
          ],
        },
      },
    },
  },
  item: {
    buy_items: [
      {
        amount: 1,
        assessed_price: [10, 20],
        category: "default",
        not_buy: false,
        title: "SDテスト 商品1",
      },
      {
        amount: 1,
        assessed_price: [30, 40],
        category: "default",
        not_buy: false,
        title: "SDテスト 商品2",
      },
    ],
    customer_id: 5078516,
    expire: 1724079599.999,
    kit_delivery_info: {
      address: "",
      delivery_date: "",
      delivery_vendor: "sagawa",
      kana: "SDテスト",
      name: "SDテスト",
      phone_number: "0000000000",
      pref: "東京都",
      zip_code: "1040031",
    },
    offer_id: 5093545,
    total_assessed_price: [40, 60],
    url_code: "louUziXTEYTaHoO5",
    url_shortening: "https://tkq.jp/pm/louUziXTEYTaHoO5",
  },
};

export const wNames = ["日", "月", "火", "水", "木", "金", "土"];

export const afterDay = (day: any) => {
  if (day.date === 0) {
    return {
      label: '',
      value: ''
    }
  }

  const res = new Date( day.date * 1000 )

  res.setHours(0, 0, 0, 0)
  res.setDate(res.getDate())
  const m = res.getMonth() + 1
  const d = res.getDate()
  const w = res.getDay()

  return {
    label: ('0' + m).slice(-2) + '/' + ('0' + d).slice(-2) + ' (' + wNames[w] + ')',
    value: Number(res) / 1000
  }
}

export const tsToDeliveryDateLabel = (ts: number) => {
  let res = new Date(ts * 1000);
  res.setHours(0, 0, 0, 0);
  res.setDate(res.getDate());
  const m = res.getMonth() + 1;
  const d = res.getDate();
  const w = res.getDay();

  return (
    ("0" + m).slice(-2) +
    "月" +
    ("0" + d).slice(-2) +
    "日 (" +
    wNames[w] +
    ")"
  );
}

export const listCity = [
  { value: "北海道", label: "北海道" },
  { value: "青森県", label: "青森県" },
  { value: "岩手県", label: "岩手県" },
  { value: "宮城県", label: "宮城県" },
  { value: "秋田県", label: "秋田県" },
  { value: "山形県", label: "山形県" },
  { value: "福島県", label: "福島県" },
  { value: "茨城県", label: "茨城県" },
  { value: "栃木県", label: "栃木県" },
  { value: "群馬県", label: "群馬県" },
  { value: "埼玉県", label: "埼玉県" },
  { value: "千葉県", label: "千葉県" },
  { value: "東京都", label: "東京都" },
  { value: "神奈川県", label: "神奈川県" },
  { value: "新潟県", label: "新潟県" },
  { value: "富山県", label: "富山県" },
  { value: "石川県", label: "石川県" },
  { value: "福井県", label: "福井県" },
  { value: "山梨県", label: "山梨県" },
  { value: "長野県", label: "長野県" },
  { value: "岐阜県", label: "岐阜県" },
  { value: "静岡県", label: "静岡県" },
  { value: "愛知県", label: "愛知県" },
  { value: "三重県", label: "三重県" },
  { value: "滋賀県", label: "滋賀県" },
  { value: "京都府", label: "京都府" },
  { value: "大阪府", label: "大阪府" },
  { value: "兵庫県", label: "兵庫県" },
  { value: "奈良県", label: "奈良県" },
  { value: "和歌山県", label: "和歌山県" },
  { value: "鳥取県", label: "鳥取県" },
  { value: "島根県", label: "島根県" },
  { value: "岡山県", label: "岡山県" },
  { value: "広島県", label: "広島県" },
  { value: "山口県", label: "山口県" },
  { value: "徳島県", label: "徳島県" },
  { value: "香川県", label: "香川県" },
  { value: "愛媛県", label: "愛媛県" },
  { value: "高知県", label: "高知県" },
  { value: "福岡県", label: "福岡県" },
  { value: "佐賀県", label: "佐賀県" },
  { value: "長崎県", label: "長崎県" },
  { value: "熊本県", label: "熊本県" },
  { value: "大分県", label: "大分県" },
  { value: "宮崎県", label: "宮崎県" },
  { value: "鹿児島県", label: "鹿児島県" },
  { value: "沖縄県", label: "沖縄県" },
];