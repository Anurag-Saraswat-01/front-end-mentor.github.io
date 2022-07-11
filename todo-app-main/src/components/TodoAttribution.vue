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
  name: "TodoAttribution",
};
</script>

<style scoped>
.attribution {
  color: var(--text-dark);
  text-align: center;
  font-size: 12px;
  font-weight: 700;
}

a {
  color: inherit;
}

.dark a:hover,
.dark a:focus {
  color: var(--text-light);
}

.light a:hover,
.light a:focus {
  color: var(--text-light-hover);
}
</style>
