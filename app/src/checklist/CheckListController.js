(function(){

  angular
       .module('checklist')
       .controller('CheckListController', [
          'dataService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$mdDialog','$mdToast',
          CheckListController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function CheckListController( dataService, $mdSidenav, $mdBottomSheet, $log,$q ,$mdDialog,$mdToast) {
    var self = this;

    self.selectedTask     = null;
    self.selectedUser     = null;
    self.tasks        = [ ];
    self.users        = [ ];
    self.selectTask   = selectTask;
    self.selectUser   = selectUser;
    self.toggleList   = toggleTasksList;
    self.openFromLeft = openFromLeft;
    self.myStyle = {};
    // Load all registered tasks--

    dataService
          .loadAllTasks()
          .then( function( tasks ) {
            self.tasks    = [].concat(tasks);
            self.selectedTask = tasks[0];
          });
    
    dataService.loadAllUsers().then(function(users) {
        self.users = [].concat(users);
        self.selectedUser = users[0];
    });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleTasksList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectTask ( task ) {
      self.selectedTask = angular.isNumber(task) ? $scope.tasks[task] : task;
    }
    function selectUser ( user ) {
      self.selectedUser = angular.isNumber(user) ? $scope.tasks[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    
    function openFromLeft(task) {
        task.isCompleted = true;
        var index = self.tasks.indexOf(task);
        console.log(self.tasks);
        self.myStyle={'background-color':'green'};
        var x =self.tasks.splice(index, 1); 
        $mdToast.show(
            $mdToast.simple()
                .textContent(task.name+ ' Completed!')
                .position("bottom right" )
                .hideDelay(3000)
            );
    }
    self.showTaskDetails = function(ev,task) {
    $mdDialog.show({
      controller: function TaskDetailsController($scope, $mdDialog) {
            $scope.task = task;
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        },
      templateUrl: './src/checklist/view/taskDetails.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      self.status = 'You said the information was "' + answer + '".';
    }, function() {
      self.status = 'You cancelled the dialog.';
    });
  };
  
  }
   

})();
