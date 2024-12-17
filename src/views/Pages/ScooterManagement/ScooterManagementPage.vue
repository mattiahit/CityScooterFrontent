<template>
    <div>
        <ag-grid-vue
        class="ag-theme-alpine"
        :rowData="managementRowData"
        :columnDefs="managementColumnDefs"
        :gridOptions="managementGridOptions"
        @grid-ready="onGridReady"
        @grid-size-changed="onGridSizeChanged">
        </ag-grid-vue>
    </div>
</template>
<script lang="ts" src="./ScooterManagementPage.ts" />