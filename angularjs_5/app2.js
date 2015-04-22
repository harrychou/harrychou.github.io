var app = angular.module("harrychou.grid", ['angularGrid']);

app.controller('MainController', ['$http', function ($http) {
    var self = this;

    var columnDefs = [
        { displayName: "Athlete", field: "athlete", width: 150 },
        { displayName: "Age", field: "age", width: 90 },
        { displayName: "Country", field: "country", width: 120 },
        { displayName: "Year", field: "year", width: 90 },
        { displayName: "Date", field: "date", width: 110 },
        { displayName: "Sport", field: "sport", width: 110 },
        { displayName: "Gold", field: "gold", width: 100 },
        { displayName: "Silver", field: "silver", width: 100 },
        { displayName: "Bronze", field: "bronze", width: 100 },
        { displayName: "Total", field: "total", width: 100 }
    ];

    self.gridOptions = {
        columnDefs: columnDefs,
        rowData: null,
    };

    $http.get("olympicWinners.json")
        .then(function (res) {
            self.gridOptions.rowData = res.data;
            self.gridOptions.api.onNewRows();
        });
}]);

