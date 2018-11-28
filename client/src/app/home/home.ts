interface HomeFields {
  label: string;
  description: string;
  img: string;
  timelapseFrameImg?: string;
}

export interface HomeConfig {
  speed: HomeFields;
  hybrid: HomeFields;
  allDevices: HomeFields;
}
