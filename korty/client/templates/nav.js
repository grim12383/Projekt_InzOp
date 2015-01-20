Template.nav.helpers({
    isWorker: function () {
        if (Meteor.user().profile.typ == "pracownik" || Meteor.user().profile.typ == "admin")
            return true;
        else
            return false;
    },
    isClient: function() {
        if (Meteor.user().profile.typ == "klient")
            return true;
        else
            return false;
    }
});