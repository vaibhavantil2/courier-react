import React from "react";

import { CourierToast, ToastProvider, useToast } from "@trycourier/react-toast";
import { Button } from "./styled";

export default {
  title: "Toast/Toast",
  component: CourierToast,
  args: {
    bodyText: "One API for notifications!",
  },
};

function DefaultComponent({ body }) {
  const [toast] = useToast();
  return <Button onClick={() => toast(body)}>Show Toast</Button>;
}

export function NoTimer({ bodyText }) {
  return (
    <ToastProvider
      clientKey="client-key"
      config={{
        autoClose: false,
      }}
    >
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}