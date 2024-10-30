"use server";

import { AdvancedFetch } from "@/utils/advancedfetch";
import { UserMe } from "@/utils/fetch";




export async function Loginuser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await AdvancedFetch(
    "https://feedback.nazlisunay.com.tr/api/User/login", 
    "POST", 
    { email: email, password: password }
  );

 

  
  return response;
}
