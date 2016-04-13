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
    self.showChartIcon = false;
    self.showUserStats = showUserStats;
    self.displayChart = false;
    self.myStyle = {};
    // Load all registered tasks--
    self.setUserTasks = setUserTasks;
    self.selectAll = selectAll;
    dataService
          .loadAllTasks()
          .then( function( tasks ) {
            self.Alltasks    = [].concat(tasks);
            self.tasks = self.Alltasks;
          });
    
    dataService.loadAllUsers().then(function(users) {
        self.users = [].concat(users);
        self.selectedUser = users[0];
    });
    function selectAll() {
      
    self.showChartIcon = false;
            self.tasks    = self.Alltasks;
          }
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
        self.displayChart = false;
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
        
        self.showChartIcon = true;
        self.tasks = tasks;
    }
    function showUserStats(ev) {
        $mdDialog.show({
      controller: function ChartController($scope, $mdDialog) {
            $scope.user = self.selectedUser;
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            $scope.data = [300, 500, 100];
        },
      templateUrl: './src/checklist/view/chartData.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
        self.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        self.data = [300, 500, 100];
    }
    self.showTaskDetails = function(ev,task) {
    $mdDialog.show({
      controller: function TaskDetailsController($scope, $mdDialog) {
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
  };
  
  }
   

})();
