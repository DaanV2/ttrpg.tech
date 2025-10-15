<script>
    import {  } from '$app/stores';

    /** @type {{text?: string, value: number, max: number, min: number }} */
    let { text = "", value = $bindable(0), max, min } = $props();
</script>


<div class="numbercontainer flex items-center m-2 w-full">
  {#if text && text !== "" }
    <p class="md:w-auto mr-4">{text}:</p>
  {/if}
  <input type="number" max={max} min={min} bind:value class="number text-right" id="number-input" />
</div>

<style>
  .number {
    -webkit-appearance: none;
    width: fit-content;
    height: 25px;
    border-radius: 5px;
    border-width: 1px;
    border-color: rgb(var(--color-secondary));
    background: transparent;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .number::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgb(var(--color-tertiary));
    cursor: pointer;
  }

  .number::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
</style>