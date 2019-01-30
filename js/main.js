function skillChange(skillName){
    var id = $("#pitchingArchetype")[0].selectedIndex;
    if(["or","oa","oe","ir","ia","ie","cab","ca","dp"].indexOf(skillName) >= 0){
        $("#skillName").val()
        //calculateFieldingTPE(skillName);
        calculatePitcherTPE(skillName);
    }
    else if(["bar","bal","gar","gal","por","pol","epl","epr","akr","akl"].indexOf(skillName) >= 0){
        $("#skillName").val()
        //calculateBattingTPE(skillName);
        calculatePitcherTPE(skillName);
    }
    else if(["run","ste","bas","bun","sac"].indexOf(skillName) >= 0){
        $("#skillName").val()
        calculateSpecTPE(skillName);
    } else if(["vel"].indexOf(skillName) >= 0){
        $("#skillName").val()
        calculateVelocity(skillName);
    } else if(id == 4 &&["scr"].indexOf(skillName) >= 0){
        $("#skillName").val();
        calculateStupidAssKnuckleballerTPE(skillName);
    } else if(["mvr","mvl","ctr","ctl","sta","hdr","fbr","scr","tdr"].indexOf(skillName) >= 0){
        $("#skillName").val();
        calculatePitcherTPE(skillName);
    } else if(["fdr"].indexOf(skillName) >= 0){
        $("#skillName").val();
        calculate4thPitchTPE(skillName);
    }
}
