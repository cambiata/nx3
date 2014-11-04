/*
  This is part of Timber - see http://abstractnonsense.com/timber

  By Bill Moorier.  Licence is BSD.
 */

var timber_flash_container = null;

function load_timber(flash_root, flash_container, on_ready) {
    timber_flash_container = flash_container;
    var flashvars = {onReady: on_ready};
    var params = {allowScriptAccess: "always"};
    var attributes = {id: flash_container, name: flash_container};
    swfobject.embedSWF(flash_root + "Timber.swf", flash_container, "225", "150", "10.1.0", false, flashvars, params, attributes);
}

function hide_timber_flash() {    // Called from Flash - this isn't part of the API.
    if(timber_flash_container != null) {
	// We can't simply set style.display = "none", because
	// doing that stops the Flash VM from running in the background.
	// So we do this instead.  Note that we also can't set the size
	// to 0px by 0px - that also halts (some versions of?) the VM.
	$(timber_flash_container).style.width = "1px";
	$(timber_flash_container).style.height = "1px";
	$(timber_flash_container).style.border = "0px";
	$(timber_flash_container).style.margin = "0px";
	$(timber_flash_container).style.padding = "0px";
    }
}
