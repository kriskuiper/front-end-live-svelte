<script lang="ts">
  let user = {
    name: "",
    age: null,
  };

  $: name = user.name || "Nobody";
  $: ageText = user.age === null ? "has no age" : `is ${user.age} years old`;
  $: sentence = `${name} ${ageText}`;
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">1.3. Reactive declerations (computed props enzo)</h1>
  <a href="https://learn.svelte.dev/tutorial/reactive-declarations" target="_blank" class="text-blue-600 hover:underline">Meer over reactive declerations in Svelte</a>
  <p>Dit is overigens een dingetje wat in vanilla JavaScript ook kan</p>

  <div class="py-10">
    <input
      type="text"
      id="name"
      class="my-2 px-8 py-4 border border-gray-300 rounded-xl focus:outline-black"
      bind:value={user.name}
    />
    <input
      type="number"
      id="age"
      class="my-2 px-8 py-4 border border-gray-300 rounded-xl focus:outline-black"
      bind:value={user.age}
    />

    <p>Alles tezaam: <strong>{sentence}</strong></p>
  </div>

  <a href="/components/props" class="text-blue-600 font-bold">
    Nice! Nu verder naar andere dingen
  </a>
</div>
