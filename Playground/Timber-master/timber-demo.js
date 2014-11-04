var bar_heights = new Array();

for(i=0; i<12; i++) {
    bar_heights[i] = 0;
}

function note_detected(noteNumber, amplitude) {
    var below = Math.floor(noteNumber);
    var deltaBelow = 10 * (1 - Math.abs(below - noteNumber));
    var above = below + 1;
    var deltaAbove = 10 * (1 - Math.abs(above - noteNumber));
    bar_heights[below % 12] += deltaBelow;
    bar_heights[above % 12] += deltaAbove;
}

function debug(message) {
    $('debug').innerHTML += message + "<br>";
    $('debug').scrollTop = $('debug').scrollHeight;
}

var debug_visible = false;

function toggle_debug() {
    debug_visible = !debug_visible;
    if(debug_visible) {
        $('debug').style.display = "block";
	$('debug').scrollTop = $('debug').scrollHeight;
        $('debug_toggle_button').innerHTML = "hide debug output";
    } else {
        $('debug').style.display = "none";
        $('debug_toggle_button').innerHTML = "show debug output";
    }
    return false;
}

function timber_demo_init() {
    var mics = $("timber_demo_flash").getMicrophoneNames();
    var selects = "";
    for(i=0; i<mics.length; i++) {
        selects += "<option value='" + mics[i] + "'>" + mics[i] + "</option>";
    }
    $("microphone-select").innerHTML = selects;
    $("mics").style.display = "block";
    $("timber_demo_flash").setCallback("NOTE_DETECTED", "note_detected");
    $("timber_demo_flash").setCallback("DEBUG", "debug");
    $("timber_demo_flash").setCallback("MIC_INIT", "select_microphone");
    $("timber_demo_flash").setCallback("MIC_OK", "mic_ok");
    $("timber_demo_flash").setCallback("MIC_FAILED", "mic_failed");
    setTimeout(redraw, 100);
}

function mic_ok() {
    $('output').appear();
    $('debug_toggle').appear();
}

function mic_failed() {
    alert("Couldn't access a working microphone!");
}

function select_microphone(name) {
    var s = $('microphone-select');
    for(i=0; i<s.options.length; i++) {
        if(s.options[i].text == name) {
            s.selectedIndex = i;
        }
    }
}

function microphone_selected() {
    $("timber_demo_flash").useMicrophone($('microphone-select').selectedIndex);
}

function redraw() {
    for(i=0; i<12; i++) {
        if(bar_heights[i] > 100) {
            bar_heights[i] = 100;
        }
        $('note-' + i).style.height = bar_heights[i] + "px";
        bar_heights[i] *= 0.8;
    }
    setTimeout(redraw, 100);
}
