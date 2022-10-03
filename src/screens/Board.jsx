import { useState } from "react";
const { StyleSheet, View } = require("react-native");

import Card from "../components/Card";

let currentGuess = [];

function Board() {
  const styles = StyleSheet.create({
    board: {
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      width: '100%'
    },
    
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    }
  });

  const [ deck, setDeck ] = useState([
    { key: 1, color: 'red', isTurned: true, isLocked: false },
    { key: 2, color: 'red', isTurned: true, isLocked: false },
    { key: 3, color: 'green', isTurned: true, isLocked: false },
    { key: 4, color: 'green', isTurned: true, isLocked: false },
    { key: 5, color: 'blue', isTurned: true, isLocked: false },
    { key: 6, color: 'blue', isTurned: true, isLocked: false },
  ].sort( () => Math.random() - 0.5 ));

  const turnCard = (cardID) => {
    setDeck(
      deck.map( card => card.key === cardID ? { ...card, isTurned: !card.isTurned } : card ),
    );
  };

  const matching = (currentGuess) => {
    return currentGuess[0].color === currentGuess[1].color;
  }

  const handleCardClique = (cardID) => {
    const selectedCard = deck.find( card => card.key === cardID );
    currentGuess.push(selectedCard);

    if ( currentGuess.length === 2 ) {
      turnCard(selectedCard.key);

      const rightGuess = matching(currentGuess);

      if (rightGuess) {
        setDeck(
          deck.map( card => card.key === (currentGuess[0].key || currentGuess[1].key) ? { ...card, isLocked: true } : card ),
        );

        currentGuess = [];
      } else {
          setTimeout(() => {
            setDeck(
              deck.map( card => card.key === (currentGuess[0].key || currentGuess[1].key) ? { ...card, isTurned: true } : card ),
            );
            
            currentGuess = [];
          }, 1000);
      }
    }

    turnCard(selectedCard.key);
  };

  return (
    <View style={styles.container} >
      <View style={styles.board} >
        {deck.map( ({ key, color, isTurned, isLocked }) => (
          <Card key={key} id={key} color={color} isTurned={isTurned} isLocked={isLocked} handleClique={handleCardClique} />
        ) )}
      </View>
    </View>
  );
}

export default Board;
