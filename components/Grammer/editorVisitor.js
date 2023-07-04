import { ResearchAdvanceQLParser } from "../antlrGenerated";
import { ResearchAdvanceQLVisitor } from "../antlrGenerated";
import { ADVANCE_OPERATOR } from "@/constants/AdvanceOperator";
import ParseCancellationException from "./ParseCancellationException";
class EditorQueryVisitor extends ResearchAdvanceQLVisitor {
  visitField(ctx) {
    let input = ctx.start.text;
    for (let operator in ADVANCE_OPERATOR) {
      if (input === ADVANCE_OPERATOR[operator]) {
        return null;
      }
    }
    ctx.parser._errHandler.reportInvalidAdvanceOperator(
      ctx.parser,
      ctx.start.start,
      ctx.start.stop
    );
  }
}
export default EditorQueryVisitor;
