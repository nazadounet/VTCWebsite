app.controller('FileUploadCtrl', ['$scope', 'Upload', '_', function($scope, Upload, _){

	function l(params){
		console.log(params);
	}

	$scope.queue = [];

	/***************************************************** DELETE FILE SECTION ***********************************/
	$scope.removeItemFromQueue = function (fileName) {
		//if ngModelFromInput match with one of all queue's property, then change $scope Value for this file
		for (var key in $scope.queue) {
			if($scope.queue[key][0].name === fileName){
				delete $scope.queue[key];
				console.log('file deleted : ' + fileName);
			}
		}
		console.log($scope.queue);
	};

	/***************************************************** ADDING FILE SECTION ***********************************/

	$scope.addToQueue = function(file, event){
		var ngModelFromInput = event.target.attributes[4].value;
		var fileName = file[0].name;
		var duplicateFile = false;

		if(Object.keys($scope.queue).length){	
			for (var key in $scope.queue) {
				if($scope.queue[key][0].name == fileName){
					duplicateFile = true;
					alert('Le fichier nommé : ' + fileName + ' existe déjà, veuillez le renommé avant de le télécharger')
				}
			}
		}

		if(duplicateFile === false){
			$scope.queue[ngModelFromInput] = file;
			console.log($scope.queue);
			console.log('File successfuly added to queue under : ' 
				+ ngModelFromInput
				+ ' with name : '
				+ fileName);	
			console.log('file added without checking $scope.queue.length');
			delete $scope[ngModelFromInput];
		}
	};

	/***************************************************** ADDING FILE SECTION ***********************************/

	$scope.responseonse = '';

	$scope.uploadeFileToServer = function(){
		if(Object.keys($scope.queue).length < 1){
			alert('Veuillez joindre tout les fichiers demandé');
		}else{
			Upload.upload({
				url: 'http://localhost:8888/Api-ti-tak/public/api/v1/fileUpload',
				data: {
					id : 1234,
					VTCCard : $scope.queue.VTCCard,
					IDCard: $scope.queue.IDCard,
					driveCard: $scope.queue.driveCard,
                    civilInsurance : $scope.queue.civilInsurance,
                    atoutFrance : $scope.queue.atoutFrance,
                    KBIS : $scope.queue.KBIS
				}
			}).then(function (response) {
				console.log(response.status);
				if(response.status == 200){
                    delete $scope.queue;
				}
			}, function (response) {
				console.log('Error status: ' + response.status);
			});
		}
	}
}]);