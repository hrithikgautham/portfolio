import hljs from "highlight.js";
import markdownit from "markdown-it";
import markdownKatex from "@vscode/markdown-it-katex";
import markdownAlerts from "markdown-it-github-alerts";
import markdownFootnote from "markdown-it-footnote";

import "highlight.js/styles/atom-one-dark.css";
import "markdown-it-github-alerts/styles/github-colors-light.css";
import "markdown-it-github-alerts/styles/github-colors-dark-media.css";
import "markdown-it-github-alerts/styles/github-base.css";

const md = markdownit({
  html: true,
  linkify: false,
  typographer: true,
  highlight: function (code, language) {
    
    if (language && hljs.getLanguage(language)) {
      return `<pre class="hljs language-${language}"><code>${
        hljs.highlight(code, { language }, true).value
      }</code></pre>`;
    }
    return "Unsupported language.";
  },
})
  .use(markdownAlerts)
  // silly little katex
  .use((<any>markdownKatex).default || markdownKatex)
  .use(markdownFootnote);

md.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf: any) => {
  let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;

  // TODO: i literally just copied a lucide arrow up from the DOM and pasted it here
  return ` <a href="#fnref${id}" class="footnote-backref"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>`;
};

export const renderMd = md.render.bind(md);
export const renderMdInline = md.renderInline.bind(md);