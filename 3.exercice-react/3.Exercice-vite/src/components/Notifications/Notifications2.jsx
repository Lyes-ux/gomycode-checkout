import React, { useState } from "react";
import Notification from "../exo";

export default function NotificationsGenerator() {
  const [notfications, setNotfications] = useState([
    {
      id: "jcgedcjgfe",
      text: "hivfkvhfkv",
      theme: "success",
    },
  ]);
  return (
    <div>
      {notfications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          text={notification.text}
          alertStyle={notification.theme}
        />
      ))}
    </div>
  );
}
