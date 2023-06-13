import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage";
import words from "./Data";
import Completions from "./GetCompletions";

const keywordFilter = (context) => {
  const EntireTextRegex = /.*/;
  const SpaceToColenRegex = /(?:.*\s|^(?!\s))([^:]+):/;
  const PreviousWordRegex = /[\w.]+$/;

  const prefix1 = context.matchBefore(EntireTextRegex);
  if (!prefix1) return null;

  const TextInEditor = prefix1.text;
  console.log(TextInEditor);
  if (prefix1.text.charAt(prefix1.text.length - 1) === " ") {
    return {
      from: prefix1.to,
      options: words.keywords.concat(words.operators),
    };
  }

  if (prefix1.text.charAt(prefix1.text.length - 1) === ":") {
    // prefix2 checks for either city: or country:
    const prefix2 = context.matchBefore(SpaceToColenRegex);

    // prevWord[1] gives either city or country
    const prevWord = TextInEditor.match(SpaceToColenRegex);

    const complete = Completions(words[prevWord[1]]);
    return {
      from: prefix2.to,
      options: complete,
    };
  }

  // prefix3 checks for spaces and recommends city, country and available keywords and operators
  const prefix3 = context.matchBefore(PreviousWordRegex);
  const suggestions = words.keywords.concat(words.operators);

  const filteredSuggestions = suggestions.filter((item) => {
    return item.label.startsWith(prefix3.text);
  });

  console.log(filteredSuggestions);
  const complete = Completions(filteredSuggestions);
  return {
    from: prefix3.from,
    options: complete,
  };
  return null;
};
export default keywordFilter;
