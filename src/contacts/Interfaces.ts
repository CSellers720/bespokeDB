export interface SlsMsg {
  statusCode: number;
  body: string;
}

export interface Contact {
  firstName: string;
  middleName?: string;
  lastName: string;
  prefix?: string;
  suffix?: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
    number: number;
    unit?: string;
  };
}

export interface NewContactItem {
  id: string;
  contact: Contact;
  createdAt: string;
}
