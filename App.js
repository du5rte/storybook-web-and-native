import Constants from 'expo-constants'

import AppScreen from './src/screens/App'

const { storybookEnabled } = Constants.expoConfig.extra

const AppEntryPoint = storybookEnabled
  ? require('./.storybook_ondevice').default
  : AppScreen

export default AppEntryPoint