<template>
  <div class="calculator">
    <CalcHeader @switch-theme="switchTheme" :theme="theme" />
    <CalcDisplay
      :value="
        value.length === 0
          ? '0'
          : value[0] === 'NaN'
          ? 'Error'
          : valueToString(value)
      "
    />
    <CalcKeypad
      @update-value="updateValue"
      @delete-value="deleteValue"
      @reset-display="resetDisplay"
      @calculate-result="calculateResult"
    />
  </div>
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
  props: {
    theme: Number,
  },
  data() {
    return {
      value: [],
      continueFlag: false,
    };
  },
  methods: {
    // sends new theme to parent
    switchTheme(val) {
      this.$emit("switch-theme", val);
    },
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
      if ((char === "-" || char === "+") && this.value.length === 0) {
        this.continueFlag = true;
        this.value.push(char);
      } else if (
        char === "." ||
        (this.continueFlag && !["+", "-", "/", "x", "$"].includes(char))
      ) {
        this.continueFlag = true;
        const lastElement = this.value.pop();
        let newElement;
        if (lastElement) {
          newElement = lastElement.concat(char);
        } else {
          newElement = "0".concat(char);
        }
        this.value.push(newElement);
      } else if (["+", "-", "/", "x", "$"].includes(char)) {
        this.continueFlag = false;
        this.value.push(char);
      } else {
        const lastElement = this.value.pop();
        if (lastElement && lastElement !== "0") {
          this.value.push(lastElement);
        }
        this.value.push(char);
      }
    },
    // resets the calculator
    resetDisplay() {
      this.value = [];
      this.continueFlag = false;
    },
    // deletes the last element added
    deleteValue() {
      const lastElement = this.value.pop();
      if (["+", "-", "."].includes(lastElement) && this.continueFlag) {
        this.continueFlag = false;
      }
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
      if (operandStack[0]) this.value = [operandStack[0]];
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

<style scoped>
.calculator {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
</style>
