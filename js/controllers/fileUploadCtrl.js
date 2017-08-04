app.controller('FileUploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader){

	       var uploader = $scope.uploader = new FileUploader();

	       $scope.inputName = {
	       	
	       };

	       uploader.onAfterAddingFile = function(item){
	       	console.log(document.getElementById('file1').files["0"].name);
	       	console.log(uploader);
	       	//$scope.item = document.getElementById('file1').files.FileList;
	       }			
}]);