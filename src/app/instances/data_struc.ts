export interface GCINST {
  ID: string;
  NAME: string;
  ZONE: string;
  MACHINE_TYPE: string;
  INTERNAL_IP: string;
  EXTERNAL_IP: string;
  STATUS: string;
  JENSTAT: string;
}

export interface Service {
  NAME: string;
  PORT: number;
}