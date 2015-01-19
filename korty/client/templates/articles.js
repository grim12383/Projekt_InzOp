Template.postList.helpers({
    posts : function() {
        return Articles.find();
    }
});