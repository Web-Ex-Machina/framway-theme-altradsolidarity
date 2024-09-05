document.querySelector('#footer').classList.add('v2')
/**
 * switch the header between reduced and not-reduced states
 * @param  {Boolean} reduce 
 */
app.HeaderFW.prototype.navSwitcher = function(reduce = false){
    var header = this;
    if (reduce) {
        header.$el.addClass('is-reduce');
        if (header.$topbar) header.$topbar.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$search) header.$search.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$lang)   header.$lang.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
    } else {
        header.$el.removeClass('is-reduce');
        if (header.$topbar) header.$nav.append(header.$topbar);
        if (header.$search) header.$nav.append(header.$search);
        if (header.$lang)   header.$nav.append(header.$lang);
    }
};
