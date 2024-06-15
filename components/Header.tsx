
//import type {Node} from 'react-native';

import {ImageBackground, StyleSheet, Text, Image, Platform} from 'react-native';
import {useColorScheme} from 'react-native';
import Colors from './Colors';
import React from 'react';
import { Button, XGroup, XStack, YStack } from 'tamagui'
import { Activity, Airplay } from '@tamagui/lucide-icons'


const Header = (props)/*: Node */=> {
  const isDarkMode = useColorScheme() === 'dark';
  const logoImage = isDarkMode ? require('./logo_white.png') : require('./logo_black.png');
  return (
    // <XStack>
    //   <Image
    //     source={logoImage}
    //     style={[
    //       styles.background,
    //       {
    //         backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //       },
    //       styles.logo,
    //     ]}
    //   >
    //   </Image>
    // </XStack>
      
      <YStack padding="$3" space="$3" {...props}>
      <Button>Plain</Button>
      <Button alignSelf="center" icon={Airplay} size="$6">
        Large
      </Button>
      <XStack space="$2" justifyContent="center">
        <Button size="$3" theme="active">
          Active
        </Button>
        <Button size="$3" variant="outlined">
          Outlined
        </Button>
      </XStack>
      <XStack space="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>
        <Button iconAfter={Activity} size="$3">
          iconAfter
        </Button>
      </XStack>
      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            disabled
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    width: 26,
    height: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
