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
    self.tasks        = [];
    self.users        = [ ];
    self.selectTask   = selectTask;
    self.selectUser   = selectUser;
    self.toggleList   = toggleTasksList;
    self.openFromLeft = openFromLeft;
    self.showUserStats = showUserStats;
    self.showTaskDetails = showTaskDetails;
    self.addNewTask = addNewTask;
    self.userDetails = userDetails;
    self.myStyle = {};
    // Load all registered tasks--
    self.setUserTasks = setUserTasks;
    // dataService
    //       .loadAllTasks()
    //       .then( function( tasks ) {
    //         self.Alltasks    = [].concat(tasks);
    //       });
    
    dataService.loadAllUsers().then(function(users) {
        self.users = [].concat(users);
        self.selectedUser = users[0];
        self.tasks = users[0].tasks;
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
        self.myStyle={'background-color':'green'};
        var x =self.tasks.splice(index, 1); 
        $mdToast.show(
            $mdToast.simple()
                .textContent(task.name+ ' Completed!')
                .position("bottom right" )
                .hideDelay(3000)
            );
    }
    
    function  setUserTasks(tasks) {
        
        self.tasks = tasks;
    }
    function showUserStats(ev) {
        $mdDialog.show({
      controller: function ($scope, $mdDialog) {
            $scope.user = self.selectedUser;
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.labels = self.selectedUser.chartData.labels;
            $scope.data = self.selectedUser.chartData.data;
        },
      templateUrl: './src/checklist/view/chartData.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
    }
    function showTaskDetails(ev,task) {
        $mdDialog.show({
        controller: function ($scope, $mdDialog) {
                $scope.task = task;
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
            },
        templateUrl: './src/checklist/view/taskDetails.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
        });
    } 
    function addNewTask(ev) {
        $mdDialog.show({
        controller: function ($scope, $mdDialog) {
              $scope.taskTypes = [
                {id: 1,name: "Type1"},
                {id: 2,name: "Type2"},
                {id: 3,name: "Type3"},
                {id: 4,name: "Type4"}];
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
                $scope.save = function(task){
                    self.selectedUser.tasks.push(task);
                    $mdDialog.hide();
                };
            },
        templateUrl: './src/checklist/view/addTask.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
        });
    } 
     function userDetails(ev,user) {
        $mdDialog.show({
        controller: function ($scope, $mdDialog) {
                $scope.user = user;
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
                $scope.save = function(task){
                    self.selectedUser.tasks.push(task);
                    $mdDialog.hide();
                };
            },
        templateUrl: './src/checklist/view/userDetails.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
        });
    } 
  
  }
   

})();
