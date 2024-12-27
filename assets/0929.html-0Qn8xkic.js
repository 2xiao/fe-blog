import{_ as i,r as t,o as p,c as d,a as n,b as e,d as s,w as a,e as r}from"./app-fqckLmln.js";const u={},m=n("h1",{id:"_929-独特的电子邮件地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_929-独特的电子邮件地址","aria-hidden":"true"},"#"),e(" 929. 独特的电子邮件地址")],-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/unique-email-addresses",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/unique-email-addresses",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Every <strong>valid email</strong> consists of a <strong>local name</strong> and a <strong>domain name</strong> , separated by the <code>&#39;@&#39;</code> sign. Besides lowercase letters, the email may contain one or more <code>&#39;.&#39;</code> or <code>&#39;+&#39;</code>.</p><ul><li>For example, in <code>&quot;alice@leetcode.com&quot;</code>, <code>&quot;alice&quot;</code> is the <strong>local name</strong> , and <code>&quot;leetcode.com&quot;</code> is the <strong>domain name</strong>.</li></ul><p>If you add periods <code>&#39;.&#39;</code> between some characters in the <strong>local name</strong> part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule <strong>does not apply</strong> to <strong>domain names</strong>.</p><ul><li>For example, <code>&quot;alice.z@leetcode.com&quot;</code> and <code>&quot;alicez@leetcode.com&quot;</code> forward to the same email address.</li></ul><p>If you add a plus <code>&#39;+&#39;</code> in the <strong>local name</strong> , everything after the first plus sign <strong>will be ignored</strong>. This allows certain emails to be filtered. Note that this rule <strong>does not apply</strong> to <strong>domain names</strong>.</p><ul><li>For example, <code>&quot;m.y+name@email.com&quot;</code> will be forwarded to <code>&quot;my@email.com&quot;</code>.</li></ul><p>It is possible to use both of these rules at the same time.</p><p>Given an array of strings <code>emails</code> where we send one email to each <code>emails[i]</code>, return <em>the number of different addresses that actually receive mails</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: emails = [&quot;test.email+alex@leetcode.com&quot;,&quot;test.e.mail+bob.cathy@leetcode.com&quot;,&quot;testemail+david@lee.tcode.com&quot;]</p><p>Output: 2</p><p>Explanation: &quot;testemail@leetcode.com&quot; and &quot;testemail@lee.tcode.com&quot; actually receive mails.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: emails = [&quot;a@leetcode.com&quot;,&quot;b@leetcode.com&quot;,&quot;c@leetcode.com&quot;]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= emails.length &lt;= 100</code></li><li><code>1 &lt;= emails[i].length &lt;= 100</code></li><li><code>emails[i]</code> consist of lowercase English letters, <code>&#39;+&#39;</code>, <code>&#39;.&#39;</code> and <code>&#39;@&#39;</code>.</li><li>Each <code>emails[i]</code> contains exactly one <code>&#39;@&#39;</code> character.</li><li>All local and domain names are non-empty.</li><li>Local names do not start with a <code>&#39;+&#39;</code> character.</li><li>Domain names end with the <code>&quot;.com&quot;</code> suffix.</li><li>Domain names must contain at least one character before <code>&quot;.com&quot;</code> suffix.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>每个 <strong>有效电子邮件地址</strong> 都由一个 <strong>本地名</strong> 和一个 <strong>域名</strong> 组成，以 <code>&#39;@&#39;</code> 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 <code>&#39;.&#39;</code> 或 <code>&#39;+&#39;</code> 。</p><ul><li>例如，在 <code>alice@leetcode.com</code>中， <code>alice</code> 是 <strong>本地名</strong> ，而 <code>leetcode.com</code> 是 <strong>域名</strong> 。</li></ul><p>如果在电子邮件地址的<strong>本地名</strong> 部分中的某些字符之间添加句点（<code>&#39;.&#39;</code>），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 <strong>不适用于域名</strong> 。</p><ul><li>例如，<code>&quot;alice.z@leetcode.com”</code> 和 <code>“alicez@leetcode.com”</code> 会转发到同一电子邮件地址。</li></ul><p>如果在<strong>本地名</strong> 中添加加号（<code>&#39;+&#39;</code>），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 <strong>不适用于域名</strong> 。</p><ul><li>例如 <code>m.y+name@email.com</code> 将转发到 <code>my@email.com</code>。</li></ul><p>可以同时使用这两个规则。</p><p>给你一个字符串数组 <code>emails</code>，我们会向每个 <code>emails[i]</code> 发送一封电子邮件。返回实际收到邮件的不同地址数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> emails = [&quot;test.email+alex@leetcode.com&quot;,&quot;test.e.mail+bob.cathy@leetcode.com&quot;,&quot;testemail+david@lee.tcode.com&quot;]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 实际收到邮件的是 &quot;testemail@leetcode.com&quot; 和 &quot;testemail@lee.tcode.com&quot;。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> emails = [&quot;a@leetcode.com&quot;,&quot;b@leetcode.com&quot;,&quot;c@leetcode.com&quot;]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= emails.length &lt;= 100</code></li><li><code>1 &lt;= emails[i].length &lt;= 100</code></li><li><code>emails[i]</code> 由小写英文字母、<code>&#39;+&#39;</code>、<code>&#39;.&#39;</code> 和 <code>&#39;@&#39;</code> 组成</li><li>每个 <code>emails[i]</code> 都包含有且仅有一个 <code>&#39;@&#39;</code> 字符</li><li>所有本地名和域名都不为空</li><li>本地名不会以 <code>&#39;+&#39;</code> 字符作为开头</li><li>域名以 <code>&quot;.com&quot;</code> 后缀结尾。</li><li>域名在 <code>&quot;.com&quot;</code> 后缀前至少包含一个字符</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义辅助函数 <code>clean</code></strong></p><ul><li><p>用变量 <code>ignore</code> 代表遇到了 <code>+</code>，要忽略后续字符，初始化为 <code>false</code>；</p></li><li><p>用变量 <code>domain</code> 代表遇到了 <code>@</code>，后续的字符都属于域名部分，初始化为 <code>false</code>；</p></li><li><p>遍历传入单个邮箱地址：</p><ul><li>遇到 <code>.</code> 且不是域名部分（<code>domain == false</code>）时，跳过；</li><li>当遇到 <code>+</code> 且不是域名部分（<code>domain == false</code>）时，将标记 <code>ignore</code> 置为 <code>true</code>，代表忽略后续字符；</li><li>遇到 <code>@</code> 时，将标记 <code>ignore</code> 置为 <code>false</code>，代表忽略字符不生效了，标记 <code>domain</code> 置为 <code>true</code>，代表后续的字符都属于域名部分；</li><li>对于每个字符，只要忽略字符不生效（<code>ignore == false</code>），就将字符加入到结果字符串中；</li></ul></li><li><p>遍历结束后，返回结果字符串。</p></li></ul></li><li><p><strong>使用 <code>Set</code> 去重</strong></p><ul><li>逐个处理邮箱地址，将处理后的结果存入 <code>Set</code> 数据结构中（<code>Set</code> 会自动去重）。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>返回 <code>Set</code> 中元素的数量，即唯一邮箱地址的数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n * m)</code>，<code>n</code> 是邮箱地址的数量，<code>m</code> 是每个邮箱地址的平均长度，需要遍历每个邮箱的所有字符以进行处理。</li><li><strong>空间复杂度</strong>: <code>O(n * m)</code>，使用了 <code>Set</code> 来存储唯一邮箱地址。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">emails</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numUniqueEmails</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">emails</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">clean</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> ignore <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			domain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ignore <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ignore <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				domain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ignore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> char<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> email <span class="token keyword">of</span> emails<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">clean</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> set<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function _(w,x){const l=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return p(),d("div",null,[m,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(o,{to:"/tag/array.html"},{default:a(()=>[k]),_:1}),e(),s(o,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),e(),s(o,{to:"/tag/string.html"},{default:a(()=>[h]),_:1}),e("  🔗 "),n("a",v,[b,s(c)]),e(),n("a",f,[q,s(c)])]),y])}const I=i(u,[["render",_],["__file","0929.html.vue"]]);export{I as default};
