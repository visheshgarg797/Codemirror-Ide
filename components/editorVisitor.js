import { ResearchAdvanceQLParser } from "./antlrGenerated";
import { ResearchAdvanceQLVisitor } from "./antlrGenerated";
import ParseCancellationException from "./ParseCancellationException";
class EditorQueryVisitor extends ResearchAdvanceQLVisitor {
  visitField(ctx) {
    if (ctx.start.text !== "city" && ctx.start.text !== "country") {
      ctx.parser._errHandler.reportInvalidAdvanceOperator(
        ctx.parser,
        ctx.start.start,
        ctx.start.stop
      );
    }
  }
}
export default EditorQueryVisitor;
