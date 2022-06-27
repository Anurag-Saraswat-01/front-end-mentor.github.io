<template>
  <CalcHeader />
  <CalcDisplay :value="value.length === 0 ? '0' : valueToString(value)" />
  <CalcKeypad
    @update-value="updateValue"
    @delete-value="deleteValue"
    @reset-display="resetDisplay"
    @calculate-result="calculateResult"
  />
</template>

<script>
import CalcHeader from "./CalcHeader";
import CalcDisplay from "./CalcDisplay";
import CalcKeypad from "./CalcKeypad";

export default {
  name: "CalcContainer",
  components: {
    CalcHeader,
    CalcDisplay,
    CalcKeypad,
  },
  data() {
    return {
      value: [],
      decimalFlag: false,
    };
  },
  methods: {
    // converts value arr to a string for display
    valueToString(arr) {
      let value = "";
      arr.map((data) => {
        value = value.concat(data);
      });
      return value;
    },
    // returns precendence of operators
    precedence(char) {
      if (char === "+" || char === "-") {
        return 1;
      } else if (char === "/" || char === "x") {
        return 2;
      } else {
        return 0;
      }
    },
    // handles update of value arr
    updateValue(char) {
      if (
        char === "." ||
        (this.decimalFlag && !["+", "-", "/", "x", "$"].includes(char))
      ) {
        this.decimalFlag = true;
        const lastElement = this.value.pop();
        const newElement = lastElement.concat(char);
        this.value.push(newElement);
      } else if (["+", "-", "/", "x", "$"].includes(char)) {
        this.decimalFlag = false;
        this.value.push(char);
      } else {
        this.value.push(char);
      }
    },
    // resets the calculator
    resetDisplay() {
      this.value = [];
    },
    // deletes the last element added
    deleteValue() {
      this.value.pop();
    },
    // main calculate function, infix to postfix
    calculateResult() {
      const operatorStack = [];
      const operandStack = [];
      const value = [...this.value, "$"];
      value.map((element) => {
        if (["+", "-", "/", "x", "$"].includes(element)) {
          while (
            operatorStack.length !== 0 &&
            this.precedence(element) <=
              this.precedence(operatorStack[operatorStack.length - 1])
          ) {
            const op1 = operandStack.pop();
            const op2 = operandStack.pop();
            const operator = operatorStack.pop();
            operandStack.push(
              (+this.calcHelper(op1, op2, operator).toFixed(5)).toString()
            );
          }
          operatorStack.push(element);
        } else {
          operandStack.push(element);
        }
      });
      this.value = [operandStack[0]];
    },
    // helper to calculate value of simple expression
    calcHelper(op1, op2, operator) {
      if (operator === "+") {
        return parseFloat(op2) + parseFloat(op1);
      } else if (operator === "-") {
        return parseFloat(op2) - parseFloat(op1);
      } else if (operator === "/") {
        return parseFloat(op2) / parseFloat(op1);
      } else if (operator === "x") {
        return parseFloat(op2) * parseFloat(op1);
      }
    },
  },
};
</script>