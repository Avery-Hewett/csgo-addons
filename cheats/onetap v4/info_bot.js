//Info BOT
//Basically tries to broadcast the game while its going on through chat

//Broadcast player deaths with
// ATTACKER killed VICTIM using a WEAPON from DISTANCE meters away
//  TODO: 
//   Add headshot, noscope, etc. to add more variety to the killfeed
//   Add assists (if there was an assist, either flash or damage)
function on_death(){ 
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")
    weapon = Event.GetString("weapon")
    dist = Event.GetFloat("distance")

    attacker = Entity.GetName(Entity.GetEntityFromUserID(attackerID))
    victim = Entity.GetName(Entity.GetEntityFromUserID(victimID))

    vowelRegex = '^[aieouAIEOU].*'
    matched = weapon.match(vowelRegex)
    if(matched){
        Cheat.ExecuteCommand("say " + attacker + " killed " + victim + " using an " + weapon + " from " + dist + " meters away!")
    } else {
        Cheat.ExecuteCommand("say " + attacker + " killed " + victim + " using a " + weapon + " from " + dist + " meters away!")
    }
}

Cheat.RegisterCallback("player_death","on_death")

//Broadcast chicken deaths with
// ATTACKER killed a chicken.
//  TODO:
//   Add headshot, noscope, etc. to add more variety to the killfeed (Not sure if this exists, but is from API)
function chicken_death(){
    attackerID = Event.GetInt("attacker")

    attacker = Entity.GetName(Entity.GetEntityFromUserID(attackerID))

    Cheat.ExecuteCommand("say " + attacker + " killed a chicken.")
}

Cheat.RegisterCallback("other_death","chicken_death")

//Broadcast damage done with
// ATTACKER damaged VICTIM for DAMAGED using a WEAPON. VICTIM has HEALTH remaining.
function player_damage(){
    victimID = Event.GetInt("userid")
    attackerID = Event.GetInt("attacker")
    weapon = Event.GetString("weapon")
    health = Event.GetInt("health")
    d_health = Event.GetInt("dmg_health")

    attacker = Entity.GetName(Entity.GetEntityFromUserID(attackerID))
    victim = Entity.GetName(Entity.GetEntityFromUserID(victimID))

    vowelRegex = '^[aieouAIEOU].*'
    matched = weapon.match(vowelRegex)
    if(matched){
        Cheat.ExecuteCommand("say " + attacker + " damaged " + victim + " for " + d_health + " using an " + weapon + ". " + victim + " has " + health + " remaining.")
    } else {
        Cheat.ExecuteCommand("say " + attacker + " damaged " + victim + " for " + d_health + " using a " + weapon + ". " + victim + " has " + health + " remaining.")
    }
}

Cheat.RegisterCallback("player_hurt","player_damage")

//Broadcast items users buy with
// USER bought a ITEM.
function purchase_logger(){
    playerID = Event.GetInt("userid")
    weapon = Event.GetString("weapon")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))
    
    vowelRegex = '^[aieouAIEOU].*'
    matched = weapon.match(vowelRegex)
    if(matched){
        Cheat.ExecuteCommand("say " + player + " bought an " + weapon + ".")
    } else {
        Cheat.ExecuteCommand("say " + player + " bought a " + weapon + ".")
    }
}

Cheat.RegisterCallback("item_purchase","purchase_logger")

//Broadcast when bomb is being planted with
// USER started to plant the bomb.
//  TODO: 
//   Add bombsites the bomb is being planted on
//   Can be done with
//   site = Event.GetInt("site")
function plant_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " started planting the bomb.")
}

Cheat.RegisterCallback("bomb_beginplant","plant_bomb")

//Broadcast if bomb has stopped being planted with 
// USER aborted planting the bomb.
function abort_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " aborted planting the bomb.")
}

Cheat.RegisterCallback("bomb_abortplant","abort_bomb")

//Broadcast when the bomb has been fully planted with
// USER planted the bomb.
function planted_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " planted the bomb.")
}

Cheat.RegisterCallback("bomb_planted","planted_bomb")

//Broadcast when the bomb as been defused with
// USER defused the bomb.
function defused_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " defused the bomb.")
}

Cheat.RegisterCallback("bomb_defused","defused_bomb")

//Broadcast when bomb explodes with
// The bomb exploded
function explode_bomb(){
    Cheat.ExecuteCommand("say The bomb exploded!")
}

Cheat.RegisterCallback("bomb_exploded","explode_bomb")

//Broadcast when the bomb has been dropped with
// USER dropped the bomb.
function dropped_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))


    Cheat.ExecuteCommand("say " + player + " dropped the bomb.")
}

Cheat.RegisterCallback("bomb_dropped","dropped_bomb")

//Broadcast when a player has picked up the bomb
// USER picked up the bomb.
function carry_bomb(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " picked up the bomb.")
}

Cheat.RegisterCallback("bomb_pickup","carry_bomb")

//Broadcast when a player has picked up a defuser
// USER picked up a defuser. 
function defuser(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " pciked up a defuser.")
}

Cheat.RegisterCallback("defuser_pickup","defuser")

//Broadcast when a player has started defusing with
// USER started defusing. 
function defusing(){
    playerID = Event.GetInt("userid")
    kit = Event.GetInt("haskit")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " started defusing.")

    if(kit == 1){
        Cheat.ExecuteCommand("say They have a kit!")
    }
}

Cheat.RegisterCallback("bomb_begindefuse","defusing")

//Broadcast when a player stops defusing with
// USER stopped defusing. 
function abort_defuse(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " stopped defusing.")
}

Cheat.RegisterCallback("bomb_abortdefuse","abort_defuse")

//Broadcast when a player throws a nade with
// USER threw a NADE. 
function throwing_nade(){
    playerID = Event.GetInt("userid")
    nade = Event.GetString("weapon")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " threw a " + nade)
}

Cheat.RegisterCallback("grenade_thrown","throwing_nade")

//Broadcast when a player opens a door with
// USER opened a door. 
function door_stuck(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " opened a door.")
}

Cheat.RegisterCallback("door_moving","door_stuck")

//Broadcast the round MVP
// USER was the MVP last round. 
function mvp_announce(){
    playerID = Event.GetInt("userid")

    player = Entity.GetName(Entity.GetEntityFromUserID(playerID))

    Cheat.ExecuteCommand("say " + player + " got MVP last round.")
}

Cheat.RegisterCallback("round_mvp","mvp_announce")

//Broadcast when a player opens a door with
// TEAM won the round
function win_round(){
    win = Event.GetInt("winner")

    if(win == 2) {
        Cheat.ExecuteCommand("say Terrorists won the round.")

    }else if(win == 3) {
        Cheat.ExecuteCommand("say Counter-Terrorists won the round.")
    }else {
        Cheat.ExecuteCommand("say Spectators won the round.")
    }
}   

Cheat.RegisterCallback("round_end","win_round")

