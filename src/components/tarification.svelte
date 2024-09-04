<script>
    import  SvgDoctolib from "$lib/images/doctolib.svelte" 
</script>

<div id="tarifs" class="p-8 rounded-3xl shadow-2xl flex flex-col">
    <h2 class="text-2xl mb-4 underline">Tarification</h2>
    <ul class="shrink-0 grow text-lg">
        <li class="mb-2"><span class="font-bold">Consultation/suivi en psychologie ou TCC: </span><span>70€</span></li>
        <li class="mb-2"><span class="font-bold">Sophrologie: </span><span>60€</span></li>
        <li class="mb-2"><span class="font-bold">Sophrologie enfant - de 8 ans: </span><span>50€</span></li>
    </ul>
    <a class="flex items-center gap-2 p-2 rounded-md border transition-all bg-blue-500 text-white border-blue-500  w-max hover:bg-blue-600 uppercase
     " href="https://www.doctolib.fr/psychologue/montgeron/joanna-wolna" target="_blank">Prendre rendez-vous<SvgDoctolib /> </a>
</div>

<style>

    #tarifs{
        flex: 1 0 26rem;
    }
</style>