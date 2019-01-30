// Knuckleball Pitch Skill:
//     1-40: 1 TPE Per Point
// 40-50: 2 TPE Per Point
// 50-60: 4 TPE Per Point
// 60-70: 8 TPE Per Point
// 70-80: 10 TPE Per Point
// 80-90: 15 TPE Per Point
// 90-105: 20 TPE Per Point
//40 base!
// 1-40: 1 TPE Per Point
// 40-50: 2 TPE Per Point
// 50-60: 3 TPE Per Point
// 60-70: 4 TPE Per Point
// 70-80: 6 TPE Per Point
// 80-90: 7 TPE Per Point
// 90-115: 8 TPE Per Point

function msValue (selector, value) { selector.val(value); selector.closest('.select-wrapper').find('li').removeClass("active"); selector.closest('.select-wrapper').find('.select-dropdown').val(value).find('span:contains(' + value + ')').parent().addClass('selected active'); }

function calculateStupidAssKnuckleballerTPE(skillName){

    var ir = $("#"+skillName).val();

    if(ir < parseInt($("#" + skillName + "Min").html()) ){
        $("#"+skillName).val($("#" + skillName + "Min").html());
    } else if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
    }

    var ir = $("#"+skillName).val();

    if (ir - $("#"+skillName).html() > 0) {
        var cost = 0;
        if (ir > 90) {
            cost += (ir - 90) * 20;
            cost += 150+100+80+40+20
        } else if (ir > 80){
            cost += (ir - 80) * 15;
            cost += 100+80+40+20
        } else if (ir > 70){
            cost += (ir - 70) * 10;
            cost +=80+40+20
        } else if (ir > 60){
            cost += (ir - 60) * 8;
            cost += 40+20
        } else if (ir > 50){
            cost += (ir - 50) * 4;
            cost += 20
        } else {
            cost += (ir - $("#" + skillName + "Min").html())*2;
        }
        $("#" + skillName + "Tpe").html(cost);
        $("#pitchingTPE").text((parseInt($("#mvrTpe").html()) + parseInt($("#mvlTpe").html()) + parseInt($("#velTpe").html())
            + parseInt($("#ctrTpe").html()) + parseInt($("#ctlTpe").html()) + parseInt($("#staTpe").html())
            + parseInt($("#hdrTpe").html()) + parseInt($("#fbrTpe").html()) + parseInt($("#scrTpe").html())
            + parseInt($("#tdrTpe").html()) + parseInt($("#fdrTpe").html())));
    }
    totalPitcherTPE();
}

function calculateVelocity(skillName){
    var myMap = new Map();
    myMap.set("80 - 83",0);
    myMap.set("83 - 85",30);
    myMap.set("84 - 86",60);
    myMap.set("85 - 87",90);
    myMap.set("86 - 88",120);
    myMap.set("87 - 89",150);
    myMap.set("88 - 90",180);
    myMap.set("89 - 91",210);
    myMap.set("90 - 92",260);
    myMap.set("91 - 93",310);
    myMap.set("92 - 94",360);
    myMap.set("93 - 95",410);
    myMap.set("94 - 96",460);
    myMap.set("95 - 97",510);
    myMap.set("96 - 98",585);
    myMap.set("97 - 99",660);
    myMap.set("98 - 100",735);
    myMap.set("99 - 101",810);
    myMap.set("100+",885);

    var ir = $("#"+skillName).val();

    if(ir < myMap.get($("#velMin").html()) ){
        msValue($("#vel"), $("#velMin").html());
        $("#"+skillName).val(myMap.get($("#velMin").html()));
    } else if(ir > myMap.get($("#velMax").html()) ){
        msValue($("#vel"), $("#velMax").html());
        $("#"+skillName).val(myMap.get($("#velMax").html()));
    }

    var ir = $("#"+skillName).val();

    $("#" + skillName + "Tpe").html($("#vel").val()-myMap.get($("#velMin").html()));
    $("#pitchingTPE").text((parseInt($("#mvrTpe").html()) + parseInt($("#mvlTpe").html()) + parseInt($("#velTpe").html())
        + parseInt($("#ctrTpe").html()) + parseInt($("#ctlTpe").html()) + parseInt($("#staTpe").html())
        + parseInt($("#hdrTpe").html()) + parseInt($("#fbrTpe").html()) + parseInt($("#scrTpe").html())
        + parseInt($("#tdrTpe").html()) + parseInt($("#fdrTpe").html())));
303
    totalPitcherTPE();
}

