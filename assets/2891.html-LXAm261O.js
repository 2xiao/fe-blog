import{_ as l,r as i,o,c as d,a as n,b as e,d as a,w as r,e as c}from"./app-U2ekqv2z.js";const p={},u=n("h1",{id:"_2891-方法链",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2891-方法链","aria-hidden":"true"},"#"),e(" 2891. 方法链")],-1),m={href:"https://leetcode.cn/problems/method-chaining",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/method-chaining",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"LeetCode",-1),b=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame animals</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| species     | object |
| age         | int    |
| weight      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to list the names of animals that weigh <strong>strictly more than</strong> <code>100</code> kilograms.</p><p>Return the animals sorted by weight in <strong>descending order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>DataFrame animals:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+---------+-----+--------+
| name     | species | age | weight |
+----------+---------+-----+--------+
| Tatiana  | Snake   | 98  | 464    |
| Khaled   | Giraffe | 50  | 41     |
| Alex     | Leopard | 6   | 328    |
| Jonathan | Monkey  | 45  | 463    |
| Stefan   | Bear    | 100 | 50     |
| Tommy    | Panda   | 26  | 349    |
+----------+---------+-----+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| name     |
+----------+
| Tatiana  |
| Jonathan |
| Tommy    |
| Alex     |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>All animals weighing more than 100 should be included in the results table.</p><p>Tatiana&#39;s weight is 464, Jonathan&#39;s weight is 463, Tommy&#39;s weight is 349, and Alex&#39;s weight is 328.</p><p>The results should be sorted in descending order of weight.</p></blockquote><p>In Pandas, <strong>method chaining</strong> enables us to perform operations on a DataFrame without breaking up each operation into a separate line or creating multiple temporary variables.</p><p>Can you complete this task in just <strong>one line</strong> of code using method chaining?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame animals</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| species     | object |
| age         | int    |
| weight      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案来列出体重 <strong>严格超过</strong> <code>100</code> 千克的动物的名称。</p><p>按体重 <strong>降序</strong> 返回动物。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><p>DataFrame animals:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+---------+-----+--------+
| name     | species | age | weight |
+----------+---------+-----+--------+
| Tatiana  | Snake   | 98  | 464    |
| Khaled   | Giraffe | 50  | 41     |
| Alex     | Leopard | 6   | 328    |
| Jonathan | Monkey  | 45  | 463    |
| Stefan   | Bear    | 100 | 50     |
| Tommy    | Panda   | 26  | 349    |
+----------+---------+-----+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| name     |
+----------+
| Tatiana  |
| Jonathan |
| Tommy    |
| Alex     |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>所有体重超过 100 的动物都应包含在结果表中。</p><p>Tatiana 的体重为 464，Jonathan 的体重为 463，Tommy 的体重为 349，Alex 的体重为 328。</p><p>结果应按体重降序排序。</p></blockquote><p>在 Pandas 中，<strong>方法链</strong> 允许我们在 DataFrame 上执行操作，而无需将每个操作拆分成单独的行或创建多个临时变量。</p><p>你能用 <strong>一行</strong> 代码的方法链完成这个任务吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>筛选条件</strong>：</p><ul><li>使用 <code>animals[&#39;weight&#39;] &gt; 100</code> 筛选出满足体重大于 100 的动物。</li><li>通过 <code>animals[condition]</code> 返回满足条件的行。</li></ul></li><li><p><strong>排序操作</strong>：</p><ul><li>使用 <code>sort_values([&#39;weight&#39;], ascending=False)</code> 按照体重列 <code>weight</code> 进行降序排序。</li><li><code>ascending=False</code> 表示从大到小排序。</li></ul></li><li><p><strong>列选择</strong>：</p><ul><li>使用 <code>[[&quot;name&quot;]]</code> 选择需要返回的列，仅保留动物的名字 <code>name</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回一个新的 DataFrame，其中包含体重大于 100 的动物名字，按体重降序排列。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n log n)</code></p><ul><li>筛选操作的复杂度为 <code>O(n)</code>，其中 <code>n</code> 是表的行数。</li><li>排序操作的复杂度为 <code>O(n log n)</code>，其中 <code>n</code> 是筛选后保留的行数。</li><li>列选择的复杂度为 <code>O(1)</code>，因为只操作列索引。</li><li>综合时间复杂度为 <code>O(n log n)</code>（排序占主导）。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是筛选后的行数，筛选和排序会返回新的 DataFrame。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">findHeavyAnimals</span><span class="token punctuation">(</span>animals<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> animals<span class="token punctuation">[</span>animals<span class="token punctuation">[</span><span class="token string">&#39;weight&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;weight&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ascending<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function k(x,_){const t=i("font"),s=i("ExternalLinkIcon");return o(),d("div",null,[u,n("p",null,[e("🟢 "),a(t,{color:"#15bd66"},{default:r(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",m,[v,a(s)]),e(),n("a",g,[h,a(s)])]),b])}const w=l(p,[["render",k],["__file","2891.html.vue"]]);export{w as default};
