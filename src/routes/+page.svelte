<script>
    import AccessibilityDyslexic from "../components/accessibilityDyslexic.svelte";
    import Appointment from "../components/appointment.svelte";
    import Cabinet from "../components/cabinet.svelte";
    import Citation from "../components/citation.svelte";
    import Presentation from "../components/presentation.svelte";
    import Tarification from "../components/tarification.svelte";
</script>

<AccessibilityDyslexic
    class="absolute font-openDyslexy top-1 left-1 text-dark-green underline"
/>
<div class="flex flex-col  lg:gap-8 lg:flex-row">
    <Presentation />
    <Citation />
</div>
<div class="flex flex-col lg:gap-8 lg:flex-row">
    <Appointment />
    <Cabinet />
    <Tarification  />
</div>
