import { ResearchAdvanceQLLexer } from "@/components/antlrGenerated";
import Data from "./Data";
const keywords = new Set();
Data.keywords.forEach((item) => {
  keywords.add(item.label);
});
const IsValidSelection = (tokens, startPos, endPos) => {
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
