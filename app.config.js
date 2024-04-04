
export default ({ config }) => ({
    ...config,
    name: 'Storybook Web & Native',
    slug: 'storybook-web-and-native',
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  });
  