import {darken, lighten, shade, transparentize} from 'polished';

const global = {
  primary: '#FF872C',
  secondary: '#1976d2',
  tertiary: '#30a350',
};

const base = {
  white: '#ffffff',
  black: '#000000',
  blue: '#0000ff',
  red: '#ff0000',
  green: '#00ff00',
};

export default {
  navigation: base.white,

  text: {
    primary: base.black,
    secondary: base.white,
    tertiary: global.primary,
    quanternary: global.secondary,
    error: lighten(0.05, base.red),
  },

  refreshControl: {
    primary: base.black,
  },

  button: {
    enabled: global.secondary,
    disabled: lighten(0.3, global.secondary),
    indicator: base.white,
  },

  icon: {
    primary: base.black,
    secondary: base.white,
  },

  input: {
    background: shade(0.04, base.white),
    placeholder: lighten(0.6, base.black),
    border: {
      unFocused: shade(0.04, base.white),
      focused: global.secondary,
      error: lighten(0.05, base.red),
    },
    valid: shade(0.3, base.green),
  },

  flashMessage: {
    information: darken(0.2, base.blue),
    success: darken(0.3, base.green),
    error: darken(0.2, base.red),
  },

  marker: {
    user: {
      background: transparentize(0.4, global.primary),
      content: global.primary,
    },
  },
};
