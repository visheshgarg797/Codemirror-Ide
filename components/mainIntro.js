"use client";
import ButtonLeft from "./leftNavButton";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";

export default function MainIntro() {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginLeft: "390px",
        marginRight: "130px",
        paddingRight: "20px",
        paddingBottom: "60px",
      }}
    >
      <h1
        style={{
          color: themeStyles.col02.color,
          paddingTop: "40px",
          fontSize: "40px",
          fontFamily:
            "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          fontWeight: "700",
        }}
      >
        Introduction{" "}
      </h1>
      <p
        style={{
          color: themeStyles.col02.color,
          fontSize: "20px",
          fontFamily:
            "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          fontWeight: "300",
          lineHeight: "1.5",
        }}
      >
        warn Fast Refresh had to perform a full reload. Read more:
        https://nextjs.org/docs/messages/fast-refresh-reload - wait compiling...
        - event compiled client and server successfully in 831 ms (634 modules)
        - warn Fast Refresh had to perform a full reload due to a runtime error.
        - wait compiling... - event compiled client and server successfully in
        594 ms (634 modules) - wait compiling... - event compiled client and
        server successfully in 310 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 67 ms (304 modules) - wait compiling... - event compiled client and
        server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules) warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules) warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)warn Fast Refresh had to perform a full reload.
        Read more: https://nextjs.org/docs/messages/fast-refresh-reload - wait
        compiling... - event compiled client and server successfully in 831 ms
        (634 modules) - warn Fast Refresh had to perform a full reload due to a
        runtime error. - wait compiling... - event compiled client and server
        successfully in 594 ms (634 modules) - wait compiling... - event
        compiled client and server successfully in 310 ms (579 modules) - wait
        compiling /favicon.ico/route (client and server)... - event compiled
        successfully in 67 ms (304 modules) - wait compiling... - event compiled
        client and server successfully in 297 ms (579 modules) - wait compiling
        /favicon.ico/route (client and server)... - event compiled successfully
        in 80 ms (304 modules)
      </p>
    </div>
  );
}
