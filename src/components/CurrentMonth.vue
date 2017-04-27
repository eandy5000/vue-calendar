<template>
    <div>
        current month {{ month }}
    </div>
</template>
<script>
    export default {
        computed: {
            month() {
                return this.$store.state.currentMonth;
            }
        }
    };
</script>