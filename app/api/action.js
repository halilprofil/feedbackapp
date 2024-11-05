"use server";

import { AdvancedFetch } from "@/utils/advancedfetch";
import { UserMe } from "@/utils/fetch";
import { redirect, revalidatePath } from "next/navigation";

export async function Loginuser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/login", "POST", {
    email: email,
    password: password,
  });
  return response;
}

export async function CreateFeedbacks(formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const description = formData.get("detail");
  const userId = formData.get("userId");
  const status = formData.get("status");
  console.log(formData.get("status"));

  const response = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions", "POST", {
    title,
    category,
    description,
    userId,
    status,
  });

  if (response.status === 200) {
    ("/");
  }
}

export async function EditFeedbacks(formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const description = formData.get("detail");
  const userId = formData.get("userId");
  const status = formData.get("status");
  const postId = formData.get("postId");
  console.log(formData.get("status"));

  const {response} = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${postId}`, "PUT", {
    title,
    category,
    description,
    userId,
    status,
  });

  console.log(response);

 
}

export async function DeleteFeedbacks(id) {
  const { response } = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/12`);
  console.log(response);
}
