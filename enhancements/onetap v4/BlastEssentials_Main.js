//Cheat.PrintChat(" \x011\x022\x033\x044\x055\x066\x077\x088\x099\x1010\x0AA\x0BB\x0CC\x0DD\x0EE\x0FF")
Cheat.PrintChat(" \x10You are using Blast's Essentials.");
Cheat.PrintChat(" \x0E[Blast's Essentials] \x10Script Loaded.")

UI.AddSubTab(["Config", "SUBTAB_MGR"], "Blast's Essentials")

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                    Blast's Essentials v2.1", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Clantag");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Vote Revealer");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Player List");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Nade Helper (Coming soon)");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Movement Recorder (Coming soon)");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Block Bot (Coming soon)");

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                          HvH Settings", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Prediction (Coming soon)");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Resolver (Coming soon)");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable HvH Settings (Coming soon)");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Legit Anti-Aim");

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                            Log Settings", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Buy Logger");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Kill Logger");

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                         Visuals Settings", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable RGB Essentials");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Mouse Trail");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Server Info");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Display Info (Coming soon)");

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                           BM Settings", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Killsay");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Killsound");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Roundsay");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Firesay");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"],"Enable Havoc Announcer");

UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], " ", 0, 0);
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "Made by: Blast#0666 & Soda#7327");
//UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "Soda#7327");
UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "Discord https://discord.gg/NfsDPY934Q");

//UI.AddSliderInt(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "                                Credits", 0, 0);
//UI.AddCheckbox(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials"], "Soda#7327 for help with Vote Revealer and Player List", 0, 0);

// Clan tag variables
var currentTick = 0;
var lastTick = 0;
var ctag = 0

// Vote revealer variables
var VoteOptions = []

var ScreenSize = Render.GetScreenSize()
UI.AddSubTab(["Config", "SUBTAB_MGR"], "Blast's Main")
UI.AddSliderInt(["Config","Blast's Main","SHEET_MGR","Blast's Main"], "Player List", 0, 0);
UI.AddSliderInt(["Config", "Blast's Main","SHEET_MGR","Blast's Main"], "X Position", 0, ScreenSize[0])
UI.AddSliderInt(["Config", "Blast's Main","SHEET_MGR","Blast's Main"], "Y Position", 0, ScreenSize[0])
var ListPos = [UI.GetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","X Position"]),UI.GetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","Y Position"])]
var NamePos = [ListPos[0] + 25, ListPos[1] + 25]
var PrioPos = [ListPos[0] + 25, ListPos[1] + 50]
var IgnorePos = [ListPos[0] + 25, ListPos[1] + 75]

var EntEList = [null, null, null, null, null, null, null, null, null, null]
var EntTList = [null, null, null, null, null, null, null, null, null, null]
var PrioEnable = [false, false, false, false, false, false, false, false, false, false]
var IgnoreEnable = [false, false, false, false, false, false, false, false, false, false]
var MinEnable = [false, false, false, false, false, false, false, false, false, false]
BlockEnable = [false, false, false, false, false, false, false, false, false, false]
BlockEnable1 = [false, false, false, false, false, false, false, false, false, false]

var MinDmgVal = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var functionActive = false;
var functionTarget = null;
var tickcount = Global.Tickcount();
var oldTick = tickcount

// Clan tag 
function sync_clantag() {
    if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Clantag"])) return;
    currentTick = parseInt(Globals.Curtime() * 1000);
    if (currentTick - (500) >= lastTick){
        switch ((ctag) % 41){
            case 0:{
                Local.SetClanTag("gg");
                break;
            }
            case 1:{
                Local.SetClanTag("ez");
                break;
            }
        }
        if (ctag == 1){
            ctag = 0;
        }else{
            ctag = ctag+1;
        }
        lastTick = currentTick;
    }
}
Cheat.RegisterCallback("CreateMove", "sync_clantag");
Cheat.RegisterCallback("Draw", "sync_clantag");

