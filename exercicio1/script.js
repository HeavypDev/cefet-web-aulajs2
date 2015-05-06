  
var botao = document.getElementsByTagName('button');
var text = document.getElementsByTagName('button').firstchild;

for (var i = 0; i < botao.length; i++) {    
    botao[i].addEventListener('click',
        function(e) {
            if(e.target.parentElement.classList.contains('expandido')){
				this.innerText = '>';
				e.target.parentElement.className = '';
				
			}
			else{
				this.innerText = 'v';
				e.target.parentElement.className = 'expandido';
			}
        }
    );
}