export interface GCINST {
  ID: string;
  NAME: string;
  ZONE: string;
  MACHINE_TYPE: string;
  OS: string;
  INTERNAL_IP: string;
  EXTERNAL_IP: string;
  STATUS: string;
  JENBUILD: string;
}

export interface Service {
  NAME: string;
  PORT: number;
  TYPE: string;
  PING: number;
  TIMEOUT: number;
}

export interface JenkinsJob {
  Timestamp: string;
  Building: boolean;
  Result: string;
  DisplayName: string;
  URL: string;
  UserName: string;
}