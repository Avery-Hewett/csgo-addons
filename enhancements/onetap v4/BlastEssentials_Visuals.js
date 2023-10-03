UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Blast's Visuals")

UI.AddSliderInt(["Visuals","Blast's Visuals","SHEET_MGR","Blast's Visuals"], "Mouse Trail ", 0, 0);
UI.AddColorPicker(["Visuals","Blast's Visuals","SHEET_MGR","Blast's Visuals"], "Trail Color");
UI.AddCheckbox(["Visuals","Blast's Visuals","SHEET_MGR","Blast's Visuals"], "RGB Trail");
var CPosT = Input.GetCursorPosition()
TrailPos = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
colors = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]

UI.AddSliderInt(["Visuals","Blast's Visuals","SHEET_MGR","Blast's Visuals"], "RGB Essentials ", 0, 0);
UI.AddSliderInt(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Knife Range Speed", 1, 10)

UI.AddCheckbox(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Enable Rainbow Hands")
UI.AddSliderInt(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Rainbow Hands Speed", 1, 10)
UI.AddSliderInt(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Rainbow Hands Opacity", 1, 255)

UI.AddCheckbox(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Enable Rainbow Guns")
UI.AddSliderInt(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Rainbow Guns Speed", 1, 10)
UI.AddSliderInt(["Visuals", "Blast's Visuals", "Blast's Visuals"], "Rainbow Guns Opacity", 1, 255)

UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"], 0)
UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Opacity"], 0)

UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Speed"], 0)
UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Opacity"], 0)

var tickcount = Global.Tickcount();
var Kspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Knife Range Speed"])
var worldpos = [0, 0, 4000]
var gaiming = Render.WorldToScreen([worldpos[0], worldpos[1], worldpos[2]])
function rgbKnife() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable RGB Essentials"])) return;
    tickcount = Global.Tickcount();
    Kspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Knife Range Speed"])
    gaiming = Render.WorldToScreen([worldpos[0], worldpos[1], worldpos[2]])
    switch(Kspeed) {
        case 1:
            Kspeed = 1000
            break;
        case 2:
            Kspeed = 900
            break;
        case 3:
            Kspeed = 800
            break;
        case 4:
            Kspeed = 700
            break;
        case 5:
            Kspeed = 600
            break;
        case 6:
            Kspeed = 500
            break;
        case 7:
            Kspeed = 400
            break;
        case 8:
            Kspeed = 300
            break;
        case 9:
            Kspeed = 200
            break;
        case 10:
            Kspeed = 100
            break;
        default:
            Kspeed = 1000;
    }
    var Kcolor = rgb(tickcount % Kspeed / Kspeed, 1, 1, 1, 255);
    UI.SetColor(["Visuals", "Extra", "Impacts", "Taser range"], [Kcolor.r, Kcolor.g, Kcolor.b, 255])
}

Cheat.RegisterCallback("Draw", "rgbKnife")

var Hspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"])
var Henabled = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Enable Rainbow Hands"])

function rgbhands() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable RGB Essentials"])) return;
    tickcount2 = Global.Tickcount();
    Henabled = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Enable Rainbow Hands"])
    Hspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"])
    var RainbowHandsEnabled = false
    for (var i = 0; i < 4; i++){
        if (Henabled & (1 << i))
            RainbowHandsEnabled = true
    }
    if(!RainbowHandsEnabled) {
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"], 0)
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Opacity"], 0)
        return;
    } else {
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"], 1)
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Opacity"], 1)
    }
    switch(Hspeed) {
        case 1:
            Hspeed = 1000
            break;
        case 2:
            Hspeed = 900
            break;
        case 3:
            Hspeed = 800
            break;
        case 4:
            Hspeed = 700
            break;
        case 5:
            Hspeed = 600
            break;
        case 6:
            Hspeed = 500
            break;
        case 7:
            Hspeed = 400
            break;
        case 8:
            Hspeed = 300
            break;
        case 9:
            Hspeed = 200
            break;
        case 10:
            Hspeed = 100
            break;
        default:
            Hspeed = 1000;
    }
    var HOpa = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Opacity"])
    var Hcolor = rgb(tickcount % Hspeed / Hspeed, 1, 1, 1, 255);
    UI.SetColor(["Visuals", "Chams", "Local", "Arm material color"], [Hcolor.r, Hcolor.g, Hcolor.b, HOpa])
}

var Gspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Hands Speed"])
var Genabled = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Enable Rainbow Hands"])

function rgbguns() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable RGB Essentials"])) return;
    tickcount2 = Global.Tickcount();
    Genabled = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Enable Rainbow Guns"])
    Gspeed = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Speed"])
    var RainbowGunsEnabled = false
    for (var i = 0; i < 4; i++){
        if (Genabled & (1 << i))
            RainbowGunsEnabled = true
    }
    if(!RainbowGunsEnabled) {
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Speed"], 0)
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Opacity"], 0)
        return;
    } else {
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Speed"], 1)
        UI.SetEnabled(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Opacity"], 1)
    }
    switch(Gspeed) {
        case 1:
            Gspeed = 1000
            break;
        case 2:
            Gspeed = 900
            break;
        case 3:
            Gspeed = 800
            break;
        case 4:
            Gspeed = 700
            break;
        case 5:
            Gspeed = 600
            break;
        case 6:
            Gspeed = 500
            break;
        case 7:
            Gspeed = 400
            break;
        case 8:
            Gspeed = 300
            break;
        case 9:
            Gspeed = 200
            break;
        case 10:
            Gspeed = 100
            break;
        default:
            Gspeed = 1000;
    }
    var GOpa = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals", "Rainbow Guns Opacity"])
    var Gcolor = rgb((tickcount) % Gspeed / Gspeed, 1, 1, 1, 255);
    UI.SetColor(["Visuals", "Chams", "Local", "Weapon material color"], [Gcolor.r, Gcolor.g, Gcolor.b, GOpa])
}
Cheat.RegisterCallback("Draw", "rgbhands")
Cheat.RegisterCallback("Draw", "rgbguns")

// Mouse Trail function
function Trail() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Mouse Trail"])) return;
    var MenuOpen = UI.IsMenuOpen()
    CPosT = Input.GetCursorPosition()
    ticks = Globals.Tickcount()
    oldtick = -100
    TrailPos[0] = CPosT
    TmpPos = TrailPos
    TmpS1 = [0,0,0]
    TmpS2 = [0,0,0]
    Rainbow = UI.GetValue(["Visuals", "Blast's Visuals", "Blast's Visuals","RGB Trail"])
    Color = UI.GetColor(["Visuals","Blast's Visuals","Blast's Visuals","Trail Color"])
    var RainbowEnabled = false
    for (var i = 0; i < 4; i++){
        if (Rainbow & (1 << i))
            RainbowEnabled = true
    }
    if(ticks > oldtick) {
        for(i = 40; i > 0; i--) {
            TrailPos[i] = TmpPos[i - 1]
            if (RainbowEnabled) {
                colors[i] = rgb((i) % 450 / 20, 1, 1, 1, 255);
            }
        }
        oldtick = ticks
    }
    for(i = 0; i < 20; i++) {
        if(TrailPos[i + 1] != null && MenuOpen) {
            TmpS1 = TrailPos[i]
            TmpS2 = TrailPos[i + 1]
            if (RainbowEnabled) {
                Render.Line(TmpS1[0], TmpS1[1], TmpS2[0], TmpS2[1], [colors[i].r, colors[i].b, colors[i].g, 255])
            } else {
                Render.Line(TmpS1[0], TmpS1[1], TmpS2[0], TmpS2[1], Color)
            }
        }
    }
}

Cheat.RegisterCallback("Draw", "Trail")

// Generic Information
function infoChoked() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Server Info"])) return;
    var offset = 0;
    Render.String(10, 10, 0, "Global Ticks   : " + Global.Tickcount(), [0, 255, 0, 255], 1)
    Render.String(10, 20, 0, "Choked Ticks  : " + Globals.ChokedCommands(), [255, 120, 0, 255], 1)
    Render.String(10, 30, 0, "TPS                 : " + Globals.Tickrate(), [0, 255, 255, 255], 1)
    EntEList = Entity.GetEnemies()
    var Ent = Entity.GetEnemies()

    for(i in Ent) {
        TempPos = Entity.GetRenderOrigin(EntEList[i])
        dist = distanceCalc(TempPos)
        Render.String(150, 10 + offset, 0, Entity.GetName(Ent[i]) + "", [255, 0, 0, 255], 1)
        if(Entity.IsDormant(Ent[i])) {
            Render.String(350, 10 + offset, 0, "Dormant:   " + Entity.IsDormant(Ent[i]), [255, 0, 0, 255], 1)
        } else {
            Render.String(350, 10 + offset, 0, "Dormant:   " + Entity.IsDormant(Ent[i]), [0, 255, 0, 255], 1)
        }
        if(Entity.IsAlive(Ent[i])) {
            Render.String(450, 10 + offset, 0, "Alive:   " + Entity.IsAlive(Ent[i]), [0, 255, 0, 255], 1)
        } else {
            Render.String(450, 10 + offset, 0, "Alive:   " + Entity.IsAlive(Ent[i]), [255, 0, 0, 255], 1)
        }
        EntSpeed = getVelocity(Ent[i])
        Render.String(550, 10 + offset, 0, "Speed :   " + Math.round(EntSpeed), [0,255,255,255], 1)
        Render.String(650, 10 + offset, 0, "Distance :   " + Math.round(dist), [0,255,255,255], 1)
        offset += 10
    }
}

Cheat.RegisterCallback("Draw", "infoChoked")

function infomain() {
    if (!UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Server Info"])) return;
    EntEList = Entity.GetEnemies()
    TempPos = [0, 0, 0]
    dist = 0
    for(i in EntEList) {
        TempPos = Entity.GetRenderOrigin(EntEList[i])
        dist = distanceCalc(TempPos)
        var velocity = Entity.GetProp( EntEList[i], "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
        Entity.DrawFlag(EntEList[i], "D: " + Math.round(dist), [0, 255, 0, 255])
        Entity.DrawFlag(EntEList[i], "S: " + Math.round(speed), [0, 255, 255, 255])
    }
}

Cheat.RegisterCallback("CreateMove", "infomain")

function getVelocity(index){
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);{
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    return speed;
}

function distanceCalc(pos) {
    localPlayer = Entity.GetLocalPlayer()
    localPos = Entity.GetRenderOrigin(localPlayer)
    var distance = Math.sqrt(Math.pow((pos[0] - localPos[0] ),2) + Math.pow((pos[1] - localPos[1] ),2))
    return distance;
}

// rgb
function rgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {   r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }; 
}