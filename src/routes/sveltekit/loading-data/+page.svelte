<script lang="ts">
  export let data;
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">2.1. Het laden van data op een pagina</h1>
  <p class="mb-4">Kneiter eenvoudig. Kiek maar ee'm mee.</p>

  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>

  <a href="/components/directives" class="text-blue-600 font-bold">
    Dit is mij te simpel, door naar actions
  </a>
</div>
