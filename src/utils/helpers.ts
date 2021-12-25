import i18next from "i18next";
import emailjs from "emailjs-com";

import { EmailService } from "constants/Global";

export const getCurrentLanguage = () => {
  return i18next.language;
};

export const openNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const padZero = (str: string, len?: number) => {
  len = len || 2;

  const zeros = new Array(len).join("0");

  return (zeros + str).slice(-len);
};

export const invertColor = (hex: string, bw?: boolean) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }

  //! convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  let r: string | number = parseInt(hex.slice(0, 2), 16);
  let g: string | number = parseInt(hex.slice(2, 4), 16);
  let b: string | number = parseInt(hex.slice(4, 6), 16);

  //! This has a bw option that will decide whether to invert to black or white;
  //! so you'll get more contrast which is generally better for the human eye.
  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }

  //! invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);

  //! pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

export const sendEmail = async (options: Record<string, string>) => {
  try {
    const response = await emailjs.send(
      EmailService.serviceId,
      EmailService.templateId,
      options,
      EmailService.userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};
