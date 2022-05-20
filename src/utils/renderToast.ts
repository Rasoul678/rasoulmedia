import { toast } from "react-toastify";
import { ToastContent, ToastOptions } from "react-toastify/dist/types";

const renderToast = (params: ToastOptions & { message: ToastContent }) => {
  const { type, message, ...rest } = params;

  if (!!type && type !== "default") {
    return toast[type](message, { ...rest });
  } else {
    return toast(message, { ...rest });
  }
};

export default renderToast;
