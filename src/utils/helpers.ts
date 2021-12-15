import i18next from "i18next";

export const getCurrentLanguage = () => {
  return i18next.language;
};

export const openNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
