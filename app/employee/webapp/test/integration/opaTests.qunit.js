sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ep/ui/employee/test/integration/FirstJourney',
		'ep/ui/employee/test/integration/pages/EmployeeSetList',
		'ep/ui/employee/test/integration/pages/EmployeeSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeSetList, EmployeeSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ep/ui/employee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeSetList: EmployeeSetList,
					onTheEmployeeSetObjectPage: EmployeeSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);