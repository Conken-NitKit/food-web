import { Logger } from "../../types/logger";

export abstract class Context {
  abstract publicConfig: {
    isDebug: boolean;
  };
}

export const logger = (context: Context): Logger => {
  return {
    debug: (msg: any, ...args: any[]) => {
      if (context.publicConfig.isDebug) {
        console.log(msg, ...args);
      }
    },
    info: (msg: any, ...args: any[]) => {
      console.log(msg, ...args);
    },
    warn: (msg: any, ...args: any[]) => {
      console.warn(msg, ...args);
    },
    error: (msg: any, ...args: any[]) => {
      console.error(msg, ...args);
    },
    fatal: (msg: any, ...args: any[]) => {
      console.error("FATAL", msg, ...args);
    },
  };
};
