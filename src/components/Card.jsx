import { StyleSheet, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

function Card({ isTurned, isLocked, id, color, handleClique }) {
  const styles = StyleSheet.create({
    cardFront: {
      backgroundColor: color,
    },

    cardBack: {
      backgroundColor: 'rgb(182, 184, 182)'
    },

    card: {
      alignItems: 'center',
      borderRadius: 10,
      height: 150,
      justifyContent: 'center',
      margin: 10,
      width: 100,
    },
  });

  const front = () => {
    return (
      <View style={{ ...styles.card, ...styles.cardFront }} onStartShouldSetResponder={ () => handleClique(id) } ></View>
    );
  };

  const back = () => {
    return (
      <View style={{ ...styles.card, ...styles.cardBack }} onStartShouldSetResponder={ () => handleClique(id) } >
        <FontAwesome name="gamepad" size={48} color='rgba(101, 103, 107, 0.4)' />
      </View>
    );
  };

  if (!isTurned || isLocked) {
    return front();
  }

  return back();
}

export default Card;
