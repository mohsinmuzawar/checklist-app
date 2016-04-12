(function(){

  angular
       .module('tasks')
       .controller('TaskController', [
          'taskService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$mdDialog',
          TaskController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TaskController( taskService, $mdSidenav, $mdBottomSheet, $log,$q ,$mdDialog) {
    var self = this;

    self.selectedTask     = null;
    self.selectedUser     = null;
    self.tasks        = [ ];
    self.users        = [ ];
    self.selectTask   = selectTask;
    self.selectUser   = selectUser;
    self.toggleList   = toggleTasksList;
    self.openFromLeft = openFromLeft;

    // Load all registered tasks--

    taskService
          .loadAllTasks()
          .then( function( tasks ) {
            self.tasks    = [].concat(tasks);
            self.selectedTask = tasks[0];
          });
    
    taskService.loadAllUsers().then(function(users) {
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
    
    function openFromLeft() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Opening from the left')
        .textContent('Closing to the right!')
        .ariaLabel('Left to right demo')
        .ok('Nice!')
        // You can specify either sting with query selector
        .openFrom('#left')
        // or an element
        .closeTo(angular.element(document.querySelector('#right')))
    );
  };
  }

})();
