<script>
  import Button from '$lib/components/Button';

  let showLink = false;

  const toggleMessage = () => showLink = !showLink;
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">1.2. Eenvoudige logica: if/else en loops</h1>
  <p class="mb-10">Vrij eenvoudig als je het mij vraagt</p>

  <Button on:click={toggleMessage}>Klik hierop om door te gaan naar de volgende pagina</Button>

  {#if showLink}
    <a href="/components/directives" class="text-blue-600 font-bold block mt-10">
      Geef me iets boeienders
    </a>
  {/if}
</div>
