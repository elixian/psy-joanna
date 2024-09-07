<script>
    import  SvgDoctolib from "$lib/images/doctolib.svelte" 
</script>

<div id="tarifs" class="flex flex-col grow shrink-0 lg:order-3 lg:basis-[27rem] p-8  lg:rounded-3xl lg:shadow-2xl bg-[#f7f7f3]">
    <h2 class="text-2xl mb-4 text-dark-green">Tarification</h2>
    <ul class="shrink-0 grow text-lg">
        <li class="mb-2"><span class="font-bold">Consultation/suivi en psychologie ou TCC: </span><span>70€</span></li>
        <li class="mb-2"><span class="font-bold">Sophrologie: </span><span>60€</span></li>
        <li class="mb-2"><span class="font-bold">Sophrologie enfant - de 8 ans: </span><span>50€</span></li>
    </ul>
    <a class="flex items-center gap-2 p-2 rounded-md border mt-6 transition-all bg-blue-500 text-white border-blue-500  w-max hover:bg-blue-600 uppercase
     " href="https://www.doctolib.fr/psychologue/montgeron/joanna-wolna" target="_blank">Prendre rendez-vous<SvgDoctolib /> </a>
</div>

<style>

    /* #tarifs{
        flex: 1 0 26rem;
    } */
</style>