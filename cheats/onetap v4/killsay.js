function on_death(){
    me = Entity.GetLocalPlayer()
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")
    headshotting = Event.GetInt("headshot")
    wall = Event.GetInt("penetrated")

    attacker = Entity.GetEntityFromUserID(attackerID)
    victim = Entity.GetEntityFromUserID(victimID)
    if (attacker == me && victim != me && headshotting == 1){
        Cheat.ExecuteCommand("say 1")
    } else if (attacker == me && victim != me && wall >= 1) {
        Cheat.ExecuteCommand("say auto walled lol")
    } else if (attacker == me && victim != me) {
        Cheat.ExecuteCommand("say Sorry!")
    }
}

Cheat.RegisterCallback("player_death","on_death")
