const IsValidSelection = (text, startPos, endPos) => {
  let foundLeftQuotations = false,
    foundRightQuotations = false;

  // find if there are more characters in the left or right that belong within the quotations
  let actualStartPos = startPos,
    actualEndPos = endPos;

  // find if the selected text actually lies within quotes or not
  for (let index = startPos; index >= 0; index--) {
    if (text[index] === '"') {
      if (index + 1 < text.length && text[index + 1] !== " ") {
        foundLeftQuotations = true;
        actualStartPos = index;
        break;
      } else if (index + 1 < text.length && text[index + 1] === " ") {
        break;
      }
    }
  }
  for (let index = endPos; index < text.length; index++) {
    if (text[index] === '"') {
      if (index - 1 >= 0 && text[index - 1] !== " ") {
        foundRightQuotations = true;
        actualEndPos = index;
        break;
      } else if (index - 1 >= 0 && text[index - 1] === " ") {
        break;
      }
    }
  }
  let actualSelectedText = "";
  if (foundLeftQuotations && foundRightQuotations) {
    for (let index = actualStartPos; index <= actualEndPos; index++) {
      actualSelectedText += text[index];
    }
  }
  return {
    actualSelectedText:
      actualSelectedText.length > 0 ? actualSelectedText : null,
    actualStartPos: actualStartPos,
    actualEndPos: actualEndPos,
    isValidSelection: foundLeftQuotations && foundRightQuotations,
  };
};
export default IsValidSelection;
