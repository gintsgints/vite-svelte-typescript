<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="btn btn-primary btn-outline" on:click={increment}>
  Clicks: {count}
</button>

<style>
.btn-outline:hover {
  @apply bg-primary;
  @apply text-base-100;
}
</style>
