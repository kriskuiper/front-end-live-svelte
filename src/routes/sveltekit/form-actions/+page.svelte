<script lang="ts">
  export let form;
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">2.1. Het laden van data op een pagina</h1>
  <p class="mb-4">Kneiter eenvoudig. Kiek maar ee'm mee.</p>

  <form action="/sveltekit/form-actions" method="POST">
    <input type="text" name="name" required class="my-2 px-8 py-4 border border-gray-300 rounded-xl focus:outline-black" />

    <button type="submit">Hoi!</button>
  </form>

  {#if !form?.pokemon}
    <p>No pokemon found!</p>
  {:else}
    {@const pokemon = form.pokemon}
    <img src={pokemon.sprite} alt={pokemon.name}>
  {/if}

  <a href="/sveltekit/loading-data/sceptile" class="text-blue-600 font-bold">
    En een datailpagina dan?
  </a>
</div>
