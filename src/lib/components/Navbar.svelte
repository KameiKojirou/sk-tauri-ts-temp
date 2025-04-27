<script lang="ts">
    let { children }: { children: any } = $props();
</script>


<div class="flex flex-row justify-center my-4">
    <nav class="flex flex-row gap-4 [&>a]:btn [&>a]:btn-ghost [&>a]:btn-lg">
       {@render children()}
    </nav>
</div>