import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@mui/icons-material";
import { CsvBuilder } from "filefy";
import { linearProgressClasses } from "@mui/material";
const MyTable = ({ info }) => {
  const arrayData = 
 [
    { key: "EST_SL", value: `${info.EST_SL}` },
    { key: "SL_NO", value: `${info.SL_NO}` },
    { key: "TeacherType", value: `${info.TeacherType}` },
    { key: "TeacherName", value: `${info.TeacherName}` },
    { key: "DateofBirth", value: `${info.DateofBirth}` },
    { key: "DateofJoining", value: `${info.DateofJoining}` },
    { key: "DateofTraining", value: `${info.DateofTraining}` },
    { key: "AccountNo", value: `${info.AccountNo}` },
    { key: "IFSCCode", value: `${info.IFSCCode}` },
    { key: "UANNumber", value: `${info.UANNumber}` },
    { key: "AadhaarNo", value: `${info.AadhaarNo}` },
    { key: "NameAsPerAadhar", value: `${info.NameAsPerAadhar}` },
    { key: "YearAsPerAadhar", value: `${info.YearAsPerAadhar}` },
    { key: "DiseCode", value: `${info.DiseCode}` },
    { key: "Employment_Category", value: `${info.Employment_Category}` },
    { key: "AreaType", value: `${info.AreaType}` },
    { key: "Block", value: `${info.Block}` },
    { key: "District", value: `${info.District}` },
    { key: "EmploymentUnit", value: `${info.EmploymentUnit}` },
    { key: "GradePay", value: `${info.GradePay}` },
    { key: "PayDrawn", value: `${info.PayDrawn}` },
  ];
  const columns = [
    {
      title: "Specifications",
      field: "key",
      align: "center",
      sorting: false,
    },
    { title: "Details", field: "value", align: "center", sorting: false },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  return (
    <MaterialTable
      title={info.TeacherName}
      data={arrayData}
      searchable={false}
      columns={columns}
      icons={tableIcons}
      options={{
        exportButton: true,
        searchAutoFocus : true,
        grouping : true,
        exportAllData: false,
        actionsColumnIndex: -1,
        paging: false,
        loadingType : "linear",
        selection: true,
        headerStyle: {
          fontWeight: "800",
          backgroundColor: "orange",
          color: "green",
        },
      }}
      actions={[
        {
          position: "toolbarOnSelect",
          icon: SaveAlt,
          tooltip: "Export the selected rows!",
          onClick: (e, rowData) => {
            const fileName = info.TeacherName;
            const builder = new CsvBuilder(fileName + ".csv");
            builder
              .setColumns(columns.map((columnDef) => columnDef.title))
              .addRows(
                rowData.map((rowData) =>
                  columns.map((columnDef) => rowData[columnDef.field])
                )
              )
              .exportFile();
          },
        },
        
      ]}
    />
  );
};

export default MyTable;
