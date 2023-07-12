import { ResearchAdvanceQLLexer } from "@/components/antlrGenerated";
import { keywords, advancedOperatorsOptions } from "./DataSets";

const IsValidSelection = (tokens, startPos, endPos) => {
  let isSelectedTextKeyword = false;

  let actualStartPos = startPos,
    actualEndPos = endPos,
    isValidSelection = false,
    actualSelectedText = "";

  tokens.forEach((token) => {
    if (
      token.type === ResearchAdvanceQLLexer.PHRASE &&
      token.startIndex <= startPos &&
      token.stopIndex >= endPos
    ) {
      actualSelectedText = token.text;
      actualStartPos = token.startIndex;
      actualEndPos = token.stopIndex;
      isValidSelection = true;
    }
    if (
      token.type === ResearchAdvanceQLLexer.TERM_NORMAL &&
      keywords.has(token.text) &&
      token.startIndex <= startPos &&
      token.stopIndex >= endPos
    ) {
      isSelectedTextKeyword = true;
      actualSelectedText = token.text;
      actualStartPos = token.startIndex;
      actualEndPos = token.stopIndex;
      isValidSelection = true;
    }
  });
  if (
    actualSelectedText.length >= 2 &&
    advancedOperatorsOptions.has(
      actualSelectedText.substring(1, actualSelectedText.length - 1)
    )
  ) {
    isValidSelection = false;
  }

  return {
    actualSelectedText:
      actualSelectedText.length > 0
        ? keywords.has(actualSelectedText)
          ? actualSelectedText
          : actualSelectedText.substring(1, actualSelectedText.length - 1)
        : 0,
    actualStartPos: actualStartPos,
    actualEndPos: actualEndPos,
    isValidSelection: isValidSelection,
    isSelectedTextKeyword: isSelectedTextKeyword,
  };
};
export default IsValidSelection;
