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
  export type StopLineArrivalData = {
    Arrive:ArriveType



  }

  export type StopData = {
    code: string;
    description: string;
      data: StopLineArrivalData;
  }

  export type StopLineArrivalResponse = {
    code:string;
    description:string;
    datetime:string;
    data:data;
  }
  export type data= {
    StopLines:Stop[];
    Data:Data;
    Direction:string;
    Description:string;
    Label:string;
  }
  export type ArriveType={
    DistanceBus:number;
    geometry:Geometry;
    bus:string;
    destination:string;
    stop:string;
    positionTypeBus:string;
    isHead:string;
    line:string;
    estimateArrive:string;

    
  }
  export type formatedResponse = {
    Arive:ArriveType;
    StopInfo:Stop;
    ExtraInfo:Data;
    Incident:Data;

  } ;