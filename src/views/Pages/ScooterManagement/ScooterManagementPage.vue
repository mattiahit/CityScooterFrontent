<template>
    <div class="ag-theme-alpine" style="height: 400px; width: 100%;">
        <ag-grid-vue
        class="ag-theme-alpine"
        :rowData="managementRowData"
        :columnDefs="managementColumnDefs"
        :gridOptions="managementGridOptions"
        domLayout="autoHeight"
        @grid-ready="onGridReady"
        @grid-size-changed="onGridSizeChanged">
        </ag-grid-vue>
    </div>
</template>
<script lang="ts" src="./ScooterManagementPage.ts" />