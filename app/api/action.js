"use server";

import { AdvancedFetch } from "@/utils/advancedfetch";
import { cookies } from "next/headers";
import { UserMe } from "@/utils/fetch";
import { redirect, revalidatePath } from "next/navigation";

// export async function Loginuser(formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const response = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/login", "POST", {
//     email: email,
//     password: password,
//   });
//   return response;
// }

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


export async function loginUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Eğer email veya password boşsa, hata mesajı döndür
  if (!email) {
      return { error: "Email alanı boş olamaz" };
  }

  if (!password) {
      return { error: "Şifre alanı boş olamaz" };
  }

  try {
      const response = await fetch("https://feedback.nazlisunay.com.tr/api/User/login", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
              email,
              password
          }),
          credentials: "include"
      });

      const data = await response.text();

      if (!response.ok) {
          console.log(response.status);
          if(response.status === 401){
            return {
              error: "şifre veya kullanıcı email'i yanlış"
            }
          }
          return {
              error: " Giriş İşlemi sırasında bir hata oluştu."
          };
      }

      // Cookie'yi işleyin
      const responseCookie = response.headers.get("set-cookie");
      const cookiesArray = responseCookie.split(',');
      const a = cookiesArray.flatMap(x => x.split(";"));
      const cookiesObject = {};
      a.forEach(cookie => {
          const [key, value] = cookie.trim().split('=');
          cookiesObject[key] = value;
      });

      console.log(cookiesObject);

      // .AspNetCore.Identity.Application cookie'yi ayarlayın
      cookies().set(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

      return { success: "Giriş başarılı!" };

  } catch (error) {
      console.error(error);
      return { error: "Bir hata oluştu" };
  }
}



export async function logoutUser(prevState, formData) {
  try {
      const response = await fetch("https://feedback.nazlisunay.com.tr/api/User/logout", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          credentials: "include"
      });

      const data = await response.text();

      if (!response.ok) {
          console.log(data);
          return {
              error: "çıkış yapılamadı"
          };
      }

      // Cookie'yi işleyin
      const responseCookie = response.headers.get("set-cookie");
      const cookiesArray = responseCookie.split(',');
      const a = cookiesArray.flatMap(x => x.split(";"));
      const cookiesObject = {};
      a.forEach(cookie => {
          const [key, value] = cookie.trim().split('=');
          cookiesObject[key] = value;
      });

      console.log(cookiesObject);

      // .AspNetCore.Identity.Application cookie'yi ayarlayın
      cookies().set(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

      return { success: "Çıkış başarılı!" };

  } catch (error) {
      console.error(error);
      return { error: "Bir hata oluştu" };
  }
}


export async function signupUser(prevState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const avatar = formData.get("avatar");
  const nickname = formData.get("nickname");
  const email = formData.get("email");
  const password = formData.get("password");

  // Eğer gerekli alanlar boşsa, hata mesajı döndür
  if (!firstName) {
      return { error: "First Name alanı boş olamaz" };
  }

  if (!lastName) {
      return { error: "Last Name alanı boş olamaz" };
  }

  if (!avatar) {
      return { error: "Avatar alanı boş olamaz" };
  }

  if (!nickname) {
      return { error: "Nickname alanı boş olamaz" };
  }

  if (!email) {
      return { error: "Email alanı boş olamaz" };
  }

  if (!password) {
      return { error: "Şifre alanı boş olamaz" };
  }

  try {
      const response = await fetch("https://feedback.nazlisunay.com.tr/api/User/register", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
              firstName,
              lastName,
              avatar,
              nickname,
              email,
              password
          }),
          credentials: "include"
      });

      const data = await response.text();

      if (!response.ok) {
          console.log(data);
          return {
              error: "Kayıt işlemi başarısız oldu."
          };
      }

      // Cookie'yi işleyin
      const responseCookie = response.headers.get("set-cookie");
      const cookiesArray = responseCookie.split(',');
      const a = cookiesArray.flatMap(x => x.split(";"));
      const cookiesObject = {};
      a.forEach(cookie => {
          const [key, value] = cookie.trim().split('=');
          cookiesObject[key] = value;
      });

      console.log(cookiesObject);

      // .AspNetCore.Identity.Application cookie'yi ayarlayın
      cookies().set(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

      return { success: "Kayıt başarılı!" };

  } catch (error) {
      console.error(error);
      return { error: "Bir hata oluştu" };
  }
}


