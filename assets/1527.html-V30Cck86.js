import{_ as p,r as i,o as u,c as v,a as e,b as n,d as s,w as a,e as m}from"./app-r0ql_Osa.js";const b={},h=e("h1",{id:"_1527-患某种疾病的患者",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1527-患某种疾病的患者","aria-hidden":"true"},"#"),n(" 1527. 患某种疾病的患者")],-1),g=e("code",null,"数据库",-1),_={href:"https://leetcode.cn/problems/patients-with-a-condition",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/patients-with-a-condition",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"LeetCode",-1),A=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Patients</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |
+--------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>patient_id is the primary key (column with unique values) for this table.</p><p>&#39;conditions&#39; contains 0 or more code separated by spaces.</p><p>This table contains information of the patients in the hospital.</p></blockquote><p>Write a solution to find the patient_id, patient_name, and conditions of the patients who have Type I Diabetes. Type I Diabetes always starts with <code>DIAB1</code> prefix.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Patients table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
+------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: Bob and George both have a condition that starts with DIAB1.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>患者信息表： <code>Patients</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |
+--------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，patient_id （患者 ID）是该表的主键。</p><p>&#39;conditions&#39; （疾病）包含 0 个或以上的疾病代码，以空格分隔。</p><p>这个表包含医院中患者的信息。</p></blockquote><p>查询患有 I 类糖尿病的患者 ID （patient_id）、患者姓名（patient_name）以及其患有的所有疾病代码（conditions）。I 类糖尿病的代码总是包含前缀 <code>DIAB1</code> 。</p><p>按 <strong>任意顺序</strong> 返回结果表。</p><p>查询结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> Patients 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
+------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> Bob 和 George 都患有代码以 DIAB1 开头的疾病。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 返回 <code>patient_id</code>、<code>patient_name</code> 和 <code>conditions</code>。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li>使用 <code>LIKE</code> 运算符，匹配 <code>conditions</code> 列中包含以 <code>DIAB1</code> 开头的疾病代码。</li><li>条件为：<code>conditions LIKE &#39;DIAB1%&#39; OR conditions LIKE &#39;% DIAB1%&#39;</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，<code>LIKE</code> 运算符会对每条记录扫描并匹配子字符串。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Patients</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li>使用 Pandas 的 <code>str.contains()</code> 方法，筛选 <code>conditions</code> 列中包含以 <code>DIAB1</code> 开头的疾病代码的记录。</li><li>正则表达式：<code>r&#39;(^| )DIAB1&#39;</code> 匹配以 <code>DIAB1</code> 开头的单词。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>保留符合条件的记录，返回所有列。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,25),f=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(" patient_id"),e("span",{class:"token punctuation"},","),n(" patient_name"),e("span",{class:"token punctuation"},","),n(` conditions
`),e("span",{class:"token keyword"},"FROM"),n(` Patients
`),e("span",{class:"token keyword"},"WHERE"),n(" conditions "),e("span",{class:"token operator"},"LIKE"),n(),e("span",{class:"token string"},"'DIAB1%'"),n(),e("span",{class:"token operator"},"OR"),n(" conditions "),e("span",{class:"token operator"},"LIKE"),n(),e("span",{class:"token string"},"'% DIAB1%'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"find_diabetes_patients"),e("span",{class:"token punctuation"},"("),n("patients"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 筛选包含 DIAB1 的记录"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" patients"),e("span",{class:"token punctuation"},"["),n("patients"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'conditions'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"str"),e("span",{class:"token punctuation"},"."),n("contains"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"r'(^| )DIAB1'"),e("span",{class:"token punctuation"},","),n(" na"),e("span",{class:"token operator"},"="),e("span",{class:"token boolean"},"False"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"]"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function D(y,E){const l=i("font"),c=i("RouterLink"),d=i("ExternalLinkIcon"),r=i("CodeTabs");return u(),v("div",null,[h,e("p",null,[n("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),s(c,{to:"/tag/database.html"},{default:a(()=>[g]),_:1}),n("  🔗 "),e("a",_,[k,s(d)]),n(),e("a",x,[I,s(d)])]),A,s(r,{id:"183",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:a(({value:t,isActive:o})=>[n("MySQL")]),title1:a(({value:t,isActive:o})=>[n("Pandas")]),tab0:a(({value:t,isActive:o})=>[f]),tab1:a(({value:t,isActive:o})=>[B]),_:1})])}const w=p(b,[["render",D],["__file","1527.html.vue"]]);export{w as default};
