Template.articleForm.events({
    'click #send': function () {
        var tytul=$('#tytul').val()
        var tresc=$('#opis').val() 
        Articles.insert({tytul:tytul,tresc:tresc});
        alert("Pomyślnie dodano ogłoszenie");
    },
    'click #clear': function () {
        var tytul=$('#tytul')
        var tresc=$('#opis')
        tytul.val('')
        tresc.val('')
    }
});
