<template>
  <footer class="attribution">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noopener noreferrer"
      >Frontend Mentor</a
    >. Coded by
    <a
      href="https://github.com/Anurag-Saraswat-01"
      target="_blank"
      rel="noopener noreferrer"
      >Anurag Saraswat</a
    >.
  </footer>
</template>

<script>
export default {
  name: "FooterAttr",
};
</script>

<style scoped>
.attribution {
  color: var(--text-primary);
  text-align: center;
}

a {
  color: var(--key-bg-utility);
}

a:hover,
a:focus,
a:active {
  color: var(--key-bg-utility-hover);
}
</style>
