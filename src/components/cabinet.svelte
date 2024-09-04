<script>
import Cabinet from  "$lib/images/cabinet.png";
import Cabinet2 from "$lib/images/cabinet2.jpg"
</script>
<div class="flex order-3 overflow-hidden  lg:rounded-3xl  lg:shadow-2xl lg:order-2">
    <div id="cabinet" class="grow shrink-0  basis-96 lg:basis-44 ">
        <img class="h-full object-fill" id="img-cabinet" src="{Cabinet}" alt="">
    </div>
    <div class="lg:hidden">
        <img  class="h-full object-fill" src="{Cabinet2}" alt="">
    </div>
</div>


<style >
    #cabinet{
        flex: 1 0 11rem;
    }
     /* #img-cabinet{
         height: 100%;
         object-fit: fill;
     } */
</style>