function totalPitcherTPE(){
    $("#pitchingBalance").text(parseInt($("#earnedPitcherTPE").prop("value"))-parseInt($("#pitchingTPE").html()));
}

function calculate4thPitchTPE(skillName) {
    var ir = $("#"+skillName).val();
    if(ir<40 && ir != 0) {
        ir = 40;
        $("#"+skillName).val(40);
    }
    if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
        ir = $("#"+skillName).val();
    }

    if (ir == 0){
        $("#" + skillName + "Tpe").html(0);
    } else if (ir - $("#"+skillName).html() > 0) {
        var cost = 0;
        if (ir > 90) {
            cost += (ir - 90) * 8;
            cost += 70 + 60 + 40
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += 0;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 80) {
            cost += (ir - 80) * 7;
            cost += 60 + 40
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += 0;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 70) {
            cost += (ir - 70) * 6;
            cost += 40
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += 0;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 60) {
            cost += (ir - 60) * 4;
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += 0;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 50) {
            if ($("#" + skillName + "Min").html() >= 50) {
                cost += (ir - $("#" + skillName + "Min").html())*3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += (ir - 50) * 3;
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += (ir - 50) * 3;
                cost += 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 40) {
            if ($("#" + skillName + "Min").html() >= 40) {
                cost += (ir - $("#" + skillName + "Min").html())*2;
            } else {
                cost += (ir - 40) * 2;
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else {
            cost += (ir - $("#" + skillName + "Min").html());
        }
        $("#" + skillName + "Tpe").html(cost+10);
    }
    $("#pitchingTPE").text((parseInt($("#mvrTpe").html()) + parseInt($("#mvlTpe").html()) + parseInt($("#velTpe").html())
        + parseInt($("#ctrTpe").html()) + parseInt($("#ctlTpe").html()) + parseInt($("#staTpe").html())
        + parseInt($("#hdrTpe").html()) + parseInt($("#fbrTpe").html()) + parseInt($("#scrTpe").html())
        + parseInt($("#tdrTpe").html()) + parseInt($("#fdrTpe").html())));
    totalPitcherTPE();
}


function calculatePitcherTPE(skillName) {
    var ir = $("#"+skillName).val();

    if(ir < parseInt($("#" + skillName + "Min").html()) ){
        $("#"+skillName).val($("#" + skillName + "Min").html());
    } else if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
    }

    var ir = $("#"+skillName).val();

    if (ir - $("#"+skillName).html() > 0) {
        var cost = 0;
        if (ir > 90) {
            cost += (ir - 90) * 8;
            cost += 70 + 60
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += (70 - $("#" + skillName + "Min").html()) * 4;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
                cost += 40
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 40 + 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 40 + 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 80) {
            cost += (ir - 80) * 7;
            cost += 60
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += (70 - $("#" + skillName + "Min").html()) * 4;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
                cost += 40
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 40 + 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 40 + 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 70) {
            cost += (ir - 70) * 6;
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += (70 - $("#" + skillName + "Min").html()) * 4;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
                cost += 40
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 40 + 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 40 + 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 60) {
            cost += (ir - $("#" + skillName + "Min").html()) * 4;
            if ($("#" + skillName + "Min").html() >= 60) {
                cost += 0;
            } else if ($("#" + skillName + "Min").html() >= 50) {
                cost += (60 - $("#" + skillName + "Min").html()) * 3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += 30
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += 30 + 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 50) {
            if ($("#" + skillName + "Min").html() >= 50) {
                cost += (ir - $("#" + skillName + "Min").html())*3;
            } else if ($("#" + skillName + "Min").html() >= 40) {
                cost += (ir - 50) * 3;
                cost += (50 - $("#" + skillName + "Min").html()) * 2;
            } else {
                cost += (ir - 50) * 3;
                cost += 20
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else if (ir > 40) {
            if ($("#" + skillName + "Min").html() >= 40) {
                cost += (ir - $("#" + skillName + "Min").html())*2;
            } else {
                cost += (ir - 40) * 2;
                cost += (40 - $("#" + skillName + "Min").html());
            }
        } else {
            cost += (ir - $("#" + skillName + "Min").html());
        }
        $("#" + skillName + "Tpe").html(cost);
        $("#pitchingTPE").text((parseInt($("#mvrTpe").html()) + parseInt($("#mvlTpe").html()) + parseInt($("#velTpe").html())
            + parseInt($("#ctrTpe").html()) + parseInt($("#ctlTpe").html()) + parseInt($("#staTpe").html())
            + parseInt($("#hdrTpe").html()) + parseInt($("#fbrTpe").html()) + parseInt($("#scrTpe").html())
            + parseInt($("#tdrTpe").html()) + parseInt($("#fdrTpe").html())));
    }
    totalPitcherTPE();
    $("#battingTPE").text((parseInt($("#barTpe").html())+parseInt($("#balTpe").html())+parseInt($("#garTpe").html())
        +parseInt($("#galTpe").html())+parseInt($("#porTpe").html())+parseInt($("#polTpe").html())
        +parseInt($("#eprTpe").html())+parseInt($("#eplTpe").html())+parseInt($("#akrTpe").html())
        +parseInt($("#aklTpe").html())+parseInt($("#runTpe").html())+parseInt($("#basTpe").html())
        +parseInt($("#steTpe").html())+parseInt($("#sacTpe").html())+parseInt($("#bunTpe").html())));

    $("#"+skillName+"Tpe").html(cost);
    $("#fieldingTPE").text((parseInt($("#irTpe").html())+parseInt($("#ieTpe").html())+parseInt($("#iaTpe").html())+parseInt($("#orTpe").html())+
        parseInt($("#oeTpe").html())+parseInt($("#oaTpe").html())+parseInt($("#cabTpe").html())+parseInt($("#caTpe").html())+parseInt($("#dpTpe").html())));
    totalBatterTPE();
}

function totalBatterTPE() {
    $("#hitterTPE").text(parseInt($("#earnedHitterTPE").prop("value"))-parseInt($("#battingTPE").html())-parseInt($("#fieldingTPE").html()));
}

function calculateSpecTPE(skillName) {
    var ir = $("#"+skillName).val();

    if(ir < parseInt($("#" + skillName + "Min").html()) ){
        $("#"+skillName).val($("#" + skillName + "Min").html());
    } else if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
    }

    var ir = $("#"+skillName).val();

    if (ir - $("#"+skillName).html() > 0){
        var cost = 0;
        if (ir > 90){
            cost += (ir-90)*5;
            cost += 40+30+20
            cost += (60-$("#"+skillName+"Min").html());
        } else if (ir > 80){
            cost += (ir-80)*4;
            cost += 30+20
            cost += (60-$("#"+skillName+"Min").html());
        } else if (ir > 70){
            cost += (ir-70)*3;
            cost += 20
            cost += (60-$("#"+skillName+"Min").html());
        } else if (ir > 60){
            cost += (ir-60)*2;
            cost += (60-$("#"+skillName+"Min").html());
        }
        else {
            cost += (ir-$("#"+skillName+"Min").html());
        }
        $("#"+skillName+"Tpe").html(cost);
        $("#battingTPE").text((parseInt($("#barTpe").html())+parseInt($("#balTpe").html())+parseInt($("#garTpe").html())
            +parseInt($("#galTpe").html())+parseInt($("#porTpe").html())+parseInt($("#polTpe").html())
            +parseInt($("#eprTpe").html())+parseInt($("#eplTpe").html())+parseInt($("#akrTpe").html())
            +parseInt($("#aklTpe").html())+parseInt($("#runTpe").html())+parseInt($("#basTpe").html())
            +parseInt($("#steTpe").html())+parseInt($("#sacTpe").html())+parseInt($("#bunTpe").html())));
        totalBatterTPE();

    }
}

function calculateBattingTPE(skillName) {
    var ir = $("#"+skillName).val();

    if(ir < parseInt($("#" + skillName + "Min").html()) ){
        $("#"+skillName).val($("#" + skillName + "Min").html());
    } else if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
    }

    var ir = $("#"+skillName).val();

    if (ir - $("#"+skillName).html() > 0){
        var cost = 0;
        if (ir > 80){
            cost += (ir-80)*6;
            if ($("#"+skillName+"Min").html() > 30){
                cost += (80-$("#"+skillName+"Min").html())*4;
            } else {
                cost += 50*4;
                cost += (30-$("#"+skillName+"Min").html())*2;
            }
        } else if (ir >= 30){
            if ($("#"+skillName+"Min").html() > 30){
                cost += (ir-$("#"+skillName+"Min").html())*4;
            } else {
                cost += (ir-30)*4;
                cost += (30-$("#"+skillName+"Min").html())*2;
            }
        } else {
            cost += (ir-$("#"+skillName+"Min").html())*2;
        }
        $("#"+skillName+"Tpe").html(cost);
        $("#battingTPE").text((parseInt($("#barTpe").html())+parseInt($("#balTpe").html())+parseInt($("#garTpe").html())
            +parseInt($("#galTpe").html())+parseInt($("#porTpe").html())+parseInt($("#polTpe").html())
            +parseInt($("#eprTpe").html())+parseInt($("#eplTpe").html())+parseInt($("#akrTpe").html())
            +parseInt($("#aklTpe").html())+parseInt($("#runTpe").html())+parseInt($("#basTpe").html())
            +parseInt($("#steTpe").html())+parseInt($("#sacTpe").html())+parseInt($("#bunTpe").html())));

        totalBatterTPE();
    }
}



function calculateFieldingTPE(skillName) {
    var ir = $("#"+skillName).val();

    if(ir < parseInt($("#" + skillName + "Min").html()) ){
        $("#"+skillName).val($("#" + skillName + "Min").html());
    } else if(ir > parseInt($("#" + skillName + "Max").html()) ){
        $("#"+skillName).val($("#" + skillName + "Max").html());
    }

    var ir = $("#"+skillName).val();

    if (ir - $("#"+skillName).html() > 0){
        var cost = 0;
        if (ir > 80){
            cost += (ir-80)*8;
            cost += 10*6;
            cost += 10*4;
            cost += (60-$("#"+skillName+"Min").html());
        } else if (ir > 70){
            cost += (ir-70)*6;
            cost += 10*4;
            cost += (60-$("#"+skillName+"Min").html());
        } else if (ir > 60){
            cost += (ir-60)*4;
            cost += (60-$("#"+skillName+"Min").html());
        } else {
            cost += (ir-$("#"+skillName+"Min").html());
        }
        $("#"+skillName+"Tpe").html(cost);
        $("#fieldingTPE").text((parseInt($("#irTpe").html())+parseInt($("#ieTpe").html())+parseInt($("#iaTpe").html())+parseInt($("#orTpe").html())+
            parseInt($("#oeTpe").html())+parseInt($("#oaTpe").html())+parseInt($("#cabTpe").html())+parseInt($("#caTpe").html())+parseInt($("#dpTpe").html())));
        totalBatterTPE();
    }
}
