import { tags } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";
import Data from "./Data";
const myHighlightStyle = HighlightStyle.define([
  { tag: tags.link, textDecoration: "underline" },
  { fontWeight: "bold", tag: tags.heading, textDecoration: "underline" },
  { fontStyle: "italic", tag: tags.emphasis },
  { fontWeight: "bold", tag: tags.strong },
  { color: "green", tag: [tags.logicOperator, tags.inserted] },
  { color: "red", tag: [tags.bitwiseOperator, tags.inserted] },
  { color: "#F5D76E", tag: [tags.arithmeticOperator, tags.inserted] },
  { color: "#19B5FE", fontWeight: "bold", tag: [tags.className, tags.deleted] },
  { color: "#19B5FE", tag: [tags.className, tags.deleted] },
]);

export default myHighlightStyle;
