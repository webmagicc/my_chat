$(document).ready(function() {
	"use strict";

	$('.data-table').DataTable();

	$('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
	
    $('#example1').editableTableWidget().numericInputExample().find('td:first').focus();
});