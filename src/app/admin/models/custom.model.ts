export interface MigrationStatus {
    datetime: string | null;
    ceaseRequestStatus: string;
    ceaseRequestTime: string;
    ceaseCompletionTime: string;
    provideRequestStatus: string | null;
    remark_Cease: string | null;
    remark_provide: string | null;
    migrationStatus: string | null;
    ceasePayload: string | null;
    providePayload: string | null;
  }
   
  export interface Connection {
    connecitonId: string | null;
    isp: string;
    contractId: string;
    customerName: string;
    customerLastname: string;
    customerStreet: string;
    connectedPOPId: string;
    connectedDeviceName: string;
    connectedPort: string;
    migrated: boolean | null;
    migrationStatus: MigrationStatus;
    deviceDto: any | null;
  }
   
  export interface CustomerDto {
    firstName: string;
    lastName: string;
    gender: string;
    mobile: string;
    street: string;
    city: string;
    houseNumber: string;
    tzipcode: string;
    connection: Connection[];
    ontserialNumber: string;
  }
   
  export interface DeviceDto {
    name: string;
    hostName: string;
    deviceType: string;
    vendor: string;
    popId: string;
    city: string;
    popLocation: string;
    migrated: boolean | null;
  }
   
  export interface CustomerData {
    customerDto: CustomerDto;
    deviceDto: DeviceDto;
  }
  
  
  export interface Elements {
  deviceId: string;
  city: string;
  deviceType: string;
  hostName: string;
  migrated: string;
  name: string;
  popId: string;
  popLocation: string;
  vendor: string;
}

