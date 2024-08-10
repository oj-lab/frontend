import { useLayoutEffect } from "react";
import { EVENT_URL } from "@/apis/event";
import { isGhPages, isMock } from "@/utils/environment";

export const useEvent = () => {
  useLayoutEffect(() => {
    if (!isGhPages() && !isMock()) {
      console.log("Listening EventSource");
      const eventSource = new EventSource(EVENT_URL);
      // If stream contains no event type,
      // can use `onmessage` | `addEventListener("message", ...)`
      eventSource.onmessage = function (event) {
        // You should make sure `close` is correctly handled.
        // Or eventSource will keep reconnecting to the server.
        if (event.data === "close") {
          eventSource.close();
          console.log("EventSource closed");
        }
      };
      // If stream contains event type, should use `addEventListener`
      eventSource.addEventListener("eventType", function (event) {
        console.log(event);
      });
    } else {
      console.log("EventSource not supported in gh-pages or mock mode");
    }
  }, []);
};