function VoteOptionsData() {
	VoteOptions[0] = Event.GetString("option1") //Game Events from CSGO string + variable array
	VoteOptions[1] = Event.GetString("option2")
	VoteOptions[2] = Event.GetString("option3")
	VoteOptions[3] = Event.GetString("option4")
	VoteOptions[4] = Event.GetString("option5")
}

function GetVoteType(){
	if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Vote Revealer"])) return;
	var IDName, tmp = "ERR_E", voteIssue, voteTeam, votePotential, voteYN, voteOption;
	var ID = 72;
    try{
		for(var i = 72; i <= 74; i++){
			voteIssue = Entity.GetProp(i,"CVoteController","m_iActiveIssueIndex");
			voteTeam = Entity.GetProp(i,"CVoteController","m_iOnlyTeamToVote");
			votePotential = Entity.GetProp(i,"CVoteController","m_nPotentialVotes");
			voteYN = Entity.GetProp(i,"CVoteController","m_bIsYesNoVote");
			voteOption = Entity.GetProp(i,"CVoteController","m_nVoteOptionCount");
			
			IDName = Entity.GetClassName(i);
			Global.Print("-------------------------------------------------------\n");
			Global.Print(" \x03 Issue      \x04" + voteIssue + " \x0F" + IDName + " " + i + "\n");
			Global.Print(" \x03 Team       \x04" + voteTeam + " \x0F" + IDName + " " + i+ "\n");
			Global.Print(" \x03 Potential  \x04" + votePotential + " \x0F" + IDName + " " + i+ "\n");
			Global.Print(" \x03 YN         \x04" + voteYN + " \x0F" + IDName + " " + i+ "\n");
			Global.Print(" \x03 Options    \x04" + voteOption + " \x0F" + IDName + " " + i+ "\n");
			Global.Print("-------------------------------------------------------\n");

			switch(voteIssue) {
				case -1:
					break;
				case 0:
					tmp = "Kick";
					break;
				case 1:
					tmp = "Lvl/Timeout";
					break;
				case 2:
					tmp = "FF";
					break;
				case 3:
					tmp = "Scramble";
					break;
				case 4:
					tmp = "SwapTeam";
					break;
				default:
					Global.PrintChat("\x04ERR " + i);
			}
		}
		Global.PrintChat(" \x0E[Blast's Essentials]\x10 [" + tmp + "]");
    }
    catch(err){
        Global.PrintChat(" \x10 ERR " + voteIssue );
    }
 }

function VoteCastInit() {
	if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Vote Revealer"])) return;
	var eid = Event.GetInt("entityid"); //Grabs entity id (player) CSGO game event
	if (eid) {
		var team = Event.GetInt("team"); //game event
		var option = Event.GetInt("vote_option"); //game event
		var player = Entity.GetName(eid);
		var newteam = "null";
		switch (team) {
			case 0: newteam = "[None] ";
			break;
			case 1: newteam = "[Spectator] "
			break;
			case 2: newteam = "[Terrorist] "
			break;
			case 3: newteam = "[Counter-Terrorist] "
			break; 
			default: newteam = "[Null] "
			break;
		}
		var voted = VoteOptions[option];
		//Global.PrintColor([ 255, 148, 8, 255 ], "[VoteReveal] \0");
		Global.Print(newteam + player + " Selected " + voted + "\n"); //console
		Global.PrintChat(" \x0E[Blast's Essentials]\x10 " + newteam + player + " \x10Voted \x10" +  voted ); //chat
	}
}
Global.RegisterCallback("vote_options", "VoteOptionsData");
Global.RegisterCallback("vote_cast", "VoteCastInit");
Global.RegisterCallback("vote_options", "GetVoteType");

function resetPList() {
    tickcount = Global.Tickcount();
    if(tickcount == 0) {
        EntEList = [null, null, null, null, null, null, null, null, null, null]
        EntTList = [null, null, null, null, null, null, null, null, null, null]
        PrioEnable = [false, false, false, false, false, false, false, false, false, false]
        IgnoreEnable = [false, false, false, false, false, false, false, false, false, false]
        MinEnable = [false, false, false, false, false, false, false, false, false, false]
        BlockEnable = [false, false, false, false, false, false, false, false, false, false]
        BlockEnable1 = [false, false, false, false, false, false, false, false, false, false]
        MinDmgVal = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        functionTarget = null;
    }
}

