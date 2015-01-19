Template.nav.helpers({
    isWorker: function () {
        if (Meteor.user().typ == "Pracownik" || Meteor.user().typ == "admin")
            return true;
        else
            return false;
    },
    isClient: function() {
        if (Meteor.user().typ == "Klient")
            return true;
        else
            return false;
    }
});