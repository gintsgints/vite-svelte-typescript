<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <Counter />
  <select
    name=""
    id=""
    class="select w-full max-w-xs p-2"
  >
    <option disabled selected>Select vehicle make </option>
    <option value="audi">Audi</option>
    <option value="bmw">BMW</option>
    <option value="mb">Mercedes-Benz</option>
    <option value="vw">Volkswagen</option>
  </select>
  <input
    type="text"
    name=""
    id=""
    class="input input-outline w-full border-black active:border-primary"
  />
</main>

<style>
</style>
