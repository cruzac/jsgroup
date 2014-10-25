//var memory_array = ['MC/c1.jpg','MC/c1.jpg','MC/c2.jpg','MC/c2.jpg','MC/c3.jpg','MC/c3.jpg','MC/c4.jpg','MC/c4.jpg','MC/c5.jpg','MC/c5.jpg','MC/c11.jpg','MC/c11.jpg'];
//var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G'];

var memory_array = [];
/*for(var i=1; i<6; i++){
  memory_array[i] = "MC/c" + i + ".jpg";
}*/
  
// get images, place them in an array & randomize the order

//console.log(memory_array[0]);

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<img id="MC/'+i+'" onclick="memoryFlipTile(this,\''+ memory_array[i]+'\')"></img>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		//tile.style.background = '#000';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(image.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(image.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}