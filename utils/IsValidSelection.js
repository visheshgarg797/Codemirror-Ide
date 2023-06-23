const IsValidSelection = (tokens, startPos, endPos) => {
  let actualStartPos = startPos,
    actualEndPos = endPos,
    isValidSelection = false,
    actualSelectedText = "";

  tokens.forEach((token) => {
    console.log(token);
    if (
      token.tokenName === "PHRASE" &&
      token.startIndex <= startPos &&
      token.stopIndex >= endPos
    ) {
      actualSelectedText = token.text;
      actualStartPos = token.startIndex;
      actualEndPos = token.stopIndex;
      isValidSelection = true;
    }
  });

  return {
    actualSelectedText:
      actualSelectedText.length > 0
        ? actualSelectedText.substring(1, actualSelectedText.length - 1)
        : 0,
    actualStartPos: actualStartPos,
    actualEndPos: actualEndPos,
    isValidSelection: isValidSelection,
  };
};
export default IsValidSelection;
