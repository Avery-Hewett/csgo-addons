function win_round(){

    win = Event.GetInt("winner")

    l_ent = Entity.GetLocalPlayer()

    team = Entity.GetProp(l_ent, "CCSPlayer", "m_iTeamNum")

    if(team == win) {

        Cheat.ExecuteCommand("say ez!")

    }
}   

Cheat.RegisterCallback("round_end","win_round")