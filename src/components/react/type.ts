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