export type Spacing = {
  unit: number
};

export const spacing = {
  unit: 8,
  default: {
    space4: '4px',
    space8: '8px',
    space12: '12px',
    space16: '16px',
    space24: '24px',
    space32: '32px',
    space40: '40px',
    space48: '48px',
    space96: '96px',
  },
  top: {
    space4: '4px 0 0 0',
    space8: '8px 0 0 0',
    space12: '12px 0 0 0',
    space16: '16px 0 0 0',
    space24: '24px 0 0 0',
    space32: '32px 0 0 0',
    space48: '48px 0 0 0',
  },
  bottom: {
    space4: '0 0 4px 0',
    space8: '0 0 8px 0',
    space12: '0 0 12px',
    space16: '0 0 16px',
    space24: '0 0 24px',
    space32: '0 0 32px',
    space48: '0 0 48px',
  },
  left: {
    space4: '0 0 0 4px',
    space8: '0 0 0 8px',
    space12: '0 0 0 12px',
    space16: '0 0 0 16px',
    space24: '0 0 0 24px',
    space32: '0 0 0 32px',
    space48: '0 0 0 48px',
  },
  right: {
    space4: '0 4px 0 0',
    space8: '0 8px 0 0',
    space12: '0 12px 0 0',
    space16: '0 16px 0 0',
    space24: '0 24px 0 0',
    space32: '0 32px 0 0',
    space48: '0 48px 0 0',
  },
  horizontal: {
    space4: '0 4px',
    space8: '0 8px',
    space12: '0 12px',
    space16: '0 16px',
    space24: '0 24px',
    space32: '0 32px',
    space48: '0 48px',
  },
  vertical: {
    space4: '4px 0',
    space8: '8px 0',
    space12: '12px 0',
    space16: '16px 0',
    space24: '24px 0',
    space32: '32px 0',
    space48: '48px 0',
  },
  layout: {
    horizontalPadding: '24px',
  },
};

export default spacing;
