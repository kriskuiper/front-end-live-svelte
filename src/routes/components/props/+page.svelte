<script>
  import Input from '$lib/components/Input';
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">1.1. Componenten met props</h1>
  <p>Dit is een input component met props:</p>

  <div>
    <Input
      type="date"
      label="Wat is je geboortedatum?"
      helperText="Je moet minimaal 18 jaar oud zijn"
      id="my-input"
      max="2005-08-23"
      class="my-10"
    />
  </div>

  <a href="/components/directives" class="text-blue-600 font-bold">
    Nice! Nu verder naar andere dingen
  </a>
</div>
