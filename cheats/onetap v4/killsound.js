var playing = false;
var started = 0.0;

function killsound() {
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) return;
    started = Global.Realtime();
    playing = true;
    Global.ExecuteCommand("voice_loopback 1");
    Sound.PlayMicrophone('ot\\resources\\hentai.wav');
}

function soundreset() {
    if (playing && Math.abs(started + 5.5 - Global.Realtime()) < 0.05) {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

Global.RegisterCallback("player_death", "killsound");
Global.RegisterCallback("FrameStageNotify", "soundreset");