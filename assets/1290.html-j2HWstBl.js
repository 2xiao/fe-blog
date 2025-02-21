import{_ as l,r as a,o as i,c as r,a as n,b as e,d as s,w as t,e as d}from"./app-9CeBk-uV.js";const u={},h=n("h1",{id:"_1290-二进制链表转整数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1290-二进制链表转整数","aria-hidden":"true"},"#"),e(" 1290. 二进制链表转整数")],-1),k=n("code",null,"链表",-1),g=n("code",null,"数学",-1),m={href:"https://leetcode.cn/problems/convert-binary-number-in-a-linked-list-to-integer",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given <code>head</code> which is a reference node to a singly-linked list. The value of each node in the linked list is either <code>0</code> or <code>1</code>. The linked list holds the binary representation of a number.</p><p>Return the <em>decimal value</em> of the number in the linked list.</p><p>The <strong>most significant bit</strong> is at the head of the linked list.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/12/05/graph-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,0,1]</p><p>Output: 5</p><p>Explanation: (101) in base 2 = (5) in base 10</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [0]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The Linked List is not empty.</li><li>Number of nodes will not exceed <code>30</code>.</li><li>Each node&#39;s value is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个单链表的引用结点 <code>head</code>。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。</p><p>请你返回该链表所表示数字的 <strong>十进制值</strong> 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/12/15/graph-1.png)</p><blockquote><p><strong>输入：</strong> head = [1,0,1]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 二进制数 (101) 转化为十进制数 (5)</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> head = [0]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> head = [1]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]</p><p><strong>输出：</strong> 18880</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> head = [0,0]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li>链表不为空。</li><li>链表的结点总数不超过 <code>30</code>。</li><li>每个结点的值不是 <code>0</code> 就是 <code>1</code>。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化结果 <code>num</code> 为 0。</li><li>从链表头开始遍历链表 <code>head</code>，直到 <code>head</code> 为空。</li><li><strong>模拟二进制数位移操作：</strong><ul><li>每访问一个节点，就将当前结果 <code>num</code> 左移一位（<code>num &lt;&lt; 1</code>），再加上当前节点的值（<code>head.val</code>）。</li><li>这种方式相当于动态地将二进制数从左向右累加。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的长度，遍历链表一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getDecimalValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> head<span class="token punctuation">.</span>val<span class="token punctuation">;</span> <span class="token comment">// 左移一位加当前节点值</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 移动到下一个节点</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function x(y,q){const p=a("font"),o=a("RouterLink"),c=a("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[e("🟢 "),s(p,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(o,{to:"/tag/linked-list.html"},{default:t(()=>[k]),_:1}),e(),s(o,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),e("  🔗 "),n("a",m,[b,s(c)]),e(),n("a",v,[_,s(c)])]),f])}const E=l(u,[["render",x],["__file","1290.html.vue"]]);export{E as default};
