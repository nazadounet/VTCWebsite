app.controller('FileUploadCtrl', ['$scope', 'Upload', '_', function($scope, Upload, _){

	$scope.queue = {}

/***************************************************** DELETE FILE SECTION ***********************************/
	$scope.removeItemFromQueue = function (fileName) {
		//if filename match with one of all queue's property, then change $scope Value for this file
				var fileIndex = _.findKey($scope.queue, ['name', fileName]);

				switch(fileIndex){
					case 'VTCCard' :
						delete $scope.queue.VTCCard
						console.info('Object VTCCard cleared from the queue');
						console.log($scope.queue);
					break;

					case 'IDCard' :
						delete $scope.queue.IDCard
						console.info('Object IDCard cleared from the queue');
						console.log($scope.queue);
					break;

					case 'driveCard' :
						delete $scope.queue.driveCard
						console.info('Object driveCard cleared from the queue');
						console.log($scope.queue);
					break;

					case 'civilInsurance' :
						delete $scope.queue.civilInsurance
						console.info('Object civilInsurance cleared from the queue');
						console.log($scope.queue);
					break;

					case 'atoutFrance' :
						delete $scope.queue.atoutFrance
						console.info('Object atoutFrance cleared from the queue');
						console.log($scope.queue);
					break;

					case 'KBIS' :
						delete $scope.queue.KBIS
						console.info('Object KBIS cleared from the queue');
						console.log($scope.queue);
					break;

					default:
						alert('Aucun document ne correspond à votre demande');	
		 }
	}	

/***************************************************** ADDING FILE SECTION ***********************************/

	$scope.addToQueue = function(file, event){

		console.log($scope.queue);

		console.log('File successfuly added to queue under : ' 
						+ event.target.attributes[4].value
						+ ' with name : '
						+ file[0].name);
	}

/***************************************************** ADDING FILE SECTION ***********************************/
	
	$scope.uploaderFileToServer = function(){

	}	

}]);