import{_ as d,r as t,o as c,c as r,a as n,b as e,d as s,w as l,f as p,e as u}from"./app-KDJRKGep.js";const v={},m=n("h1",{id:"_177-第-n-高的薪水",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_177-第-n-高的薪水","aria-hidden":"true"},"#"),e(" 177. 第 N 高的薪水")],-1),b=n("code",null,"数据库",-1),h={href:"https://leetcode.cn/problems/nth-highest-salary",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/nth-highest-salary",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Employee</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>Each row of this table contains information about the salary of an employee.</p></blockquote><p>Write a solution to find the <code>nth</code> highest salary from the <code>Employee</code> table. If there is no <code>nth</code> highest salary, return <code>null</code>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Employee table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+

n = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>Employee table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Employee</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，id 是该表的主键。</p><p>该表的每一行都包含有关员工工资的信息。</p></blockquote><p>查询 <code>Employee</code> 表中第 <code>n</code> 高的工资。如果没有第 <code>n</code> 个最高工资，查询结果应该为 <code>null</code> 。</p><p>查询结果格式如下所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong></p><p>Employee 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong></p><p>Employee 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>去重排序：提取工资列，使用 <code>drop_duplicates()</code> 去重，并按降序排序。</li><li>检查索引：根据 <code>n</code> 的值定位到排序后工资列表的第 <code>n</code> 个元素。如果 <code>n</code> 超过工资列表长度，返回 <code>null</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code><ul><li><code>drop_duplicates</code>：<code>O(n)</code>，提取唯一工资。</li><li><code>sort_values</code>：<code>O(n log n)</code>，对工资进行排序。</li><li>总体复杂度为 <code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>drop_duplicates</code> 和排序操作需要额外存储唯一工资列表，空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">nth_highest_salary</span><span class="token punctuation">(</span>employee<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">,</span> N<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
    <span class="token comment"># 提取唯一工资并降序排序</span>
    sorted_salary <span class="token operator">=</span> employee<span class="token punctuation">[</span><span class="token string">&#39;salary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>drop_duplicates<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>ascending<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    <span class="token comment"># 若 n 超过范围则返回 null</span>
    <span class="token keyword">if</span> N <span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sorted_salary<span class="token punctuation">)</span> <span class="token keyword">or</span> N <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-interpolation"><span class="token string">f&#39;getNthHighestSalary(</span><span class="token interpolation"><span class="token punctuation">{</span>N<span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span><span class="token punctuation">:</span><span class="token punctuation">[</span>pd<span class="token punctuation">.</span>NA<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># 返回第 n 高工资</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-interpolation"><span class="token string">f&#39;getNthHighestSalary(</span><span class="token interpolation"><span class="token punctuation">{</span>N<span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span><span class="token punctuation">:</span><span class="token punctuation">[</span>sorted_salary<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span>N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),f=n("td",{style:{"text-align":"center"}},"2205",-1),N=n("td",{style:{"text-align":"left"}},"有资格享受折扣的用户数量 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},w=n("code",null,"数据库",-1),S=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/the-number-of-users-that-are-eligible-for-discount",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount",target:"_blank",rel:"noopener noreferrer"};function L(F,I){const o=t("font"),i=t("RouterLink"),a=t("ExternalLinkIcon");return c(),r("div",null,[m,n("p",null,[e("🟠 "),s(o,{color:"#ffb800"},{default:l(()=>[e("Medium")]),_:1}),e("  🔖  "),s(i,{to:"/tag/database.html"},{default:l(()=>[b]),_:1}),e("  🔗 "),n("a",h,[g,s(a)]),e(),n("a",k,[_,s(a)])]),x,p(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[f,N,E,n("td",q,[s(i,{to:"/tag/database.html"},{default:l(()=>[w]),_:1})]),S,n("td",O,[n("a",C,[e("🀄️"),s(a)]),e(),n("a",H,[e("🔗"),s(a)])])])])])])}const V=d(v,[["render",L],["__file","0177.html.vue"]]);export{V as default};
