export interface MonitoringLog {
  user: {
    userId: string;
    accountId: string;
    name: string;
  };
  type: "member" | "product" | "order";
  message: string;
  date: number;
}
