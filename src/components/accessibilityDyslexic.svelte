<script>
    let isDyslexic = false;

function toggleFont() {
  isDyslexic = !isDyslexic;

  const root = document.documentElement;

  if (isDyslexic) {
    root.style.setProperty('--base-family', '"Open Dyslexic", sans-serif');
  } else {
    root.style.setProperty('--base-family', '"Roboto Condensed", sans-serif');
  }
}
</script>

<button on:click={toggleFont} {...$$props}>
    Aide dyslexie Aa
  </button>