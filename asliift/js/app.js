(function() {
    var app = angular.module('iiftApp', []);

    app.controller('ccRoller', function($scope) {
        $scope.AFP = 0;
        $scope.DFP = 0;
        $scope.dieOneCC = 0;
        $scope.dieTwoCC = 0;
        $scope.dieTotalCC = 0;
        $scope.CCDRM = 0;
        $scope.LCDRM = 0;

        $scope.rollDieCC = function() {
            $scope.dieOneCC = chance.d6();
            $scope.dieTwoCC = chance.d6();
            $scope.dieTotalCC = $scope.dieOneCC + $scope.dieTwoCC;
            $scope.oddsCC = $scope.AFP / $scope.DFP;
            $scope.dieTotalCCM = $scope.dieTotalCC + $scope.CCDRM;

            if ($scope.oddsCC < 0.125) {
                $scope.toKill = 0;
                $scope.oddsResult = "<1-8";
            } else if ($scope.oddsCC >= 0.125 && $scope.oddsCC < 0.167) {
                $scope.toKill = 1;
                $scope.oddsResult = "1-8";
            } else if ($scope.oddsCC >= 0.167 && $scope.oddsCC < 0.25) {
                $scope.toKill = 2;
                $scope.oddsResult = "1-6";
            } else if ($scope.oddsCC >= 0.25 && $scope.oddsCC < 0.50) {
                $scope.toKill = 3;
                $scope.oddsResult = "1-4";
            } else if ($scope.oddsCC >= 0.50 && $scope.oddsCC < 1) {
                $scope.toKill = 4;
                $scope.oddsResult = "1-2";
            } else if ($scope.oddsCC >= 1 && $scope.oddsCC < 1.5) {
                $scope.toKill = 5;
                $scope.oddsResult = "1-1";
            } else if ($scope.oddsCC >= 1.5 && $scope.oddsCC < 2) {
                $scope.toKill = 6;
                $scope.oddsResult = "3-2";
            } else if ($scope.oddsCC >= 2 && $scope.oddsCC < 3) {
                $scope.toKill = 7;
                $scope.oddsResult = "2-1";
            } else if ($scope.oddsCC >= 3 && $scope.oddsCC < 4) {
                $scope.toKill = 8;
                $scope.oddsResult = "3-1";
            } else if ($scope.oddsCC >= 4 && $scope.oddsCC < 6) {
                $scope.toKill = 9;
                $scope.oddsResult = "4-1";
            } else if ($scope.oddsCC >= 6 && $scope.oddsCC < 8) {
                $scope.toKill = 10;
                $scope.oddsResult = "6-1";
            } else if ($scope.oddsCC >= 8 && $scope.oddsCC < 10) {
                $scope.toKill = 11;
                $scope.oddsResult = "8-1";
            } else if ($scope.oddsCC === 10) {
                $scope.toKill = 12;
                $scope.oddsResult = "10-1";
            } else {
                $scope.toKill = 13;
                $scope.oddsResult = "13-1";
            }

            if ($scope.HTHCheckBox === true) {
                $scope.toKill += 2;
            }

            $scope.rollPushedCC = true;
        };

        $scope.rollDieLC = function() {
            $scope.dieLC = chance.d6();
            $scope.totalLC = $scope.dieLC + $scope.LCDRM;

            if ($scope.totalLC >= 7) {
                $scope.LCResult = "No";
            } else if ($scope.totalLC === 6) {
                $scope.LCResult = "6+1";
            } else if ($scope.totalLC === 4 || $scope.totalLC === 5) {
                $scope.LCResult = "7-0";
            } else if ($scope.totalLC === 2 || $scope.totalLC === 3) {
                $scope.LCResult = "8-0";
            } else {
                $scope.LCResult = "8-1";
            }

            $scope.rollPushedLC = true;
        };
    });

    app.controller('iiftRoller', function($scope) {
        // Setting variables, the die are set as such to force them to start hidden but also not be even which toggles the cower alert.
        $scope.dieOne = 1;
        $scope.dieTwo = 2;
        $scope.TEM = 0;
        $scope.FP = 0;
        $scope.rollPushed = false;
        $scope.FPTotal = 0;
        var tableLengthResult = 0;
        $scope.noCowerCheckBox = false;
        $scope.ROF = 0;

        // Function activates upon pushing the roll button, rolls 2d6, adds them with the TEM and then uses a switch case to return results.
        $scope.rollDie = function() {
            $scope.dieOne = chance.d6();
            $scope.dieTwo = chance.d6();
            $scope.dieTotal = $scope.dieOne + $scope.dieTwo + $scope.TEM;
            var FPKeyStrength = [0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 30];

            // In the event of a cower, this determines what FP value the FP is dropped down to, using the Key Strength Array. If no cower, FP is still whatever number was entered. If FP is over 36, this also sets it to the 36FP Column.
            if ($scope.dieOne === $scope.dieTwo && $scope.noCowerCheckBox === false) {
                if ($scope.FP <= 1) {
                    $scope.FPTotal = FPKeyStrength[0];
                } else if ($scope.FP > 1 && $scope.FP < 2) {
                    $scope.FPTotal = FPKeyStrength[0];
                } else if ($scope.FP > 2 && $scope.FP < 4) {
                    $scope.FPTotal = FPKeyStrength[1];
                } else if ($scope.FP > 4 && $scope.FP < 6) {
                    $scope.FPTotal = FPKeyStrength[2];
                } else if ($scope.FP > 6 && $scope.FP < 8) {
                    $scope.FPTotal = FPKeyStrength[3];
                } else if ($scope.FP > 8 && $scope.FP < 12) {
                    $scope.FPTotal = FPKeyStrength[4];
                } else if ($scope.FP > 12 && $scope.FP < 16) {
                    $scope.FPTotal = FPKeyStrength[5];
                } else if ($scope.FP > 16 && $scope.FP < 20) {
                    $scope.FPTotal = FPKeyStrength[6];
                } else if ($scope.FP > 20 && $scope.FP < 24) {
                    $scope.FPTotal = FPKeyStrength[7];
                } else if ($scope.FP > 24 && $scope.FP < 30) {
                    $scope.FPTotal = FPKeyStrength[8];
                } else if ($scope.FP > 30 && $scope.FP < 36) {
                    $scope.FPTotal = FPKeyStrength[9];
                } else if ($scope.FP === 2) {
                    $scope.FPTotal = FPKeyStrength[1];
                } else if ($scope.FP === 4) {
                    $scope.FPTotal = FPKeyStrength[2];
                } else if ($scope.FP === 6) {
                    $scope.FPTotal = FPKeyStrength[3];
                } else if ($scope.FP === 8) {
                    $scope.FPTotal = FPKeyStrength[4];
                } else if ($scope.FP === 12) {
                    $scope.FPTotal = FPKeyStrength[5];
                } else if ($scope.FP === 16) {
                    $scope.FPTotal = FPKeyStrength[6];
                } else if ($scope.FP === 20) {
                    $scope.FPTotal = FPKeyStrength[7];
                } else if ($scope.FP === 24) {
                    $scope.FPTotal = FPKeyStrength[8];
                } else if ($scope.FP === 30) {
                    $scope.FPTotal = FPKeyStrength[9];
                } else if ($scope.FP === 36) {
                    $scope.FPTotal = FPKeyStrength[10];
                } else {
                    $scope.FPTotal = FPKeyStrength[10];
                }

                if ($scope.cowerDoubleCheckBox === true) {
                    $scope.FPTotal--;
                }
            } else {
                if ($scope.FP > 36) {
                    $scope.FPTotal = 36;
                } else {
                    $scope.FPTotal = $scope.FP;
                }
            }

            // Small function to help check the $scope.result in each case statement without creating an ever increasingly large (dieTotal>0) ... (dieTotal>X) check.
            tableLengthResultCheck = function() {
                var x = 0;
                for (var i = 0; i <= iiftTableFP.length - 1; i++) {
                    x += ($scope.dieTotal > i);
                }
                tableLengthResult = x;
                return tableLengthResult;
            };

            // This takes the totals from above and provides the results from the IIFT.
            switch ($scope.FPTotal) {
                case 0:
                    var iiftTableFP = ["No Result"];
                    $scope.result = iiftTableFP[0];
                    break;
                case 1:
                    var iiftTableFP = ["1KIA", "K/1", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 1.5:
                    var iiftTableFP = ["1KIA", "K/1", "1MC", "K/1", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 2:
                    var iiftTableFP = ["2KIA", "1KIA", "K/1", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 2.5:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[7];
                    }
                    break;
                case 3:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 3.5:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "1MC", "NMC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 4:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 4.5:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 5:
                    var iiftTableFP = ["2KIA", "1KIA", "K/2", "2MC", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 6:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/2", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 7:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/2", "2MC", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 8:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/2", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 9:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 10:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "1MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 11:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "1MC", "1MC", "1MC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 12:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 13:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "3MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 14:
                    var iiftTableFP = ["3KIA", "2KIA", "1KIA", "K/3", "3MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 15:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 16:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 17:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/3", "3MC", "2MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 18:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 19:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 20:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 21:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 22:
                    var iiftTableFP = ["4KIA", "3KIA", "2KIA", "1KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 23:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 24:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 25:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 26:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 27:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 28:
                    var iiftTableFP = ["5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 29:
                    var iiftTableFP = ["5KIA", "4KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 30:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 31:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 32:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "3MC", "2MC", "2MC", "1MC", "NMC", "PTC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 33:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "4MC", "3MC", "2MC", "2MC", "1MC", "NMC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 34:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 35:
                    var iiftTableFP = ["6KIA", "5KIA", "4KIA", "3KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "CTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
                case 36:
                    var iiftTableFP = ["7KIA", "6KIA", "5KIA", "4KIA", "3KIA", "2KIA", "1KIA", "K/4", "4MC", "3MC", "2MC", "2MC", "1MC", "1MC", "NMC", "PTC", "No Result"];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck()];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTableFP[0];
                    } else {
                        $scope.result = iiftTableFP[iiftTableFP.length - 1];
                    }
                    break;
            }
            $scope.rollPushed = true;

        };

    });
})();
