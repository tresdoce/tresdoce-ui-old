import _ from 'lodash';

export interface Space {
  [name: string]: string;
}

export type Spacing = {
  default: Space;
  top: Space;
  right: Space;
  bottom: Space;
  left: Space;
  horizontal: Space;
  vertical: Space;
  [name: string]: Space;
}

export type SpacingInput = { +readonly  [K in keyof Spacing]+?: Spacing[K]} & {
  default?: Space;
  top?: Space;
  right?: Space;
  bottom?: Space;
  left?: Space;
  horizontal?: Space;
  vertical?: Space;
  [name: string]: Space;
}

const defaultSpacing = {
  default: {
    space2: '2px',
    space4: '4px',
    space8: '8px',
    space12: '12px',
    space16: '16px',
    space24: '24px',
    space32: '32px',
    space40: '40px',
    space48: '48px',
    space64: '64px',
    space80: '80px',
    space96: '96px',
    space160: '160px',
  },
  top: {
    space2: '2px 0 0 0',
    space4: '4px 0 0 0',
    space8: '8px 0 0 0',
    space12: '12px 0 0 0',
    space16: '16px 0 0 0',
    space24: '24px 0 0 0',
    space32: '32px 0 0 0',
    space40: '40px 0 0 0',
    space48: '48px 0 0 0',
    space64: '64px 0 0 0',
    space80: '80px 0 0 0',
    space96: '96px 0 0 0',
    space160: '160px 0 0 0',
  },
  right: {
    space2: '0 2px 0 0',
    space4: '0 4px 0 0',
    space8: '0 8px 0 0',
    space12: '0 12px 0 0',
    space16: '0 16px 0 0',
    space24: '0 24px 0 0',
    space32: '0 32px 0 0',
    space40: '0 40px 0 0',
    space48: '0 48px 0 0',
    space64: '0 64px 0 0',
    space80: '0 80px 0 0',
    space96: '0 96px 0 0',
    space160: '0 160px 0 0',
  },
  bottom: {
    space2: '0 0 2px 0',
    space4: '0 0 4px 0',
    space8: '0 0 8px 0',
    space12: '0 0 12px 0',
    space16: '0 0 16px 0',
    space24: '0 0 24px 0',
    space32: '0 0 32px 0',
    space40: '0 0 40px 0',
    space48: '0 0 48px 0',
    space64: '0 0 64px 0',
    space80: '0 0 80px 0',
    space96: '0 0 96px 0',
    space160: '0 0 160px 0',
  },
  left: {
    space2: '0 0 0 2px',
    space4: '0 0 0 4px',
    space8: '0 0 0 8px',
    space12: '0 0 0 12px',
    space16: '0 0 0 16px',
    space24: '0 0 0 24px',
    space32: '0 0 0 32px',
    space40: '0 0 0 40px',
    space48: '0 0 0 48px',
    space64: '0 0 0 64px',
    space80: '0 0 0 80px',
    space96: '0 0 0 96px',
    space160: '0 0 0 160px',
  },
  horizontal: {
    space2: '0 2px',
    space4: '0 4px',
    space8: '0 8px',
    space12: '0 12px',
    space16: '0 16px',
    space24: '0 24px',
    space32: '0 32px',
    space40: '0 40px',
    space48: '0 48px',
    space64: '0 64px',
    space80: '0 80px',
    space96: '0 96px',
    space160: '0 160px',
  },
  vertical: {
    space2: '2px 0',
    space4: '4px 0',
    space8: '8px 0',
    space12: '12px 0',
    space16: '16px 0',
    space24: '24px 0',
    space32: '32px 0',
    space40: '40px 0',
    space48: '48px 0',
    space64: '64px 0',
    space80: '80px 0',
    space96: '96px 0',
    space160: '160px 0',
  }
};

const createSpacing = (spacing?: SpacingInput): Spacing => {
  return _.merge(defaultSpacing, spacing)
}

export default createSpacing;
