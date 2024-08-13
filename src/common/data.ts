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