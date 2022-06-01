import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import sendMailJson from "assets/animations/lordicons/green/177-envelope-mail-send-outline-edited.json";
import { sendEmail } from "utils/helpers";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Contact.styles";
import renderToast from "utils/renderToast";
import MainLayout from "layouts/Main";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [contactForm, setContactForm] = useState(INITIAL_FORM);
  const { t } = useTranslation();
  const { name: themeName, background, text } = useTheme();

  const [error, setError] = useState({ name: "", email: "", message: "" });

  const handleSendEmail = () => {
    if (!contactForm.message) {
      setError((oldErr) => ({
        ...oldErr,
        message: t("msg.input.error", { input: t("message") }),
      }));
    }

    if (!contactForm.name) {
      setError((oldErr) => ({
        ...oldErr,
        name: t("msg.input.error", { input: t("name") }),
      }));
    }

    if (!contactForm.email) {
      setError((oldErr) => ({
        ...oldErr,
        email: t("msg.input.error", { input: t("email") }),
      }));
    }

    if (!contactForm.name || !contactForm.message || !contactForm.email) return;

    setIsSending(true);
    sendEmail(contactForm)
      .then(() => {
        setContactForm(INITIAL_FORM);
        renderToast({
          message: t("msg.message.sent"),
          theme: themeName === "dark" ? "dark" : "light",
          type: "success",
          style: { backgroundColor: background, color: text },
        });
      })
      .catch(() => {
        renderToast({
          message: t("msg.message.error"),
          theme: themeName === "dark" ? "dark" : "light",
          type: "error",
          style: { backgroundColor: background, color: text },
        });
      })
      .finally(() => setIsSending(false));
  };

  const handleFieldValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));

    setError((oldErr) => ({ ...oldErr, [e.target.name]: "" }));
  };

  return (
    <View>
      <MainLayout>
        <Styled.FormTitle>{t("contact-me")}</Styled.FormTitle>
        <Styled.InputsWrapper>
          <Input
            onChange={handleFieldValue}
            value={contactForm.name}
            type="text"
            label={t("name")}
            name="name"
            autoComplete="off"
            required
            error={error.name}
          />
          <Input
            onChange={handleFieldValue}
            value={contactForm.email}
            type="email"
            label={t("email")}
            name="email"
            autoComplete="off"
            required
            error={error.email}
          />
          <Input
            onChange={handleFieldValue}
            value={contactForm.subject}
            type="text"
            label={t("subject")}
            name="subject"
            autoComplete="off"
          />
          <Textarea
            onChange={handleFieldValue}
            value={contactForm.message}
            required
            label={t("message")}
            rows={3}
            name="message"
            error={error.message}
          />
          <Button
            loaderJson={sendMailJson}
            size="large"
            isLoading={isSending}
            onClick={handleSendEmail}
            fullWidth
          >
            {t("send")}
          </Button>
        </Styled.InputsWrapper>
      </MainLayout>
    </View>
  );
};

export default Contact;