Cheat.RegisterCallback("Draw", "resetPList");

function PlayerListR() {
	if(!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Player List"])) return;
    tickcount = Global.Tickcount();
    ListPos = [UI.GetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","X Position"]),UI.GetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","Y Position"])]

	if(!UI.IsMenuOpen()) return;

    PListMove()
    Base()
    Players()
    TargetOptions()
}

Cheat.RegisterCallback("Draw", "PlayerListR")

function Players() {
    var Teammates = Entity.GetTeammates()
    var Enemies = Entity.GetEnemies()
    var offsetPos = 0

    for(i in Enemies){
        EntEList[i] = Enemies[i]
        Render.GradientRect(ListPos[0] + 253, ListPos[1] + 27 + offsetPos, 169, 20, 0, [73, 0, 0, 255], [34, 0, 0, 255])
        Render.String(ListPos[0] + 257, ListPos[1] + 27 + offsetPos, 0, Entity.GetName(Enemies[i]) + "", [255, 255, 255, 255], 1)
        if(Entity.IsBot(Enemies[i])){
            Render.String(ListPos[0] + 351, ListPos[1] + 27 + offsetPos, 0, "BOT", [255, 255, 255, 255], 1)
        } else if(!Entity.IsAlive(Enemies[i])) {
            Render.String(ListPos[0] + 351, ListPos[1] + 27 + offsetPos, 0, "DEAD", [255, 255, 255, 255], 1)
        }
        PlayerFunctionEnable(Enemies[i], offsetPos)
        offsetPos += 23
    }

    for(i in Teammates){
        EntTList[i] = Teammates[i]
        Render.GradientRect(ListPos[0] + 253, ListPos[1] + 27 + offsetPos, 169, 20, 0, [0, 0, 73, 255], [0, 0, 34, 255])
        Render.String(ListPos[0] + 257, ListPos[1] + 27 + offsetPos, 0, Entity.GetName(Teammates[i]) + "", [255, 255, 255, 255], 1)
        if(Entity.IsBot(Teammates[i])){
            Render.String(ListPos[0] + 351, ListPos[1] + 27 + offsetPos, 0, "BOT", [255, 255, 255, 255], 1)
        } else if(!Entity.IsAlive(Teammates[i])) {
            Render.String(ListPos[0] + 351, ListPos[1] + 27 + offsetPos, 0, "DEAD", [255, 255, 255, 255], 1)
        }
        PlayerFunctionEnable(Teammates[i], offsetPos)
        offsetPos += 23
    }
}

function PlayerFunctionEnable(TargetP, offsetPos) {
    var CPosT = Input.GetCursorPosition()
    var Mouse1DownT = Input.IsKeyPressed(0x01)
    if(CPosT[0] > ListPos[0] + 251 && CPosT[0] < ListPos[0] + 424 && CPosT[1] > ListPos[1] + 26 + offsetPos && CPosT[1] < ListPos[1] + 46 + offsetPos && Mouse1DownT) {
        functionTarget = TargetP;
        functionActive = true
    } else {
        return;
    }
}

