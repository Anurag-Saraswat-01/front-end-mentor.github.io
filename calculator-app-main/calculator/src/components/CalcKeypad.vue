<template>
  <div class="keypad">
    <div class="keypad-main">
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
      <KeypadBtn @btn-click="$emit('delete-value')" text="DEL" type="utility" />
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
    </div>
    <div class="keypad-action">
      <KeypadBtn
        @btn-click="$emit('reset-display')"
        text="RESET"
        type="utility"
      />
      <KeypadBtn
        @btn-click="$emit('calculate-result')"
        text="="
        type="calculate"
      />
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.keypad-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  width: 100%;
}

.keypad-action {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
}
</style>
