import{_ as i,r as o,o as d,c as r,a as n,b as s,d as e,w as a,e as p}from"./app-nO6F3DRG.js";const u={},k={id:"_58-i-翻转单词顺序",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_58-i-翻转单词顺序","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"双指针",-1),v=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>你在与一位习惯从右往左阅读的朋友发消息，他发出的文字顺序都与正常相反但单词内容正确，为了和他顺利交流你决定写一个转换程序，把他所发的消息 message 转换为正常语序。</p><p>注意：输入字符串 message 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：message = <code>&quot;the sky is blue&quot;</code></p><p>输出：<code>&quot;blue is sky the&quot;</code></p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：message = <code>&quot; hello world! &quot;</code></p><p>输出：<code>&quot;world! hello&quot;</code></p><p>解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入: message = <code>&quot;a good example&quot;</code></p><p>输出: <code>&quot;example good a&quot;</code></p><p>解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。</p></blockquote>',9),q={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>常规的方式是把 <code>s</code> 按空格 <code>split</code> 成若干单词，然后 <code>reverse</code> 这些单词的顺序，最后把这些单词 <code>join</code> 成句子。但这种方式使用了额外的空间，并不是「原地反转」单词。</p><p>正确的做法是，先将整个字符串 <code>s</code> 反转，然后将每个单词分别反转，这样，就实现了原地反转所有单词。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始字符串： &quot;hello world!&quot;
反转整个字符串： &quot;!dlrow olleh&quot;
分别反转每个单词： &quot;world! hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过由于 <code>JS</code> 中字符串是不可变的，字符串方法不会改变原有字符串的内容，而是返回一个新字符串，所以在 <code>JS</code> 中并不是真正的原地反转。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 非原地反转</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> s
		<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(j,L){const c=o("ExternalLinkIcon"),l=o("font"),t=o("RouterLink");return d(),r("div",null,[n("h1",k,[h,s(),n("a",m,[s("58 - I. 翻转单词顺序"),e(c)])]),n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,e(c)])]),g,n("div",q,[x,n("p",null,[s("本题与 LeetCode "),e(t,{to:"/problem/0151.html"},{default:a(()=>[s("第 151 题")]),_:1}),s(" 相同。")])]),w])}const C=i(u,[["render",y],["__file","jz_offer_58_1.html.vue"]]);export{C as default};
