const { StyleSheet, Text, View } = require("react-native");

function Board() {
  const styles = StyleSheet.create({
    board: {
      flex: 1,
      padding: 10,
      width: '100%',
    },
    
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    }
  });

  return (
    <View style={styles.container} >
      <View style={styles.board} ></View>
    </View>
  );
}

export default Board;
