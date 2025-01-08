import { defineComponent, ref } from "vue";
import { AgGridVue } from 'ag-grid-vue3'
import type { GridReadyEvent, GridSizeChangedEvent } from "ag-grid-community";

export default defineComponent({
  name: 'ScooterManagementPage',
  components: { AgGridVue },
  setup() {
    const gridApi = ref(null);
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
    const onGridReady = (params: any) => {
      gridApi.value = params.api;
      params.api.sizeColumnsToFit()
    }
    const onGridSizeChanged = (params: GridSizeChangedEvent) => {
      params.api.sizeColumnsToFit();
    }
    const managementGridOptions = ref({
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true
      }
    })
    
    return {
      managementRowData,
      managementColumnDefs,
      managementGridOptions,
      onGridSizeChanged,
      onGridReady
    }
  }
})