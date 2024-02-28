(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letters = [
		['w','s','i','a','l','c','e','o','i','p'],
		['v','a','l','d','e','n','g','u','e','r'],
		['u','t','f','e','b','r','e','a','o','e'],
		['u','e','p','i','d','e','m','i','a','v'],
		['a','l','c','o','g','e','e','u','e','e'],
		['s','a','u','d','e','a','t','l','d','n'],
		['a','b','i','s','s','n','o','r','e','c'],
		['n','p','a','l','c','o','a','h','s','a'],
		['z','m','p','t','r','e','s','j','r','o'],
		['k','s','i',"n",'t','o','m','a','s','j']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [1,3], [1,4], [1,5], [1,6], [1, 7], [1,8] ],
		[ [3,8], [4,8], [5,8], [6,8], [7,8], ],
		[ [0,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9] ],
		[ [2,2], [2,3], [2,4], [2,5], [2,6], ],
		[ [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8] ],
		[ [5,0], [5,1], [5,2], [5,3], [5,4] ],
		[ [9,1],[9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8] ],
		
	]
	var gameWords = ['dengue','aedes','prevenção','febre','epidemia', 'saude', 'sintomas' ];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();