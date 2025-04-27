<script lang="ts">
    import '$lib/assets/app.css';
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Navbar from '$lib/components/Navbar.svelte';
    import DrawerOpenButton from '$lib/components/DrawerOpenButton.svelte';
    import DrawerCloseButton from '$lib/components/DrawerCloseButton.svelte';

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
        <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <div class="flex flex-row justify-between border-b-2 my-2">
                 <span class="text-3xl font-bold my-2">Navigation</span>
                 <DrawerCloseButton />
            </div>
             <nav class="flex flex-col gap-4 [&>a]:btn [&>a]:btn-ghost [&>a]:btn-lg [&>a]:w-full">
                 <a href="/">Home</a>
                 <a href="/about">About</a>
                 <a href="/greet">Greet</a>
            </nav>
        </div>
    </div>
</div>
