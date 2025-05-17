sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'uipur',
            componentId: 'EmployeeSetList',
            contextPath: '/EmployeeSet'
        },
        CustomPageDefinitions
    );
});