function TargetOptions() {
    tickcount = Global.Tickcount();

    var CPosT = Input.GetCursorPosition()
    var Mouse1DownT = Input.IsKeyPressed(0x01)
    
    NamePos = [ListPos[0] + 25, ListPos[1] + 25]
    PrioPos = [ListPos[0] + 25, ListPos[1] + 50]
    KickPos = [ListPos[0] + 25, ListPos[1] + 50]
    IgnorePos = [ListPos[0] + 25, ListPos[1] + 75]
    BlockPos = [ListPos[0] + 25, ListPos[1] + 75]
    BlockPos1 = [ListPos[0] + 25, ListPos[1] + 100]
    MinPos = [ListPos[0] + 25, ListPos[1] + 100]
    
    if(!functionActive){
        return;
    } else if(functionTarget == null) {
        return;
    } else if(!Entity.IsValid(functionTarget)) {
        return;
    }

    if(Entity.IsTeammate(functionTarget)){
        Render.String(NamePos[0], NamePos[1], 0, Entity.GetName(functionTarget) + "", [255, 255, 255, 255], 1)

        Render.FilledRect(KickPos[0], KickPos[1], 10, 10, [0, 0, 0, 255])
        Render.String(KickPos[0] + 15, KickPos[1] - 3, 0, "Kick", [255, 255, 255, 255], 1)

        Render.FilledRect(BlockPos[0], BlockPos[1], 10, 10, [0, 0, 0, 255])
        Render.String(BlockPos[0] + 15, BlockPos[1] - 3, 0, "Bad Block Bot", [255, 255, 255, 255], 1)

        Render.FilledRect(BlockPos1[0], BlockPos1[1], 10, 10, [0, 0, 0, 255])
        Render.String(BlockPos1[0] + 15, BlockPos1[1] - 3, 0, "X Block Bot", [255, 255, 255, 255], 1)

        for(i in EntEList) {
            if(functionTarget == EntTList[i] && BlockEnable[i] == true) {
                Render.FilledRect(BlockPos[0] + 2, BlockPos[1] + 2, 6, 6, [100, 100, 100, 255])
            }
            if(functionTarget == EntTList[i] && BlockEnable1[i] == true) {
                Render.FilledRect(BlockPos1[0] + 2, BlockPos1[1] + 2, 6, 6, [100, 100, 100, 255])
            }
        }

        for(i in EntTList) {
            if(tickcount > oldTick + 10 && functionTarget == EntTList[i] && CPosT[0] > KickPos[0] && CPosT[0] < KickPos[0] + 10 && CPosT[1] > KickPos[1] && CPosT[1] < KickPos[1] + 10 && Mouse1DownT) {
                Cheat.ExecuteCommand("callvote kick " + Entity.GetName(EntTList[i]))
                Global.Print(Entity.GetName(EntTList[i]) + " \n")
                oldTick = tickcount
            }
        }

        if(CPosT[0] > BlockPos[0] && CPosT[0] < BlockPos[0] + 10 && CPosT[1] > BlockPos[1] && CPosT[1] < BlockPos[1] + 10 && Mouse1DownT) {
            for(i in EntTList) {
                if(EntTList[i] == functionTarget && BlockEnable[i] == false && tickcount > oldTick + 20) {
                    BlockEnable[i] = true
                    Global.Print(i + BlockEnable + "\n")
                    oldTick = tickcount
                    break;
    
                } else if(EntTList[i] == functionTarget && BlockEnable[i] == true && tickcount > oldTick + 20) {
                    BlockEnable[i] = false
                    Global.Print(i + BlockEnable + "\n")
                    oldTick = tickcount
                    break;
                }
            }
        }

        if(CPosT[0] > BlockPos1[0] && CPosT[0] < BlockPos1[0] + 10 && CPosT[1] > BlockPos1[1] && CPosT[1] < BlockPos1[1] + 10 && Mouse1DownT) {

            for(i in EntTList) {
                if(EntTList[i] == functionTarget && BlockEnable1[i] == false && tickcount > oldTick + 20) {
                    BlockEnable1[i] = true
                    Global.Print(i + BlockEnable1 + "\n")
                    oldTick = tickcount
                    break;
    
                } else if(EntTList[i] == functionTarget && BlockEnable1[i] == true && tickcount > oldTick + 20) {
                    BlockEnable1[i] = false
                    Global.Print(i + BlockEnable1 + "\n")
                    oldTick = tickcount
                    break;
                }
            }
        }
        
    } else {
        Render.String(NamePos[0], NamePos[1], 0, Entity.GetName(functionTarget) + "", [255, 255, 255, 255], 1)

        Render.FilledRect(PrioPos[0], PrioPos[1], 10, 10, [0, 0, 0, 255])
        Render.String(PrioPos[0] + 15, PrioPos[1] - 3, 0, "Priority", [255, 255, 255, 255], 1)

        Render.FilledRect(IgnorePos[0], IgnorePos[1], 10, 10, [0, 0, 0, 255])
        Render.String(IgnorePos[0] + 15, IgnorePos[1] - 3, 0, "Friendly", [255, 255, 255, 255], 1)

        Render.FilledRect(MinPos[0], MinPos[1], 10, 10, [0, 0, 0, 255])
        Render.String(MinPos[0] + 15, MinPos[1] - 3, 0, "Minimum Damage Override", [255, 255, 255, 255], 1)
        Render.FilledRect(MinPos[0], MinPos[1] + 20, 200, 7, [0, 0, 0, 255])

        for(i in EntEList) {
            if(functionTarget == EntEList[i] && PrioEnable[i] == true) {
                Render.FilledRect(PrioPos[0] + 2, PrioPos[1] + 2, 6, 6, [100, 100, 100, 255])
            }
            if(functionTarget == EntEList[i] && IgnoreEnable[i] == true) {
                Render.FilledRect(IgnorePos[0] + 2, IgnorePos[1] + 2, 6, 6, [100, 100, 100, 255])
            }
            if(functionTarget == EntEList[i] && MinEnable[i] == true) {
                Render.FilledRect(MinPos[0] + 2, MinPos[1] + 2, 6, 6, [100, 100, 100, 255])
                Render.FilledRect(MinPos[0], MinPos[1] + 20, MinDmgVal[i] * 2, 7, [150, 150, 150, 255])
                Render.String(MinPos[0], MinPos[1] + 32, 0, MinDmgVal[i] + "", [255, 255, 255, 255], 1)
            }
        }
    }

    if(CPosT[0] > PrioPos[0] && CPosT[0] < PrioPos[0] + 10 && CPosT[1] > PrioPos[1] && CPosT[1] < PrioPos[1] + 10 && Mouse1DownT) {
        for(i in EntEList) {
            if(EntEList[i] == functionTarget && PrioEnable[i] == false && tickcount > oldTick + 20) {
                PrioEnable[i] = true
                Global.Print(i + PrioEnable + "\n")
                oldTick = tickcount
                break;
            } else if(EntEList[i] == functionTarget && PrioEnable[i] == true && tickcount > oldTick + 20) {
                PrioEnable[i] = false
                Global.Print(i + PrioEnable + "\n")
                oldTick = tickcount
                break;
            }
        }
    }

    if(CPosT[0] > IgnorePos[0] && CPosT[0] < IgnorePos[0] + 10 && CPosT[1] > IgnorePos[1] && CPosT[1] < IgnorePos[1] + 10 && Mouse1DownT) {
        for(i in EntEList) {
            if(EntEList[i] == functionTarget && IgnoreEnable[i] == false && tickcount > oldTick + 20) {
                IgnoreEnable[i] = true
                Global.Print(i + IgnoreEnable + "\n")
                oldTick = tickcount
                break;
            } else if(EntEList[i] == functionTarget && IgnoreEnable[i] == true && tickcount > oldTick + 20) {
                IgnoreEnable[i] = false
                Global.Print(i + IgnoreEnable + "\n")
                oldTick = tickcount
                break;
            }
        }
    }

    if(CPosT[0] > MinPos[0] && CPosT[0] < MinPos[0] + 10 && CPosT[1] > MinPos[1] && CPosT[1] < MinPos[1] + 10 && Mouse1DownT) {
        for(i in EntEList) {
            if(EntEList[i] == functionTarget && MinEnable[i] == false && tickcount > oldTick + 20) {
                MinEnable[i] = true
                Global.Print(i + MinEnable + "\n")
                oldTick = tickcount
                break;

            } else if(EntEList[i] == functionTarget && MinEnable[i] == true && tickcount > oldTick + 20) {
                MinEnable[i] = false
                Global.Print(i + MinEnable + "\n")
                oldTick = tickcount
                break;
            }
        }
    }

    if(CPosT[0] > MinPos[0] && CPosT[0] < MinPos[0] + 200 && CPosT[1] > MinPos[1] + 20 && CPosT[1] < MinPos[1] + 27 && Mouse1DownT) {
        for(i in EntEList) {
            if(EntEList[i] == functionTarget) {
                if((CPosT[0] - MinPos[0]) % 2 == 0) {
                    MinDmgVal[i] = ((CPosT[0] - MinPos[0]) / 2)
                } else {
                    MinDmgVal[i] = (((CPosT[0] + 1) - MinPos[0]) / 2)
                }
            }
        }
    }
}

