import{_ as d,r as t,o,c as l,a as n,b as e,d as s,w as c,e as u}from"./app--GvfAkAr.js";const p={},r=n("h1",{id:"_2880-数据选取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2880-数据选取","aria-hidden":"true"},"#"),e(" 2880. 数据选取")],-1),v={href:"https://leetcode.cn/problems/select-data",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/select-data",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>students</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to select the name and age of the student with <code>student_id = 101</code>.</p><p>The result format is in the following example.</p><blockquote><p><strong>Example 1:</strong></p><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 101        | Ulysses | 13  |
| 53         | William | 10  |
| 128        | Henry   | 6   |
| 3          | Henry   | 11  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----+
| name    | age |
+---------+-----+
| Ulysses | 13  |
+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: Student Ulysses has student_id = 101, we select the name and age.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>students</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，选择 <code>student_id = 101</code> 的学生的 name 和 age 并输出。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 101        | Ulysses | 13  |
| 53         | William | 10  |
| 128        | Henry   | 6   |
| 3          | Henry   | 11  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----+
| name    | age |
+---------+-----+
| Ulysses | 13  |
+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 学生 Ulysses 的 student_id = 101，所以我们输出了他的 name 和 age。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>有三种方法：</p><ol><li><p><strong>布尔索引结合列选择</strong></p><ul><li><code>students[&quot;student_id&quot;] == 101</code> 生成一个布尔条件（<code>True/False</code>）的 Series。</li><li><code>students[...]</code> 使用布尔索引，选出 <code>student_id</code> 等于 101 的行。</li><li><code>[[&quot;name&quot;, &quot;age&quot;]]</code> 再从结果中选取指定列。</li></ul></li><li><p><strong><code>.loc[]</code> 方法</strong></p><ul><li><code>students[&quot;student_id&quot;] == 101</code> 同样生成布尔条件。</li><li><code>.loc[rows, columns]</code> 允许直接指定行和列，行通过布尔索引筛选，列通过显式列表选择。</li></ul></li><li><p><strong><code>.loc[]</code> 方法选取行并扩展列范围</strong></p><ul><li><code>students[&quot;student_id&quot;] == 101</code> 筛选出 <code>student_id</code> 为 101 的行。</li><li><code>&quot;name&quot;:</code> 表示从 <code>name</code> 列开始，选择包括其后的所有列。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，筛选行需遍历每行（<code>students[&quot;student_id&quot;] == 101</code>），列选择只需访问指定列（如 <code>[[&quot;name&quot;, &quot;age&quot;]]</code>）。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，返回结果是原数据的视图（若未显式复制），额外空间开销为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">selectData</span><span class="token punctuation">(</span>students<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> students<span class="token punctuation">[</span>students<span class="token punctuation">[</span><span class="token string">&quot;student_id&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">101</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment">#OR</span>
  <span class="token keyword">return</span> students<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>students<span class="token punctuation">[</span><span class="token string">&quot;student_id&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment">#OR</span>
  <span class="token keyword">return</span> students<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>students<span class="token punctuation">[</span><span class="token string">&quot;student_id&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function h(_,q){const i=t("font"),a=t("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[e("🟢 "),s(i,{color:"#15bd66"},{default:c(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",v,[m,s(a)]),e(),n("a",b,[k,s(a)])]),g])}const f=d(p,[["render",h],["__file","2880.html.vue"]]);export{f as default};
