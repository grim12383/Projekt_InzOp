Template.reservationForm.helpers({
    kort: function () {
        return Korty.find();
    }
});
Template.reservationForm.rendered = function () {
    $('#my-datepicker').daterangepicker({
        singleDatePicker: true,
        format: 'DD/MM/YYYY',
        startDate: moment().format('DD/MM/YYYY'),
        endDate: moment().format('DD/MM/YYYY')
    });
}
Template.reservationForm.events({
    'click #rezerwuj': function () {
        var kort = $('#NrKortu').val();
        var data = $('#my-datepicker').val();
        var godzina = $('#time').val();
        var rezerwacja = Rezerwacje.findOne({
            nrkortu: kort,
            data: data,
            godzina: godzina
        })
        if (kort == 0)
            alert("Wybierz kort");
        else if (data == '')
            alert("Wybierz date");
        else if (godzina == "Wybierz Godzinę")
            alert("Wybierz Godzinę")
        else if (rezerwacja == undefined) {
            Rezerwacje.insert({
                nrkortu: kort,
                data: data,
                godzina: godzina
            });
            alert("Rezerwacja kortu przebiegła pomyślnie "+kort);
        } else {

            alert("Kort " + kort + " jest juz zarezerwowany w dniu " + data + " o godzinie " + godzina + ". Prosimy wybrać inny kort, bądź inne parametry czasowe")
        }
    }
});