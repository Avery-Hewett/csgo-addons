function on_death(){
    me = Entity.GetLocalPlayer()
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")

    attacker = Entity.GetEntityFromUserID(attackerID)
    victim = Entity.GetEntityFromUserID(victimID)

    if (attacker == me && victim != me){
        Cheat.ExecuteCommand("say Sorry!")
    }
}

Cheat.RegisterCallback("player_death","on_death")