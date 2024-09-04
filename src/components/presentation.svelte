
<script>
    import jw from "$lib/images/joanna-wolna.png";
</script>
<div  class="card-prez  p-2 *:p-2 rounded-3xl shadow-2xl ">
    <h1 class="mb-1 text-5xl  font-thin tracking-tight text-gray-900 ">Joanna Wolna</h1>
    <div class="flex gap-12">
        <div>
            <p class="font-normal ">Psychologue, diplômée de l’Université René-Descartes, et également sophrologue,
                diplômée de l’Ecole Française Supérieure de Sophrologie et de l’ESIL, Institut de
                Formation de Isabelle Lefèvre-Vallée, qui a su adapter cette merveilleuse discipline aux
                enfants et aux adolescents, j’accompagne toute personne souhaitant s’engager dans
                une thérapie ou ayant besoin d’un soutien lors d’une période de vie difficile.</p>
            <p>Je pratique essentiellement les Thérapies Cognitives et Comportementales (TCC)
                souvent prescrites dans le cas des troubles anxieux, des troubles obsessionnels et
                compulsifs, des phobies, du TDAH, des addictions, des troubles du comportement
                alimentaire ou de la dépression.
            </p>
            <p>Je propose également un accompagnement psychologique et/ou sophrologique lors
                des situations de vie générant un mal-être, comme les périodes de deuil, de stress
                intense, les situations de burn-out ou de harcèlement professionnel ou scolaire, les
                situations traumatiques ou les périodes des difficultés interpersonnelles (la liste n’étant
                pas exhaustive).
            </p>
        </div>
        <div class="bloc_photo relative">
            <img src="{jw}" alt="Joanna Wolna portrait" class="min-w-44">
        </div>
    </div>
    
    
</div>

<style>
    .card-prez{
        flex: 1 1 85%;
        background-color:#f7f7f3;
    }
    p:not(:last-child){
        padding-bottom: 1rem;
    }
    .bloc_photo::before{
        content:"";
        position:absolute;
        width:40px;
        aspect-ratio: 1;
        background-color: #53990e;
        border-radius: 9999px;
        right: 24px;
        top: -13px;
    }
</style>