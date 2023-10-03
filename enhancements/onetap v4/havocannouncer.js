var kills = 0;
var startTime = Globals.Realtime();

function announcer() {
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()){
        kills = 0;
        return;
    } 

    startTime = Globals.Realtime();
    if (kills != 5){
        kills = kills + 1;
    }
    if (kills <= 5 && kills > 0){
        switch(kills){
            case 1: {Sound.Play("ot\\resources\\enemy_death.wav"); break;}
            case 2: {Sound.Play("ot\\resources\\doublekill.wav"); break;}
            case 3: {Sound.Play("ot\\resources\\multi_kill.wav"); break;}
            case 4: {Sound.Play("ot\\resources\\dominating.wav"); break;}
            case 5: {Sound.Play("ot\\resources\\god_like.wav"); break;}
        }
    }
}

function resetKills(){
    kills = 0;
}

Global.RegisterCallback("player_death", "announcer");
Cheat.RegisterCallback("round_start", "resetKills");
