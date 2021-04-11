export type ZIndexApplications = {
  [name:string]: number;
}

export type ZIndex = {
  zIndex1: number;
  zIndex2: number;
  zIndex3: number;
  zIndex4: number;
  zIndex5: number;
  zIndex6: number;
  zIndex7: number;
  zIndex8: number;
  zIndex9: number;
  zIndex10: number;
  zIndex11: number;
  zIndex12: number;
  zIndex13: number;
  zIndex14: number;
  zIndex15: number;
  zIndex16: number;
  zIndex17: number;
  zIndex18: number;
  zIndex19: number;
  applications: ZIndexApplications
};

const zIndex = {
  zIndex1: 100,
  zIndex2: 200,
  zIndex3: 300,
  zIndex4: 400,
  zIndex5: 500,
  zIndex6: 600,
  zIndex7: 700,
  zIndex8: 800,
  zIndex9: 900,
  zIndex10: 1000,
  zIndex11: 1010,
  zIndex12: 1020,
  zIndex13: 1030,
  zIndex14: 1040,
  zIndex15: 1050,
  zIndex16: 1060,
  zIndex17: 1070,
  zIndex18: 1080,
  zIndex19: 1090,
  applications: {
    dropdown: 1000,
    sticky:1020,
    fixed:1030,
    offCanvas:1040,
    modalBackdrop:1050,
    modal: 1060,
    popover:1070,
    tooltip: 1080
  }
};

export default zIndex;
