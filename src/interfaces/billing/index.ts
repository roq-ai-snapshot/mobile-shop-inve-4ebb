import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  invoice_amount?: number;
  sales_summary?: string;
  note?: string;
  user?: UserInterface[];

  _count?: {
    user?: number;
  };
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  sales_summary?: string;
  note?: string;
}
