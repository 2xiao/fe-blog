import{_ as c,r as d,o as a,c as i,f as r,a as t,d as o,w as l,b as e,e as _}from"./app-totCBmv-.js";const h="/leetcode-js/assets/2-9-1-4ntTgB4b.png",g={},f=_('<h1 id="_2-9-字符串" tabindex="-1"><a class="header-anchor" href="#_2-9-字符串" aria-hidden="true">#</a> 2.9 字符串</h1><h2 id="字符串的定义" tabindex="-1"><a class="header-anchor" href="#字符串的定义" aria-hidden="true">#</a> 字符串的定义</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>字符串（String）</strong> ：是由零个或多个字符组成的有限序列。一般记为 <code>s = a1a2……an</code>（ <code>n</code> 大于 <code>0</code> 小于正无穷）。</p></div><p>字符串中任意个连续的字符组成的子序列称为该字符串的 <strong>子串（Substring）</strong>；</p><p>起始于位置为 <code>0</code>、长度为 <code>k</code> 的子串称为 <strong>前缀（Prefix）</strong>；</p><p>终止于位置 <code>n - 1</code>、长度为 <code>k</code> 的子串称为 <strong>后缀（Suffix）</strong>。</p><h2 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h2><p>计算机中最常用的字符编码是 <code>ASCII</code> 编码。最早的时候，人们制定了一个包含 <code>127</code> 个字符的编码表 <code>ASCII</code> 到计算机系统中。<code>ASCII</code> 编码表中的字符包含了大小写的英文字母、数字和一些符号。每个字符对应一个编码，比如大写字母 <code>A</code> 的编码是 <code>65</code>，小写字母 <code>a</code> 的编码是 <code>97</code>。</p><p><code>ASCII</code> 编码可以解决以英语为主的语言，可是无法满足中文编码。为了解决中文编码，我国制定了 <code>GB2312</code>、<code>GBK</code>、<code>GB18030</code> 等中文编码标准，将中文编译进去。但是世界上有上百种语言和文字，各国有各国的标准，就会不可避免的产生冲突，于是就有了 <code>Unicode</code> 编码。<code>Unicode</code> 编码最常用的就是 <code>UTF-8</code> 编码，<code>UTF-8</code> 编码把一个 <code>Unicode</code> 字符根据不同的数字大小编码成 <code>1</code> ~ <code>6</code> 个字节，常用的英文字母被编码成 <code>1</code> 个字节，汉字通常是 <code>3</code> 个字节。</p><h2 id="字符串的存储结构" tabindex="-1"><a class="header-anchor" href="#字符串的存储结构" aria-hidden="true">#</a> 字符串的存储结构</h2><p>字符串的两种最基本的存储结构是：顺序存储结构 和 链接存储结构。</p><h3 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储" aria-hidden="true">#</a> 顺序存储</h3><p>与线性表的顺序存储结构相似，字符串的顺序存储结构也是使用一组地址连续的存储单元依次存放串中的各个字符。按照预定义的大小，为每个定义的字符串变量分配一个固定长度的存储区域。一般是用定长数组来定义。</p><p>字符串的顺序存储中每一个字符元素都有自己的下标索引，下标索引从 <code>0</code> 开始，到 <code>length - 1</code> 结束。字符串中每一个下标索引，都有一个与之对应的字符元素。</p><p>跟数组类似，字符串也支持随机访问。即字符串可以根据下标，直接定位到某一个字符元素存放的位置。</p><h3 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储" aria-hidden="true">#</a> 链式存储</h3><p>字符串的存储也可以采用链式存储结构，即采用一个线性链表来存储一个字符串。字符串的链节点包含一个用于存放字符的 <code>data</code> 变量，和指向下一个链节点的指针变量 <code>next</code>。这样，一个字符串就可以用一个线性链表来表示。</p><p>在字符串的链式存储结构中，每个链节点可以仅存放一个字符，也可以存放多个字符。通常情况下，链节点的字符长度为 <code>1</code> 或者 <code>4</code>，这是为了避免浪费空间。当链节点的字符长度为 <code>4</code> 时，由于字符串的长度不一定是 <code>4</code> 的倍数，因此字符串所占用的链节点中最后那个链节点的 <code>data</code> 变量可能没有占满，我们可以用 <code>#</code> 或其他不属于字符集的特殊字符将其补全。</p><h2 id="字符串匹配" tabindex="-1"><a class="header-anchor" href="#字符串匹配" aria-hidden="true">#</a> 字符串匹配</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>字符串匹配（String Matching）</strong> ：又称模式匹配（pattern matching），可以概括为「给定字符串 <code>S</code> 和 <code>T</code>，在主串 <code>S</code> 中寻找子串 <code>T</code>」。子串 <code>T</code> 称为模式串 (pattern)。</p></div><p>其中，在主串 <code>S</code> 中找出 <strong>一个</strong> 模式串 <code>T</code>的所有位置，叫做<strong>单模式匹配（Single Pattern Matching）</strong>；</p><p>在主串 <code>S</code> 中找出 <strong>多个</strong> 模式串 <code>T1,T2,……,Tn</code>的所有位置，叫做<strong>多模式匹配（Multi Pattern Matching）</strong>。</p><p>两个字符串相等的充要条件是：长度相等，并且各个对应位置上的字符都相等。</p><h3 id="bf-算法" tabindex="-1"><a class="header-anchor" href="#bf-算法" aria-hidden="true">#</a> BF 算法</h3><p>BF 算法中的 BF 是 Brute Force 的缩写，中文叫作暴力匹配算法，也叫朴素匹配算法。从名字可以看出，这种算法的字符串匹配方式很“暴力”，也就比较简单、好懂，但相应的性能也不高。</p><p>BF 算法的思想可以用一句话来概括：在主串中检查起始位置分别是 <code>0、1、2…n-m</code> 且长度为 <code>m</code> 的 <code>n-m+1</code> 个子串，看有没有跟模式串匹配的。</p><p>这种算法的最坏情况时间复杂度是 <code>O(n*m)</code>。</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),u=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),p=t("h4",{id:"字符串基础题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#字符串基础题目","aria-hidden":"true"},"#"),e(" 字符串基础题目")],-1),m=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"125",-1),y=t("td",{style:{"text-align":"left"}},"验证回文串",-1),b={style:{"text-align":"center"}},k={style:{"text-align":"left"}},w=t("code",null,"双指针",-1),v=t("code",null,"字符串",-1),T=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},"5",-1),E=t("td",{style:{"text-align":"left"}},"最长回文子串",-1),N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},F=t("code",null,"双指针",-1),U=t("code",null,"字符串",-1),L=t("code",null,"动态规划",-1),P=t("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"3",-1),M=t("td",{style:{"text-align":"left"}},"无重复字符的最长子串",-1),O={style:{"text-align":"center"}},G={style:{"text-align":"left"}},q=t("code",null,"哈希表",-1),K=t("code",null,"字符串",-1),z=t("code",null,"滑动窗口",-1),H=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"344",-1),Y=t("td",{style:{"text-align":"left"}},"反转字符串",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},tt=t("code",null,"双指针",-1),et=t("code",null,"字符串",-1),ot=t("td",{style:{"text-align":"center"}},"🟢",-1),nt={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"557",-1),dt=t("td",{style:{"text-align":"left"}},"反转字符串中的单词 III",-1),ct={style:{"text-align":"center"}},at={style:{"text-align":"left"}},it=t("code",null,"双指针",-1),_t=t("code",null,"字符串",-1),ht=t("td",{style:{"text-align":"center"}},"🟢",-1),gt={style:{"text-align":"center"}},ft={href:"https://leetcode.cn/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"49",-1),mt=t("td",{style:{"text-align":"left"}},"字母异位词分组",-1),xt={style:{"text-align":"center"}},yt={style:{"text-align":"left"}},bt=t("code",null,"数组",-1),kt=t("code",null,"哈希表",-1),wt=t("code",null,"字符串",-1),vt=t("code",null,"1+",-1),Tt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},At=t("td",{style:{"text-align":"center"}},"415",-1),Et=t("td",{style:{"text-align":"left"}},"字符串相加",-1),Nt={style:{"text-align":"center"}},Ct={style:{"text-align":"left"}},Ft=t("code",null,"数学",-1),Ut=t("code",null,"字符串",-1),Lt=t("code",null,"模拟",-1),Pt=t("td",{style:{"text-align":"center"}},"🟢",-1),Rt={style:{"text-align":"center"}},Vt={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"151",-1),Mt=t("td",{style:{"text-align":"left"}},"反转字符串中的单词",-1),Ot={style:{"text-align":"center"}},Gt={style:{"text-align":"left"}},qt=t("code",null,"双指针",-1),Kt=t("code",null,"字符串",-1),zt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},Qt={href:"https://leetcode.com/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",{style:{"text-align":"center"}},"43",-1),Xt=t("td",{style:{"text-align":"left"}},"字符串相乘",-1),Yt={style:{"text-align":"center"}},Zt={style:{"text-align":"left"}},$t=t("code",null,"数学",-1),te=t("code",null,"字符串",-1),ee=t("code",null,"模拟",-1),oe=t("td",{style:{"text-align":"center"}},"🟠",-1),ne={style:{"text-align":"center"}},le={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},se={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},re=t("td",{style:{"text-align":"center"}},"14",-1),de=t("td",{style:{"text-align":"left"}},"最长公共前缀",-1),ce={style:{"text-align":"center"}},ae={style:{"text-align":"left"}},ie=t("code",null,"字典树",-1),_e=t("code",null,"字符串",-1),he=t("td",{style:{"text-align":"center"}},"🟢",-1),ge={style:{"text-align":"center"}},fe={href:"https://leetcode.cn/problems/longest-common-prefix",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://leetcode.com/problems/longest-common-prefix",target:"_blank",rel:"noopener noreferrer"},pe=t("h4",{id:"单模式串匹配",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#单模式串匹配","aria-hidden":"true"},"#"),e(" 单模式串匹配")],-1),me=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),xe=t("td",{style:{"text-align":"center"}},"28",-1),ye=t("td",{style:{"text-align":"left"}},"找出字符串中第一个匹配项的下标",-1),be={style:{"text-align":"center"}},ke={style:{"text-align":"left"}},we=t("code",null,"双指针",-1),ve=t("code",null,"字符串",-1),Te=t("code",null,"字符串匹配",-1),Ie=t("td",{style:{"text-align":"center"}},"🟢",-1),Se={style:{"text-align":"center"}},Be={href:"https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},Ee=t("td",{style:{"text-align":"center"}},"459",-1),Ne=t("td",{style:{"text-align":"left"}},"重复的子字符串",-1),Ce={style:{"text-align":"center"}},Fe={style:{"text-align":"left"}},Ue=t("code",null,"字符串",-1),Le=t("code",null,"字符串匹配",-1),Pe=t("td",{style:{"text-align":"center"}},"🟢",-1),Re={style:{"text-align":"center"}},Ve={href:"https://leetcode.cn/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},je={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},De=t("td",{style:{"text-align":"center"}},"686",-1),Me=t("td",{style:{"text-align":"left"}},"重复叠加字符串匹配",-1),Oe=t("td",{style:{"text-align":"center"}},null,-1),Ge={style:{"text-align":"left"}},qe=t("code",null,"字符串",-1),Ke=t("code",null,"字符串匹配",-1),ze=t("td",{style:{"text-align":"center"}},"🟠",-1),He={style:{"text-align":"center"}},Je={href:"https://leetcode.cn/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://leetcode.com/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"},We=t("td",{style:{"text-align":"center"}},"1668",-1),Xe=t("td",{style:{"text-align":"left"}},"最大重复子字符串",-1),Ye={style:{"text-align":"center"}},Ze={style:{"text-align":"left"}},$e=t("code",null,"字符串",-1),to=t("code",null,"动态规划",-1),eo=t("code",null,"字符串匹配",-1),oo=t("td",{style:{"text-align":"center"}},"🟢",-1),no={style:{"text-align":"center"}},lo={href:"https://leetcode.cn/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},so={href:"https://leetcode.com/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},ro=t("td",{style:{"text-align":"center"}},"796",-1),co=t("td",{style:{"text-align":"left"}},"旋转字符串",-1),ao={style:{"text-align":"center"}},io={style:{"text-align":"left"}},_o=t("code",null,"字符串",-1),ho=t("code",null,"字符串匹配",-1),go=t("td",{style:{"text-align":"center"}},"🟢",-1),fo={style:{"text-align":"center"}},uo={href:"https://leetcode.cn/problems/rotate-string",target:"_blank",rel:"noopener noreferrer"},po={href:"https://leetcode.com/problems/rotate-string",target:"_blank",rel:"noopener noreferrer"},mo=t("td",{style:{"text-align":"center"}},"1408",-1),xo=t("td",{style:{"text-align":"left"}},"数组中的字符串匹配",-1),yo={style:{"text-align":"center"}},bo={style:{"text-align":"left"}},ko=t("code",null,"数组",-1),wo=t("code",null,"字符串",-1),vo=t("code",null,"字符串匹配",-1),To=t("td",{style:{"text-align":"center"}},"🟢",-1),Io={style:{"text-align":"center"}},So={href:"https://leetcode.cn/problems/string-matching-in-an-array",target:"_blank",rel:"noopener noreferrer"},Bo={href:"https://leetcode.com/problems/string-matching-in-an-array",target:"_blank",rel:"noopener noreferrer"},Ao=t("td",{style:{"text-align":"center"}},"2156",-1),Eo=t("td",{style:{"text-align":"left"}},"查找给定哈希值的子串",-1),No=t("td",{style:{"text-align":"center"}},null,-1),Co={style:{"text-align":"left"}},Fo=t("code",null,"字符串",-1),Uo=t("code",null,"滑动窗口",-1),Lo=t("code",null,"哈希函数",-1),Po=t("code",null,"1+",-1),Ro=t("td",{style:{"text-align":"center"}},"🔴",-1),Vo={style:{"text-align":"center"}},jo={href:"https://leetcode.cn/problems/find-substring-with-given-hash-value",target:"_blank",rel:"noopener noreferrer"},Do={href:"https://leetcode.com/problems/find-substring-with-given-hash-value",target:"_blank",rel:"noopener noreferrer"},Mo=t("h4",{id:"字典树",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#字典树","aria-hidden":"true"},"#"),e(" 字典树")],-1),Oo=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),Go=t("td",{style:{"text-align":"center"}},"208",-1),qo=t("td",{style:{"text-align":"left"}},"实现 Trie (前缀树)",-1),Ko={style:{"text-align":"center"}},zo={style:{"text-align":"left"}},Ho=t("code",null,"设计",-1),Jo=t("code",null,"字典树",-1),Qo=t("code",null,"哈希表",-1),Wo=t("code",null,"1+",-1),Xo=t("td",{style:{"text-align":"center"}},"🟠",-1),Yo={style:{"text-align":"center"}},Zo={href:"https://leetcode.cn/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},$o={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},tn=t("td",{style:{"text-align":"center"}},"677",-1),en=t("td",{style:{"text-align":"left"}},"键值映射",-1),on=t("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},ln=t("code",null,"设计",-1),sn=t("code",null,"字典树",-1),rn=t("code",null,"哈希表",-1),dn=t("code",null,"1+",-1),cn=t("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},_n={href:"https://leetcode.cn/problems/map-sum-pairs",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/map-sum-pairs",target:"_blank",rel:"noopener noreferrer"},gn=t("td",{style:{"text-align":"center"}},"648",-1),fn=t("td",{style:{"text-align":"left"}},"单词替换",-1),un=t("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},mn=t("code",null,"字典树",-1),xn=t("code",null,"数组",-1),yn=t("code",null,"哈希表",-1),bn=t("code",null,"1+",-1),kn=t("td",{style:{"text-align":"center"}},"🟠",-1),wn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://leetcode.com/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},In=t("td",{style:{"text-align":"center"}},"642",-1),Sn=t("td",{style:{"text-align":"left"}},"设计搜索自动补全系统 🔒",-1),Bn=t("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},En=t("code",null,"深度优先搜索",-1),Nn=t("code",null,"设计",-1),Cn=t("code",null,"字典树",-1),Fn=t("code",null,"4+",-1),Un=t("td",{style:{"text-align":"center"}},"🔴",-1),Ln={style:{"text-align":"center"}},Pn={href:"https://leetcode.cn/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://leetcode.com/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},Vn=t("td",{style:{"text-align":"center"}},"211",-1),jn=t("td",{style:{"text-align":"left"}},"添加与搜索单词 - 数据结构设计",-1),Dn={style:{"text-align":"center"}},Mn={style:{"text-align":"left"}},On=t("code",null,"深度优先搜索",-1),Gn=t("code",null,"设计",-1),qn=t("code",null,"字典树",-1),Kn=t("code",null,"1+",-1),zn=t("td",{style:{"text-align":"center"}},"🟠",-1),Hn={style:{"text-align":"center"}},Jn={href:"https://leetcode.cn/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},Wn=t("td",{style:{"text-align":"center"}},"421",-1),Xn=t("td",{style:{"text-align":"left"}},"数组中两个数的最大异或值",-1),Yn=t("td",{style:{"text-align":"center"}},null,-1),Zn={style:{"text-align":"left"}},$n=t("code",null,"位运算",-1),tl=t("code",null,"字典树",-1),el=t("code",null,"数组",-1),ol=t("code",null,"1+",-1),nl=t("td",{style:{"text-align":"center"}},"🟠",-1),ll={style:{"text-align":"center"}},sl={href:"https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},rl={href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},dl=t("td",{style:{"text-align":"center"}},"212",-1),cl=t("td",{style:{"text-align":"left"}},"单词搜索 II",-1),al={style:{"text-align":"center"}},il={style:{"text-align":"left"}},_l=t("code",null,"字典树",-1),hl=t("code",null,"数组",-1),gl=t("code",null,"字符串",-1),fl=t("code",null,"2+",-1),ul=t("td",{style:{"text-align":"center"}},"🔴",-1),pl={style:{"text-align":"center"}},ml={href:"https://leetcode.cn/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},xl={href:"https://leetcode.com/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},yl=t("td",{style:{"text-align":"center"}},"425",-1),bl=t("td",{style:{"text-align":"left"}},"单词方块 🔒",-1),kl=t("td",{style:{"text-align":"center"}},null,-1),wl={style:{"text-align":"left"}},vl=t("code",null,"字典树",-1),Tl=t("code",null,"数组",-1),Il=t("code",null,"字符串",-1),Sl=t("code",null,"1+",-1),Bl=t("td",{style:{"text-align":"center"}},"🔴",-1),Al={style:{"text-align":"center"}},El={href:"https://leetcode.cn/problems/word-squares",target:"_blank",rel:"noopener noreferrer"},Nl={href:"https://leetcode.com/problems/word-squares",target:"_blank",rel:"noopener noreferrer"},Cl=t("td",{style:{"text-align":"center"}},"336",-1),Fl=t("td",{style:{"text-align":"left"}},"回文对",-1),Ul=t("td",{style:{"text-align":"center"}},null,-1),Ll={style:{"text-align":"left"}},Pl=t("code",null,"字典树",-1),Rl=t("code",null,"数组",-1),Vl=t("code",null,"哈希表",-1),jl=t("code",null,"1+",-1),Dl=t("td",{style:{"text-align":"center"}},"🔴",-1),Ml={style:{"text-align":"center"}},Ol={href:"https://leetcode.cn/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},Gl={href:"https://leetcode.com/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},ql=t("td",{style:{"text-align":"center"}},"1023",-1),Kl=t("td",{style:{"text-align":"left"}},"驼峰式匹配",-1),zl=t("td",{style:{"text-align":"center"}},null,-1),Hl={style:{"text-align":"left"}},Jl=t("code",null,"字典树",-1),Ql=t("code",null,"数组",-1),Wl=t("code",null,"双指针",-1),Xl=t("code",null,"2+",-1),Yl=t("td",{style:{"text-align":"center"}},"🟠",-1),Zl={style:{"text-align":"center"}},$l={href:"https://leetcode.cn/problems/camelcase-matching",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://leetcode.com/problems/camelcase-matching",target:"_blank",rel:"noopener noreferrer"},es=t("td",{style:{"text-align":"center"}},"676",-1),os=t("td",{style:{"text-align":"left"}},"实现一个魔法字典",-1),ns=t("td",{style:{"text-align":"center"}},null,-1),ls={style:{"text-align":"left"}},ss=t("code",null,"深度优先搜索",-1),rs=t("code",null,"设计",-1),ds=t("code",null,"字典树",-1),cs=t("code",null,"2+",-1),as=t("td",{style:{"text-align":"center"}},"🟠",-1),is={style:{"text-align":"center"}},_s={href:"https://leetcode.cn/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},hs={href:"https://leetcode.com/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},gs=t("td",{style:{"text-align":"center"}},"440",-1),fs=t("td",{style:{"text-align":"left"}},"字典序的第K小数字",-1),us={style:{"text-align":"center"}},ps={style:{"text-align":"left"}},ms=t("code",null,"字典树",-1),xs=t("td",{style:{"text-align":"center"}},"🔴",-1),ys={style:{"text-align":"center"}},bs={href:"https://leetcode.cn/problems/k-th-smallest-in-lexicographical-order",target:"_blank",rel:"noopener noreferrer"},ks={href:"https://leetcode.com/problems/k-th-smallest-in-lexicographical-order",target:"_blank",rel:"noopener noreferrer"};function ws(vs,Ts){const n=d("RouterLink"),s=d("ExternalLinkIcon");return a(),i("div",null,[f,r(" START TABLE "),r(" Please keep comment here to allow auto update "),r(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),u,p,r(" prettier-ignore "),t("table",null,[m,t("tbody",null,[t("tr",null,[x,y,t("td",b,[o(n,{to:"/problem/0125.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",k,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[w]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[v]),_:1})]),T,t("td",I,[t("a",S,[e("🀄️"),o(s)]),e(),t("a",B,[e("🔗"),o(s)])])]),t("tr",null,[A,E,t("td",N,[o(n,{to:"/problem/0005.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",C,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[F]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[U]),_:1}),e(),o(n,{to:"/tag/dynamic-programming.html"},{default:l(()=>[L]),_:1})]),P,t("td",R,[t("a",V,[e("🀄️"),o(s)]),e(),t("a",j,[e("🔗"),o(s)])])]),t("tr",null,[D,M,t("td",O,[o(n,{to:"/problem/0003.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",G,[o(n,{to:"/tag/hash-table.html"},{default:l(()=>[q]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[K]),_:1}),e(),o(n,{to:"/tag/sliding-window.html"},{default:l(()=>[z]),_:1})]),H,t("td",J,[t("a",Q,[e("🀄️"),o(s)]),e(),t("a",W,[e("🔗"),o(s)])])]),t("tr",null,[X,Y,t("td",Z,[o(n,{to:"/problem/0344.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",$,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[tt]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[et]),_:1})]),ot,t("td",nt,[t("a",lt,[e("🀄️"),o(s)]),e(),t("a",st,[e("🔗"),o(s)])])]),t("tr",null,[rt,dt,t("td",ct,[o(n,{to:"/problem/0557.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",at,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[it]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[_t]),_:1})]),ht,t("td",gt,[t("a",ft,[e("🀄️"),o(s)]),e(),t("a",ut,[e("🔗"),o(s)])])]),t("tr",null,[pt,mt,t("td",xt,[o(n,{to:"/problem/0049.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",yt,[o(n,{to:"/tag/array.html"},{default:l(()=>[bt]),_:1}),e(),o(n,{to:"/tag/hash-table.html"},{default:l(()=>[kt]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[wt]),_:1}),e(),vt]),Tt,t("td",It,[t("a",St,[e("🀄️"),o(s)]),e(),t("a",Bt,[e("🔗"),o(s)])])]),t("tr",null,[At,Et,t("td",Nt,[o(n,{to:"/problem/0415.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Ct,[o(n,{to:"/tag/math.html"},{default:l(()=>[Ft]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[Ut]),_:1}),e(),o(n,{to:"/tag/simulation.html"},{default:l(()=>[Lt]),_:1})]),Pt,t("td",Rt,[t("a",Vt,[e("🀄️"),o(s)]),e(),t("a",jt,[e("🔗"),o(s)])])]),t("tr",null,[Dt,Mt,t("td",Ot,[o(n,{to:"/problem/0151.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Gt,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[qt]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[Kt]),_:1})]),zt,t("td",Ht,[t("a",Jt,[e("🀄️"),o(s)]),e(),t("a",Qt,[e("🔗"),o(s)])])]),t("tr",null,[Wt,Xt,t("td",Yt,[o(n,{to:"/problem/0043.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Zt,[o(n,{to:"/tag/math.html"},{default:l(()=>[$t]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[te]),_:1}),e(),o(n,{to:"/tag/simulation.html"},{default:l(()=>[ee]),_:1})]),oe,t("td",ne,[t("a",le,[e("🀄️"),o(s)]),e(),t("a",se,[e("🔗"),o(s)])])]),t("tr",null,[re,de,t("td",ce,[o(n,{to:"/problem/0014.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",ae,[o(n,{to:"/tag/trie.html"},{default:l(()=>[ie]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[_e]),_:1})]),he,t("td",ge,[t("a",fe,[e("🀄️"),o(s)]),e(),t("a",ue,[e("🔗"),o(s)])])])])]),pe,r(" prettier-ignore "),t("table",null,[me,t("tbody",null,[t("tr",null,[xe,ye,t("td",be,[o(n,{to:"/problem/0028.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",ke,[o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[we]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[ve]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[Te]),_:1})]),Ie,t("td",Se,[t("a",Be,[e("🀄️"),o(s)]),e(),t("a",Ae,[e("🔗"),o(s)])])]),t("tr",null,[Ee,Ne,t("td",Ce,[o(n,{to:"/problem/0459.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Fe,[o(n,{to:"/tag/string.html"},{default:l(()=>[Ue]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[Le]),_:1})]),Pe,t("td",Re,[t("a",Ve,[e("🀄️"),o(s)]),e(),t("a",je,[e("🔗"),o(s)])])]),t("tr",null,[De,Me,Oe,t("td",Ge,[o(n,{to:"/tag/string.html"},{default:l(()=>[qe]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[Ke]),_:1})]),ze,t("td",He,[t("a",Je,[e("🀄️"),o(s)]),e(),t("a",Qe,[e("🔗"),o(s)])])]),t("tr",null,[We,Xe,t("td",Ye,[o(n,{to:"/problem/1668.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Ze,[o(n,{to:"/tag/string.html"},{default:l(()=>[$e]),_:1}),e(),o(n,{to:"/tag/dynamic-programming.html"},{default:l(()=>[to]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[eo]),_:1})]),oo,t("td",no,[t("a",lo,[e("🀄️"),o(s)]),e(),t("a",so,[e("🔗"),o(s)])])]),t("tr",null,[ro,co,t("td",ao,[o(n,{to:"/problem/0796.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",io,[o(n,{to:"/tag/string.html"},{default:l(()=>[_o]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[ho]),_:1})]),go,t("td",fo,[t("a",uo,[e("🀄️"),o(s)]),e(),t("a",po,[e("🔗"),o(s)])])]),t("tr",null,[mo,xo,t("td",yo,[o(n,{to:"/problem/1408.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",bo,[o(n,{to:"/tag/array.html"},{default:l(()=>[ko]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[wo]),_:1}),e(),o(n,{to:"/tag/string-matching.html"},{default:l(()=>[vo]),_:1})]),To,t("td",Io,[t("a",So,[e("🀄️"),o(s)]),e(),t("a",Bo,[e("🔗"),o(s)])])]),t("tr",null,[Ao,Eo,No,t("td",Co,[o(n,{to:"/tag/string.html"},{default:l(()=>[Fo]),_:1}),e(),o(n,{to:"/tag/sliding-window.html"},{default:l(()=>[Uo]),_:1}),e(),o(n,{to:"/tag/hash-function.html"},{default:l(()=>[Lo]),_:1}),e(),Po]),Ro,t("td",Vo,[t("a",jo,[e("🀄️"),o(s)]),e(),t("a",Do,[e("🔗"),o(s)])])])])]),Mo,r(" prettier-ignore "),t("table",null,[Oo,t("tbody",null,[t("tr",null,[Go,qo,t("td",Ko,[o(n,{to:"/problem/0208.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",zo,[o(n,{to:"/tag/design.html"},{default:l(()=>[Ho]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[Jo]),_:1}),e(),o(n,{to:"/tag/hash-table.html"},{default:l(()=>[Qo]),_:1}),e(),Wo]),Xo,t("td",Yo,[t("a",Zo,[e("🀄️"),o(s)]),e(),t("a",$o,[e("🔗"),o(s)])])]),t("tr",null,[tn,en,on,t("td",nn,[o(n,{to:"/tag/design.html"},{default:l(()=>[ln]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[sn]),_:1}),e(),o(n,{to:"/tag/hash-table.html"},{default:l(()=>[rn]),_:1}),e(),dn]),cn,t("td",an,[t("a",_n,[e("🀄️"),o(s)]),e(),t("a",hn,[e("🔗"),o(s)])])]),t("tr",null,[gn,fn,un,t("td",pn,[o(n,{to:"/tag/trie.html"},{default:l(()=>[mn]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[xn]),_:1}),e(),o(n,{to:"/tag/hash-table.html"},{default:l(()=>[yn]),_:1}),e(),bn]),kn,t("td",wn,[t("a",vn,[e("🀄️"),o(s)]),e(),t("a",Tn,[e("🔗"),o(s)])])]),t("tr",null,[In,Sn,Bn,t("td",An,[o(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[En]),_:1}),e(),o(n,{to:"/tag/design.html"},{default:l(()=>[Nn]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[Cn]),_:1}),e(),Fn]),Un,t("td",Ln,[t("a",Pn,[e("🀄️"),o(s)]),e(),t("a",Rn,[e("🔗"),o(s)])])]),t("tr",null,[Vn,jn,t("td",Dn,[o(n,{to:"/problem/0211.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",Mn,[o(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[On]),_:1}),e(),o(n,{to:"/tag/design.html"},{default:l(()=>[Gn]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[qn]),_:1}),e(),Kn]),zn,t("td",Hn,[t("a",Jn,[e("🀄️"),o(s)]),e(),t("a",Qn,[e("🔗"),o(s)])])]),t("tr",null,[Wn,Xn,Yn,t("td",Zn,[o(n,{to:"/tag/bit-manipulation.html"},{default:l(()=>[$n]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[tl]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[el]),_:1}),e(),ol]),nl,t("td",ll,[t("a",sl,[e("🀄️"),o(s)]),e(),t("a",rl,[e("🔗"),o(s)])])]),t("tr",null,[dl,cl,t("td",al,[o(n,{to:"/problem/0212.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",il,[o(n,{to:"/tag/trie.html"},{default:l(()=>[_l]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[hl]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[gl]),_:1}),e(),fl]),ul,t("td",pl,[t("a",ml,[e("🀄️"),o(s)]),e(),t("a",xl,[e("🔗"),o(s)])])]),t("tr",null,[yl,bl,kl,t("td",wl,[o(n,{to:"/tag/trie.html"},{default:l(()=>[vl]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[Tl]),_:1}),e(),o(n,{to:"/tag/string.html"},{default:l(()=>[Il]),_:1}),e(),Sl]),Bl,t("td",Al,[t("a",El,[e("🀄️"),o(s)]),e(),t("a",Nl,[e("🔗"),o(s)])])]),t("tr",null,[Cl,Fl,Ul,t("td",Ll,[o(n,{to:"/tag/trie.html"},{default:l(()=>[Pl]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[Rl]),_:1}),e(),o(n,{to:"/tag/hash-table.html"},{default:l(()=>[Vl]),_:1}),e(),jl]),Dl,t("td",Ml,[t("a",Ol,[e("🀄️"),o(s)]),e(),t("a",Gl,[e("🔗"),o(s)])])]),t("tr",null,[ql,Kl,zl,t("td",Hl,[o(n,{to:"/tag/trie.html"},{default:l(()=>[Jl]),_:1}),e(),o(n,{to:"/tag/array.html"},{default:l(()=>[Ql]),_:1}),e(),o(n,{to:"/tag/two-pointers.html"},{default:l(()=>[Wl]),_:1}),e(),Xl]),Yl,t("td",Zl,[t("a",$l,[e("🀄️"),o(s)]),e(),t("a",ts,[e("🔗"),o(s)])])]),t("tr",null,[es,os,ns,t("td",ls,[o(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[ss]),_:1}),e(),o(n,{to:"/tag/design.html"},{default:l(()=>[rs]),_:1}),e(),o(n,{to:"/tag/trie.html"},{default:l(()=>[ds]),_:1}),e(),cs]),as,t("td",is,[t("a",_s,[e("🀄️"),o(s)]),e(),t("a",hs,[e("🔗"),o(s)])])]),t("tr",null,[gs,fs,t("td",us,[o(n,{to:"/problem/0440.html"},{default:l(()=>[e("[✓]")]),_:1})]),t("td",ps,[o(n,{to:"/tag/trie.html"},{default:l(()=>[ms]),_:1})]),xs,t("td",ys,[t("a",bs,[e("🀄️"),o(s)]),e(),t("a",ks,[e("🔗"),o(s)])])])])])])}const Ss=c(g,[["render",ws],["__file","string.html.vue"]]);export{Ss as default};
