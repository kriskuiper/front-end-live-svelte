<script lang="ts">
  let user = {
    name: "",
    age: null,
  };
  let showMessage = false;

  const toggleMessage = () => showMessage = !showMessage;
</script>

<div>
  <a href="/" class="mb-4 block">Terug naar home</a>
  <h1 class="text-5xl font-bold mb-4">1.2. Directives en events</h1>
  <a href="https://svelte.dev/docs/component-directives" target="_blank" class="text-blue-600 hover:underline">Meer over directives in Svelte</a>
  <p>Dit is een zijn inputs met een two-way binding:</p>

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

    <figure>
      <code>
        {JSON.stringify(user, null, 2)}
      </code>
      <figcaption>👆🏻 user object</figcaption>
    </figure>
  </div>

  <div class="mb-10">
    <button on:click={toggleMessage}>
      Laat zien dan
    </button>

    {#if showMessage}
      <p>Berichtje van Bert!</p>
    {/if}
  </div>

  <a href="/components/computed-props" class="text-blue-600 font-bold">
    Volgende: computed props
  </a>
</div>
