import Constants from 'expo-constants'

import AppScreen from './src/screens/App'

const { storybookEnabled } = Constants.expoConfig.extra

const AppEntryPoint = storybookEnabled
  ? require('./.storybook').default
  : AppScreen

export default AppEntryPoint