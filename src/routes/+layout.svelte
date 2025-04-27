<script lang="ts">
    import '$lib/assets/app.css';
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Navbar from '$lib/components/Navbar.svelte';
    import DrawerOpenButton from '$lib/components/DrawerOpenButton.svelte';

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="drawer drawer-end">
    <input
        id="my-drawer-4"
        type="checkbox"
        class="drawer-toggle"
    />
    <div class="drawer-content">
        <!-- Page content here -->
        <Navbar>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/greet">Greet</a>
            <DrawerOpenButton />
        </Navbar>
        <div class="p-4 max-w-7xl mx-auto">
            <main>
                {@render children()}
            </main>
        </div>
    </div>
    <div class="drawer-side">
        <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/greet">Greet</a>
        </ul>
    </div>
</div>
