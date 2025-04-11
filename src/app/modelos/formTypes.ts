export type FormData = {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    projectDescription: string;
  };
  
  export type FormErrors = {
    fullName?: string;
    email?: string;
    phone?: string;
    service?: string;
    projectDescription?: string;
  };