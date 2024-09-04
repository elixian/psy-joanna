
<script>

    import Appointment from "../components/appointment.svelte";
    import Cabinet from "../components/cabinet.svelte";
import Citation from "../components/citation.svelte";
import Presentation from "../components/presentation.svelte";
</script>

<div class="flex gap-8">
    <Presentation/>
    <Citation/>
</div>
<div class="flex gap-8">
    <Appointment/>
    <Cabinet/>
</div>
