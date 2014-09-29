'use strict';

/**
 * @ngdoc function
 * @name sentenceUnscrambleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sentenceUnscrambleApp
 */
angular.module('sentenceUnscrambleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sentences = [];


var originalSentence;

  $scope.addSentence = function() {

  	 originalSentence = $scope.sentence.split(' ');


  	/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
	function shuffleArray(array) {
   	 for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    	}
    return array;
	}

	var extraArray = originalSentence;

	var shuffledSentence = shuffleArray(extraArray);

	for (var i = 0; i < shuffledSentence.length; i++){
		$scope.sentences.push(shuffledSentence[i]);
	} 

 	//$scope.sentences = shuffledSentence;
  	//$scope.sentences.push($scope.sentence);

  	$scope.sentence = '';

  };

  $scope.checkAnswer = function() {

  	var wrong = false ;

  	for (var i = 0; i < $scope.sentences.length; i++){
  		if ($scope.sentences[i] !== originalSentence[i] ) {
  			wrong = true;
  		}
  	}

  	if (wrong === true ){
  		//$("#check").change( class="btn btn-warning center-block")
  		document.getElementById('check').style.backgroundColor = '#FFFF00';
  	}

  	else {
  		document.getElementById('check').style.backgroundColor = '#F00000';
  	}

  };





  });