import{_ as r,r as t,o as l,c as i,a as n,b as s,d as a,w as e,e as u}from"./app-totCBmv-.js";const d={},k=n("h1",{id:"_1576-替换所有的问号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1576-替换所有的问号","aria-hidden":"true"},"#"),s(" 1576. 替换所有的问号")],-1),h=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/replace-all-s-to-avoid-consecutive-repeating-characters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing only lowercase English letters and the <code>&#39;?&#39;</code> character, convert <strong>all</strong> the <code>&#39;?&#39;</code> characters into lowercase letters such that the final string does not contain any <strong>consecutive repeating</strong> characters. You <strong>cannot</strong> modify the non <code>&#39;?&#39;</code> characters.</p><p>It is <strong>guaranteed</strong> that there are no consecutive repeating characters in the given string <strong>except</strong> for <code>&#39;?&#39;</code>.</p><p>Return <em>the final string after all the conversions (possibly zero) have been made</em>. If there is more than one solution, return <strong>any of them</strong>. It can be shown that an answer is always possible with the given constraints.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;?zs&quot;</p><p>Output: &quot;azs&quot;</p><p>Explanation: There are 25 solutions for this problem. From &quot;azs&quot; to &quot;yzs&quot;, all are valid. Only &quot;z&quot; is an invalid modification as the string will consist of consecutive repeating characters in &quot;zzs&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ubv?w&quot;</p><p>Output: &quot;ubvaw&quot;</p><p>Explanation: There are 24 solutions for this problem. Only &quot;v&quot; and &quot;w&quot; are invalid modifications as the strings will consist of consecutive repeating characters in &quot;ubvvw&quot; and &quot;ubvww&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consist of lowercase English letters and <code>&#39;?&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个仅包含小写英文字母和 <code>&#39;?&#39;</code> 字符的字符串 <code>s</code>，请你将所有的 <code>&#39;?&#39;</code> 转换为若干小写字母，使最终的字符串不包含任何 <strong>连续重复</strong> 的字符。</p><p>注意：你 <strong>不能</strong> 修改非 <code>&#39;?&#39;</code> 字符。</p><p>题目测试用例保证 <strong>除</strong> <code>&#39;?&#39;</code> 字符 <strong>之外</strong> ，不存在连续重复的字符。</p><p>在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;?zs&quot;</p><p><strong>输出：</strong> &quot;azs&quot;</p><p><strong>解释：</strong> 该示例共有 25 种解决方案，从 &quot;azs&quot; 到 &quot;yzs&quot; 都是符合题目要求的。只有 &quot;z&quot; 是无效的修改，因为字符串 &quot;zzs&quot; 中有连续重复的两个 &#39;z&#39; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ubv?w&quot;</p><p><strong>输出：</strong> &quot;ubvaw&quot;</p><p><strong>解释：</strong> 该示例共有 24 种解决方案，只有替换成 &quot;v&quot; 和 &quot;w&quot; 不符合题目要求。因为 &quot;ubvvw&quot; 和 &quot;ubvww&quot; 都包含连续重复的字符。</p></blockquote><p><strong>提示：</strong></p><ul><li><p><code>1 &lt;= s.length &lt;= 100</code></p></li><li><p><code>s</code> 仅包含小写英文字母和 <code>&#39;?&#39;</code> 字符</p></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义辅助函数 <code>getChar(char1, char2)</code>：</strong></p><ul><li>根据左右相邻字符 <code>char1</code> 和 <code>char2</code>，选择一个与它们都不同的字符。</li><li>优先选择字符 <code>&#39;a&#39;</code>，如果不可用，则尝试 <code>&#39;b&#39;</code>，最后选择 <code>&#39;c&#39;</code>。</li></ul></li><li><p><strong>遍历字符串：</strong></p><ul><li>使用一个数组 <code>chars</code>，存储分割后的字符串，减少额外的字符串拼接操作。</li><li>对数组 <code>chars</code> 的每个字符： <ul><li>如果当前字符是 <code>?</code>，通过 <code>getChar</code> 函数计算其替换值，并更新到 <code>chars</code> 中。</li><li>如果当前字符不是 <code>?</code>，不做处理。</li></ul></li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终将 <code>chars</code> 构建字符串返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，需要遍历字符串一次，且辅助函数 <code>getChar</code> 的操作是常量时间。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>，用于存储字符数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">modifyString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getChar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char1<span class="token punctuation">,</span> char2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char1 <span class="token operator">!==</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> char2 <span class="token operator">!==</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char1 <span class="token operator">!==</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">&amp;&amp;</span> char2 <span class="token operator">!==</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串转为字符数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> prev <span class="token operator">=</span> chars<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 左侧字符</span>
			<span class="token keyword">const</span> next <span class="token operator">=</span> chars<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 右侧字符</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getChar</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符数组重新拼接为字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function f(w,_){const p=t("font"),c=t("RouterLink"),o=t("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",g,[v,a(o)]),s(),n("a",m,[b,a(o)])]),q])}const x=r(d,[["render",f],["__file","1576.html.vue"]]);export{x as default};
