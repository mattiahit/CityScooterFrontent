import { defineComponent, ref } from "vue";
import { AgGridVue } from 'ag-grid-vue3'

export default defineComponent({
  name: 'ScooterManagementPage',
  components: { AgGridVue },
  setup() {
    const managementRowData = ref([])
    const managementColumnDefs = ref([])
    return {
      managementRowData,
      managementColumnDefs
    }
  }
})