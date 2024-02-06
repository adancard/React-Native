import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const App = () => {

  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const pressButton = (value) => {
    if (display === '0' || operator === 'C') {
      setDisplay(value)
    } else { setDisplay(display + value) }
  }

  const pressOperator = (operation) => {
    setOperand(parseFloat(display));
    setOperator(operation);

    if (operation === 'C') {
      setDisplay('0')
      setOperand(null);
      setOperator(null);
    } else {
      setDisplay('0');
    }
  };

  const calculate = () => {

    num = parseFloat(display);
    switch (operator) {
      case '+':
        setDisplay((operand + num).toString());
        break;
      case '-':
        setDisplay((operand - num).toString());
        break;
      case '*':
        setDisplay((operand * num).toString());
        break;
      case '/':
        setDisplay((operand / num).toString());
      break;
      case '√':
        setDisplay((Math.sqrt(num)).toString())
      break;

    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.background}>

        <View style={styles.resultado}>

          <Text style={{ fontSize: 15, margin: 10 }}>{display}</Text>

        </View>

        <View style={styles.fixToText}>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('7')}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('8')}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('9')}>
            <Text>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressOperator('/')}>
            <Text>/</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.fixToText}>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('4')}>
            <Text>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('5')}>
            <Text>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('6')}>
            <Text>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressOperator('*')}>
            <Text>*</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.fixToText}>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('1')}>
            <Text>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('2')}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('3')}>
            <Text>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressOperator('-')}>
            <Text>-</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.fixToText}>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('0')}>
            <Text>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressButton('.')}>
            <Text>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={calculate}>
            <Text>=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressOperator('+')}>
            <Text>+</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.fixToText}>

          <TouchableOpacity style={styles.botao}  onPress={() => pressOperator('√')}>
            <Text>√</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => pressOperator('C')}>
            <Text>C</Text>
          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    padding: 6,
    justifyContent: 'center',
    width: 'auto',
    alignItems: 'center',
  },
  botao: {
    borderWidth: 1 ,
    borderColor: '#20232a',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 3,
    borderRadius: 6
  },
  resultado: {
    borderWidth: 1 ,
    borderColor: '#20232a',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '20%',
    backgroundColor: '#f5f5f5',
    borderRadius: 5

  },
  background: {
    borderWidth: 2,
    borderColor: '#20232a',
    height: '100vga',
    backgroundColor: '#A9A9A9',
    width: '13vga',
    borderRadius: 5
  }
});

export default App;
