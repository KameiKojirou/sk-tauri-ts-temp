<script lang="ts">
    import { invoke } from '@tauri-apps/api/core';

    let name = $state('');
    let greetMsg = $state('');

    async function greet(event: Event) {
        event.preventDefault();
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        greetMsg = await invoke('greet', { name });
    }
</script>

<main class="container">
    <h1 class="text-5xl text-center">Welcome to Tauri + Svelte</h1>

    <div class="flex flex-row gap-4 my-10 justify-center">
        <a
            href="https://vitejs.dev"
            target="_blank"
        >
            <img
                src="/vite.svg"
                class="w-50 h-50 logo vite"
                alt="Vite Logo"
            />
        </a>
        <a
            href="https://tauri.app"
            target="_blank"
        >
            <img
                src="/tauri.svg"
                class="w-50 h-50 logo tauri"
                alt="Tauri Logo"
            />
        </a>
        <a
            href="https://kit.svelte.dev"
            target="_blank"
        >
            <img
                src="/svelte.svg"
                class="w-50 h-50 logo svelte-kit"
                alt="SvelteKit Logo"
            />
        </a>
    </div>
    <p class="text-center my-4">
        Click on the Tauri, Vite, and SvelteKit logos to learn more.
    </p>

    <form
        class="flex flex-row gap-4 justify-center"
        onsubmit={greet}
    >
        <input
            class="input input-bordered"
            id="greet-input"
            placeholder="Enter a name..."
            bind:value={name}
        />
        <button
            class="btn btn-primary"
            type="submit">Greet</button
        >
    </form>
    <p class="text-center my-4">{greetMsg}</p>
</main>
