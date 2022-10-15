export type LogMethod = (msg: any, ...args: any[]) => void;

export type Logger = {
  debug: LogMethod;
  info: LogMethod;
  warn: LogMethod;
  error: LogMethod;
  fatal: LogMethod;
};
