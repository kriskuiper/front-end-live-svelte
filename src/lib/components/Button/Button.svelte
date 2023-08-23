<script lang="ts">
  export let suffix = "";
</script>

<button on:click>
  <slot />

  {#if suffix}
    {suffix}
  {/if}
</button>

<style>
  button {
    padding: 1em 2em;
    border: 0;
    border-radius: 0.75em;
    background: pink;
    font-weight: 700;
    display: block;
  }

  button:active {
    transform: scale(0.98);
  }
</style>
