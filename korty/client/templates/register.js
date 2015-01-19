Template.register.events({
    'submit form': function (e) {
        e.preventDefault();
        clearErrors();

        var data = {
            login: $(e.target).find('[name=login]').val(),
            password: $(e.target).find('[name=password]').val(),
            password2: $(e.target).find('[name=password2]').val()
        }
    }
});