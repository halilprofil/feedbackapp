"use server";

import { AdvancedFetch } from "@/utils/advancedfetch";
import { cookies } from "next/headers";
import { redirect, revalidatePath } from "next/navigation";

// Çerez ayarları
function setCookie(cookieName, cookieValue) {
  cookies().set(cookieName, cookieValue, {
    sameSite: "None", // Tüm sitelerden erişilebilmesi için
    secure: true, // HTTPS üzerinden geçerli
    path: "/", // Çerezin tüm site için geçerli olmasını sağlar
    httpOnly: true, // Sadece sunucudan erişilebilir olması için
  });
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
      credentials: "include", // Çerezlerin paylaşılması için
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
      setCookie(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);
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
      credentials: "include", // Çerezlerin paylaşılması için
    });

    const data = await response.text();

    if (!response.ok) {
      return {
        error: "Çıkış yapılamadı",
      };
    }

    // Cookie'yi işleyin
    const responseCookie = response.headers.get("set-cookie");
    const cookiesArray = responseCookie.split(",");
    const parsedCookies = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    parsedCookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

    // .AspNetCore.Identity.Application cookie'yi ayarlayın
    setCookie(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

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
      credentials: "include", // Çerezlerin paylaşılması için
    });

    const { body } = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        switch (body.code) {
          case "PasswordRequiresNonAlphanumeric":
            return { error: "şifreniz harf içermelidir" };

          case "PasswordRequiresDigit":
            return { error: "şifreniz numara içermelidir" };

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
        error: "Kayıt işlemi sırasında bir hata oluştu.",
      };
    }

    // Cookie'yi işleyin
    const responseCookie = response.headers.get("set-cookie");
    const cookiesArray = responseCookie.split(",");
    const parsedCookies = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    parsedCookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

    console.debug("cookiesObject:", cookiesObject);

    // .AspNetCore.Identity.Application cookie'yi ayarlayın
    setCookie(".AspNetCore.Identity.Application", cookiesObject[".AspNetCore.Identity.Application"]);

    return { success: "Kayıt başarılı!" };
  } catch (error) {
    console.error(error);
    return { error: "Bir hata oluştu" };
  }
}
