<script>
    import Statue from "$lib/images/statue.png"
</script>

<div id="citation" class="overflow-hidden p-8 lg:rounded-3xl lg:shadow-xl relative bg-light-green">
   
    <img id="statue" src="{Statue}" class="w-48 -z-10 lg:w-60" alt="statue en pierre d'un moine boudhiste">
    <blockquote>
        <p> La vie commence parfois par des brouillons</p>
         <p>On l’écrit </p>
         <p>La mal-écrit</p>
         <p>La corrige</p>
         <p>La réécrit</p>
         <p>Et puis un jour</p>
         <p>On rend sa copie</p>
     </blockquote>
     <p class="text-dark-green text-xl">- Laurence Maron -</p>
</div>

<style type="scss">
    #citation{
        line-height: 3rem;
        font-size: 26px;
        font-style: italic;
        isolation: isolate;
    }
    blockquote{
        line-height: 2.6rem;
        color:var(--dark-green);
    }
    blockquote::before{
        content: "\201C";
        font-size: 59px;
        position: absolute;
        left: 5px;
        color: var(--dark-green);
    }
    blockquote::after{
        content: "\201D";
        font-size: 59px;
        position: absolute;
        bottom: 51px;
        left: 200px;
        color: var(--dark-green);
    }

    #statue{
        position: absolute;
        bottom: -32px;
        right: -23px;

    }
</style>