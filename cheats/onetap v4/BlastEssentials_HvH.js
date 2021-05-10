UI.AddSubTab(["Rage", "SUBTAB_MGR"], "Blast's HvH")

UI.AddSliderInt(["Rage","Blast's HvH","SHEET_MGR","Blast's HvH"], "Legit Anti-Aim ", 0, 0)
UI.AddCheckbox(["Rage", "Blast's HvH", "Blast's HvH"], "Enable Legit AA")
UI.AddCheckbox(["Rage", "Blast's HvH", "Blast's HvH"], "Custom AA")

UI.AddSliderInt(["Rage", "Blast's HvH", "Blast's HvH"], "Real", -180, 180)
UI.AddSliderInt(["Rage", "Blast's HvH", "Blast's HvH"], "Fake", -180, 180)
UI.AddSliderInt(["Rage", "Blast's HvH", "Blast's HvH"], "LBY", -180, 180)

UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Fake"], 0)
UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Real"], 0)
UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "LBY"], 0)

var AAenabled = UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Enable Legit AA"])
var Cenabled = UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Custom AA"])
var invert = UI.GetValue(["Rage", "Anti Aim", "AA Direction inverter"])

function LAA() {
    if(UI.GetValue(["Config","Blast's Essentials","SHEET_MGR","Blast's Essentials","Enable Legit Anti-Aim"])) return;
    AAenabled = UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Enable Legit AA"])
    Cenabled = UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Custom AA"])
    var LegitAAEnabled = false
    for (var i = 0; i < 4; i++){
        if (AAenabled & (1 << i))
            LegitAAEnabled = true
    }
    if(!LegitAAEnabled) {
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Fake"], 0)
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Real"], 0)
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "LBY"], 0)
        AntiAim.SetOverride(0)
        return;
    } else {
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Fake"], 1)
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "Real"], 1)
        UI.SetEnabled(["Rage", "Blast's HvH", "Blast's HvH", "LBY"], 1)
    }
    invert = UI.GetValue(["Rage", "Anti Aim", "AA Direction inverter"])
    if(Cenabled) {
        AntiAim.SetOverride(1)
        AntiAim.SetFakeOffset(UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Fake"]))
        AntiAim.SetRealOffset(UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "Real"]))
        AntiAim.SetLBYOffset(UI.GetValue(["Rage", "Blast's HvH", "Blast's HvH", "LBY"]))
    } else {
        AntiAim.SetOverride(1)
        if(invert == 1) {
            AntiAim.SetFakeOffset(0)
            AntiAim.SetRealOffset(-60)
            AntiAim.SetLBYOffset(65)
        } else {
            AntiAim.SetFakeOffset(0)
            AntiAim.SetRealOffset(60)
            AntiAim.SetLBYOffset(-65)
        }
    }
}

Cheat.RegisterCallback("CreateMove", "LAA")