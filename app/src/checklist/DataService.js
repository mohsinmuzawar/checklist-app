(function(){
  'use strict';

  angular.module('checklist')
         .service('dataService', ['$q', DataService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DataService($q){
    var users = [
    
      {
        name: 'Lionel Messi',
        avatar: 'svg-2',
        image : 'messi.jpg',
        team : "Barcelona",
        info : "Lionel Andrés 'Leo' Messi is an Argentine professional footballer who plays as a forward for Spanish club Barcelona and the Argentina national team",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
      tasks : [
            {
            name: 'Task 4',
            text: 'This is task 4',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 5',
            text: 'This is task 5',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 6',
            text: 'This is task 6',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      },
      {
        name: 'Cristiano Ronaldo',
        avatar: 'svg-3',
        image : 'ronaldo.jpg',
        team : "Real Madrid",
        info : "Cristiano Ronaldo dos Santos Aveiro, GOIH is a Portuguese professional footballer who plays for Spanish club Real Madrid and the Portugal national team. He is a forward and serves as captain for Portugal.",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
        tasks : [
            {
            name: 'Task 3',
            text: 'This is task 3',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 9',
            text: 'This is task 9',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 8',
            text: 'This is task 8',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      },
      {
        name: 'David Beckham',
        avatar: 'svg-4',
        image : 'beckham.jpg',
        team : "Paris Saint-Germain",
        info : "David Robert Joseph Beckham, OBE is an English former professional footballer. He played for Manchester United, Preston North End, Real Madrid, Milan, LA Galaxy, Paris Saint-Germain, and the England .",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
        tasks : [
            {
            name: 'Task 4',
            text: 'This is task 4',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 7',
            text: 'This is task 7',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 8',
            text: 'This is task 8',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      },
      {
        name: 'Zlatan',
        avatar: 'svg-5',
        image : 'ibra.jpg',
        team : "Paris Saint-Germain",
        info : "Zlatan Ibrahimović is a Swedish professional footballer who plays as a striker for French club Paris Saint-Germain and the Sweden national team for which he is captain.",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
        tasks : [
            {
            name: 'Task 6',
            text: 'This is task 6',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 7',
            text: 'This is task 7',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 9',
            text: 'This is task 9',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      },
      {
        name: 'Wayne Rooney',
        image : 'rooney.jpg',
        team : "Machester United",
        avatar: 'svg-6',
        info : "Wayne Mark Rooney is an English professional footballer who plays for and captains both Manchester United and the England national team. He has played much of his career as a forward, but he has also been used in various midfield roles.",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
        tasks : [
            {
            name: 'Task 6',
            text: 'This is task 6',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 7',
            text: 'This is task 7',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 9',
            text: 'This is task 9',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      },  {
        name: 'Neymar Jr.',
        avatar: 'svg-1',
        image : 'neymar.jpg',
        team : "Barcelona",
        info : "Neymar da Silva Santos Júnior, commonly known as Neymar or Neymar Jr., is a Brazilian professional footballer who plays for Spanish club FC Barcelona and the Brazil national team as a forward or winger, and is also the captain of the national team.",
        chartData :  {
            labels : ["Running", "Workout", "Football Practice","Other"],
            data : [600, 300, 400,100]},
       tasks : [
            {
            name: 'Task 1',
            text: 'This is task 1 ',
            isCompleted : false,
            type: 1,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 2',
            text: 'This is task 2 ',
            isCompleted : false,
            type:2,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    
        },{
            name: 'Task 3',
            text: 'This is task 3 ',
            isCompleted : false,
            type:3,
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }]
      }
    ];
    var tasks = [
         {
        name: 'Task 1',
        text: 'This is task 1 ',
        isCompleted : false,
        type: 1,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
   
      },{
        name: 'Task 2',
        text: 'This is task 2 ',
        isCompleted : false,
        type:2,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
   
      },{
        name: 'Task 3',
        text: 'This is task 3 ',
        isCompleted : false,
        type:3,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 4',
        text: 'This is task 4 ',
        isCompleted : false,
        type:4,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 5',
        text: 'This is task 5 ',
        isCompleted : false,
        type: 3,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 6',
        text: 'This is task 6 ',
        isCompleted : false,
        type:2,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 7',
        text: 'This is task 7 ',
        isCompleted : false,
        type:1,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 8',
        text: 'This is task 8 ',
        isCompleted : false,
        type:4,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },{
        name: 'Task 9',
        text: 'This is task 9 ',
        isCompleted : false,
        type: 3,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      }
    ];
    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      },
      loadAllTasks : function() {
        // Simulate async nature of real remote calls
        return $q.when(tasks);
      }
    };
  }

})();
