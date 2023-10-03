UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Blast's BM")

UI.AddSliderInt(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"], "Killsay ", 0, 0);
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"On headshot")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"On wall bang")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"On kill")

UI.AddSliderInt(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"], "Roundsay ", 0, 0);
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"On round win")

UI.AddSliderInt(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"], "Firesay ", 0, 0);
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"On fire damage")

var playing = false;
var started = 0.0;
UI.AddSliderInt(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"], "Killsound ", 0, 0);
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],".wav file name")

var kills = 0;
var startTime = Globals.Realtime();
UI.AddSliderInt(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"], "Havoc Announcer ", 0, 0);
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"1st kill .wav file name")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"2nd kill .wav file name")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"3rd kill .wav file name")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"4th kill .wav file name")
UI.AddTextbox(["Misc.","Blast's BM","SHEET_MGR","Blast's BM"],"5th kill .wav file name")

// Roundsay
function win_round(){
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Roundsay"])) return;
    win = Event.GetInt("winner")
    l_ent = Entity.GetLocalPlayer()
    team = Entity.GetProp(l_ent, "CCSPlayer", "m_iTeamNum")
    say = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","On round win"]);
    if(team == win) {
        Cheat.ExecuteCommand("say " + say);
    }
}   

Cheat.RegisterCallback("round_end","win_round")

// Killsay function
function on_death(){
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Killsay"])) return;
    me = Entity.GetLocalPlayer()
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")
    headshotting = Event.GetInt("headshot")
    wall = Event.GetInt("penetrated")

    headshot_string = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","On headshot"])
    wall_string = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","On wall bang"])
    kill_string = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","On kill"])

    attacker = Entity.GetEntityFromUserID(attackerID)
    victim = Entity.GetEntityFromUserID(victimID)
    if (attacker == me && victim != me && headshotting == 1){
        Cheat.ExecuteCommand("say " + headshot_string)
    } else if (attacker == me && victim != me && wall >= 1) {
        Cheat.ExecuteCommand("say " + wall_string)
    } else if (attacker == me && victim != me) {
        Cheat.ExecuteCommand("say " + kill_string)
    }
}

Cheat.RegisterCallback("player_death","on_death")

// Killsound functions
function killsounds() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Killsound"])) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) return;
    started = Global.Realtime();
    playing = true;
    filename = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM",".wav file name"]);
    Global.ExecuteCommand("voice_loopback 1");
    Sound.PlayMicrophone('ot\\resources\\' + filename + '.wav');
}

function soundreset() {
    if (playing && Math.abs(started + 5.5 - Global.Realtime()) < 0.05) {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

Global.RegisterCallback("player_death", "killsounds");
Global.RegisterCallback("FrameStageNotify", "soundreset");

// Firesay
function firehot(){
    if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Firesay"])) return;
    me = Entity.GetLocalPlayer()
    victimID = Event.GetInt("userid")
    weapon = Event.GetString("weapon")
    victim = Entity.GetEntityFromUserID(victimID)

    string = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","On fire damage"])

    if (victim == me && weapon == "inferno"){
        Cheat.ExecuteCommand("say " + string);
    }
}

Cheat.RegisterCallback("player_hurt","firehot")

// Havoc Announcer
function announcer() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Havoc Announcer"])) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()){
        kills = 0;
        return;
    } 
    first = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","1st kill .wav file name"]);
    second = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","2nd kill .wav file name"]);
    third = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","3rd kill .wav file name"]);
    fourth = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","4th kill .wav file name"]);
    fifth = UI.GetString(["Misc.","Blast's BM","SHEET_MGR","Blast's BM","5th kill .wav file name"]);
    startTime = Globals.Realtime();
    if (kills != 5){
        kills = kills + 1;
    }
    if (kills <= 5 && kills > 0){
        switch(kills){
            case 1: {Sound.Play("ot\\resources\\" + first + ".wav"); break;}
            case 2: {Sound.Play("ot\\resources\\" + second + ".wav"); break;}
            case 3: {Sound.Play("ot\\resources\\" + third + ".wav"); break;}
            case 4: {Sound.Play("ot\\resources\\" + fourth + ".wav"); break;}
            case 5: {Sound.Play("ot\\resources\\" + fifth + ".wav"); break;}
        }
    }
}

function resetKills(){
    kills = 0;
}

Global.RegisterCallback("player_death", "announcer");
Cheat.RegisterCallback("round_start", "resetKills");
