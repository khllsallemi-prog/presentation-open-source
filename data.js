
const P=[
{k:"overview",t:"نظرة عامة",en:"Overview of Free and Open Source Software",intro:"قبل فهم «الحرة» و«المفتوحة»، نبدأ بالأساسيات: ما أنواع البرمجيات؟ وما الشيفرة؟ وما الفرق بينها؟",s:[
{t:"أنواع البرمجيات",en:"Software Types",i:[["نظام التشغيل","يدير عتاد الجهاز ومواردَه ويشغّل بقية البرامج، مثل Windows وLinux وAndroid.","Base Software"],["برامج التطبيقات","برامج لمهمة محددة، مثل المتصفح ومحرر النصوص.","Application Software"]]},
{t:"مفاهيم الشيفرة المصدرية",en:"Source Code Concepts",i:[["الشيفرة المصدرية","تعليمات يكتبها المبرمج بلغة يقرؤها الإنسان، مثل Python.","Source Code"],["الشيفرة التنفيذية","لغة الآلة التي يشغّلها الحاسوب مباشرة، ويصعب على البشر قراءتها.","Executable Code"],["المترجم","برنامج يحوّل الأولى إلى الثانية. تشبيه: المصدرية وصفة الطبخ، والتنفيذية الطبق الجاهز.","Compiler"]]},
{t:"البرمجيات الاحتكارية",en:"Proprietary Software",i:[["التعريف","المالك هو من يتحكم في الحقوق عبر رخصة مقيِّدة، فلا يحق لك تعديل البرنامج أو توزيعه."],["المشاكل","وصول محدود إلى الشيفرة، وتحديثات مفروضة، وتكاليف تتزايد مع الوقت."]]},
{t:"البرمجيات الحرة",en:"Free Software (Logiciel Libre)",i:[["الحريات الأربع","حرية تشغيل البرنامج، ودراسته، وتعديله، وإعادة توزيعه."],["معنى «حرة»","الحرية لا السعر: المقصود free كما في freedom وليس مجانيًا بالضرورة."],["الرواد","ريتشارد ستالمان ومؤسسة البرمجيات الحرة FSF عام 1985."]]},
{t:"المصدر المفتوح",en:"Open Source Software",i:[["التعريف","شيفرته متاحة للجميع للاطلاع والتعديل."],["الرواد","إريك ريموند ومبادرة المصدر المفتوح OSI عام 1998."],["البرمجيات المجانية","برنامج احتكاري يُوزَّع مجانًا دون إتاحة شيفرته: مجاني لكنه ليس مفتوح المصدر.","Freeware"]]},
{t:"FOSS وFLOSS",en:"FOSS and FLOSS",i:[["FOSS","مصطلح يجمع «الحرة» و«المفتوحة المصدر» معًا.","Free and Open Source Software"],["FLOSS","تضيف كلمة Libre لتؤكد معنى الحرية وتزيل لبس كلمة free.","Free Libre and Open Source Software"]]}
]},
{k:"history",t:"التاريخ والتطور",en:"History and Evolution",intro:"كيف انتقلنا من حواسيب بلا برامج تُباع إلى عالم تُبنى فيه أنظمة كاملة بالتعاون المفتوح؟",s:[
{t:"البدايات: الأجهزة أولًا",en:"1940–1980",i:[["1940–1950","كانت الحواسيب الأولى ضخمة ومكلفة، والعتاد هو الأهم والبرامج تأتي معه تقريبًا مجانًا."],["1968","«أزمة البرمجيات»: مشاريع متأخرة ومكلفة وكثيرة الأخطاء، فولد علم هندسة البرمجيات."],["1970–1980","صار البرنامج منتجًا يُباع، وازدهرت البرمجيات الاحتكارية وأُغلقت الشيفرات."]]},
{t:"ولادة الحركة الحرة",en:"1983–1989",i:[["1983","أعلن ريتشارد ستالمان مشروع GNU لبناء نظام تشغيل حر كامل."],["1985","تأسيس مؤسسة البرمجيات الحرة FSF لحماية حريات المستخدمين."],["1989","إطلاق رخصة GNU العامة GPL، أشهر رخصة تحفظ الحرية."]]},
{t:"الانتشار والتنظيم",en:"1991–1998",i:[["1991","أطلق لينوس تورفالدز مشروع Linux، فانضمت نواته إلى أدوات GNU لتكوين نظام كامل."],["1998","تأسيس مبادرة المصدر المفتوح OSI لتقديم الفكرة بأسلوب عملي يناسب الشركات."]]}
]},
{k:"actors",t:"الأطراف والمنظومة",en:"Major Actors and Ecosystem",intro:"المصدر المفتوح ليس مبرمجًا واحدًا، بل شبكة أدوار يكمل بعضها بعضًا.",s:[
{t:"من يصنع المنظومة؟",en:"Ecosystem",i:[["المستخدمون","يستخدمون البرنامج ويبلّغون عن الأخطاء ويعبّرون عن احتياجاتهم.","Users"],["المطورون","يكتبون الشيفرة ويصلحون الأخطاء ويعدّون التوثيق.","Developers"],["المؤسسات","توفّر الإطار القانوني وقواعد الحوكمة، مثل FSF.","Foundations"],["الداعمون","يقدمون دعمًا ماليًا أو ماديًا للمشاريع.","Sponsors"],["المزوّدون","يقدمون الدعم والتدريب والاستضافة، وهنا يأتي الربح دون بيع الشيفرة.","Suppliers"]]}
]},
{k:"pros-cons",t:"المزايا والعيوب",en:"Pros and Cons of Open Source",intro:"هذان الفرعان مطويان في الشجرة، فهذا شرح عام لأبرز ما يُذكر فيهما.",s:[
{t:"المزايا",en:"Advantages",i:[["التكلفة","غالبًا مجاني أو منخفض الكلفة."],["الشفافية والأمان","كثيرون يراجعون الشيفرة فتُكتشف الثغرات أسرع."],["الحرية","لا تعتمد على شركة واحدة، ويمكنك تعديل البرنامج لحاجتك."],["المجتمع","آلاف المساهمين يطورون البرنامج ويجيبون عن الأسئلة."]]},
{t:"العيوب والتحديات",en:"Disadvantages and Challenges",i:[["الدعم","قد لا يوجد دعم رسمي مضمون."],["سهولة الاستخدام","بعض المشاريع واجهتها أو توثيقها أضعف وتحتاج تعلّمًا."],["التوافق","قد لا تتوافق مع بعض الصيغ أو البرامج الاحتكارية."],["الاستدامة","استمرار المشروع يعتمد على تمويل ومتطوعين."]]}
]},
{k:"licensing",t:"التراخيص والجوانب القانونية",en:"Licensing and Legal Aspects",intro:"الرخصة هي العقد الذي يحدد ما يحق لك فعله بالبرنامج.",s:[
{t:"الملكية الفكرية",en:"Intellectual Property",i:[["حق المؤلف","يحمي التعبير الأصلي عن العمل، ومنه شيفرة البرنامج.","Copyright"],["براءات الاختراع","احتكار مؤقت للاختراعات الصناعية.","Patents"],["العلامات التجارية","تحمي الأسماء والشعارات.","Trademarks"]]},
{t:"رخص Copyleft",en:"Copyleft Licenses",i:[["المبدأ","تحفظ الحرية في كل النسخ المشتقة."],["القوية","أي عمل مشتق يجب أن يستخدم الرخصة نفسها، مثل GNU GPL وAGPL.","Strong Copyleft"]]},
{t:"الرخص المتساهلة",en:"Permissive Licenses",i:[["المبدأ","قيود قليلة على التعديل وإعادة التوزيع، مثل MIT وBSD."],["المسموح","الاستخدام التجاري والتعديل ودمجه في برنامج احتكاري."],["الالتزامات","الإبقاء على إشعارات حقوق النشر ونص الرخصة."]]},
{t:"نماذج أخرى",en:"Other Models",i:[["Freeware","برنامج احتكاري مجاني دون إتاحة الشيفرة."],["Shareware","برنامج احتكاري تجريبي، تدفع مقابل استخدامه كاملًا."]]}
]}
];
const K=["overview","history","actors","pros-cons","licensing"];
const E=[
["Overview","Before “free” and “open”, the basics: what kinds of software exist, what is source code, and how do they differ?",[
["Software Types",[["Base Software","The operating system: manages hardware and runs other programs, e.g. Windows, Linux, Android."],["Application Software","Programs for specific tasks, e.g. a browser or a text editor."]]],
["Source Code Concepts",[["Source Code","Instructions written by a programmer in a human-readable language, e.g. Python."],["Executable Code","Machine code the computer runs directly; hard for humans to read."],["Compiler","Turns source code into executable code. Think of a recipe (source) versus the finished dish (executable)."]]],
["Proprietary Software",[["Definition","The owner controls the rights through a restrictive license: you cannot modify or redistribute it."],["Problems","Limited code access, forced updates and growing costs."]]],
["Free Software",[["Four Freedoms","Freedom to run, study, modify and redistribute the program."],["Meaning of Free","Freedom, not price: free as in freedom, not necessarily free of charge."],["Pioneers","Richard Stallman and the Free Software Foundation (1985)."]]],
["Open Source Software",[["Definition","The code is publicly available to view and modify."],["Pioneers","Eric Raymond and the Open Source Initiative (1998)."],["Freeware","Proprietary software given away for free without its source code: free of charge, but not open source."]]],
["FOSS and FLOSS",[["FOSS","Free and Open Source Software: one term covering both."],["FLOSS","Adds Libre to stress liberty and avoid the ambiguity of the word free."]]]]],
["History and Evolution","From computers where hardware was everything to whole systems built by open collaboration.",[
["Hardware first (1940–1980)",[["1940–1950","Early computers were huge and costly; hardware mattered most and software came almost free with it."],["1968","The “software crisis”: late, costly, buggy projects gave birth to software engineering."],["1970–1980","Software became a product to sell; proprietary software boomed and code was closed."]]],
["The free software movement (1983–1989)",[["1983","Richard Stallman announced the GNU project to build a complete free operating system."],["1985","The Free Software Foundation was created to protect users’ freedoms."],["1989","Launch of the GNU General Public License (GPL), the best-known license that preserves freedom."]]],
["Spread and organization (1991–1998)",[["1991","Linus Torvalds launched Linux; its kernel joined the GNU tools to form a full system."],["1998","The Open Source Initiative was created to present the idea in a practical way for businesses."]]]]],
["Actors and Ecosystem","Open source is not one programmer but a network of roles that complete each other.",[
["Who makes the ecosystem?",[["Users","Use the software, report bugs and express needs."],["Developers","Write code, fix bugs and create documentation."],["Foundations","Provide legal structures and governance rules, e.g. the FSF."],["Sponsors","Provide financial or material support."],["Suppliers","Offer support, training and hosting; this is where profit comes from without selling the code."]]]]],
["Pros and Cons","These two branches are folded in the tree, so this is a general overview of what is usually listed.",[
["Advantages",[["Cost","Often free or low cost."],["Transparency and security","Many eyes review the code, so flaws are found faster."],["Freedom","No dependence on one vendor; adapt the software to your needs."],["Community","Thousands of contributors improve it and answer questions."]]],
["Disadvantages and Challenges",[["Support","Official support may not be guaranteed."],["Ease of use","Some projects have weaker interfaces or documentation and need learning."],["Compatibility","May not match some formats or proprietary programs."],["Sustainability","A project’s future depends on funding and volunteers."]]]]],
["Licensing and Legal Aspects","A license is the contract that defines what you may do with software.",[
["Intellectual Property",[["Copyright","Protects the original expression of a work, including program code."],["Patents","Temporary monopoly on industrial inventions."],["Trademarks","Protect names and logos."]]],
["Copyleft Licenses",[["Principle","Preserves freedom across all derived versions."],["Strong Copyleft","Derived works must use the same license, e.g. GNU GPL and AGPL."]]],
["Permissive Licenses",[["Principle","Few restrictions on modification and redistribution, e.g. MIT and BSD."],["Permissions","Commercial use, modification and integration into proprietary software."],["Obligations","Keep the copyright notices and the license text."]]],
["Other Models",[["Freeware","Free proprietary software without source access."],["Shareware","Proprietary trial software; you pay for full use."]]]]]
];
const F=[
["Vue d’ensemble","Avant « libre » et « ouvert », les bases : quels types de logiciels, qu’est-ce que le code source, et en quoi diffèrent-ils ?",[
["Types de logiciels",[["Logiciel de base","Le système d’exploitation : gère le matériel et lance les autres programmes (Windows, Linux, Android)."],["Logiciel d’application","Programmes pour des tâches précises : navigateur, éditeur de texte."]]],
["Notions de code source",[["Code source","Instructions écrites par un programmeur dans un langage lisible, par ex. Python."],["Code exécutable","Code machine exécuté directement par l’ordinateur, difficile à lire pour un humain."],["Compilateur","Transforme le code source en code exécutable. Comme une recette (source) et le plat terminé (exécutable)."]]],
["Logiciel propriétaire",[["Définition","Le propriétaire contrôle les droits par une licence restrictive : ni modification ni redistribution."],["Problèmes","Accès limité au code, mises à jour imposées et coûts croissants."]]],
["Logiciel libre",[["Quatre libertés","Liberté d’exécuter, d’étudier, de modifier et de redistribuer le programme."],["Sens de « libre »","La liberté, pas le prix : libre ne veut pas forcément dire gratuit."],["Pionniers","Richard Stallman et la Free Software Foundation (1985)."]]],
["Logiciel open source",[["Définition","Le code est accessible au public pour être consulté et modifié."],["Pionniers","Eric Raymond et l’Open Source Initiative (1998)."],["Freeware","Logiciel propriétaire distribué gratuitement sans son code source : gratuit, mais pas open source."]]],
["FOSS et FLOSS",[["FOSS","Free and Open Source Software : un terme qui réunit les deux."],["FLOSS","Ajoute Libre pour insister sur la liberté et lever l’ambiguïté du mot free."]]]]],
["Histoire et évolution","Des ordinateurs où le matériel primait aux systèmes entiers construits par collaboration ouverte.",[
["Le matériel d’abord (1940–1980)",[["1940–1950","Les premiers ordinateurs étaient énormes et chers ; le matériel comptait le plus, le logiciel venait presque gratuitement."],["1968","La « crise du logiciel » : projets en retard, coûteux et bogués, d’où naît le génie logiciel."],["1970–1980","Le logiciel devient un produit à vendre ; le propriétaire prospère et les codes se ferment."]]],
["Naissance du mouvement libre (1983–1989)",[["1983","Richard Stallman annonce le projet GNU pour bâtir un système d’exploitation libre complet."],["1985","Création de la Free Software Foundation pour protéger les libertés des utilisateurs."],["1989","Lancement de la licence GNU GPL, la plus connue pour préserver la liberté."]]],
["Diffusion et organisation (1991–1998)",[["1991","Linus Torvalds lance Linux ; son noyau rejoint les outils GNU pour former un système complet."],["1998","Création de l’Open Source Initiative pour présenter l’idée de façon pratique aux entreprises."]]]]],
["Acteurs et écosystème","L’open source, ce n’est pas un seul programmeur mais un réseau de rôles complémentaires.",[
["Qui fait l’écosystème ?",[["Utilisateurs","Utilisent le logiciel, signalent les bogues et expriment leurs besoins."],["Développeurs","Écrivent le code, corrigent les bogues et rédigent la documentation."],["Fondations","Fournissent le cadre juridique et les règles de gouvernance, par ex. la FSF."],["Sponsors","Apportent un soutien financier ou matériel."],["Fournisseurs","Proposent support, formation et hébergement ; le profit vient d’ici, sans vendre le code."]]]]],
["Avantages et inconvénients","Ces deux branches sont repliées dans l’arbre ; voici un aperçu général de ce qu’on y trouve d’ordinaire.",[
["Avantages",[["Coût","Souvent gratuit ou peu coûteux."],["Transparence et sécurité","Beaucoup d’yeux relisent le code : les failles sont trouvées plus vite."],["Liberté","Pas de dépendance à un seul éditeur ; adaptez le logiciel à vos besoins."],["Communauté","Des milliers de contributeurs l’améliorent et répondent aux questions."]]],
["Inconvénients et défis",[["Support","Le support officiel n’est pas toujours garanti."],["Facilité d’usage","Interface ou documentation parfois plus faibles : il faut apprendre."],["Compatibilité","Peut ne pas gérer certains formats ou programmes propriétaires."],["Pérennité","L’avenir d’un projet dépend du financement et des bénévoles."]]]]],
["Licences et aspects juridiques","Une licence est le contrat qui définit ce que vous pouvez faire d’un logiciel.",[
["Propriété intellectuelle",[["Droit d’auteur","Protège l’expression originale d’une œuvre, dont le code d’un programme."],["Brevets","Monopole temporaire sur les inventions industrielles."],["Marques","Protègent les noms et les logos."]]],
["Licences copyleft",[["Principe","Préserve la liberté dans toutes les versions dérivées."],["Copyleft fort","Les œuvres dérivées gardent la même licence, par ex. GNU GPL et AGPL."]]],
["Licences permissives",[["Principe","Peu de restrictions sur la modification et la redistribution, par ex. MIT et BSD."],["Permissions","Usage commercial, modification et intégration dans un logiciel propriétaire."],["Obligations","Conserver les mentions de droit d’auteur et le texte de la licence."]]],
["Autres modèles",[["Freeware","Logiciel propriétaire gratuit sans accès au code source."],["Shareware","Logiciel propriétaire d’essai ; on paie pour l’usage complet."]]]]]
];
const norm=a=>a.map(x=>({t:x[0],intro:x[1],s:x[2].map(s=>({t:s[0],i:s[1]}))}));
const L={ar:P,en:norm(E),fr:norm(F)};
const U={
ar:{d:"rtl",root:"البرمجيات الحرة ومفتوحة المصدر",back:"العودة إلى الشجرة",hint:"انقر على أي فرع لفتح صفحته المبسّطة، وعلى الدائرة لطيّ الفرع أو فتحه."},
en:{d:"ltr",root:"Free and Open Source Software",back:"Back to the tree",hint:"Click any branch to open its simple page; use the circles to fold or unfold a branch."},
fr:{d:"ltr",root:"Logiciels libres et open source",back:"Retour à l’arbre",hint:"Cliquez sur une branche pour ouvrir sa page simplifiée ; les cercles replient ou déplient une branche."}
};
