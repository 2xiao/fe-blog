import{_ as d,r as i,o,c as r,a as e,b as n,d as a,w as t,e as c}from"./app-fqckLmln.js";const u={},p=e("h1",{id:"_2881-创建新列",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2881-创建新列","aria-hidden":"true"},"#"),n(" 2881. 创建新列")],-1),v={href:"https://leetcode.cn/problems/create-a-new-column",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/create-a-new-column",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),g=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type.  |
+-------------+--------+
| name        | object |
| salary      | int.   |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>A company plans to provide its employees with a bonus.</p><p>Write a solution to create a new column name <code>bonus</code> that contains the <strong>doubled values</strong> of the <code>salary</code> column.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Piper   | 4548   |
| Grace   | 28150  |
| Georgia | 1103   |
| Willow  | 6593   |
| Finn    | 74576  |
| Thomas  | 24433  |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+--------+
| name    | salary | bonus  |
+---------+--------+--------+
| Piper   | 4548   | 9096   |
| Grace   | 28150  | 56300  |
| Georgia | 1103   | 2206   |
| Willow  | 6593   | 13186  |
| Finn    | 74576  | 149152 |
| Thomas  | 24433  | 48866  |
+---------+--------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>A new column bonus is created by doubling the value in the column salary.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type.  |
+-------------+--------+
| name        | object |
| salary      | int.   |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>一家公司计划为员工提供奖金。</p><p>编写一个解决方案，创建一个名为 <code>bonus</code> 的新列，其中包含 <code>salary</code> 值的 <strong>两倍</strong> 。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Piper   | 4548   |
| Grace   | 28150  |
| Georgia | 1103   |
| Willow  | 6593   |
| Finn    | 74576  |
| Thomas  | 24433  |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+--------+
| name    | salary | bonus  |
+---------+--------+--------+
| Piper   | 4548   | 9096   |
| Grace   | 28150  | 56300  |
| Georgia | 1103   | 2206   |
| Willow  | 6593   | 13186  |
| Finn    | 74576  | 149152 |
| Thomas  | 24433  | 48866  |
+---------+--------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>通过将 salary 列中的值加倍创建了一个新的 bonus 列。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>利用 <code>Pandas</code> 的直接列操作功能，可以高效地向 <code>DataFrame</code> 添加新列，此功能允许我们基于现有列的值进行计算，并将结果赋值给新列。</p><ol><li><p><strong>新增列</strong>：</p><ul><li>使用 <code>employees[&#39;bonus&#39;]</code> 为 <code>DataFrame</code> 添加新列。如果该列已存在，则会覆盖原值。</li><li>通过 <code>employees[&#39;salary&#39;] * 2</code> 进行逐元素计算，生成新列的值。</li></ul></li><li><p><strong>返回 DataFrame</strong>：</p><ul><li>新增列后，原 <code>DataFrame</code> 被修改（<code>Pandas</code> 默认行为是就地操作 <code>DataFrame</code>），并作为结果返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 DataFrame 的行数，新增 <code>bonus</code> 列需要逐元素计算操作。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，新增的 <code>bonus</code> 列需要额外的存储空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">createBonusColumn</span><span class="token punctuation">(</span>employees<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  employees<span class="token punctuation">[</span><span class="token string">&#39;bonus&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> employees<span class="token punctuation">[</span><span class="token string">&#39;salary&#39;</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token keyword">return</span> employees
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(k,y){const l=i("font"),s=i("ExternalLinkIcon");return o(),r("div",null,[p,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[h,a(s)])]),g])}const f=d(u,[["render",x],["__file","2881.html.vue"]]);export{f as default};
