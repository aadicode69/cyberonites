import { toast } from "sonner";

export const successToast = (message) => {
  toast.success(message, {
    style: { fontSize: "14px", padding: "12px" },
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    style: { fontSize: "14px", padding: "12px" },
  });
};
