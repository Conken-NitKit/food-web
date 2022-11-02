export interface MonitoringLog {
  user: {
    name: string;
  };
  type: "member" | "product" | "order";
  message: string;
  date: number;
}
