import {email, z} from "zod"
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price:number;
    sizes: string[];
    colors: string[];
    images:Record<string, string>;
}

export type cartItemsType = ProductType  & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must be contain only numbers!"),
    address: z.string().min(1, "Address is required!"),
    city:z.string().min(1, "City is required!")
});


export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const PaymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card older is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
   expirationDate: z
    .string()
    .regex(/^([1-9] |1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format!"),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
 
});

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
  cart: cartItemsType[];
  hasHydrated:boolean;
};

// Types des actions
export type CartStoreActionsType = {
  
  addToCart: (item: cartItemsType) => void;
  removeFromCart: (item: cartItemsType) => void;
  clearCart: () => void;
};
