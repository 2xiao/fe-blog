import{_ as p,r as l,o as h,c as _,a as t,b as e,d as n,w as s,f as g,e as i}from"./app-XFeYdzZv.js";const k={},m=t("h1",{id:"_3-无重复字符的最长子串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-无重复字符的最长子串","aria-hidden":"true"},"#"),e(" 3. 无重复字符的最长子串")],-1),b=t("code",null,"哈希表",-1),f=t("code",null,"字符串",-1),y=t("code",null,"滑动窗口",-1),x={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),O=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <strong>substring</strong> without repeating characters.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcabcbb&quot;</p><p>Output: 3</p><p>Explanation: The answer is &quot;abc&quot;, with the length of 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;bbbbb&quot;</p><p>Output: 1</p><p>Explanation: The answer is &quot;b&quot;, with the length of 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;pwwkew&quot;</p><p>Output: 3</p><p>Explanation: The answer is &quot;wke&quot;, with the length of 3.</p><p>Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> consists of English letters, digits, symbols and spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>子字符串</strong> 是字符串中连续的 <strong>非空</strong> 字符序列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以使用 <strong>滑动窗口</strong> 技巧来解决。</p><ol><li><p><strong>定义滑动窗口</strong>：</p><ul><li>使用两个指针 <code>left</code> 和 <code>right</code> 来表示滑动窗口的左右边界。滑动窗口会随着指针的移动而扩大或收缩。</li><li>维护一个 <code>window</code> 对象，记录当前窗口中各字符出现的频次。</li></ul></li><li><p><strong>扩展右指针</strong>：</p><ul><li>每次将右指针 <code>right</code> 向右移动一格，将对应的字符加入 <code>window</code>，更新该字符的出现次数。</li></ul></li><li><p><strong>收缩左指针</strong>：</p><ul><li>如果当前字符已经在窗口中出现了不止一次（即 <code>window[c] &gt; 1</code>），说明当前窗口中有重复字符。此时我们要通过移动左指针 <code>left</code> 来缩小窗口，直到去掉重复的字符，保证窗口内每个字符只出现一次。</li></ul></li><li><p><strong>记录结果</strong>：</p><ul><li>每次调整完窗口后，检查当前窗口的大小，并更新最长子串的长度 <code>res</code>。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>当右指针遍历到字符串的末尾时，循环结束，返回 <code>res</code> 即为最长不含重复字符的子串长度。</li></ul></li></ol>',16),S=i('<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。</p><ul><li>外层的 <code>while</code> 循环遍历字符串 <code>s</code>，每个字符最多只会被左指针和右指针访问一次。因此，整个滑动窗口算法的时间复杂度为 <code>O(n)</code>，因为每个字符至多只会被访问两次（一次右指针移动，一次左指针移动）。</li><li>更新 <code>window</code> 和比较操作都是常数时间操作 <code>O(1)</code>，不会影响整体复杂度。</li></ul></li><li><p><strong>空间复杂度</strong>： <code>O(1)</code></p><ul><li>虽然在 <code>window</code> 中存储字符的频次，但 <code>window</code> 最多只会包含 128 个 ASCII 字符，因此空间复杂度为 <code>O(1)</code>，与字符串 <code>s</code> 的长度无关。</li><li>其他变量如 <code>left</code>、<code>right</code>、<code>res</code> 以及中间变量 <code>c</code> 和 <code>d</code> 都只占用常数空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',3),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" window "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token comment"},"// 记录窗口内字符的频次"),e(`
		left `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token comment"},"// 左指针"),e(`
		right `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token comment"},"// 右指针"),e(`
		res `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 记录最长子串的长度"),e(`

	`),t("span",{class:"token comment"},"// 遍历字符串"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("right "),t("span",{class:"token operator"},"<"),e(" s"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" c "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"["),e("right"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 当前右指针指向的字符"),e(`
		right`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 右指针向右移动"),e(`
		window`),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),e("window"),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"||"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 统计当前字符的频次"),e(`

		`),t("span",{class:"token comment"},"// 如果窗口内有重复字符，收缩窗口"),e(`
		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("window"),t("span",{class:"token punctuation"},"["),e("c"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"let"),e(" d "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"["),e("left"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 左指针指向的字符"),e(`
			left`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 左指针向右移动，缩小窗口"),e(`
			window`),t("span",{class:"token punctuation"},"["),e("d"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 减少窗口内字符频次"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`

		`),t("span",{class:"token comment"},"// 更新结果，记录最大长度"),e(`
		res `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("res"),t("span",{class:"token punctuation"},","),e(" right "),t("span",{class:"token operator"},"-"),e(" left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 返回最长不含重复字符的子串长度"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" max "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" curStr "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" s"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"const"),e(" char "),t("span",{class:"token operator"},"="),e(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"charAt"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"const"),e(" pos "),t("span",{class:"token operator"},"="),e(" curStr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"indexOf"),t("span",{class:"token punctuation"},"("),e("char"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("pos "),t("span",{class:"token operator"},"!=="),e(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			curStr `),t("span",{class:"token operator"},"="),e(" curStr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"slice"),t("span",{class:"token punctuation"},"("),e("pos "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(" curStr"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
		curStr `),t("span",{class:"token operator"},"+="),e(" char"),t("span",{class:"token punctuation"},";"),e(`
		max `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("max"),t("span",{class:"token punctuation"},","),e(" curStr"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" max"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"159",-1),A=t("td",{style:{"text-align":"left"}},"至多包含两个不同字符的最长子串 🔒",-1),N=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},V=t("code",null,"哈希表",-1),B=t("code",null,"字符串",-1),M=t("code",null,"滑动窗口",-1),K=t("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"340",-1),F=t("td",{style:{"text-align":"left"}},"至多包含 K 个不同字符的最长子串 🔒",-1),H=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=t("code",null,"哈希表",-1),Q=t("code",null,"字符串",-1),U=t("code",null,"滑动窗口",-1),W=t("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/longest-substring-with-at-most-k-distinct-characters",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},"992",-1),tt=t("td",{style:{"text-align":"left"}},"K 个不同整数的子数组",-1),et=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),ot=t("code",null,"哈希表",-1),at=t("code",null,"计数",-1),lt=t("code",null,"1+",-1),ct=t("td",{style:{"text-align":"center"}},"🔴",-1),rt={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"1695",-1),pt=t("td",{style:{"text-align":"left"}},"删除子数组的最大得分",-1),ht=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},gt=t("code",null,"数组",-1),kt=t("code",null,"哈希表",-1),mt=t("code",null,"滑动窗口",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),ft={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/maximum-erasure-value",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/maximum-erasure-value",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},"2067",-1),vt=t("td",{style:{"text-align":"left"}},"等计数子串的数量 🔒",-1),qt=t("td",{style:{"text-align":"center"}},null,-1),Ot={style:{"text-align":"left"}},St=t("code",null,"字符串",-1),Et=t("code",null,"计数",-1),It=t("code",null,"前缀和",-1),Ct=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},jt={href:"https://leetcode.cn/problems/number-of-equal-count-substrings",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/number-of-equal-count-substrings",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",{style:{"text-align":"center"}},"2260",-1),Tt=t("td",{style:{"text-align":"left"}},"必须拿起的最小连续卡牌数",-1),Vt={style:{"text-align":"center"}},Bt={style:{"text-align":"left"}},Mt=t("code",null,"数组",-1),Kt=t("code",null,"哈希表",-1),Rt=t("code",null,"滑动窗口",-1),Gt=t("td",{style:{"text-align":"center"}},"🟠",-1),zt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"2401",-1),Jt=t("td",{style:{"text-align":"left"}},"最长优雅子数组",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"位运算",-1),Wt=t("code",null,"数组",-1),Xt=t("code",null,"滑动窗口",-1),Yt=t("td",{style:{"text-align":"center"}},"🟠",-1),Zt={style:{"text-align":"center"}},$t={href:"https://leetcode.cn/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},te={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},ee=t("td",{style:{"text-align":"center"}},"2405",-1),ne=t("td",{style:{"text-align":"left"}},"子字符串的最优划分",-1),se={style:{"text-align":"center"}},oe={style:{"text-align":"left"}},ae=t("code",null,"贪心",-1),le=t("code",null,"哈希表",-1),ce=t("code",null,"字符串",-1),re=t("td",{style:{"text-align":"center"}},"🟠",-1),ie={style:{"text-align":"center"}},de={href:"https://leetcode.cn/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://leetcode.com/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},pe=t("td",{style:{"text-align":"center"}},"2799",-1),he=t("td",{style:{"text-align":"left"}},"统计完全子数组的数目",-1),_e=t("td",{style:{"text-align":"center"}},null,-1),ge={style:{"text-align":"left"}},ke=t("code",null,"数组",-1),me=t("code",null,"哈希表",-1),be=t("code",null,"滑动窗口",-1),fe=t("td",{style:{"text-align":"center"}},"🟠",-1),ye={style:{"text-align":"center"}},xe={href:"https://leetcode.cn/problems/count-complete-subarrays-in-an-array",target:"_blank",rel:"noopener noreferrer"},we={href:"https://leetcode.com/problems/count-complete-subarrays-in-an-array",target:"_blank",rel:"noopener noreferrer"},ve=t("td",{style:{"text-align":"center"}},"2981",-1),qe=t("td",{style:{"text-align":"left"}},"找出出现至少三次的最长特殊子字符串 I",-1),Oe=t("td",{style:{"text-align":"center"}},null,-1),Se={style:{"text-align":"left"}},Ee=t("code",null,"哈希表",-1),Ie=t("code",null,"字符串",-1),Ce=t("code",null,"二分查找",-1),Le=t("code",null,"2+",-1),je=t("td",{style:{"text-align":"center"}},"🟠",-1),Ae={style:{"text-align":"center"}},Ne={href:"https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-i",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i",target:"_blank",rel:"noopener noreferrer"},Ve=t("td",{style:{"text-align":"center"}},"2982",-1),Be=t("td",{style:{"text-align":"left"}},"找出出现至少三次的最长特殊子字符串 II",-1),Me=t("td",{style:{"text-align":"center"}},null,-1),Ke={style:{"text-align":"left"}},Re=t("code",null,"哈希表",-1),Ge=t("code",null,"字符串",-1),ze=t("code",null,"二分查找",-1),De=t("code",null,"2+",-1),Fe=t("td",{style:{"text-align":"center"}},"🟠",-1),He={style:{"text-align":"center"}},Je={href:"https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-ii",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii",target:"_blank",rel:"noopener noreferrer"};function Qe(Ue,We){const d=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),u=l("CodeTabs");return h(),_("div",null,[m,t("p",null,[e("🟠 "),n(d,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[w,n(a)]),e(),t("a",v,[q,n(a)])]),O,t("p",null,[e("详细的滑动窗口答题框架讲解，可阅读 "),n(o,{to:"/book/slide_window.html"},{default:s(()=>[e("《3.11 滑动窗口》")]),_:1}),e("。")]),S,n(u,{id:"199",data:[{id:"滑动窗口框架"},{id:"简化版"}]},{title0:s(({value:c,isActive:r})=>[e("滑动窗口框架")]),title1:s(({value:c,isActive:r})=>[e("简化版")]),tab0:s(({value:c,isActive:r})=>[E]),tab1:s(({value:c,isActive:r})=>[I]),_:1}),C,g(" prettier-ignore "),t("table",null,[L,t("tbody",null,[t("tr",null,[j,A,N,t("td",T,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[M]),_:1})]),K,t("td",R,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",z,[e("🔗"),n(a)])])]),t("tr",null,[D,F,H,t("td",J,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[Q]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[U]),_:1})]),W,t("td",X,[t("a",Y,[e("🀄️"),n(a)]),e(),t("a",Z,[e("🔗"),n(a)])])]),t("tr",null,[$,tt,et,t("td",nt,[n(o,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[ot]),_:1}),e(),n(o,{to:"/tag/counting.html"},{default:s(()=>[at]),_:1}),e(),lt]),ct,t("td",rt,[t("a",it,[e("🀄️"),n(a)]),e(),t("a",dt,[e("🔗"),n(a)])])]),t("tr",null,[ut,pt,ht,t("td",_t,[n(o,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[kt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[mt]),_:1})]),bt,t("td",ft,[t("a",yt,[e("🀄️"),n(a)]),e(),t("a",xt,[e("🔗"),n(a)])])]),t("tr",null,[wt,vt,qt,t("td",Ot,[n(o,{to:"/tag/string.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/counting.html"},{default:s(()=>[Et]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[It]),_:1})]),Ct,t("td",Lt,[t("a",jt,[e("🀄️"),n(a)]),e(),t("a",At,[e("🔗"),n(a)])])]),t("tr",null,[Nt,Tt,t("td",Vt,[n(o,{to:"/problem/2260.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Bt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[Rt]),_:1})]),Gt,t("td",zt,[t("a",Dt,[e("🀄️"),n(a)]),e(),t("a",Ft,[e("🔗"),n(a)])])]),t("tr",null,[Ht,Jt,Pt,t("td",Qt,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Wt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[Xt]),_:1})]),Yt,t("td",Zt,[t("a",$t,[e("🀄️"),n(a)]),e(),t("a",te,[e("🔗"),n(a)])])]),t("tr",null,[ee,ne,t("td",se,[n(o,{to:"/problem/2405.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",oe,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[ae]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[le]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[ce]),_:1})]),re,t("td",ie,[t("a",de,[e("🀄️"),n(a)]),e(),t("a",ue,[e("🔗"),n(a)])])]),t("tr",null,[pe,he,_e,t("td",ge,[n(o,{to:"/tag/array.html"},{default:s(()=>[ke]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[me]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[be]),_:1})]),fe,t("td",ye,[t("a",xe,[e("🀄️"),n(a)]),e(),t("a",we,[e("🔗"),n(a)])])]),t("tr",null,[ve,qe,Oe,t("td",Se,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Ee]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[Ie]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Ce]),_:1}),e(),Le]),je,t("td",Ae,[t("a",Ne,[e("🀄️"),n(a)]),e(),t("a",Te,[e("🔗"),n(a)])])]),t("tr",null,[Ve,Be,Me,t("td",Ke,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Re]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[Ge]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[ze]),_:1}),e(),De]),Fe,t("td",He,[t("a",Je,[e("🀄️"),n(a)]),e(),t("a",Pe,[e("🔗"),n(a)])])])])])])}const Ye=p(k,[["render",Qe],["__file","0003.html.vue"]]);export{Ye as default};
