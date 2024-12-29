import{_ as c,r as e,o as l,c as i,a as n,b as o,d as t,w as s,e as r}from"./app-r0ql_Osa.js";const d={},q=n("h1",{id:"_804-唯一摩尔斯密码词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_804-唯一摩尔斯密码词","aria-hidden":"true"},"#"),o(" 804. 唯一摩尔斯密码词")],-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/unique-morse-code-words",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/unique-morse-code-words",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:</p><ul><li><code>&#39;a&#39;</code> maps to <code>&quot;.-&quot;</code>,</li><li><code>&#39;b&#39;</code> maps to <code>&quot;-...&quot;</code>,</li><li><code>&#39;c&#39;</code> maps to <code>&quot;-.-.&quot;</code>, and so on.</li></ul><p>For convenience, the full table for the <code>26</code> letters of the English alphabet is given below:</p><blockquote><p>[&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]</p></blockquote><p>Given an array of strings <code>words</code> where each word can be written as a concatenation of the Morse code of each letter.</p><ul><li>For example, <code>&quot;cab&quot;</code> can be written as <code>&quot;-.-..--...&quot;</code>, which is the concatenation of <code>&quot;-.-.&quot;</code>, <code>&quot;.-&quot;</code>, and <code>&quot;-...&quot;</code>. We will call such a concatenation the <strong>transformation</strong> of a word.</li></ul><p>Return <em>the number of different<strong>transformations</strong> among all words we have</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;gin&quot;,&quot;zen&quot;,&quot;gig&quot;,&quot;msg&quot;]</p><p>Output: 2</p><p>Explanation: The transformation of each word is:</p><p>&quot;gin&quot; -&gt; &quot;--...-.&quot;</p><p>&quot;zen&quot; -&gt; &quot;--...-.&quot;</p><p>&quot;gig&quot; -&gt; &quot;--...--.&quot;</p><p>&quot;msg&quot; -&gt; &quot;--...--.&quot;</p><p>There are 2 different transformations: &quot;--...-.&quot; and &quot;--...--.&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;a&quot;]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 12</code></li><li><code>words[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:</p><ul><li><code>&#39;a&#39;</code> 对应 <code>&quot;.-&quot;</code> ，</li><li><code>&#39;b&#39;</code> 对应 <code>&quot;-...&quot;</code> ，</li><li><code>&#39;c&#39;</code> 对应 <code>&quot;-.-.&quot;</code> ，以此类推。</li></ul><p>为了方便，所有 <code>26</code> 个英文字母的摩尔斯密码表如下：</p><blockquote><p>[&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]</p></blockquote><p>给你一个字符串数组 <code>words</code> ，每个单词可以写成每个字母对应摩尔斯密码的组合。</p><ul><li>例如，<code>&quot;cab&quot;</code> 可以写成 <code>&quot;-.-..--...&quot;</code> ，(即 <code>&quot;-.-.&quot;</code> + <code>&quot;.-&quot;</code> + <code>&quot;-...&quot;</code> 字符串的结合)。我们将这样一个连接过程称作 <strong>单词翻译</strong> 。</li></ul><p>对 <code>words</code> 中所有单词进行单词翻译，返回不同 <strong>单词翻译</strong> 的数量。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> words = [&quot;gin&quot;, &quot;zen&quot;, &quot;gig&quot;, &quot;msg&quot;]</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong></p><p>各单词翻译如下:</p><p>&quot;gin&quot; -&gt; &quot;--...-.&quot;</p><p>&quot;zen&quot; -&gt; &quot;--...-.&quot;</p><p>&quot;gig&quot; -&gt; &quot;--...--.&quot;</p><p>&quot;msg&quot; -&gt; &quot;--...--.&quot;</p><p>共有 2 种不同翻译, &quot;--...-.&quot; 和 &quot;--...--.&quot;.</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;a&quot;]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 12</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>根据题目提供的摩尔斯密码表，将 <code>a-z</code> 映射到对应的摩尔斯编码。</li><li>遍历 <code>words</code> 数组，对于每个单词，将其每个字母翻译为摩尔斯密码，然后拼接起来。</li><li>使用 <code>Set</code> 数据结构存储翻译结果，这样能自动去重。</li><li>最后，返回 <code>Set</code> 中的元素数量，即为不同翻译的数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>遍历单词数组 <code>words</code>：假设单词的总字符数为 <code>n</code>，每个字符需要进行摩尔斯编码转换，时间复杂度为 <code>O(n)</code>。</li><li>插入 <code>Set</code> 的时间复杂度为 <code>O(1)</code>（均摊）。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li><code>Set</code> 存储唯一的摩尔斯翻译，最多存储 <code>n</code> 个单词的翻译，空间复杂度为 <code>O(n)</code>。</li><li>存储摩尔斯密码表的数组占用 <code>O(26)</code> 的常数空间。</li><li>总空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">uniqueMorseRepresentations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// prettier-ignore</span>
	<span class="token keyword">const</span> morseCode <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;.-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-.-.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-..&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;..-.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;....&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;..&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.---&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;-.-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.-..&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;---&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.--.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--.-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.-.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;..-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.--&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-..-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-.--&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--..&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">charToMorse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
		morseCode<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> morse <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			morse <span class="token operator">+=</span> <span class="token function">charToMorse</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>morse<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> set<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function _(y,x){const p=e("font"),a=e("RouterLink"),u=e("ExternalLinkIcon");return l(),i("div",null,[q,n("p",null,[o("🟢 "),t(p,{color:"#15bd66"},{default:s(()=>[o("Easy")]),_:1}),o("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),o(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),o(),t(a,{to:"/tag/string.html"},{default:s(()=>[h]),_:1}),o("  🔗 "),n("a",m,[b,t(u)]),o(),n("a",v,[f,t(u)])]),w])}const C=c(d,[["render",_],["__file","0804.html.vue"]]);export{C as default};
