<template>
  <div class="keypad">
    <KeypadBtn
      @btn-click="$emit('update-value', '7')"
      text="7"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '8')"
      text="8"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '9')"
      text="9"
      type="operator"
    />
    <KeypadBtn @btn-click="$emit('delete-value')" text="DEL" type="delete" />
    <KeypadBtn
      @btn-click="$emit('update-value', '4')"
      text="4"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '5')"
      text="5"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '6')"
      text="6"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '+')"
      text="+"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '1')"
      text="1"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '2')"
      text="2"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '3')"
      text="3"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '-')"
      text="-"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '.')"
      text="."
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '0')"
      text="0"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', '/')"
      text="/"
      type="operator"
    />
    <KeypadBtn
      @btn-click="$emit('update-value', 'x')"
      text="x"
      type="operator"
    />
    <KeypadBtn @btn-click="$emit('reset-display')" text="RESET" type="reset" />
    <KeypadBtn @btn-click="$emit('calculate-result')" text="=" type="equal" />
  </div>
</template>

<script>
import KeypadBtn from "./KeypadBtn.vue";

export default {
  name: "CalcKeypad",
  components: {
    KeypadBtn,
  },
};
</script>

<style scoped>
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 0.75rem;
  background-color: var(--toggle-keypad-bg);
  padding: 1.5rem;
  width: 100%;
  border-radius: 0.5rem;
}
</style>
