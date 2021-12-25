import { useState } from "react";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import sendMailJson from "assets/animations/lordicons/green/177-envelope-mail-send-outline-edited.json";
import { sendEmail } from "utils/helpers";
import { View } from "components/Global/GlobalStyles";

const INITIAL_FORM = {
  name: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [contactForm, setContactForm] = useState(INITIAL_FORM);

  const [error, setError] = useState({ name: "", message: "" });

  const handleSendEmail = () => {
    if (!contactForm.message) {
      setError((oldErr) => ({ ...oldErr, message: "Please enter message" }));
    }

    if (!contactForm.name) {
      setError((oldErr) => ({ ...oldErr, name: "Please enter your name" }));
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
      <h1>Contact</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "2rem",
          width: "80%",
          margin: "auto",
        }}
      >
        <Input
          onChange={handleFieldValue}
          value={contactForm.name}
          type="text"
          label="name"
          name="name"
          autoComplete="off"
          required
          autoFocus
          error={error.name}
        />
        <Input
          onChange={handleFieldValue}
          value={contactForm.subject}
          type="text"
          label="subject"
          name="subject"
          autoComplete="off"
        />
        <Textarea
          onChange={handleFieldValue}
          value={contactForm.message}
          required
          label="message"
          rows={7}
          name="message"
          error={error.message}
        />
        <Button
          loaderJson={sendMailJson}
          size="medium"
          isLoading={isSending}
          onClick={handleSendEmail}
        >
          send
        </Button>
      </div>
    </View>
  );
};

export default Contact;
