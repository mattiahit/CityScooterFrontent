import { defineComponent, ref } from "vue";
import { AgGridVue } from 'ag-grid-vue3'

export default defineComponent({
  name: 'ScooterManagementPage',
  components: { AgGridVue },
  setup() {
    const managementRowData = ref([
      { id: 1, name: 'Scooter 1', status: 'Available' },
      { id: 2, name: 'Scooter 2', status: 'In Use' },
      { id: 3, name: 'Scooter 3', status: 'Maintenance' }
    ])
    const managementColumnDefs = ref([
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Status', field: 'status' }
    ])
    return {
      managementRowData,
      managementColumnDefs
    }
  }
})