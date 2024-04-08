export type LoginResponse = {
    data: Data;
    code: number;
    description: string;
  };
  export type Data = {
    accessToken: string;
    tokenSecExpiration: number;
    tokenType: string;
  };
  export type StopResponse = {
    data: StopData;
    code: number;
    description: string;
    datetime: string;
  };
  export type Geometry = {
      coordinates: number[];
      type: string;
  }
  export type datalineContent = {
      line: string;
      label: string;
      direction: string;
      maxFreq: string;
      minFreq: string;
      headerA: string;
      headerB: string;
      startTime: string;
      stopTime: string;
      dayType: string;
  }
  export type Dataline = {
      dataline: datalineContent[];
  }
  export type Stop = {
      stop: string;
      name: string;
      postalAddress: string;
      geometry:Geometry;
      pmv: string;
      dataline:Dataline;
  
  }

  export type StopData = {
      stops: Stop[];
  }