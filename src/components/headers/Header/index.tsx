import BackButtonSvgImage from '@images/icons/BackButtonSvgImage';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface IActionButton {
  title: string;
  onPress: () => void;
}

interface IProps {
  title: string;
  actionButton?: IActionButton;
  hideBackButton?: boolean;
}

const Header = ({ title, actionButton, hideBackButton }: IProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const onPressBackButton = React.useCallback(() => {
    // needs to handle universal links proccess
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.TABS_SCREEN }],
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!hideBackButton && (
        <Pressable style={styles.backButton} onPress={onPressBackButton}>
          <BackButtonSvgImage />
        </Pressable>
      )}
      <Text style={styles.titleText}>{title}</Text>
      {actionButton && (
        <Pressable style={styles.actionButton} onPress={actionButton.onPress}>
          <Text style={styles.actionButtonText}>{actionButton.title}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Header;
