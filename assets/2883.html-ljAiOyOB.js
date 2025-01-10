import{_ as l,r as i,o as t,c as o,a as e,b as n,d as a,w as r,e as c}from"./app-XFeYdzZv.js";const u={},p=e("h1",{id:"_2883-删去丢失的数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2883-删去丢失的数据","aria-hidden":"true"},"#"),n(" 2883. 删去丢失的数据")],-1),v={href:"https://leetcode.cn/problems/drop-missing-data",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/drop-missing-data",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"LeetCode",-1),h=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>students</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>There are some rows having missing values in the <code>name</code> column.</p><p>Write a solution to remove the rows with missing values.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 217        | None    | 19  |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>Student with id 217 havs empty value in the name column, so it will be removed.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>students</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>在 <code>name</code> 列里有一些具有缺失值的行。</p><p>编写一个解决方案，删除具有缺失值的行。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 217        | None    | 19  |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 学号为 217 的学生所在行在 name 列中有空值，因此这一行将被删除。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>删除空值行</strong>：</p><ul><li>Pandas 提供了 <code>dropna</code> 方法，可以根据某些列的值是否为空（<code>NaN</code> 或 <code>None</code>）来删除对应的行。</li><li>调用 <code>students.dropna(subset=[&#39;name&#39;])</code>，检查 <code>name</code> 列是否包含空值（<code>NaN</code> 或 <code>None</code>）。</li><li>如果检测到空值，直接删除整行。</li></ul></li><li><p><strong>返回新 DataFrame</strong>：</p><ul><li><code>dropna</code> 返回一个去除空值后的新 DataFrame，不会影响原始 DataFrame。</li><li>如果希望对原 DataFrame 就地修改，可以传递 <code>inplace=True</code> 参数。</li><li>如果需要检查多列是否为空，可将 <code>subset</code> 参数设置为一个列表，例如 <code>[&#39;name&#39;, &#39;age&#39;]</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是行数，需要逐行检查 <code>name</code> 列是否为空。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，去掉空值行后返回一个新 DataFrame。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">dropMissingData</span><span class="token punctuation">(</span>students<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> students<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span>subset<span class="token operator">=</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function x(_,k){const d=i("font"),s=i("ExternalLinkIcon");return t(),o("div",null,[p,e("p",null,[n("🟢 "),a(d,{color:"#15bd66"},{default:r(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[g,a(s)])]),h])}const w=l(u,[["render",x],["__file","2883.html.vue"]]);export{w as default};