function PListExec() {
    for(i in EntEList) {
        if(EntEList[i] != null && PrioEnable[i] == true ) {
            Ragebot.ForceTarget(EntEList[i])
            Entity.DrawFlag(EntEList[i], "PRIORITY", [255, 120, 0, 255])
        }

        if(EntEList[i] != null && IgnoreEnable[i] == true ) {
            Ragebot.IgnoreTarget(EntEList[i])
            Entity.DrawFlag(EntEList[i], "FRIENDLY", [0, 255, 0, 255])
        }

        if(EntEList[i] != null && MinEnable[i] == true ) {
            Ragebot.ForceTargetMinimumDamage(EntEList[i], MinDmgVal[i])
            Entity.DrawFlag(EntEList[i], "MIN DMG " + MinDmgVal[i], [0, 255, 255, 255])
        }
    }

    for(i in EntTList) {
        if(EntTList[i] != null && BlockEnable[i] == true) {
            localPlayer = Entity.GetLocalPlayer()

            EOrigin = Entity.GetRenderOrigin(EntTList[i])
            LOrigin = Entity.GetRenderOrigin(localPlayer)
            VAng = Entity.GetProp( EntTList[i], "CBasePlayer", "m_vecViewOffset[0]" );

            Entity.DrawFlag(EntTList[i], "V BLOCK", [0, 255, 255, 255])

            UserCMD.SetMovement([(EOrigin[0] - LOrigin[0]) * 20, (LOrigin[1] - EOrigin[1]) * 20, 0])
            UserCMD.SetViewAngles([VAng[0], VAng[1], 0], false)
        }

        if(EntTList[i] != null && BlockEnable1[i] == true) {
            localPlayer = Entity.GetLocalPlayer()

            EOrigin = Entity.GetRenderOrigin(EntTList[i])
            LOrigin = Entity.GetRenderOrigin(localPlayer)
            VAng = Entity.GetProp( EntTList[i], "CBasePlayer", "m_vecViewOffset[0]" );

            Entity.DrawFlag(EntTList[i], "X BLOCK", [0, 255, 255, 255])

            UserCMD.SetMovement([0, (LOrigin[1] - EOrigin[1]) * 100, 0])
            UserCMD.SetViewAngles([VAng[0], VAng[1], 0], false)
        }
    }
}

