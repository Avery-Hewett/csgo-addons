// Buy Logs
function purchase_logger(){
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Buy Logger"])) return;
    playerID = Event.GetInt("userid")
    weapon = Event.GetString("weapon")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))
    
    vowelRegex = '^[aieouAIEOU].*'
    matched = weapon.match(vowelRegex)
    if(matched){
        Cheat.PrintChat(" \x0E[Blast's Essentials] \x10" + player + " bought an " + weapon + ".")
    } else {
        Cheat.PrintChat(" \x0E[Blast's Essentials] \x10" + player + " bought a " + weapon + ".")
    }
}

Cheat.RegisterCallback("item_purchase","purchase_logger")

// Kill logs
function kill_logger(){
    if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Kill Logger"])) return;
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")
    attacker = Entity.GetName(Entity.GetEntityFromUserID(attackerID))
    victim = Entity.GetName(Entity.GetEntityFromUserID(victimID))

    Cheat.PrintChat(" \x0E[Blast's Essentials] \x10" + attacker + " killed " + victim)
}

Cheat.RegisterCallback("player_death","kill_logger")
