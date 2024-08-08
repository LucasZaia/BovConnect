/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AddIcon, Box, Fab, FabIcon, FabLabel, GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { config } from "@gluestack-ui/config"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Menu from './src/components/menu/menu';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={backgroundStyle}>
        <Menu/>
          {/* <Box
            top={800}
          >
            <Fab
              placement="bottom right"
              isHovered={false}
              isDisabled={false}
              isPressed={false}
            >
              <FabIcon as={AddIcon} />
              <FabLabel>Quick start</FabLabel>
            </Fab>
          </Box> */}
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
