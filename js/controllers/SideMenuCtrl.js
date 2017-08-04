app.controller('SideMenuCtrl', function($scope){

		/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
	$scope.openNav = function() {
	    document.getElementById("mySidenav").style.width = "40%";
	    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
	$scope.closeNav = function () {
	    document.getElementById("mySidenav").style.width = "0";
	    document.body.style.backgroundColor = "white";
	}

});