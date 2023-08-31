function pieceOfPie(pieFlavors, firstFlavor, endFlavor) {
    let firstFlavorIndex = pieFlavors.indexOf(firstFlavor);
    let endFlavorIndex = pieFlavors.indexOf(endFlavor);

    let finalPieFlavors = pieFlavors.slice(firstFlavorIndex, endFlavorIndex + 1);
    return finalPieFlavors;
}