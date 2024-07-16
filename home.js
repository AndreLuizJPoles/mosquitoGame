function iniciateGame(){
    if(document.getElementById('difficulty').value !== ""){
        window.location.replace('app.html?' + document.getElementById('difficulty').value);
    }else{
        alert('Selecione uma dificuldade para jogar!');
        return false;
    }
}