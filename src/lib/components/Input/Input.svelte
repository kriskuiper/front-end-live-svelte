<script lang="ts">
  export let label: string;
  export let id: string;
  export let helperText: string | undefined;

  const { class: className, ...restProps } = $$props;
</script>

<div class={className}>
  {#if label}
    <label for={id} class="font-bold block w-full">
      {label}
    </label>
  {/if}

  <input {...restProps} class="my-2 px-8 py-4 border border-gray-300 rounded-xl focus:outline-black" />

  {#if helperText}
    <p class="text-xs text-gray-700">{helperText}</p>
  {/if}
</div>
