import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import sendMailJson from "assets/animations/lordicons/green/177-envelope-mail-send-outline-edited.json";
import { sendEmail } from "utils/helpers";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Contact.styles";
import Socials from "./Socials";

const INITIAL_FORM = {
  name: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [contactForm, setContactForm] = useState(INITIAL_FORM);
  const { t } = useTranslation();

  const [error, setError] = useState({ name: "", message: "" });

  const handleSendEmail = () => {
    if (!contactForm.message) {
      setError((oldErr) => ({ ...oldErr, message: "Message is required" }));
    }

    if (!contactForm.name) {
      setError((oldErr) => ({ ...oldErr, name: "Name is required" }));
    }

    if (!contactForm.name || !contactForm.message) return;

    setIsSending(true);
    sendEmail(contactForm)
      .then(() => setContactForm(INITIAL_FORM))
      .catch((err) => console.log(err))
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
          rows={5}
          name="message"
          error={error.message}
        />
        <Button
          loaderJson={sendMailJson}
          size="medium"
          isLoading={isSending}
          onClick={handleSendEmail}
          fullWidth
        >
          {t("send")}
        </Button>
      </Styled.InputsWrapper>
      <Socials />
    </View>
  );
};

export default Contact;
