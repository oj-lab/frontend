import { setupWorker } from "msw";
import { restHandlers } from "./handlers";

export const worker = setupWorker(...restHandlers);
