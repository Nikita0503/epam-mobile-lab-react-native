import React from 'react';
import {Pressable, Text, View} from 'react-native';
import BackButtonSvgImage from '@images/icons/BackButtonSvgImage';
import {AppStackParamList} from '@interfaces/navigation/routeParams';
import {NavigationProp, useNavigation} from '@react-navigation/native';
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

const Header = ({title, actionButton, hideBackButton}: IProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const onPressBackButton = React.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!hideBackButton && navigation.canGoBack() && (
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
