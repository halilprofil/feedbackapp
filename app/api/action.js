"use server";

import { AdvancedFetch } from "@/utils/advancedfetch";
import { cookies } from "next/headers";
import { UserMe } from "@/utils/fetch";
import { redirect, revalidatePath } from "next/navigation";
const SIGN_UP_ERROR_CODES = [
  "PasswordRequiresNonAlphanumeric",
  "PasswordRequiresDigit",
  "PasswordRequiresUpper",
  "DuplicateUserName",
  "PasswordTooShort",
];
// export async function Loginuser(formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const response = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/login", "POST", {
//     email: email,
//     password: password,
//   });
//   return response;
// }

export async function CreateFeedbacks(prevState, formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const detail = formData.get("detail");
  const userId = formData.get("userId");
  const status = formData.get("status");

  if (!title) {
    return { title: "title alanı zorunludur" };
  }

  if (!category) {
    return { category: "category alanı zorunludur" };
  }

  if (!detail) {
    return { detail: "detail alanı zorunludur" };
  }

  const response = await fetch("https://feedback.nazlisunay.com.tr/api/Opinions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      category,
      description: detail,
      userId,
      status,
    }),
    credentials: "include",
  });

  if (response.ok) {
    return { success: "Feedback başarıyla oluşturldu." };
  }

  return { error: "Hata oluştu tekrar deneyiniz." };
}

export async function EditFeedbacks(prevState, formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const description = formData.get("detail");
  const userId = formData.get("userId");
  const status1 = formData.get("status");
  const postId = formData.get("postId");

  if (!title) {
    return { title: "title alanı zorunludur" };
  }

  if (!category) {
    return { category: "category alanı zorunludur" };
  }

  if (!status1) {
    return { status1: "detail alanı zorunludur" };
  }

  const response = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${postId}`, "PUT", {
    id: postId,
    title,
    description,
    status: status1,
    category,
    createdAt: new Date().toISOString(),
    userId,
  });
  if (response) {
    return { success: "feedback editlendi" };
  }
  console.log("edit işlemi" + response + ".............." )

  if (error) {
    console.log(error);

    return { editError: "feedback editlenemedi tekrar deneyiniz." };
  }
}

export async function Addcomments(prevState, formData) {
  const comment = formData.get("comment");
  const userId = formData.get("userId");
  const postId = formData.get("postId");
  if (!comment) {
    return { error: "yorum alanı boş olamaz." };
  }
  const { response } = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Comment`, "POST", {
    content: comment,
    userId,
    opinionId: Number(postId),
  });
  if (response) {
    return { success: "yorumunuz başarıyla oluşturuldu." };
  }
  if (!response) {
    return { error: "yorum eklenirken bir hata oluştu tekrar deneyin." };
  }
}

export async function DeleteFeedbacks(prevState, formData) {
  const postId = formData.postId;
  const response = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${postId}`, "DELETE");
  console.log(JSON.stringify(response, null, 2));
  if (response.ok) {
    return { success: "feedback başarıyla silindi" };
  }

  if (!response.ok) {
    console.log(response);
    return { error: "feedback silinirken bir hata oluştu." };
  }
  revalidatePath("/");
}

export async function loginUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Email ve Şifre boşluk kontrolleri
  if (!email) {
    return { error: "Email alanı boş olamaz." };
  }

  if (!password) {
    return { error: "Şifre alanı boş olamaz." };
  }

  try {
    const response = await fetch("https://feedback.nazlisunay.com.tr/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    // Response'u Text Olarak Al
    const data = await response.text();
    console.log("Response Data:", data);

    // Hata durumlarını kontrol et
    if (!response.ok) {
      console.log("Hata oluştu, durum kodu:", response.status);
      if (response.status === 401) {
        return { error: "Şifre veya kullanıcı email'i yanlış." };
      }
      return { error: "Giriş işlemi sırasında bir hata oluştu." };
    }

    // Cookie'yi işleme
    const responseCookie = response.headers.get("set-cookie");
    if (!responseCookie) {
      console.warn("Set-Cookie header bulunamadı!");
      return { error: "Giriş başarılı, ancak oturum cookie'si alınamadı." };
    }

    const cookiesArray = responseCookie.split(",");
    const parsedCookies = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    parsedCookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

    console.log("Çözümlenmiş Cookie Nesnesi:", cookiesObject);

    // .AspNetCore.Identity.Application cookie'yi ayarla
    if (cookiesObject[".AspNetCore.Identity.Application"]) {
      cookies().set(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);
    } else {
      console.warn(".AspNetCore.Identity.Application cookie bulunamadı!");
      return { error: "Giriş başarılı, ancak oturum cookie'si doğru şekilde alınamadı." };
    }

    // Başarı durumunu döndür
    console.log("Giriş işlemi başarılı!");
    return { success: "Giriş başarılı!" };
  } catch (error) {
    console.error("Beklenmedik bir hata oluştu:", error);
    return { error: "Bir hata oluştu. Lütfen tekrar deneyin." };
  }
}

export async function logoutUser(prevState, formData) {
  try {
    const response = await fetch("https://feedback.nazlisunay.com.tr/api/User/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.text();

    if (!response.ok) {
      return {
        error: "çıkış yapılamadı",
      };
    }

    // Cookie'yi işleyin
    const responseCookie = response.headers.get("set-cookie");
    const cookiesArray = responseCookie.split(",");
    const a = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    a.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

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
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        avatar,
        nickname,
        email,
        password,
      }),
      credentials: "include",
    });

    const { body } = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        switch (body.code) {
          case "PasswordRequiresNonAlphanumeric":
            return { error: "şifreniz harf içermelidir" };

          case "PasswordRequiresDigit": {
            return { error: "şifreniz numara içermelidir" };
          }

          case "PasswordRequiresUpper":
            return { error: "şifreniz Büyük ve Küçük harf içermelidir" };

          case "PasswordRequiresLower":
            return { error: "şifreniz Büyük ve Küçük harf içermelidir" };

          case "DuplicateUserName":
            return { error: "Kullanıcı adı veya şifre yanlış." };

          case "PasswordTooShort":
            return { error: "şifreniz çok kısa" };

          default:
            break;
        }
      }
      return {
        error: "Kayıt işlemi sırasında bir hata  oluştu.",
      };
    }

    // Cookie'yi işleyin
    const responseCookie = response.headers.get("set-cookie");
    const cookiesArray = responseCookie.split(",");
    const a = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    a.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

    console.debug("cookiesObject:", cookiesObject);

    // .AspNetCore.Identity.Application cookie'yi ayarlayın
    cookies().set(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

    return { success: "Kayıt başarılı!" };
  } catch (error) {
    console.error(error);
    return { error: "Bir hata oluştu" };
  }
}
