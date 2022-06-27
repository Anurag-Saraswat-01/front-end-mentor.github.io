<template>
  <button @click="$emit('btn-click')" type="button">{{ text }}</button>
</template>

<script>
export default {
  name: "KeypadBtn",
  props: {
    type: String,
    text: String,
  },
};
</script>
