app.controller('FileUploadCtrl', ['$scope', 'FileUploader', '_', function($scope, FileUploader, _){

	var uploader = $scope.uploader = new FileUploader();

	$scope.fileData =  {};

/***************************************************** ADDING FILE SECTION ***********************************/
	$scope.removeItemFromQueue = function (fileId) {
		//retrieving index of a id file to be able to clear file's name in scope.
		var fileIndex = _.findKey($scope.fileData, ['id', fileId]);
		//removing from queue with fileId params given to the function
		uploader.removeFromQueue(fileId);
		//if filename match with one of all fileData's property, then change $scope Value for this file
		 for(var filename in $scope.fileData){
			if (filename == fileIndex){
				switch(filename){
					case 'VTCCard' :
						delete $scope.fileData.VTCCard
					break;

					case 'IDCard' :
						delete $scope.fileData.IDCard
					break;

					case 'driveCard' :
						delete $scope.fileData.driveCard
					break;

					case 'civilInsurance' :
						delete $scope.fileData.civilInsurance
					break;

					case 'atoutFrance' :
						delete $scope.fileData.atoutFrance
					break;

					case 'KBIS' :
						delete $scope.fileData.KBIS
					break;

					default:
						alert('Aucun document ne correspond à votre demande');	
				}
			}else{
				console.log('Aucune référence trouver dans le document')
			}
		 }
	}

	$scope.VTCCardFile = function(){
		//firstly we check if there is already a file for this section
		if($scope.fileData.VTCCard){ 
			//if true, remove file from queue to avoid id generation problems
			uploader.removeFromQueue($scope.fileData.VTCCard.id);
			//clear the $scope file name
			delete $scope.fileData.VTCCard;
			//then update the queue and $scope file name
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.VTCCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.VTCCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}

	$scope.IDCardFile = function(){
		if($scope.fileData.IDCard){ 
			uploader.removeFromQueue($scope.fileData.IDCard.id);
			delete $scope.fileData.IDCard;
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.IDCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.IDCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}

	$scope.driveCardFile = function(){
		if($scope.fileData.driveCard){ 
			uploader.removeFromQueue($scope.fileData.driveCard.id);
			delete $scope.fileData.driveCard;
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.driveCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.driveCard = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}

	$scope.civilInsuranceFile = function(){
		if($scope.fileData.civilInsurance){ 
			uploader.removeFromQueue($scope.fileData.civilInsurance.id);
			delete $scope.fileData.civilInsurance;
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.civilInsurance = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.civilInsurance = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}
	$scope.atoutFranceFile = function(){
		if($scope.fileData.atoutFrance){ 
			uploader.removeFromQueue($scope.fileData.atoutFrance.id);
			delete $scope.fileData.atoutFrance;
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.atoutFrance = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.atoutFrance = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}
	$scope.KBISFile = function(){
		if($scope.fileData.KBIS){ 
			uploader.removeFromQueue($scope.fileData.KBIS.id);
			delete $scope.fileData.KBIS;
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.KBIS = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}else{		
			uploader.onAfterAddingFile = function(item){
				$scope.fileData.KBIS = {'filename' : item.file.name, 'id' : uploader.getIndexOfItem(item)};
			}
		}
	}
/***************************************************** ADDING FILE SECTION ***********************************/

}]);