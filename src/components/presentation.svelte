
<script>
    import jw from "$lib/images/joanna-wolna.png";

</script>
<div  class="card-prez pt-12  p-6 *:p-2 lg:rounded-3xl  lg:shadow-xl ">
    <h1 class="mb-1 text-6xl  font-thin tracking-tight text-dark-green  ">Joanna Wolna</h1>
    <div class="flex flex-col lg:gap-12 lg:flex-row">
        <div>
            <p class="font-normal ">Psychologue, dipl&ocirc;m&eacute;e de l&rsquo;Universit&eacute; Ren&eacute;-Descartes, et &eacute;galement sophrologue,
                dipl&ocirc;m&eacute;e de l&rsquo;Ecole Fran&ccedil;aise Sup&eacute;rieure de Sophrologie et de l&rsquo;ESIL, Institut de
                Formation de Isabelle Lef&egrave;vre-Vall&eacute;e, qui a su adapter cette merveilleuse discipline aux
                enfants et aux adolescents, j&rsquo;accompagne toute personne souhaitant s&rsquo;engager dans
                une th&eacute;rapie ou ayant besoin d&rsquo;un soutien lors d&rsquo;une p&eacute;riode de vie difficile.</p>
            <p>Je pratique essentiellement les Th&eacute;rapies Cognitives et Comportementales (TCC)
                souvent prescrites dans le cas des troubles anxieux, des troubles obsessionnels et
                compulsifs, des phobies, du TDAH, des addictions, des troubles du comportement
                alimentaire ou de la d&eacute;pression.
            </p>
            <p>Je propose &eacute;galement un accompagnement psychologique et/ou sophrologique lors
                des situations de vie g&eacute;n&eacute;rant un mal-&ecirc;tre, comme les p&eacute;riodes de deuil, de stress
                intense, les situations de burn-out ou de harc&egrave;lement professionnel ou scolaire, les
                situations traumatiques ou les p&eacute;riodes des difficult&eacute;s interpersonnelles (la liste n&rsquo;&eacute;tant
                pas exhaustive).
            </p>
        </div>
        <div class="bloc_photo relative rounded-full w-max ml-auto lg:ml-0">
            <img src="{jw}" alt="Joanna Wolna portrait" class="object-contain w-24 lg:min-w-44">
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
        width:52px;
        aspect-ratio: 1;
        background-color: #53990e;
        background:url('../lib/images/leaf-svgrepo-com.svg') ;
        background-size: 52px;
    background-repeat: no-repeat;
        right: 24px;
    top: -29px;
    }
</style>