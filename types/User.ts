import { Roles } from ".";

export interface User {
  id: string;
  name: string;
  icon: string;
  role: Roles;
}