Cheat.RegisterCallback("CreateMove", "PListExec")

var PListHeld = false
var GrabOffset = [0, 0]

function PListMove() {
    if (!UI.IsMenuOpen() && Entity.IsValid( Entity.GetLocalPlayer())) return;
        var CPos = Input.GetCursorPosition()
        var Mouse1Down = Input.IsKeyPressed(0x01)

    if(CPos[0] > ListPos[0] && CPos[0] < ListPos[0] + 450 && CPos[1] > ListPos[1] && CPos[1] < ListPos[1] + 20 && Mouse1Down) {    
        if (!PListHeld){
            GrabOffset = [CPos[0] - ListPos[0], CPos[1] - ListPos[1]]
        }
        PListHeld = true

        UI.SetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","X Position"], CPos[0] - GrabOffset[0])
        UI.SetValue(["Config", "Blast's Main","SHEET_MGR","Blast's Main","Y Position"], CPos[1] - GrabOffset[1])
    }
    else PListHeld = false;
}

function Base() {
    Render.GradientRect(ListPos[0], ListPos[1], 450, 275, 0,  [30, 30, 30, 155], [20, 20, 20, 155])
    Render.Rect(ListPos[0], ListPos[1], 450, 275,  [0, 0, 0, 255])
    Render.FilledRect(ListPos[0]+250, ListPos[1]+25, 175, 235,  [10, 10, 10, 255])
}
