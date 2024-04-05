

# Storybook - Web and Native
With [Storybook for React Native](https://github.com/storybookjs/react-native/?tab=readme-ov-file#storybook-for-react-native) you can design and develop individual React Native components without running your app.

<center>
  <img 
    src="docs/assets/screenshot.png" 
    alt="Storybook running on browser and simulator"
    height="200px"
  >
</center>

## Getting started
```sh
yarn install
```

## Cmd
- `yarn ios` runs app on ios simulator
- `yarn web` runs app on browser 
- `yarn storybook:web` runs **storybook** on browser 
- `yarn storybook:ios` runs **storybook** on ios simulator

## Why React Native for Web

**React Native** is a pure UI language, based on primitives like `View`, `Text`, or `Image`, which are basic elements of any interface, more in line with _"Learn once, write anywhere"_.

**React** on the other hand, React’s primitives are just DOM nodes — HTML tags like `<div>`, `<p>`, or `<a>`, which are not pure UI. They’re meant to structure and make sense of the hypertext. 

**React Native for Web** makes it possible to run **[React Native](https://reactnative.dev/)** components and APIs on the web using React DOM. Read more [The state of React Native for Web](https://blog.logrocket.com/the-state-of-react-native-web-in-2019-6ab67ac5c51e/) by LogRocket.

### Pros

- Unified coding language
- Universal crossplatform component
- Reusing the same code across web and native
- Timesaver in developing, testing and maintainability
- Consistancy in design and functionality of the mobile app across to the web

### Cos

- Can be challenging to setup (although this process gets easier every year)
- Not everything is cross plaform, ios native modules like date pickers, navigation, don’t work on web.
- React developers need to get familiar with React Native APIs

👉 When UI deviates from one platform to another, then it’s just a matter of creating `.web` & `.native` files. Example:

```bash
Datepicker/
	Datepicker.native.tsx
	Datepicker.web.tsx
```

## How to setup on an existing project

1. Initialize a new [Expo app](https://docs.expo.dev/tutorial/create-your-first-app/#initialize-a-new-expo-app)
2. Install [web dependencies](https://docs.expo.dev/tutorial/create-your-first-app/#install-dependencies) to run expo web `expo start --web`
3. Configure Storybook for React Native ([Manual setup for existing apps](https://github.com/storybookjs/react-native/blob/next/MANUAL_SETUP.md#manual-setup))
4. Configure Storybook for Web ([copy template setup](https://github.com/dannyhw/expo-template-storybook/tree/main))

## Interesting Use cases
- [Component Testing IRL](https://www.youtube.com/watch?v=Waht9qq7AoA)
- [Accessibility Testing in Storybook](https://www.youtube.com/watch?v=63nQ9qC3Tck)