app.controller('FileUploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader, $window){

	var uploader = $scope.uploader = new FileUploader();
/*
		{"VTCCard" : false, "VTCCardIndex" : false},
		{"IDCard" : false, "IDCardIndex" : false},
		{"driveCard" : false, "driveCardIndex" : false},
		{"civilInsurance" : false, "civilInsuranceIndex" : false,}
		{"atoutFrance" : false, "atoutFranceIndex" : false},
		{"KBIS" : false, "KBISIndex" : false}
		function arrayObjectIndexOf(myArray, searchTerm, property) {
		    for(var i = 0, len = myArray.length; i < len; i++) {
		        if (myArray[i][property] === searchTerm) return i;
		    }
		    return -1;
		}
		arrayObjectIndexOf(arr, "stevie", "hello"); // 1
		*/

	$scope.displayFileData = function(){
		console.log($scope.fileData);
	}
/***************************************************** ADDING FILE SECTION ***********************************/
	$scope.removeItemFromQueue = function (item, id) {
		uploader.removeFromQueue(item, id);
	}

	$scope.VTCCardFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.VTCCardId = uploader.getIndexOfItem(item); 
			$scope.VTCCardFileName = item.file.name;
		}
	}

	$scope.IDCardFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.IDCardId = uploader.getIndexOfItem(item);
			$scope.IDCardFileName = item.file.name;
		}
	}

	$scope.driveCardFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.driveCardId = uploader.getIndexOfItem(item);
			$scope.driveCardFileName = item.file.name;
		}
	}

	$scope.civilInsuranceFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.civileInsuranceId = uploader.getIndexOfItem(item);
			$scope.civileInsuranceFileName = item.file.name;
		}
	}
	$scope.atoutFranceFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.atoutFranceId = uploader.getIndexOfItem(item);
			$scope.atoutFranceFileName = item.file.name;
		}
	}
	$scope.KBISFile = function(){
		uploader.onAfterAddingFile = function(item){
			$scope.KBISId = uploader.getIndexOfItem(item);
			$scope.KBISFileName = item.file.name;
		}
	}
/***************************************************** ADDING FILE SECTION ***********************************/

}]);