import { setupWorker } from "msw/browser";
import { restHandlers } from "./handlers";

export const worker = setupWorker(...restHandlers);
