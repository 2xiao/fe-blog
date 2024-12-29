import{_ as p,r as e,o as d,c as k,a as o,b as t,d as s,w as n,e as h}from"./app-r0ql_Osa.js";const q={},g=o("h1",{id:"_1816-截断句子",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_1816-截断句子","aria-hidden":"true"},"#"),t(" 1816. 截断句子")],-1),m=o("code",null,"数组",-1),b=o("code",null,"字符串",-1),w={href:"https://leetcode.cn/problems/truncate-sentence",target:"_blank",rel:"noopener noreferrer"},v=o("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/truncate-sentence",target:"_blank",rel:"noopener noreferrer"},f=o("code",null,"LeetCode",-1),y=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>sentence</strong> is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of <strong>only</strong> uppercase and lowercase English letters (no punctuation).</p><ul><li>For example, <code>&quot;Hello World&quot;</code>, <code>&quot;HELLO&quot;</code>, and <code>&quot;hello world hello world&quot;</code> are all sentences.</li></ul><p>You are given a sentence <code>s</code>​​​​​​ and an integer <code>k</code>​​​​​​. You want to <strong>truncate</strong> <code>s</code>​​​​​​ such that it contains only the <strong>first</strong> <code>k</code>​​​​​​ words. Return <code>s</code>​​​​ <em>​​ after <strong>truncating</strong> it.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;Hello how are you Contestant&quot;, k = 4</p><p>Output: &quot;Hello how are you&quot;</p><p>Explanation:</p><p>The words in s are [&quot;Hello&quot;, &quot;how&quot; &quot;are&quot;, &quot;you&quot;, &quot;Contestant&quot;].</p><p>The first 4 words are [&quot;Hello&quot;, &quot;how&quot;, &quot;are&quot;, &quot;you&quot;].</p><p>Hence, you should return &quot;Hello how are you&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;What is the solution to this problem&quot;, k = 4</p><p>Output: &quot;What is the solution&quot;</p><p>Explanation:</p><p>The words in s are [&quot;What&quot;, &quot;is&quot; &quot;the&quot;, &quot;solution&quot;, &quot;to&quot;, &quot;this&quot;, &quot;problem&quot;].</p><p>The first 4 words are [&quot;What&quot;, &quot;is&quot;, &quot;the&quot;, &quot;solution&quot;].</p><p>Hence, you should return &quot;What is the solution&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;chopper is not a tanuki&quot;, k = 5</p><p>Output: &quot;chopper is not a tanuki&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>k</code> is in the range <code>[1, the number of words in s]</code>.</li><li><code>s</code> consist of only lowercase and uppercase English letters and spaces.</li><li>The words in <code>s</code> are separated by a single space.</li><li>There are no leading or trailing spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>句子</strong> 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。</p><ul><li>例如，<code>&quot;Hello World&quot;</code>、<code>&quot;HELLO&quot;</code> 和 <code>&quot;hello world hello world&quot;</code> 都是句子。</li></ul><p>给你一个句子 <code>s</code>​​​​​​ 和一个整数 <code>k</code>​​​​​​ ，请你将 <code>s</code>​​ <strong>截断</strong> ​，​​​ 使截断后的句子仅含 <strong>前</strong><code>k</code>​​​​​​ 个单词。返回 <strong>截断</strong> <code>s</code>​​​​ 后得到的句子。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;Hello how are you Contestant&quot;, k = 4</p><p><strong>输出：</strong> &quot;Hello how are you&quot;</p><p><strong>解释：</strong></p><p>s 中的单词为 [&quot;Hello&quot;, &quot;how&quot; &quot;are&quot;, &quot;you&quot;, &quot;Contestant&quot;]</p><p>前 4 个单词为 [&quot;Hello&quot;, &quot;how&quot;, &quot;are&quot;, &quot;you&quot;]</p><p>因此，应当返回 &quot;Hello how are you&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;What is the solution to this problem&quot;, k = 4</p><p><strong>输出：</strong> &quot;What is the solution&quot;</p><p><strong>解释：</strong></p><p>s 中的单词为 [&quot;What&quot;, &quot;is&quot; &quot;the&quot;, &quot;solution&quot;, &quot;to&quot;, &quot;this&quot;, &quot;problem&quot;]</p><p>前 4 个单词为 [&quot;What&quot;, &quot;is&quot;, &quot;the&quot;, &quot;solution&quot;]</p><p>因此，应当返回 &quot;What is the solution&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;chopper is not a tanuki&quot;, k = 5</p><p><strong>输出：</strong> &quot;chopper is not a tanuki&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>k</code> 的取值范围是 <code>[1, s 中单词的数目]</code></li><li><code>s</code> 仅由大小写英文字母和空格组成</li><li><code>s</code> 中的单词之间由单个空格隔开</li><li>不存在前导或尾随空格</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-分割字符串" tabindex="-1"><a class="header-anchor" href="#思路一-分割字符串" aria-hidden="true">#</a> 思路一：分割字符串</h3><ol><li><strong>分割字符串</strong>：可以使用 JavaScript 的 <code>split(&#39; &#39;)</code> 方法把字符串按空格分割成单词数组。</li><li><strong>截取前 <code>k</code> 个单词</strong>：使用数组的 <code>slice(0, k)</code> 方法截取前 <code>k</code> 个单词。</li><li><strong>重新组合字符串</strong>：使用 <code>join(&#39; &#39;)</code> 将前 <code>k</code> 个单词重新组合成字符串，单词之间以空格分隔。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。因为需要遍历整个字符串进行分割，且数组的切割操作和连接操作也是线性的。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，由于需要存储分割后的单词数组，空间复杂度为 <code>O(n)</code>。</li></ul><hr><h3 id="思路二-逐个遍历" tabindex="-1"><a class="header-anchor" href="#思路二-逐个遍历" aria-hidden="true">#</a> 思路二：逐个遍历</h3><p>虽然使用 <code>split()</code> 和 <code>slice()</code> 的方法已经很高效，但我们可以进一步优化空间复杂度，避免创建多余的数组。</p><ul><li><strong>减少时间消耗</strong>：通过遍历字符串，逐个读取单词并计数，直到获取 <code>k</code> 个单词为止。这样不需要将整个字符串拆分为单词数组，只需要遍历到第 <code>k</code> 个单词时停止，减少了时间开销。</li><li><strong>减少内存消耗</strong>：避免创建数组并直接构建最终结果字符串，边遍历边构建。</li></ul><ol><li><strong>变量初始化</strong>：使用 <code>wordCount</code> 计数当前已经读取的单词数，<code>result</code> 存储拼接的结果。</li><li><strong>遍历字符串</strong>：逐个字符遍历字符串： <ul><li>如果遇到空格并且已经获取了 <code>k</code> 个单词，则停止遍历。</li><li>如果遇到空格，则说明一个单词读取完毕，增加 <code>wordCount</code>。</li><li>否则，继续拼接字符到 <code>result</code> 中。</li></ul></li><li><strong>返回结果</strong>：当 <code>wordCount</code> 达到 <code>k</code> 后，直接返回拼接的结果。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。最坏情况下，仍然需要遍历原字符串一次，</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了存储结果字符串外，不需要额外的数组存储中间结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',37),x=o("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[o("pre",{class:"language-javascript"},[o("code",null,[o("span",{class:"token doc-comment comment"},[t(`/**
 * `),o("span",{class:"token keyword"},"@param"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("string"),o("span",{class:"token punctuation"},"}")]),t(),o("span",{class:"token parameter"},"s"),t(`
 * `),o("span",{class:"token keyword"},"@param"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("number"),o("span",{class:"token punctuation"},"}")]),t(),o("span",{class:"token parameter"},"k"),t(`
 * `),o("span",{class:"token keyword"},"@return"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("string"),o("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),o("span",{class:"token keyword"},"var"),t(),o("span",{class:"token function-variable function"},"truncateSentence"),t(),o("span",{class:"token operator"},"="),t(),o("span",{class:"token keyword"},"function"),t(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},[t("s"),o("span",{class:"token punctuation"},","),t(" k")]),o("span",{class:"token punctuation"},")"),t(),o("span",{class:"token punctuation"},"{"),t(`
	`),o("span",{class:"token keyword"},"return"),t(" s"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"split"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"' '"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"slice"),o("span",{class:"token punctuation"},"("),o("span",{class:"token number"},"0"),o("span",{class:"token punctuation"},","),t(" k"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"join"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"' '"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),t(`
`),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},";"),t(`
`)])]),o("div",{class:"line-numbers","aria-hidden":"true"},[o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"})])],-1),C=o("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[o("pre",{class:"language-javascript"},[o("code",null,[o("span",{class:"token doc-comment comment"},[t(`/**
 * `),o("span",{class:"token keyword"},"@param"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("string"),o("span",{class:"token punctuation"},"}")]),t(),o("span",{class:"token parameter"},"s"),t(`
 * `),o("span",{class:"token keyword"},"@param"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("number"),o("span",{class:"token punctuation"},"}")]),t(),o("span",{class:"token parameter"},"k"),t(`
 * `),o("span",{class:"token keyword"},"@return"),t(),o("span",{class:"token class-name"},[o("span",{class:"token punctuation"},"{"),t("string"),o("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),o("span",{class:"token keyword"},"var"),t(),o("span",{class:"token function-variable function"},"truncateSentence"),t(),o("span",{class:"token operator"},"="),t(),o("span",{class:"token keyword"},"function"),t(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},[t("s"),o("span",{class:"token punctuation"},","),t(" k")]),o("span",{class:"token punctuation"},")"),t(),o("span",{class:"token punctuation"},"{"),t(`
	`),o("span",{class:"token keyword"},"let"),t(" wordCount "),o("span",{class:"token operator"},"="),t(),o("span",{class:"token number"},"0"),o("span",{class:"token punctuation"},";"),t(`
	`),o("span",{class:"token keyword"},"let"),t(" result "),o("span",{class:"token operator"},"="),t(),o("span",{class:"token string"},"''"),o("span",{class:"token punctuation"},";"),t(`

	`),o("span",{class:"token keyword"},"for"),t(),o("span",{class:"token punctuation"},"("),o("span",{class:"token keyword"},"let"),t(" i "),o("span",{class:"token operator"},"="),t(),o("span",{class:"token number"},"0"),o("span",{class:"token punctuation"},";"),t(" i "),o("span",{class:"token operator"},"<"),t(" s"),o("span",{class:"token punctuation"},"."),t("length"),o("span",{class:"token punctuation"},";"),t(" i"),o("span",{class:"token operator"},"++"),o("span",{class:"token punctuation"},")"),t(),o("span",{class:"token punctuation"},"{"),t(`
		`),o("span",{class:"token keyword"},"if"),t(),o("span",{class:"token punctuation"},"("),t("s"),o("span",{class:"token punctuation"},"["),t("i"),o("span",{class:"token punctuation"},"]"),t(),o("span",{class:"token operator"},"==="),t(),o("span",{class:"token string"},"' '"),t(),o("span",{class:"token operator"},"&&"),t(" wordCount "),o("span",{class:"token operator"},"==="),t(" k"),o("span",{class:"token punctuation"},")"),t(),o("span",{class:"token keyword"},"break"),o("span",{class:"token punctuation"},";"),t(`
		`),o("span",{class:"token keyword"},"if"),t(),o("span",{class:"token punctuation"},"("),t("s"),o("span",{class:"token punctuation"},"["),t("i"),o("span",{class:"token punctuation"},"]"),t(),o("span",{class:"token operator"},"==="),t(),o("span",{class:"token string"},"' '"),o("span",{class:"token punctuation"},")"),t(" wordCount"),o("span",{class:"token operator"},"++"),o("span",{class:"token punctuation"},";"),t(`
		`),o("span",{class:"token keyword"},"if"),t(),o("span",{class:"token punctuation"},"("),t("wordCount "),o("span",{class:"token operator"},"<"),t(" k"),o("span",{class:"token punctuation"},")"),t(" result "),o("span",{class:"token operator"},"+="),t(" s"),o("span",{class:"token punctuation"},"["),t("i"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},";"),t(`
	`),o("span",{class:"token punctuation"},"}"),t(`

	`),o("span",{class:"token keyword"},"return"),t(" result"),o("span",{class:"token punctuation"},";"),t(`
`),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},";"),t(`
`)])]),o("div",{class:"line-numbers","aria-hidden":"true"},[o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"}),o("div",{class:"line-number"})])],-1);function H(E,W){const r=e("font"),l=e("RouterLink"),u=e("ExternalLinkIcon"),i=e("CodeTabs");return d(),k("div",null,[g,o("p",null,[t("🟢 "),s(r,{color:"#15bd66"},{default:n(()=>[t("Easy")]),_:1}),t("  🔖  "),s(l,{to:"/tag/array.html"},{default:n(()=>[m]),_:1}),t(),s(l,{to:"/tag/string.html"},{default:n(()=>[b]),_:1}),t("  🔗 "),o("a",w,[v,s(u)]),t(),o("a",_,[f,s(u)])]),y,s(i,{id:"321",data:[{id:"分割字符串"},{id:"逐个遍历"}]},{title0:n(({value:a,isActive:c})=>[t("分割字符串")]),title1:n(({value:a,isActive:c})=>[t("逐个遍历")]),tab0:n(({value:a,isActive:c})=>[x]),tab1:n(({value:a,isActive:c})=>[C]),_:1})])}const L=p(q,[["render",H],["__file","1816.html.vue"]]);export{L as default};
