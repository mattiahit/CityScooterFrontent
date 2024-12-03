import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "ScooterManagementPage",
    setup() {
        const managementRowData = ref([]);
        const managementColumnDefs = ref([]);
        return {
            managementRowData,
            managementColumnDefs,
        }
    }
})