app.controller('FileUploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader){

	       var uploader = $scope.uploader = new FileUploader();

	       uploader.onAfterAddingFile = function(item){
	       	console.log(item);
	       }


}]);