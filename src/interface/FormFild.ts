import { UUID } from "crypto";

export interface FormField {
    text: string;
    textarea: string;
    file: File | null;
    id:string;
  }