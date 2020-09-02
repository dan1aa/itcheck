var languages = {
	"C#":{
		name:"C#",
		desc:"C# is an object-oriented programming language. It was developed in 1998-2001 by a group of Microsoft engineers under the leadership of Anders Halesberg and Scott Wiltaumot as an application development language for the Microsoft .NET Framework. It was subsequently standardized as ECMA-334 and ISO / IEC 23270.",
		href:"https://uk.wikipedia.org/wiki/C_Sharp",
		img: "img/csh.jpg"
	},
	"C":{
		name:"C",
		desc:"C is a computer programming language supporting structured programming, lexical variable scope, and recursion, while a static type system prevents unintended operations. Such applications include operating systems and various application software for computers, from supercomputers to PLCs and, to embedded systems.",
		href:"https://uk.wikipedia.org/wiki/C_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)",
		img:"img/с.jpg"
	},
	"C++":{
		name:"C++",
		desc:"C ++ is a high-level programming language with support for several programming paradigms: object-oriented, generalized, and procedural. Developed by Bjarne Stroustrup at AT&T Bell Laboratories in 1979 and originally named Si with Classes.  Subsequently, Stroustrup renamed C ++ in 1983 based on C. First described by ISO / IEC 14882: 1998, the most relevant is ISO / IEC 14882: 2014.",
		href:"https://uk.wikipedia.org/wiki/C%2B%2B",
		img: "img/cp.jpg"
	},
	"Python":{
		name:"Python",
		desc:"Python is a high-level general-purpose programming language aimed at increasing developer productivity and code readability. Python kernel syntax is minimalistic. At the same time, the standard library includes a large amount of useful functions. In 2019-2020, python began to gain popularity and become a good and professional programming language.",
		href:"https://uk.wikipedia.org/wiki/Python",
		img: "img/py.jpg"
	},
	"Java":{
		name:"Java",
		desc:"Java is a strongly typed object-oriented programming language developed by Sun Microsystems. The development is conducted by a community organized through the Java Community Process, the language and the main technologies that implement it are distributed under the GPL. Trademark rights are owned by Oracle Corporation.",
		href: "https://uk.wikipedia.org/wiki/Java",
		img: "img/java.jpg"
	},
	"JavaScript":{
		name:"JavaScript",
		desc:"JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. It is an implementation of the ECMAScript standard. JavaScript is commonly used as an embedded language for programmatically accessing application objects. It is most widely used in browsers as a scripting language for giving interactivity to web pages.",
		href: "https://uk.wikipedia.org/wiki/JavaScript",
		img: "img/js.jpg"
	},
	"PHP":{
		name:"PHP",
		desc:"PHP is a general-purpose scripting language intensively used for developing web applications. It is currently supported by the vast majority of hosting providers and is one of the leaders among the languages ​​used to create dynamic websites. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon.",
		href: "https://uk.wikipedia.org/wiki/PHP",
		img: "img/php.jpg"
	},
	"Swift":{
		name:"Swift",
		desc:"Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014.",
		href: "https://uk.wikipedia.org/wiki/Swift_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)",
		img: "img/swift.jpg"
	},
	"Kotlin":{
		name:"Kotlin",
		desc:"Kotlin is a statically typed programming language that runs on top of the Java Virtual Machine and is developed by JetBrains. It is also compiled in JavaScript and in executable code for a number of platforms through the LLVM infrastructure. The Android Kotlin compiler targets Java 6 by default, but lets the programmer choose between Java 8 to 13, for optimization.",
		href: "https://uk.wikipedia.org/wiki/Kotlin",
		img: "img/kotlin.jpg"
	},
	"Ruby":{
		name:"Ruby",
		desc:"Ruby is an interpreted, fully object-oriented programming language with clear dynamic typing. The language is highly efficient in application development and incorporates the best features of Perl, Java, Python, Smalltalk, Eiffel, Ada and Lisp. Ruby combines Perl-like syntax with the object-oriented approach of the Smalltalk programming language.",
		href: "https://uk.wikipedia.org/wiki/Ruby",
		img: "img/ruby.jpg"
	},
	"Basic":{
		name:"Basic",
		desc:"BASIC is a family of general-purpose, high-level programming languages whose design philosophy emphasizes ease of use. The original version was designed by John G. Kemeny and Thomas E. Kurtz and released at Dartmouth College in 1964. They wanted to enable students in fields other than science and mathematics to use computers. .",
		href: "https://uk.wikipedia.org/wiki/BASIC",
		img:"img/basic.jpg"
	},
	"Object-Pascal":{
		name:"Object-Pascal",
		desc:"Delphi is an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, currently developed and maintained by Embarcadero Technologies which uses an event-driven programming language based on Object Pascal. Delphi's compilers generate native code for Microsoft Windows, macOS, iOS, Android and Linux.",
		href: "https://uk.wikipedia.org/wiki/Object_Pascal",
		img: "img/opascal.jpg"
	},
	"Go":{
		name:"Go",
		desc:"Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as Golang because of its domain name, golang.org, but the proper name is Go.",
		href: "https://uk.wikipedia.org/wiki/Go_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)",
		img:"img/go.jpg"
	},
	"Perl":{
		name:"Perl",
		desc:"Perl is a family of two high-level, general-purpose, dynamic programming languages. Perl refers to Perl 5, but from 2000 to 2019 it also referred to its redesigned sister language, Perl 6, before the latter's name was officially changed to Raku in October 2019. Perl is not officially an acronym, there are various backronyms in use, including Practical Extraction and Reporting Language",
		href: "https://uk.wikipedia.org/wiki/Perl",
		img: "img/perl.jpg"
	},
	"Objective-C":{
		name:"Objective-C",
		desc:"Objective-C is a reflective, high-level, object-oriented general-purpose programming language designed as a set of standard C extensions.Objective-C programming language, developed in the early 1980s, was the primary language used by NeXT for the NeXTSTEP operating system, from which macOS and iOS came.",
		href: "https://uk.wikipedia.org/wiki/Objective-C",
		img:"img/oc.jpg"
	},
	"Haskell":{
		name:"Haskell",
		desc:"Haskell - standardized, exceptionally functional programming language with non-strict semantics. Named after American mathematician Gaskell Curry, whose work in mathematical logic is basic to functional programming. The Haskell is based on numerous lambda. In our time Haskell is a popular programming language.",
		href: "https://uk.wikipedia.org/wiki/Haskell",
		img: "img/has.jpg"
	},
	"Rust":{
		name:"Rust",
		desc:"Rust is a programming language developed by Mozilla Research. The language is strictly typed and focused on secure memory management and high concurrency of tasks.  Work on the language was started by Gradon Goar in 2006, in 2009 Mozilla joined the development, and in 2010 the language was officially presented at the Mozilla Summit 2010",
		href: "https://uk.wikipedia.org/wiki/Rust_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)",
		img: "img/rust.jpg"
	},
	"Pascal":{
		name:"Pascal",
		desc:"Pascal is an algorithmic programming language. There are language dialects that support object-oriented programming. In 1990, ISO 7185: 1990, Pascal and ISO 10206: 1990 Extended Pascal were approved. First Pascal`s compiler is ETH Pascal, created in 1970 year. The name ETH comes from the name of the institute in the German Eidgenössische Technische Hochschule Zurich.",
		href: "https://uk.wikipedia.org/wiki/Pascal",
		img: "img/pas.jpg"
	},
	"a+":{
		name:"A+",
		desc:"A+ is a language program created by Morgan Stanley's team working on Arthur Whitney. A+ is an array programming language, its predecessor is the A programming language, which was created in 1988. A+ is an interpreted, interactive, high-level language designed for numerically intensive software.",
		href: "https://uk.wikipedia.org/wiki/A%2B",
		code: ""
	},
	"a++": {
		name:"A++",
		desc:"A++ was developed by Georg P. Loczewski and Britain Hamm in the years from 1996 - 2002. A++ is a language similar to C++, with its interpreter available in Scheme, Java, C, C++ and Python, and offers an ideal environment for basic training in programming, enforcing rigorous confrontation with the essentials of programming languages.",
		href:"https://en.wikipedia.org/wiki/A%2B%2B",
		code:"" ,

	},
	"ABAP":{
		name:"ABAP",
		desc:"The name ABAP stands for Advanced Business Application Programming, and the number four, apparently, symbolizes the attitude to the fourth generation of programming languages. The language was created in 1980 to work with the SAP R / 2 system, later inherited in SAP R / 3.",
		href: "https://en.wikipedia.org/wiki/ABAP",
		code: ""
	},
	"ABC":{
		name:"ABC",
		desc:"ABC is an imperative general-purpose programming language and programming environment developed at CWI, Netherlands by Leo Geurts, Lambert Meertens, and Steven Pemberton. It is interactive, structured, high-level, and intended to be used instead of BASIC, Pascal, or AWK. It is not meant to be a systems-programming language but is intended for teaching or prototyping.",
		href: "https://en.wikipedia.org/wiki/ABC_(programming_language)"
	},	
	"ABLE":{
		name:"ABEL",
		desc:"The Advanced Boolean Expression Language (ABEL) is an obsolete hardware description language and an associated set of design tools for programming PLDs. It was created in 1983 by Data I/O Corporation, in Redmond, Washington. ABEL includes both concurrent equation and truth table logic formats as well as a sequential state machine description format.",
		href: "https://en.wikipedia.org/wiki/Advanced_Boolean_Expression_Language"
	},
	"ABSET":{
		name:"ABSET",
		desc:"ABSET was an early declarative programming language from the University of Aberdeen. ABSET: A Programming Language Based on Sets, E.W. Elcock et al., Mach Intell 4, Edinburgh U Press, 1969, pp. 467–492This article is based on material taken from the Free On-line Dictionary of Computing prior to 1 November 2008 and incorporated under the relicensing terms of the GFDL, version 1.3 or later.",
		href: "https://en.wikipedia.org/wiki/ABSET"
	},
	"Accent":{
		name:"Accent",
		desc:"Accent is a very high level interpreted programming language, published in 1990 by CaseWare, Inc.. Accent has native support for strings and tables. It is strongly typed and supports remote function calls.",
		href: "https://enacademic.com/dic.nsf/enwiki/51302"
	},
	"ActionScript":{
		name:"ActionScript",
		desc:"Action Code Script is a scripting language used in video games such as HeXen and some modern Doom source ports. As its name implies, most of the core logic for script functionality comes in the form of scripts, which are traditionally identified with a numerical value. Later revisions of the ACS compiler added support for named scripts and simple functions.",
		href: "https://en.wikipedia.org/wiki/Action_Code_Script"
	},
	"Ada":{
		name:"Ada",
		desc:"Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, extended from Pascal and other languages. It has built-in language support for design by contract, extremely strong typing, explicit concurrency, tasks, synchronous message passing, protected objects, and non-determinism.",
		href:"https://en.wikipedia.org/wiki/Ada_(programming_language)"
	},
	"ADL":{
		name:"ADL",
		desc:"The Anti-Defamation League (ADL), formerly known as the Anti-Defamation League of B'nai B'rith, is an international Jewish non-governmental organization based in the United States. It was founded in late September 1913 by the Independent Order of B'nai B'rith, a Jewish service organization. ",
		href: "https://en.wikipedia.org/wiki/Anti-Defamation_League"
	},
	"ALAN":{
		name:"ALAN",
		desc:"Alan is a special purpose computer language specifically designed to make it very easy to create ... adventure games with little programming skills. Sorry for the small amount of information ;)",
		href: "https://wiki.c2.com/?AlanLanguage"
	},
    "Aleph":{
        name:"Aleph",
        desc:"Alef is a discontinued concurrent programming language, designed as part of the Plan 9 operating system by Phil Winterbottom of Bell Labs. It implemented the channel-based concurrency model of Newsqueak in a compiled, C-like language.",
        href: "https://en.wikipedia.org/wiki/Alef_(programming_language)"
    },
    "AmigaE":{
        name:"AmigaE",
        desc:"Amiga E, or very often simply E, is a programming language created by Wouter van Oortmerssen on the Amiga. He has since moved on to develop the SHEEP programming language for the new AmigaDE platform and the CryScript language (also known as DOG) used during the development of the video game Far Cry.",
        href: "https://en.wikipedia.org/wiki/Amiga_E"
    },
    "APL":{
        name:"APL",
        desc:"APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multidimensional array. It has been an important influence on the development of concept modeling, spreadsheets, functional programming, and computer math packages.",
        href: "https://en.wikipedia.org/wiki/APL_(programming_language)"
    },
    "AppleScript":{
        name:"AppleScript",
        desc:"AppleScript is a scripting language created by Apple Inc. that facilitates automated control over scriptable Mac applications. First introduced in System 7, it is currently included in all versions of macOS as part of a package of system automation tools. The term 'AppleScript' may refer to the language itself, to an individual script written in the language.",
        href: "https://en.wikipedia.org/wiki/AppleScript"
    },
	"AsoectJ":{
        name:"AsoectJ",
        desc:"AspectJ is an aspect-oriented programming (AOP) extension created at PARC for the Java programming language. It is available in Eclipse Foundation open-source projects, both stand-alone and integrated into Eclipse. AspectJ has become a widely used de facto standard for AOP by emphasizing simplicity and usability for end users.",
        href:"https://en.wikipedia.org/wiki/AspectJ"
    },
	"AWK":{
		name:"AWK",
		desc:"AWK is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. It is a standard feature of most Unix-like operating systems. The AWK language is a data-driven scripting language consisting of a set of actions to be taken against streams of textual data.",
		href: "https://en.wikipedia.org/wiki/AWK"
	},
	"B":{
		name:"B",
		desc:"B is a programming language developed at Bell Labs circa 1969. It is the work of Ken Thompson with Dennis Ritchie. B was derived from BCPL, and its name may be a contraction of BCPL. Thompson's coworker Dennis Ritchie speculated that the name might be based on Bon, an earlier, but unrelated, programming language that Thompson designed for use on Multics.",
		href: "https://en.wikipedia.org/wiki/B_(programming_language)"
	},
	"BASIC":{
		name:"BASIC",
		desc:"BASIC is a family of general-purpose, high-level programming languages whose design philosophy emphasizes ease of use. The original version was designed by John G. Kemeny and Thomas E. Kurtz and released at Dartmouth College in 1964. They wanted to enable students in fields other than science and mathematics to use computers.",
		href: "https://en.wikipedia.org/wiki/BASIC"
	},
	"Balerina":{
		name:"Balerina",
		desc:"Ballerina is a general-purpose programming language with features optimized for distributed computing applications. It is easy to write and modify and is suitable for application programmers. It is an open source project started in by architects from WSO2 as code-based alternative to the configuration-based integration tools such as EAI, ESB, and workflow products.",
		href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)"
	},
	"Bash":{
		name:"Bash",
		desc:"GNU Bash or simply Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used widely as the default login shell for most Linux distributions and Apple's macOS Mojave and earlier versions. A version is also available for Windows 10. It is also the default user shell in Solaris 11.",
		href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
	},
	"Betrand":{
		name:"Betrand",
		desc:"Bertrand (named after Bertrand Russell) is a computer programming language for creating constraint programming systems. The language was created by Wm Leler in the mid-1980s as part of his doctoral research. Bertrand has a declarative programming syntax and differentiates itself from other programming languages by use of a technique called augmented term rewriting.",
		href: "https://en.wikipedia.org/wiki/Bertrand_(programming_language)"
	},
	"Befunge":{
		name:"Befunge",
		desc:"Befunge is a stack-based, reflective, esoteric programming language. It differs from conventional languages in that programs are arranged on a two-dimensional grid. 'Arrow' instructions direct the control flow to the left, right, up or down, and loops are constructed by sending the control flow in a cycle. It has been described as a cross between Forth and Lemmings.",
		href: "https://en.wikipedia.org/wiki/Befunge"
	},
	"BETA":{
		name:"BETA",
		desc:"BETA is a pure object-oriented language originating within the 'Scandinavian School' in object-orientation where the first object-oriented language Simula was developed. Among its notable features, it introduced nested classes, and unified classes with procedures into so called patterns.",
		href: "https://en.wikipedia.org/wiki/BETA_(programming_language)"
	},
	"BLISS":{
		name:"BLISS",
		desc:"BLISS is a system programming language developed at Carnegie Mellon University by W. A. Wulf, D. B. Russell, and A. N. Habermann around 1970. It was perhaps the best known systems programming language right up until C made its debut a few years later. Since then, C took off and BLISS faded into obscurity.",
		href: "https://en.wikipedia.org/wiki/BLISS"
	},
	"Boo":{
		name:"Boo",
		desc:"Boo is an object-oriented, statically typed, general-purpose programming language that seeks to make use of the Common Language Infrastructure's support for Unicode, internationalization, and web applications, while using a Python-inspired syntax and a special focus on language and compiler extensibility.",
		href: "https://en.wikipedia.org/wiki/Boo_(programming_language)"
	},
	"C--":{
		name:"C--",
		desc:"C-- is a C-like programming language. Its creators, functional programming researchers Simon Peyton Jones and Norman Ramsey, designed it to be generated mainly by compilers for very high-level languages rather than written by human programmers. Unlike many other intermediate languages, its representation is plain ASCII text, not bytecode or another binary format.",
		href: "https://en.wikipedia.org/wiki/C--"
	},
	"Cache ObjectScript":{
		name:"Cache ObjectScript",
		desc:"Caché ObjectScript is a part of the Caché database system sold by InterSystems. The language is a functional superset of the ANSI-standard MUMPS programming language. Since Caché is at its core a MUMPS implementation, it can run ANSI MUMPS routines with no change.",
		href: "https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript"
	},
	"Caml":{
		name:"Caml",
		desc:"Caml (originally an acronym for Categorical Abstract Machine Language) is a multi-paradigm, general-purpose programming language which is a dialect of the ML programming language family. Caml was developed in France at INRIA and ENS. Caml is statically typed, strictly evaluated, and uses automatic memory management.",
		href: "https://en.wikipedia.org/wiki/Caml"
	},
	"Ceylon":{
		name:"Ceylon",
		desc:"Ceylon is an object-oriented, strongly statically typed programming language with an emphasis on immutability, created by Red Hat. Ceylon programs run on the Java virtual machine (JVM), and can be compiled to JavaScript. The language design focuses on source code readability, predictability, toolability, modularity, and metaprogrammability.",
		href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)"
	},
	"Cg":{
		name:"Cg",
		desc:"Cg is a high-level shading language developed by Nvidia for programming vertex and pixel shaders. Cg is based on the C programming language and although they share the same syntax, some features of C were modified and new data types were added to make Cg more suitable for programming graphics processing units.",
		href: "https://en.wikipedia.org/wiki/Cg_(programming_language)"
	},
	"Charm":{
		name:"Charm",
		desc:"Charm is a computer programming language devised in the early 1990s with similarities to the RTL/2, Pascal and C languages in addition to containing some unique features of its own. The Charm language is defined by a context-free grammar amenable to being processed by recursive descent parser as described in seminal books on compiler design.",
		href: "https://en.wikipedia.org/wiki/Charm_(programming_language)"
	},
	"CHIP-8":{
		name:"CHIP-8",
		desc:"CHIP-8 is an interpreted programming language, developed by Joseph Weisbecker. It was initially used on the COSMAC VIP and Telmac 1800 8-bit microcomputers in the mid-1970s. CHIP-8 programs are run on a CHIP-8 virtual machine. It was made to allow video games to be more easily programmed for these computers.",
		href: "https://en.wikipedia.org/wiki/CHIP-8"
	},
    "ChucK":{
		name:"ChucK",
		desc:"ChucK is a concurrent, strongly timed audio programming language for real-time synthesis, composition, and performance, which runs on Linux, Mac OS X, Microsoft Windows, and iOS. It is designed to favor readability and flexibility for the programmer over other considerations such as raw performance.",
		href: "https://en.wikipedia.org/wiki/ChucK"
	},	
	"Cilk":{
		name:"Cilk",
		desc:"Cilk, Cilk++ and Cilk Plus are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ programming languages, which they extend with constructs to express parallel loops and the fork–join idiom. Cilc was developed in the 1990 at the Massachusetts Institute of Technology.",
		href: "https://en.wikipedia.org/wiki/Cilk"
	},
	"Citrine":{
		name:"Citrine",
		desc:"Citrine is a general-purpose programming language for Cross-platform (multi-platform) operating systems. It focuses on readability and maintainability. Readability is achieved by syntactic and conceptual minimalism. The language is heavily inspired by Smalltalk and Self but has some very distinctive features.",
		href: "https://en.wikipedia.org/wiki/Citrine_(programming_language)"
	},
	"Claire":{
		name:"Claire",
		desc:"Claire is a high-level functional and object-oriented programming language with rule processing abilities. It was designed by Yves Caseau at Bouygues' e-Lab research laboratory, and received its final definition in 2004. Claire's reference implementation, consisting of an interpreter and compiler, was fully open-sourced with the release of 3.3.46 in February 2009.",
		href: "https://en.wikipedia.org/wiki/Claire_(programming_language)"
	},
	"Clean":{
		name:"Clean",
		desc:"Clean is a general-purpose purely functional computer programming language. For much of the language's active development history it was called Concurrent Clean, but this was dropped at some point. Clean is being developed by a group of researchers from the Radboud University in Nijmegen since 1987.",
		href: "https://en.wikipedia.org/wiki/Clean_(programming_language)"
	},
	"Clojure":{
		name:"Clojure",
		desc:"Clojure is a modern, dynamic, and functional dialect of the Lisp programming language on the Java platform. Like other Lisps, Clojure treats code as data and has a Lisp macro system. The current development process is community-driven, overseen by Rich Hickey as its benevolent dictator for life (BDFL).",
		href: "https://en.wikipedia.org/wiki/Clojure"
	},
	"Cobra":{
		name:"Cobra",
		desc:"Cobra is a discontinued general-purpose, object-oriented programming language. Cobra is designed by Charles Esterbrook, and runs on the Microsoft .NET and Mono platforms. It is strongly influenced by Python, C#, Eiffel, Objective-C, and other programming languages. It supports both static and dynamic typing. It has support for unit tests and contracts.",
		href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)"
	},
	"CoffeeScript":{
		name:"CoffeeScript",
		desc:"CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and destructuring assignment. CoffeeScript support is included in Ruby on Rails version 3.1 and Play Framework.",
		href: "https://en.wikipedia.org/wiki/CoffeeScript"
	},
	"Component Pascal":{
		name:"Component Pascal",
		desc:"Component Pascal is a programming language in the tradition of Niklaus Wirth's Pascal, Modula-2, Oberon and Oberon-2. It bears the name of the Pascal programming language and it preserves its heritage, but it is not compatible with Pascal. Instead, it is a minor variant and refinement of Oberon-2 with a more expressive type system and built-in string support.",
		href: "https://en.wikipedia.org/wiki/Component_Pascal"
	},
	"Cool":{
		name:"Cool",
		desc:"Cool is a computer programming language designed by Alexander Aiken for use in an undergraduate compiler course project. While small enough for a one term project, Cool still has many of the features of modern programming languages, including objects, automatic memory management, strong static typing and simple reflection.",
		href: "https://en.wikipedia.org/wiki/Cool_(programming_language)"
	},
	"COWSEL":{
		name:"COWSEL",
		desc:"COWSEL (COntrolled Working SpacE Language) is a programming language designed between 1964 and 1966 by Robin Popplestone. It was based on an RPN form of Lisp combined with some ideas from CPL.COWSEL was initially implemented on a Ferranti Pegasus computer at the University of Leeds and on a Stantec Zebra at the Bradford Institute of Technology.",
		href: "https://en.wikipedia.org/wiki/COWSEL"
	},
	"Crystal":{
		name:"Crystal",
		desc:"Crystal is a general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 300 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded.",
		href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)"
	},
	"Curl":{
		name:"Curl",
		desc:"Curl is a reflective object-oriented programming language for interactive web applications whose goal is to provide a smoother transition between formatting and programming. It makes it possible to embed complex objects in simple documents without needing to switch between programming languages or development platforms.",
		href:"https://en.wikipedia.org/wiki/Curl_(programming_language)"
	},
	"Curry":{
		name:"Curry",
		desc:"Curry is an experimental functional logic programming language, based on the Haskell language. It merges elements of functional and logic programming, including constraint programming integration. It is nearly a superset of Haskell, lacking support mostly for overloading using type classes, which some implementations provide anyway as a language extension, such as the Münster Curry Compiler.",
		href: "https://en.wikipedia.org/wiki/Curry_(programming_language)"
	},
	"Cyclone":{
		name:"Cyclone",
		desc:"The Cyclone programming language is intended to be a safe dialect of the C language. Cyclone is designed to avoid buffer overflows and other vulnerabilities that are possible in C programs, without losing the power and convenience of C as a tool for system programming. Cyclone development was started as a joint project of AT&T Labs Research and Greg Morrisett's group at Cornell in 2001.",
		href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)"
	},
	"Cython":{
		name:"Cython",
		desc:"Cython is a programming language that aims to be a superset of the Python programming language, designed to give C-like performance with code that is written mostly in Python with optional additional C-inspired syntax. Cython is a compiled language that is typically used to generate CPython extension modules.",
		href: "https://en.wikipedia.org/wiki/Cython"
	},
	"D":{
		name: "D",
		desc: "D, also known as Dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is a distinct language.",
		href: "https://en.wikipedia.org/wiki/D_(programming_language)"
	},
	"Dart":{
		name: "Dart",
		desc: "Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript",
		href: "https://en.wikipedia.org/wiki/Dart_(programming_language)"
	},
	"Darwin":{
		name: "Darwin",
		desc: "Darwin is a closed source programming language developed by Gaston Gonnet and colleagues at ETH Zurich. It is used to develop the OMA orthology inference software, which was also initially developed by Gonnet. The language backend consists of the kernel, responsible for performing simple mathematical calculations, for transporting and storing data and for interpreting the user's commands, and the library.",
		href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)"
	},
	"DataFlex":{
		name: "DataFlex",
		desc: "DataFlex is an object-oriented high-level programming language and a fourth generation visual tool 4GL for developing Windows, web and mobile software applications on one framework-based platform. It was introduced and developed by Data Access Corporation beginning in 1982.",
		href: "https://en.wikipedia.org/wiki/DataFlex"
	},
	"Datalog":{
		name: "Datalog",
		desc: "Datalog is a declarative logic programming language that syntactically is a subset of Prolog. It is often used as a query language for deductive databases. In recent years, Datalog has found new application in data integration, information extraction, networking, program analysis, security, and cloud computing.",
		href: "https://en.wikipedia.org/wiki/Datalog"
	},
	"DIBOL":{
		name: "DIBOL",
		desc: "DIBOL or Digital's Business Oriented Language is a general-purpose, procedural, imperative programming language, designed for use in Management Information Systems (MIS) software development. It has a syntax similar to FORTRAN and BASIC, along with BCD arithmetic. It shares the COBOL program structure of data and procedure divisions.",
		href: "https://en.wikipedia.org/wiki/DIBOL"
	},
	"Dog":{
		name: "Dog",
		desc: "Dog is a high-level programming language created by Kamvar at MIT Media Lab. It is designed to facilitate easier creation of social computing applications, and is designed to facilitate programming in a natural language and allow newcomers the chance to learn programming more easily.",
		href: "https://en.wikipedia.org/wiki/Sepandar_Kamvar#%22Dog%22_programming_language"
	},
	"Dylan":{
		name: "Dylan",
		desc: "Dylan is a multi-paradigm programming language that includes support for functional and object-oriented programming (OOP), and is dynamic and reflective while providing a programming model designed to support generating efficient machine code, including fine-grained control over dynamic and static behaviors.",
		href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)"
	},
	"E":{
		name: "E",
		desc: "E is an object-oriented programming language for secure distributed computing, created by Mark S. Miller, Dan Bornstein, and others at Electric Communities in 1997. E is mainly descended from the concurrent language Joule and from Original-E, a set of extensions to Java for secure distributed programming.",
		href: "https://en.wikipedia.org/wiki/E_(programming_language)"
	},
	"ECMAScript":{
		name: "ECMAScript",
		desc: "ECMAScript is a scripting-language specification standardized by Ecma International. It was created to standardize JavaScript to help foster multiple independent implementations. JavaScript has remained the most widely used implementation of ECMAScript since the standard was first published, with other implementations including JScript and ActionScript.",
		href: "https://en.wikipedia.org/wiki/ECMAScript"
	},
	"Eiffel":{
		name: "Eiffel",
		desc: "Eiffel is an object-oriented programming language designed by Bertrand Meyer (an object-orientation proponent and author of Object-Oriented Software Construction) and Eiffel Software. Meyer conceived the language in 1985 with the goal of increasing the reliability of commercial software development.",
		href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)"
	},
	"Elixir":{
		name: "Elixir",
		desc: "Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM). Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications. Elixir also provides productive tooling and an extensible design.",
		href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)"
	},
	"Elm":{
		name: "Elm",
		desc: "Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces. Elm is purely functional, and is developed with emphasis on usability, performance, and robustness. It advertises no runtime exceptions in practice, made possible by the Elm compiler's static type checking.",
		href: "https://en.wikipedia.org/wiki/Elm_(programming_language)"
	},
	"Erlang":{
		name: "Erlang",
		desc: "Erlang is a general-purpose, concurrent, functional programming language, and a garbage-collected runtime system. The term Erlang is used interchangeably with Erlang/OTP, or Open Telecom Platform, which consists of the Erlang runtime system, several ready-to-use components mainly written in Erlang, and a set of design principles for Erlang programs.",
		href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)"
	},
	"Euphoria":{
		name: "Euphoria",
		desc: "Euphoria is a programming language originally created by Robert Craig of Rapid Deployment Software in Toronto, Ontario, Canada. Initially developed (though not publicly released) on the Atari ST, the first commercial release was for the 16-bit DOS platform and was proprietary.",
		href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)"
	},
	"F":{
		name: "F",
		desc: "F is a modular, compiled, numeric programming language, designed for scientific programming and scientific computation. F was developed as a modern Fortran, thus making it a subset of Fortran 95. It combines both numerical and data abstraction features from these languages.",
		href: "https://en.wikipedia.org/wiki/F_(programming_language)"
	},
	"F#":{
		name: "F#",
		desc: "F# is a general purpose, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. F# is most often used as a cross-platform Common Language Infrastructure language, but it can also generate JavaScript and graphics processing unit code.",
		href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)"
	},
	"F*":{
		name: "F*",
		desc: "F* is a functional programming language inspired by ML and aimed at program verification. Its type system includes dependent types, monadic effects, and refinement types. This allows expressing precise specifications for programs, including functional correctness and security properties.",
		href: "https://en.wikipedia.org/wiki/F*_(programming_language)"
	},
	"Fantom":{
		name: "Fantom",
		desc: "Fantom is a general purpose object-oriented programming language created by Brian and Andy Frank that runs on the Java Runtime Environment, JavaScript, and the .NET Common Language Runtime (.NET support is considered 'prototype' status). Its primary design goal is to provide a standard library API",
		href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)"
	},
	"Forth":{
		name: "Forth",
		desc: "Forth is an imperative stack-based computer programming language and environment originally designed by Chuck Moore. Language features include structured programming, reflection (the ability to examine and modify program structure during execution), concatenative programming (functions are composed with juxtaposition) and extensibility.",
		href: "https://en.wikipedia.org/wiki/Forth_(programming_language)"
	},
	"Fortress":{
		name: "Fortress",
		desc: "Fortress is a discontinued experimental programming language for high-performance computing, created by Sun Microsystems with funding from DARPA's High Productivity Computing Systems project. One of the language designers was Guy L. Steele Jr., whose previous work includes Scheme, Common Lisp, and Java.",
		href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)"
	},
	"F-Script":{
		name: "F-Script",
		desc: "F-Script is an object-oriented scripting programming language for Apple's macOS operating system developed by Philippe Mougin. F-Script is an interactive language based on Smalltalk, using macOS's native Cocoa API. F-Script is based on a pure object paradigm: every entity manipulated within the language is an object.",
		href: "https://en.wikipedia.org/wiki/F-Script_(programming_language)"
	},
	"Genie":{
    name:"Genie",
    desc:"Genie is a modern, general-purpose high-level programming language in development since 2008. It was designed as an alternative, simpler and cleaner dialect for the Vala compiler, while preserving the same functionality of the Vala language.",
    href:"https://en.wikipedia.org/wiki/Genie_(programming_language)"
	},
	"Go!":{
	    name:"Go!",
	    desc:"Go! is an agent-based programming language in the tradition of logic-based programming languages like Prolog. It was introduced in a 2003 paper by Francis McCabe and Keith Clark.",
	    href:"https://en.wikipedia.org/wiki/Go!_(programming_language)"
	},
	"Gödel":{
	    name:"Gödel",
	    desc:"Gödel is a declarative, general-purpose programming language that adheres to the logic programming paradigm. It is a strongly typed language, the type system being based on many-sorted logic with parametric polymorphism. It is named after logician Kurt Gödel.",
	    href:"https://en.wikipedia.org/wiki/G%C3%B6del_(programming_language)"
	},
	"Golo":{
	    name:"Golo",
	    desc:"Golo is computer software, a programming language for the Java virtual machine (JVM). It is simple, with dynamic, weak typing. It was created in 2012 as part of the research activities of the DynaMid group of the Centre of Innovation in Telecommunications and Integration of service (CITI) Laboratory at Institut national des sciences appliquées de Lyon (INSA).",
	    href:"https://en.wikipedia.org/wiki/Golo_(programming_language)"
	},
	"Gosu":{
	    name:"Gosu",
	    desc:"Gosu is a statically-typed general-purpose programming language that runs on the Java Virtual Machine. Its influences include Java, C#, and ECMAScript. Development of Gosu began in 2002 internally for Guidewire Software, and the language saw its first community release in 2010 under the Apache 2 license.",
	    href:"https://en.wikipedia.org/wiki/Gosu_(programming_language)"
	},
	"GRASS":{
	    name:"GRASS",
	    desc:"GRASS (GRAphics Symbiosis System) is a programming language created to script 2D vector graphics animations. GRASS was similar to BASIC in syntax, but added numerous instructions for specifying 2D object animation, including scaling, translation, rotation and color changes over time.",
	    href:"https://en.wikipedia.org/wiki/GRASS_(programming_language)"
	},
	"Groovy":{
    	name:"Groovy",
    	desc:"Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform. It is both a static and dynamic language with features similar to those of Python, Ruby, and Smalltalk. It can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode, and interoperates seamlessly with other Java code and libraries.",
    	href:"https://en.wikipedia.org/wiki/Genie_(programming_language)"
	},
	"Halide":{
		name: "Halide",
		desc: "Halide is a computer programming language designed for writing digital image processing code that takes advantage of memory locality, vectorized computation and multi-core CPUs and GPUs. Halide is implemented as an internal domain-specific language (DSL) in C++.",
		href: "https://en.wikipedia.org/wiki/Halide_(programming_language)"
	},
	"Haxe":{
		name: "Haxe",
		desc: "Haxe is an open source high-level cross-platform multi-paradigm programming language and compiler that can produce applications and source code, for many different computing platforms, from one code-base. It is free and open-source software, distributed under the GNU General Public License version 2, and the standard library under the MIT License.",
		href: "https://en.wikipedia.org/wiki/Haxe"
	},
	"Hollywood":{
		name: "Hollywood",
		desc: "Hollywood is a commercially distributed programming language developed by Andreas Falkenhahn (Airsoft Softwair) which mainly focuses on the creation of multimedia-oriented applications. Hollywood is available for AmigaOS, MorphOS, WarpOS, AROS, Windows, macOS, Linux, Android, and iOS.",
		href: "https://en.wikipedia.org/wiki/Hollywood_(programming_language)"
	},
	"Hop":{
		name: "Hop",
		desc: "Hop is a Lisp-like programming language by Manuel Serrano for web 2.0 and also the name of the web broker (server and proxy) that implements this language. It is written in Bigloo Scheme. It is a project funded by INRIA. Hop is a stratified language, which means that a single program file contains instructions for both the server and the client.",
		href: "https://en.wikipedia.org/wiki/Hop_(software)"
	},
	"Hopscotch":{
		name: "Hopscotch",
		desc: "Hopscotch is a visual programming language developed by Hopscotch Technologies, designed to allow young or beginner programmers to develop simple projects. Its simple UI allows its users to drag and drop blocks to create scripts that can be played when activated. Although the language is easy to use for simple programming, it lacks the power to be used for more complex programs.",
		href: "https://en.wikipedia.org/wiki/Hopscotch_(programming_language)"
	},
	"Hume":{
		name: "Hume",
		desc: "Hume is a functionally based programming language developed at the University of St Andrews and Heriot-Watt University in Scotland since the year 2000. The language name is both an acronym meaning 'Higher-order Unified Meta-Environment' and an honorific to the 18th Century philosopher David Hume.",
		href: "https://en.wikipedia.org/wiki/Hume_(programming_language)"
	},
	"Io":{
		name:"Io",
		desc:"Io is a pure object-oriented programming language inspired by Smalltalk, Self, Lua, Lisp, Act1, and NewtonScript. Io has a prototype-based object model similar to the ones in Self and NewtonScript, eliminating the distinction between instance and class. Like Smalltalk, everything is an object and it uses dynamic typing.",
		href:"https://en.wikipedia.org/wiki/Io_(programming_language)"
	},
	"Icon":{
		name:"Icon",
		desc:"Icon is a very high-level programming language featuring goal-directed execution and many facilities for managing strings and textual patterns. It is related to SNOBOL and SL5, string processing languages. Icon is not object-oriented, but an object-oriented extension called Idol was developed in 1996 which eventually became Unicon.",
		href:"https://en.wikipedia.org/wiki/Icon_(programming_language)"
	},
	"IDL":{
		name:"IDL",
   		desc:"IDL is a programming language used for data analysis. It is popular in particular areas of science, such as astronomy, atmospheric physics and medical imaging. IDL shares a common syntax with PV-Wave and originated from the same codebase, though the languages have subsequently diverged in detail",
    	href:"https://en.wikipedia.org/wiki/IDL_(programming_language)"
	},
	"Idris":{
		name:"Idris",
   		desc:"Idris is a purely-functional programming language with dependent types, optional lazy evaluation, and features such as a totality checker. Idris may be used as a proof assistant, but it is designed to be a general-purpose programming language similar to Haskell. The Idris type system is similar to Agda's, and proofs are similar to Coq's, including tactics via elaborator reflection.",
    	href:"https://en.wikipedia.org/wiki/Idris_(programming_language)"
	},
	"J":{
		name: "J",
		desc: "The J programming language, developed in the early 1990s by Kenneth E. Iverson and Roger Hui, is an array programming language based primarily on APL (also by Iverson). To avoid repeating the APL special-character problem, J uses only the basic ASCII character set, resorting to the use of the dot and colon as inflections to form short words similar to digraphs.",
		href: "https://en.wikipedia.org/wiki/J_(programming_language)"
	},
	"J#":{
		name: "J#",
		desc: "Visual J# (pronounced 'jay-sharp') is an implementation of the J# programming language that was a transitional language for programmers of Java and Visual J++ languages, so they could use their existing knowledge and applications with the .NET Framework. It was introduced in 2002 and discontinued in 2007, with support for the final release of the product continuing until October 2017.",
		href: "https://en.wikipedia.org/wiki/J_Sharp"
	},
	"J++":{
		name: "J++",
		desc: "Visual J++ (pronounced 'Jay Plus Plus') is Microsoft's discontinued implementation of Java. Syntax, keywords, and grammatical conventions were the same as Java's. It was introduced in 1996 and discontinued in January 2004, replacing it to a certain extent with J# and C#.",
		href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B"
	},
	"JADE":{
		name: "JADE",
		desc: "JADE is a proprietary object-oriented software development and deployment platform product from the New Zealand-based Jade Software Corporation, first released in 1996. It consists of the JADE programming language, Integrated development environment and debugger, integrated application server and object database management system.",
		href: "https://en.wikipedia.org/wiki/JADE_(programming_language)"
	},
	"JavaFX Script":{
		name: "JavaFX Script",
		desc: "JavaFX Script was a scripting language designed by Sun Microsystems, forming part of the JavaFX family of technologies on the Java Platform. JavaFX targeted the Rich Internet Application domain (competing with Adobe Flex and Microsoft Silverlight), specializing in rapid development of visually rich applications for the desktop and mobile markets",
		href: "https://en.wikipedia.org/wiki/JavaFX_Script"
	},
	"Jess":{
		name: "Jess",
		desc: "Jess is a rule engine for the Java platform that was developed by Ernest Friedman-Hill of Sandia National Labs. It is a superset of the CLIPS programming language. It was first written in late 1995. The language provides rule-based programming for the automation of an expert system, and is frequently termed as an expert system shell. ",
		href: "https://en.wikipedia.org/wiki/Jess_(programming_language)"
	},
	"Joy":{
		name: "Joy",
		desc: "The Joy programming language in computer science is a purely functional programming language that was produced by Manfred von Thun of La Trobe University in Melbourne, Australia. Joy is based on composition of functions rather than lambda calculus. It has turned out to have many similarities to Forth, due not to design but to a sort of parallel evolution and convergence.",
		href: "https://en.wikipedia.org/wiki/Joy_(programming_language)"
	},
	"Julia":{
		name: "Julia",
		desc: "Julia is a high-level, high-performance, dynamic programming language. While it is a general purpose language and can be used to write any application, many of its features are well-suited for high-performance numerical analysis and computational science. Distinctive aspects of Julia's design include a type system with parametric polymorphism in a dynamic programming language.",
		href: "https://en.wikipedia.org/wiki/Julia_(programming_language)"
	},
	"Jython":{
		name: "Jython",
		desc: "Jython is an implementation of the Python programming language designed to run on the Java platform. The implementation was formerly known as JPython until 1999. Jython programs can import and use any Java class. Except for some standard modules, Jython programs use Java classes instead of Python modules",
		href: "https://en.wikipedia.org/wiki/Jython"
	},
	"Karel":{
    	name:"Karel",
    	desc:"Karel is an educational programming language for beginners, created by Richard E. Pattis in his book Karel The Robot: A Gentle Introduction to the Art of Programming. Pattis used the language in his courses at Stanford University, California. The language is named after Karel Čapek, a Czech writer who introduced the word robot.",
    	href:"https://en.wikipedia.org/wiki/Karel_(programming_language)"
	},
	"Klerer-May":{
	    name:"Klerer-May",
	    desc:"The Klerer–May System is a programming language developed in the mid-1960s, oriented to numerical scientific programming, whose most notable feature is its two-dimensional syntax based on traditional mathematical notation.",
	    href:"https://en.wikipedia.org/wiki/Klerer%E2%80%93May_System"
	},
	"Kojo":{
	    name:"Kojo",
	    desc:"Kojo is a programming language and integrated development environment (IDE) for computer programming and learning. It has many different features that enable playing, exploring, creating, and learning in the areas of computer programming, mental skills, (interactive) math, graphics, art, music, science, animation, games, and electronics. Kojo draws ideas from the programming languages Logo and Processing.",
	    href:"https://en.wikipedia.org/wiki/Kojo_(learning_environment)"
	},
	"KRC":{
	    name:"KRC",
	    desc:"KRC (Kent Recursive Calculator) is a lazy functional language developed by David Turner from November 1979 to October 1981 based on SASL, with pattern matching, guards and ZF expressions (now more usually called list comprehensions).",
	    href:""
	},
	"Kv":{
	    name:"Kv",
	    desc:"The Kivy language (Kv) is a language dedicated to describing user interface and interactions. As with other user interface markup languages, it is possible to easily create a whole UI and attach interaction. For example, to create a Loading dialog that includes a file browser, and a Cancel / Load button, one could first create the base widget in Python and then construct the UI in Kv.",
	    href:"https://en.wikipedia.org/wiki/Kivy_(framework)#Kv_language"
	},
	"Lasso":{
		name:"Lasso",
		desc:"Lasso is an application server and server management interface used to develop internet applications and is a general-purpose, high-level programming language. Originally a web datasource connection tool, for Filemaker and later included in Apple Computer's FileMaker 4.0 and Claris Homepage as CDML.",
		href:"https://en.wikipedia.org/wiki/Lasso_(programming_language)"
	},
	"Limbo":{
		name: "Limbo",
		desc:"Limbo is a programming language for writing distributed systems and is the language used to write applications for the Inferno operating system. It was designed at Bell Labs by Sean Dorward, Phil Winterbottom, and Rob Pike. The Limbo compiler generates architecture-independent object code which is then interpreted by the Dis virtual machine or compiled just before runtime to improve performance. ",
		href:"https://en.wikipedia.org/wiki/Limbo_(programming_language)"
	},
	"Lingo":{
		name: "Lingo",
		desc:"Lingo is a verbose object-oriented scripting language developed by John H. Thompson for use in Adobe Director. Lingo is used to develop desktop application software, interactive kiosks, CD-ROMs and Adobe Shockwave content. Lingo is the primary programming language on the Adobe Shockwave platform, which dominated the interactive multimedia product market during the 1990s.",
		href:"https://en.wikipedia.org/wiki/Lingo_(programming_language)"
	},
	"Lisp":{
		name: "Lisp",
		desc:"Lisp (historically LISP) is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in 1958, Lisp is the second-oldest high-level programming language in widespread use today. Only Fortran is older, by one year.",
		href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)"
	},
	"Lite-C":{
		name: "Lite-C",
		desc:"Lite-C is a programming language for multimedia applications and personal computer games, using a syntax subset of the C language with some elements of the C++ language. Its main difference to C is the native implementation of multimedia and computer game related objects like sounds, images, movies, GUI elements, 2D and 3D models...",
		href:"https://en.wikipedia.org/wiki/Lite-C"
	},
	"Logtalk":{
		name: "Logtalk",
		desc:"Logtalk is an object-oriented logic programming language that extends and leverages the Prolog language with a feature set suitable for programming in the large. It provides support for encapsulation and data hiding, separation of concerns and enhanced code reuse. Logtalk uses standard Prolog syntax with the addition of a few operators and directives.",
		href:"https://en.wikipedia.org/wiki/Logtalk"
	},
	"LiveScript":{
		name: "LiveScript",
		desc:"LiveScript is a functional programming language that compiles to JavaScript. It was created by Jeremy Ashkenas—the creator of CoffeeScript—along with Satoshi Muramaki, George Zahariev, and many others. For a brief period in the 1990s, LiveScript was the name of JavaScript.",
		href:"https://en.wikipedia.org/wiki/LiveScript"
	},

	"Lua":{
		name: "Lua",
		desc:"Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Lua is cross-platform, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C API to embed it into applications.",
		href:"https://en.wikipedia.org/wiki/Lua_(programming_language)"
	},
	"Lustre":{
		name:"Lustre",
		desc:"Lustre is a formally defined, declarative, and synchronous dataflow programming language for programming reactive systems. It began as a research project in the early 1980s. A formal presentation of the language can be found in the 1991 Proceedings of the IEEE. In 1993 it progressed to practical, industrial use in a commercial product as the core language of the industrial environment SCADE.",
		href:"https://en.wikipedia.org/wiki/Lustre_(programming_language)"
	},
	"M#":{
		name:"M#",
		desc:"M# (pronounced em sharp) is a code generation tool and a domain-specific language that can be used to create websites and web applications. It can translate entities and page definitions to ASP.NET Web Forms and MVC and C# code which in turn form the user interface and business logic layer of the application.",
		href:"https://en.wikipedia.org/wiki/M_Sharp"
	},
	"Mapple":{
		name:"Mapple",
		desc:"Maple is a symbolic and numeric computing environment as well as a multi-paradigm programming language. It covers several areas of technical computing, such as symbolic mathematics, numerical analysis, data processing, visualization, and others. A toolbox, MapleSim, adds functionality for multidomain physical modeling and code generation.",
		href:"https://en.wikipedia.org/wiki/Maple_(software)"
	},
	"MATLAB":{
		name:"MATLAB",
		desc:"MATLAB (matrix laboratory) is a multi-paradigm numerical computing environment and proprietary programming language developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages.",
		href:"https://en.wikipedia.org/wiki/MATLAB"
	},
	"Maya":{
		name:"Maya",
		desc:"The Maya Embedded Language (MEL) is a scripting language used to simplify tasks in Autodesk's 3D Graphics Software Maya. Most tasks that can be achieved through Maya's GUI can be achieved with MEL, as well as certain tasks that are not available from the GUI. MEL offers a method of speeding up complicated or repetitive tasks, as well as allowing users to redistribute a specific set of commands to others that may find it useful.",
		href:"https://en.wikipedia.org/wiki/Maya_Embedded_Language"
	},
	"Mercury":{
		name:"Mercury",
		desc:"Mercury is a functional logic programming language made for real-world uses. The first version was developed at the University of Melbourne, Computer Science department, by Fergus Henderson, Thomas Conway, and Zoltan Somogyi, under Somogyi's supervision, and released on April 8, 1995. Mercury is a purely declarative logic programming language.",
		href:"https://en.wikipedia.org/wiki/Mercury_(programming_language)"
	},
	"Mirah":{
		name:"Mirah",
		desc:"Mirah (formerly Duby) is a programming language based on Ruby language syntax, local type inference, hybrid static–dynamic type system, and a pluggable compiler toolchain. Mirah was created by Charles Oliver Nutter to be a 'Ruby-like' language, probably a subset of Ruby syntax, that [could] compile to solid, fast, idiomatic JVM bytecode.",
		href:"https://en.wikipedia.org/wiki/Mirah_(programming_language)"
	},
	"Miranda":{
		name:"Miranda",
		desc:"Miranda is a lazy, purely functional programming language designed by David Turner as a successor to his earlier programming languages SASL and KRC, using some concepts from ML and Hope. It was produced by Research Software Ltd. of England (which holds a trademark on the name Miranda) and was the first purely functional language to be commercially supported.",
		href:"https://en.wikipedia.org/wiki/Miranda_(programming_language)"
	},
	"ML":{
		name:"ML",
		desc:"ML is a general-purpose functional programming language. It has roots in Lisp, and has been characterized as 'Lisp with types'. ML is a statically-scoped functional programming language like Scheme. It is known for its use of the polymorphic Hindley–Milner type system, which automatically assigns the types of most expressions without requiring explicit type annotations, and ensures type safety – there is a formal proof that a well-typed ML program does not cause runtime type errors",
		href:"https://en.wikipedia.org/wiki/ML_(programming_language)"
	},
	"Modelica":{
		name:"Modelica",
		desc:"Modelica is an object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems, e.g., systems containing mechanical, electrical, electronic, hydraulic, thermal, control, electric power or process-oriented subcomponents. The free Modelica language is developed by the non-profit Modelica Association.",
		href:"https://en.wikipedia.org/wiki/Modelica"
	},
	"MOO":{
		name:"MOO",	
		desc:"The MOO programming language is a relatively simple programming language used to support the MOO Server. It is dynamically typed and uses a prototype-based object-oriented system, with syntax roughly derived from the Ada school of programming languages. Stephen White authored the first MOO Server and language in 1990 using C. Over the course of the year, Pavel Curtis joined the project, releasing the first version of the LambdaMOO Server",
		href:"https://en.wikipedia.org/wiki/MOO_(programming_language)"
	},
	"MPD":{
		name:"MPD",
		desc:"MPD is a concurrent programming language whose syntax is derived from the one used in the book Foundations of Multithreaded, Parallel, and Distributed Programming. The name lists the distinguishing features of the language, namely that it supports all three of these concurrent programming techniques. MPD is implemented as a variant of the SR programming language. It has a different parser, but it uses the same intermediate form and run-time system as SR.",
		href:"https://en.wikipedia.org/wiki/MPD_(programming_language)"
	},
	"NekoVM":{
		name: "NekoVM",
		desc:"NekoVM is a virtual machine developed by Nicolas Cannasse as part of research and development (R&D) efforts at two indie video game firms in Bordeaux, France: first at Motion Twin and then at Shiro Games. NekoVM's native language is the bytecode for a high-level dynamically typed programming language called <Neko class=''></Neko>",
		href:"https://en.wikipedia.org/wiki/NekoVM"
	},
	"Nemerle":{
		name: "Nemerle",
		desc:"Nemerle is a general-purpose, high-level, statically typed programming language designed for platforms using the Common Language Infrastructure. It offers functional, object-oriented and imperative features. It has a simple C#-like syntax and a powerful metaprogramming system. In June 2012, the core developers of Nemerle were hired by the Czech software development company JetBrains.",
		href:"https://en.wikipedia.org/wiki/Nemerle"
	},
	"Newspeak":{
		name: "Newspeak",
		desc:"Newspeak is a programming language and platform in the tradition of Smalltalk and Self being developed by a team led by Gilad Bracha. The platform includes an IDE, a GUI library, and standard libraries. Starting in 2006, Cadence Design Systems funded its development and employed the main contributors, but ceased funding in January 2009.",
		href:"https://en.wikipedia.org/wiki/Newspeak_(programming_language)"
	},	
	"Nim":{
		name: "Nim",
		desc:"Nim is an imperative, general-purpose, multi-paradigm, statically typed, systems, compiled programming language designed and developed by Andreas Rumpf. It is designed to be 'efficient, expressive, and elegant', supporting metaprogramming, functional, message passing, procedural, and object-oriented programming styles by providing several features such as compile time code generation...",
		href:"https://en.wikipedia.org/wiki/Nim_(programming_language)"
	},
	"NXC":{
		name: "NXC",
		desc:"Not eXactly C, or NXC, is a high-level programming language for the Lego Mindstorms NXT designed by John Hansen in 2006. NXC, which is short for Not eXactly C, is based on Next Byte Codes, an assembly language. NXC has a syntax like C. The IDE for NXC is the Bricx Command Center. The NXC compiler is available under the Mozilla Public License. A sample code is as shown below:",
		href:"https://en.wikipedia.org/wiki/Not_eXactly_C"
	},
	"Nu":{
		name: "Nu",
		desc:"Nu is an interpreted object-oriented programming language, with a Lisp-like syntax, created by Tim Burks as an alternative scripting language to program OS X through its Cocoa application programming interface (API). Implementations also exist for iPhone and Linux. The language was first announced at C4, a conference for indie Mac developers held in August 2007.",
		href:"https://en.wikipedia.org/wiki/Nu_(programming_language)"
	},
	"NWScript":{
		name: "NWScript",
		desc:"NWScript is the scripting language developed by BioWare for the role-playing video game Neverwinter Nights. It is based on the C programming language and is implemented in the Aurora toolset. Neverscript, an open source 3rd party editor, has been created for the Mac OS X and Linux versions of Neverwinter Nights because the Aurora toolset has not been ported to those platforms.",
		href:"https://en.wikipedia.org/wiki/NWScript"
	},
	"o:XML":{
    	name:"o:XML",
    	desc:"o:XML is an open source, dynamically typed, general-purpose object-oriented programming language based on XML-syntax. It has threads, exception handling, regular expressions and namespaces. Additionally o:XML has an expression language very similar to XPath that allows functions to be invoked on nodes and node sets.",
    	href:"https://en.wikipedia.org/wiki/O:XML"
	},
	"Oak":{
	    name:"Oak",
	    desc:"Oak is a discontinued programming language created by James Gosling in 1991, initially for Sun Microsystems' set-top box project. The language later evolved to become Java.The name Oak was used by Gosling after an oak tree that stood outside his office.",
	    href:"https://en.wikipedia.org/wiki/Oak_(programming_language)"
	},

	"Oberon":{
	    name:"Oberon",
	    desc:"Oberon is a general-purpose programming language first published in 1987 by Niklaus Wirth and the latest member of the Wirthian family of ALGOL-like languages (Euler, Algol-W, Pascal, Modula, and Modula-2). Oberon was the result of a concentrated effort to increase the power of Modula-2, the direct successor of Pascal, and simultaneously to reduce its complexity.",
	    href:"https://en.wikipedia.org/wiki/Oberon_(programming_language)"
	},

	"OBJ2":{
	    name:"OBJ2",
	    desc:"OBJ2 is a programming language with Clear-like parametrised modules and a functional system based on equations. It is a member of the OBJ family of languages.",
	    href:"https://en.wikipedia.org/wiki/OBJ2"
	},


	"Obliq":{
	    name:"Obliq",
	    desc:"Obliq is an interpreted, object-oriented programming language designed to make distributed, and locally multithreaded, computing simpler and easier to program, while providing program safety and an implicit type system. The interpreter is written in Modula-3, and provides Obliq with full access to Modula-3's network objects abilities.",
	    href:"https://en.wikipedia.org/wiki/Obliq"
	},

	"Ocaml":{
	    name:"Ocaml",
	    desc:"OCaml is a general-purpose, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
	    href:"https://en.wikipedia.org/wiki/OCaml"
	},

	"Occam":{
	    name:"Occam",
	    desc:"occam is a programming language which is concurrent and builds on the communicating sequential processes (CSP) process algebra, and shares many of its features. It is named after philosopher William of Ockham after whom Occam's razor is named.",
	    href:"https://en.wikipedia.org/wiki/Occam_(programming_language)"
	},

	"OmniMark":{
	    name:"OmniMark",
	    desc:"OmniMark is a fourth-generation programming language used mostly in the publishing industry. It is currently a proprietary software product of Stilo International. As of September 2018 the most recent release of OmniMark was 10.1.2, dated April 2016.",
	    href:"https://en.wikipedia.org/wiki/OmniMark"
	},

	"Opa":{
	    name:"Opa",
	    desc:"Opa is an open-source programming language for developing scalable web applications.It can be used for both client-side and server-side scripting, where complete programs are written in Opa and subsequently compiled to Node.js on the server and JavaScript on the client, with the compiler automating all communication between the two.",
	    href:"https://en.wikipedia.org/wiki/Opa_(programming_language)"
	},

	"Opal":{
	    name:"Opal",
	    desc:"OPAL is a functional programming language first developed at the Technical University of Berlin.",
	    href:"https://en.wikipedia.org/wiki/Opal_(programming_language)"
	},
	"Oxygene":{
	    name:"Oxygene",
	    desc:"Oxygene is a programming language developed by RemObjects Software for Microsoft's Common Language Infrastructure, the Java Platform and Cocoa. Oxygene based on Delphi's Object Pascal, but also has influences from C#, Eiffel, Java, F# and other languages.",
	    href:"https://en.wikipedia.org/wiki/Oxygene_(programming_language)"
	},
	"Orwell":{
	    name:"Orwel",
	    desc:"Orwell is a small, lazy-evaluation functional programming language implemented principally by Martin Raskovsky and first released in 1984 by Philip Wadler during his time as a Research Fellow in the Programming Research Group, part of the Oxford University Computing Laboratory.",
	    href:"https://en.wikipedia.org/wiki/Orwell_(programming_language)"
	},
	"OpenVera":{
	    name:"OpenVera",
	    desc:"OpenVera is a hardware verification language developed and managed by Synopsys. OpenVera is an interoperable, open hardware verification language for testbench creation. The OpenVera language was used as the basis for the advanced verification features in the IEEE Std. 1800 SystemVerilog standard, for the benefit of the entire verification community including companies in the semiconductor, systems, IP and EDA industries along with verification services.",
	    href:"https://en.wikipedia.org/wiki/OpenVera"
	},
	"OPL":{
	    name:"OPL",
	    desc:"OPL is an embedded programming language for portable devices that run the Symbian Operating System.",
	    href:"https://en.wikipedia.org/wiki/Open_Programming_Language"
	},
	"P":{
	    name:"P",
	    desc:"P is a programming language for asynchronous event-driven programming and the IoT that was developed by Microsoft and University of California, Berkeley.P enables programmers to specify systems consisting of a collection of state machines that communicate asynchronously in terms of events.",
	    href:"https://en.wikipedia.org/wiki/P_(programming_language)"
	},
	"POP-11":{
	    name:"POP-11",
	    desc:"POP-11 is a reflective, incrementally compiled programming language with many of the features of an interpreted language. It is the core language of the Poplog programming environment developed originally by the University of Sussex, and recently in the School of Computer Science at the University of Birmingham, which hosts the main Poplog website. There is now also a Github Poplog site with the core source files.",
	    href:"https://en.wikipedia.org/wiki/POP-11"
	},
	"POP-2":{
	    name:"POP-2",
	    desc:"POP-2 is a programming language developed around 1970 from the earlier language POP-1 (developed by Robin Popplestone in 1968, originally named COWSEL) by Robin Popplestone and Rod Burstall at the University of Edinburgh. It drew roots from many sources: the languages LISP and ALGOL 60, and theoretical ideas from Peter J. Landin.",
	    href:"https://en.wikipedia.org/wiki/POP-2"
	},
	"Prolog":{
	    name:"Prolog",
	    desc:"Prolog is a logic programming language associated with artificial intelligence and computational linguistics. Prolog has its roots in first-order logic, a formal logic, and unlike many other programming languages, Prolog is intended primarily as a declarative programming language: the program logic is expressed in terms of relations, represented as facts and rules. A computation is initiated by running a query over these relations.",
	    href:"https://en.wikipedia.org/wiki/Prolog"
	},
	"P4":{
	    name:"P4",
	    desc:"P4 is a programming language for controlling packet forwarding planes in networking devices, such as routers and switches. In contrast to a general purpose language such as C or Python, P4 is a domain-specific language with a number of constructs optimized for network data forwarding.",
	    href:"https://en.wikipedia.org/wiki/P4_(programming_language)"
	},
	"ParaSail":{
	    name:"ParaSail",
	    desc:"Parallel Specification and Implementation Language (ParaSail) is an object-oriented parallel programming language. Its design and ongoing implementation is described in a blog and on its official website.",
	    href:"https://en.wikipedia.org/wiki/ParaSail_(programming_language)"
	},
	"PCASTL":{
	    name:"PCASTL",
	    desc:"The PCASTL is an interpreted high-level programming language. It was created in 2008 by Philippe Choquette. The PCASTL is designed to ease the writing of self-modifying code. The language has reserved words parent and childset to access the nodes of the syntax tree of the currently written code.",
	    href:"https://en.wikipedia.org/wiki/PCASTL"
	},
	"PeopleCode":{
	    name:"PeopleCode",
	    desc:"PeopleCode is a proprietary object-oriented programming language used to express business logic for PeopleSoft applications. Syntactically, PeopleCode is similar to other programming languages, and can be found in both loosely-typed and strongly-typed forms.",
	    href:"https://en.wikipedia.org/wiki/PeopleCode"
	},
	"PEARL":{
	    name:"PEARL",
	    desc:"PEARL, or Process and experiment automation realtime language, is a computer programming language designed for multitasking and real-time programming. Being a high-level language, it is fairly cross-platform. Since 1977, the language has been going under several standardization steps by the Deutsches Institut für Normung. The current version is PEARL-90, which was standardized in 1998 as DIN 66253-2.",
	    href:"https://en.wikipedia.org/wiki/PEARL_(programming_language)"
	},
	"Pharo":{
	    name:"Pharo",
	    desc:"Pharo is an open source dynamic and reflective language which is inspired by the programming language Smalltalk. Pharo offers several live programming features such as immediate object manipulation, live update and hot recompiling.",
	    href:"https://en.wikipedia.org/wiki/Pharo"
	},
	"Pico":{
	    name:"Pico",
	    desc:"Pico is a programming language developed at the Software Languages Lab at Vrije Universiteit Brussel. The language was created to introduce the essentials of programming to non-computer science students.Pico can be seen as an effort to generate a palatable and enjoyable language for people who do not want to study hard for the elegance and power of a language. ",
	    href:"https://en.wikipedia.org/wiki/Pico_(programming_language)"
	},
	"Pict":{
	    name:"Pict",
	    desc:"Pict is a statically typed programming language, one of the very few based on the π-calculus. Work on the language began at the University of Edinburgh in 1992, and development has been more or less dormant since 1998. The language is still at an experimental stage.",
	    href:"https://en.wikipedia.org/wiki/Pict_(programming_language)"
	},
	"Pike":{
	    name:"Pike",
	    desc:"Pike is an interpreted, general-purpose, high-level, cross-platform, dynamic programming language, with a syntax similar to that of C. Unlike many other dynamic languages, Pike is both statically and dynamically typed, and requires explicit type definitions. It features a flexible type system that allows the rapid development and flexible code of dynamically typed languages, while still providing some of the benefits of a statically typed language.",
	    href:"https://en.wikipedia.org/wiki/Pike_(programming_language)"
	},
	"PILOT":{
	    name:"PILOT",
	    desc:"Programmed Instruction, Learning, or Teaching (PILOT) is a simple high-level programming language developed in the 1960s. Like its younger sibling LOGO, it was an early foray into the technology of computer-assisted instruction.",
	    href:"https://en.wikipedia.org/wiki/PILOT"
	},
	"Pizza":{
	    name:"Pizza",
	    desc:"Pizza is an open-source superset of Java 1.4, prior to the introduction of generics for the Java programming language. In addition to its own solution for adding generics to the language, Pizza also added function pointers and algebraic types with case classes and pattern matching.",
	    href:"https://en.wikipedia.org/wiki/Pizza_(programming_language)"
	},
	"PL360":{
	    name:"PL/B",
	    desc:"Programming Language for Business or PL/B is a business-oriented programming language originally called DATABUS and designed by Datapoint in 1972 as an alternative to COBOL because Datapoint's 8-bit computers could not fit COBOL into their limited memory, and because COBOL did not at the time have facilities to deal with Datapoint's built-in keyboard and screen.",
	    href:"https://en.wikipedia.org/wiki/Programming_Language_for_Business"
	},
	"Plankalkül":{
	    name:"Plankalkül",
	    desc:"Plankalkül is a programming language designed for engineering purposes by Konrad Zuse between 1942 and 1945. It was the first high-level programming language to be designed for a computer.",
	    href:"https://en.wikipedia.org/wiki/Plankalk%C3%BCl"
	},
	"Planner":{
	    name:"Planner",
	    desc:"Planner is a programming language designed by Carl Hewitt at MIT, and first published in 1969. First, subsets such as Micro-Planner and Pico-Planner were implemented, and then essentially the whole language was implemented as Popler by Julian Davies at the University of Edinburgh in the POP-2 programming language.",
	    href:"https://en.wikipedia.org/wiki/<Planner_><programming_language></programming_language></Planner_>"
	},
	"ProvideX":{
	    name:"ProvideX",
	    desc:"ProvideX is a computer language and development environment derived from Business Basic (a business oriented derivative of BASIC) in the mid-1980s.ProvideX is available on several operating systems (Unix/Linux/Windows/Mac OS X) and includes not only the programming language but also file system, presentation layer interface, and other components.",
	    href:"https://en.wikipedia.org/wiki/ProvideX"
	},
	"PureScript":{
	    name:"PureScript",
	    desc:"PureScript is a strongly-typed, purely-functional programming language that compiles to JavaScript. It can be used to develop web applications, server side apps, and also desktop applications with use of Electron. Its syntax is mostly comparable to that of Haskell. In addition, it introduces row polymorphism and extensible records. Also, contrary to Haskell, PureScript adheres to a strict evaluation strategy.",
	    href:"https://en.wikipedia.org/wiki/PureScript"
	},
	"Q#":{
		name: "Q#",
		desc:"Q# is a domain-specific programming language used for expressing quantum algorithms. It was initially released to the public by Microsoft as part of the Quantum Development Kit. During a Microsoft Ignite Keynote on September 26, 2017, Microsoft announced that they were going to release a new programming language geared specifically towards quantum computers. On December 11, 2017, Microsoft released Q# as a part of the Quantum Development Kit.",
		href:"https://en.wikipedia.org/wiki/Q_Sharp"
	},
	".QL":{
		name: ".QL",
		desc:".QL is an object-oriented query language used to retrieve data from relational database management systems. It is reminiscent of the standard query language SQL and the object-oriented programming language Java. .QL is an object-oriented variant of a logical query language called Datalog. Hierarchical data can therefore be naturally queried in .QL in a recursive manner.",
		href:"https://en.wikipedia.org/wiki/.QL"
	},
	"Racket":{
		name:"Racket",
		desc:"Racket is a general-purpose, multi-paradigm programming language based on the Scheme dialect of Lisp. It is designed to be a platform for programming language design and implementation. In addition to the core Racket language, Racket is also used to refer to the family of programming languages and set of tools supporting development on and with Racket",
		href:"https://en.wikipedia.org/wiki/Racket_(programming_language)"
	},
	"Raku":{
		name:"Raku",
		desc:"Raku is a member of the Perl family of programming languages. Formerly known as Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000.",
		href:"https://en.wikipedia.org/wiki/Raku_(programming_language)"
	},
	"Raftor":{
		name:"Raftor",
		desc:"Raftor is a programming language implemented as a preprocessor for Fortran 66. It provided modern control structures, unavailable in Fortran 66, to replace GOTOs and statement numbers. Ratfor provides the following kinds of flow-control statements, described by Kernighan and Plauger as shamelessly stolen from the language C, developed for the UNIX operating system by D.M. Ritchie",
		href:"https://en.wikipedia.org/wiki/Ratfor"
	},
	"Rc":{
		name:"Rc",
		desc:"rc (for 'run commands') is the command line interpreter for Version 10 Unix and Plan 9 from Bell Labs operating systems. It resembles the Bourne shell, but its syntax is somewhat simpler. It was created by Tom Duff, who is better known for an unusual C programming language construct ('Duff's device').",
		href:"https://en.wikipedia.org/wiki/Rc"
	},
	"Red":{
		name:"Red",
		desc:"Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakocevic, and is both an imperative and functional programming language. Its syntax and general usage overlaps that of the interpreted Rebol language.",
		href:"https://en.wikipedia.org/wiki/Red_(programming_language)"
	},
	"S":{
	    name:"S",
	    desc:"S is a statistical programming language developed primarily by John Chambers and Rick Becker and Allan Wilks of Bell Laboratories. The aim of the language, as expressed by John Chambers, is 'to turn ideas into software, quickly and faithfully'.",
	    href:"https://en.wikipedia.org/wiki/S_(programming_language)"
	},
	"S2":{
	    name:"S2",
	    desc:"S2 is an object-oriented programming language developed in the late 1990s by Brad Fitzpatrick, Martin 'Mart' Atkins, and others for the online journaling service LiveJournal in order to allow users full control over the appearance of their pages.",
	    href:"https://en.wikipedia.org/wiki/S2_(programming_language)"
	},

	"S3":{
	    name:"S3",
	    desc:"S3 is a structured, imperative high-level computer programming language. It was developed by the UK company International Computers Limited (ICL) for its 2900 Series mainframes. It is a system programming language with syntax influenced by ALGOL 68 but with data types and operators aligned to those offered by the 2900 Series.",
	    href:"https://en.wikipedia.org/wiki/S3_(programming_language)"
	},

	"Sail":{
	    name:"Sail",
	    desc:"SAIL, the Stanford Artificial Intelligence Language, was developed by Dan Swinehart and Bob Sproull of the Stanford AI Lab in 1970. It was originally a large ALGOL 60-like language for the PDP-10 and DECSYSTEM-20.SAIL's main feature is a symbolic data system based upon an associative store (based on the LEAP system of Jerry Feldman and Paul Rovner).",
	    href:"https://en.wikipedia.org/wiki/SAIL_(programming_language)"
	},

	"Sasl":{
	    name:"Sasl",
	    desc:"SASL (from St Andrews Static Language, alternatively St Andrews Standard Language) is a purely functional programming language developed by David Turner at the University of St Andrews in 1972, based on the applicative subset of ISWIM.",
	    href:"https://en.wikipedia.org/wiki/SASL_(programming_language)"
	},

	"Sather":{
	    name:"Sather",
	    desc:"Sather is an object-oriented programming language. It originated circa 1990 at the International Computer Science Institute (ICSI) at the University of California, Berkeley, developed by an international team led by Steve Omohundro. It supports garbage collection and generics by subtypes.",
	    href:"https://en.wikipedia.org/wiki/Sather"
	},

	"Sawzall":{
	    name:"Sawzall",
	    desc:"Sawzall is a procedural domain-specific programming language, used by Google to process large numbers of individual log records. Sawzall was first described in 2003, and the szl runtime was open-sourced in August 2010. However, since the MapReduce table aggregators have not been released,",
	    href:"https://en.wikipedia.org/wiki/Sawzall_(programming_language)"
	},

	"Scala":{
	    name:"Scala",
	    desc:"Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scala's design decisions aimed to address criticisms of Java.",
	    href:"https://en.wikipedia.org/wiki/Scala_(programming_language)"
	},

	"Script.NET":{
	    name:"Script.NET",
	    desc:"Script.NET or S# is a metaprogramming language that provides scripting functionality in Microsoft .NET applications, allowing runtime execution of custom functionality, similar to VBA in Microsoft Office applications. The syntax of Script.NET is similar to JavaScript.",
	    href:"https://en.wikipedia.org/wiki/Script.NET"
	},

	"Seed7":{
	    name:"Seed7",
	    desc:"Seed7 is an extensible general-purpose programming language designed by Thomas Mertes. It is syntactically similar to Pascal and Ada. Along with many other features, it provides an extension mechanism. Seed7 supports introducing new syntax elements and their semantics into the language, and allows new language constructs to be defined and written in Seed7.",
	    href:"https://en.wikipedia.org/wiki/Seed7"
	},

	"Self":{
	    name:"Self",
	    desc:"Self is an object-oriented programming language based on the concept of prototypes. Self began as a dialect of Smalltalk, being dynamically typed and using just-in-time compilation (JIT) as well as the prototype-based approach to objects: it was first used as an experimental test system for language design in the 1980s and 1990s.",
	    href:"https://en.wikipedia.org/wiki/Self_(programming_language)"
	},

	"SenseTalk":{
	    name:"SenseTalk",
	    desc:"SenseTalk is an English-like scripting language derived from the HyperTalk language used in HyperCard. SenseTalk was originally developed as the scripting language within the HyperSense multimedia authoring application on the NeXTStep and OpenStep platforms.",
	    href:"https://en.wikipedia.org/wiki/SenseTalk"
	},

	"SequenceL":{
	    name:"SequenceL",
	    desc:"SequenceL is a general purpose functional programming language and auto-parallelizing (Parallel computing) compiler and tool set, whose primary design objectives are performance on multi-core processor hardware, ease of programming, platform portability/optimization, and code clarity and readability.",
	    href:"https://en.wikipedia.org/wiki/SequenceL"
	},

	"SETL":{
	    name:"SETL",
	    desc:"SETL is a very high-level programming language based on the mathematical theory of sets. It was originally developed by (Jack) Jacob T. Schwartz at the New York University (NYU) Courant Institute of Mathematical Sciences in the late 1960s.",
	    href:"https://en.wikipedia.org/wiki/SETL"
	},

	"SIGNAL":{
	    name:"SIGNAL",
	    desc:"SIGNAL is a programming language based on synchronized data-flow a process is a set of equations on elementary flows describing both data and control. The SIGNAL formal model provides the capability to describe systems with several clocks  (polychronous systems) as relational specifications.",
	    href:"https://en.wikipedia.org/wiki/SIGNAL_(programming_language)"
	},

	"SISAL":{
	    name:"SISAL",
	    desc:"SISAL is a general-purpose single assignment functional programming language with strict semantics, implicit parallelism, and efficient array handling. SISAL outputs a dataflow graph in Intermediary Form 1 (IF1).",
	    href:"https://en.wikipedia.org/wiki/SISAL"
	},

	"SLIP":{
	    name:"SLIP",
	    desc:"SLIP is a list processing computer programming language, invented by Joseph Weizenbaum in the 1960s. The name SLIP stands for Symmetric LIst Processor. It was first implemented as an extension to the Fortran programming language, and later embedded into MAD and ALGOL.",
	    href:"https://en.wikipedia.org/wiki/SLIP_(programming_language)"
	},

	"SMALL":{
	    name:"SMALL",
	    desc: "SMALL, is a computer programming language developed by Dr. Nevil Brownlee of the University of Auckland.",
	    href:"https://en.wikipedia.org/wiki/SMALL"
	},
	"Smalltalk":{
	    name:"Smalltalk",
	    desc:"Smalltalk is an object-oriented, dynamically typed reflective programming language. Smalltalk was created as the language underpinning the 'new world' of computing exemplified by 'human–computer symbiosis'.",
	    href:"https://en.wikipedia.org/wiki/Smalltalk"
	},
	"SML":{
	    name:"SML",
	    desc:"SML is a general-purpose, modular, functional programming language with compile-time type checking and type inference. It is popular among compiler writers and programming language researchers, as well as in the development of theorem provers.",
	    href:"https://en.wikipedia.org/wiki/Standard_ML"
	},
	"SOL":{
	    name:"SOL",
	    desc:"(SOL) was developed jointly by the United States Naval Research Laboratory and Utah State University in the United States. SOL is a domain-specific synchronous programming language for developing distributed applications and is based on software engineering principles developed in the Software Cost Reduction project at the Naval Research Laboratory in the late 1970s and early 1980s.",
	    href:"https://en.wikipedia.org/wiki/Secure_Operations_Language"
	},
	"Solidity":{
	    name:"Solidity",
	    desc:"Solidity is an object-oriented programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably, Ethereum.",
	    href:"https://en.wikipedia.org/wiki/Solidity"
	},
	"SPARK":{
	    name:"SPARK",
	    desc:"SPARK is a formally defined computer programming language based on the Ada programming language, intended for the development of high integrity software used in systems where predictable and highly reliable operation is essential.",
	    href:"https://en.wikipedia.org/wiki/SPARK_(programming_language)"
	},
	"Speedcode":{
	    name:"Speedcode",
	    desc:"Speedcoding or Speedcode was the first high-level programming language created for an IBM computer. The language was developed by John Backus in 1953 for the IBM 701 to support computation with floating point numbers.",
	    href:"https://en.wikipedia.org/wiki/Speedcoding"
	},
	"SP/k":{
	    name:"SP/k",
	    desc:"SP/k is a programming language developed circa 1974 by R.C. Holt, D.B. Wortman, D.T. Barnard and J.R. Cordy as a subset of the PL/I programming language designed for teaching programming. It was used for about a decade at over 40 universities, schools, and research laboratories in Canada and the United States.",
	    href:"https://en.wikipedia.org/wiki/SP/k"
	},
	"SQR":{
	    name:"SQR",
	    desc:"SQR is a programming language designed for generating reports from database management system management systems. The name is an abbreviation of Structured Query Reporter, which suggests its relationship to SQL (Structured Query Language). Any SQL statement can be embedded in an SQR program.",
	    href:"https://en.wikipedia.org/wiki/SQR"
	},
	"Squeak":{
	    name:"Squeak",
	    desc:"The Squeak programming language is a dialect of Smalltalk. It is object-oriented, class-based, and reflective.It was derived directly from Smalltalk-80 by a group at Apple Computer that included some of the original Smalltalk-80 developers. Its development was continued by the same group at Walt Disney Imagineering, where it was intended for use in internal Disney projects.",
	    href:"https://en.wikipedia.org/wiki/Squeak"
	},
	"Squirrel":{
	    name:"Squirrel",
	    desc:"Squirrel is a high level imperative, object-oriented programming language, designed to be a lightweight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games and embedded systems.",
	    href:"https://en.wikipedia.org/wiki/Squirrel_(programming_language)"
	},
	"Tcl":{
		name:"Tcl",
		desc:"Tcl is a high-level, general-purpose, interpreted, dynamic programming language. It was designed with the goal of being very simple but powerful. Tcl casts everything into the mold of a command, even programming constructs like variable assignment and procedure definition. Tcl supports multiple programming paradigms, including object-oriented, imperative and functional programming or procedural styles.",
		href:"https://en.wikipedia.org/wiki/Tcl"
	},
	"TOM":{
		name:"TOM",
		desc: "TOM was an object-oriented programming language developed in the 1990s that built on the lessons learned from Objective-C. The main purpose of TOM was to allow for 'unplanned reuse' of code via a well-developed extension mechanism. This concept was introduced seemingly by accident in Objective-C and later proved to be of wide use, and was applied aggressively in TOM.",
		href:"https://en.wikipedia.org/wiki/TOM_(object-oriented_programming_language)"
	},
	"LiveCode":{
		name:"LiveCode",
		desc:"LiveCode is a cross-platform rapid application development runtime environment inspired by HyperCard. It features the LiveCode Script (formerly MetaTalk) programming language which belongs to the family of xTalk scripting languages like HyperCard's HyperTalk. The environment was introduced in 2001. The 'Revolution' development system was based on the MetaCard engine technology which Runtime <Revolutio></Revolutio>n later acquired from MetaCard Corporation in 2003",
		href:"https://en.wikipedia.org/wiki/LiveCode"	
	},
	"Turing":{
		name:"Turing",
		desc:"Turing is a Pascal-like programming language developed in 1982 by Ric Holt and James Cordy, then of University of Toronto, in Toronto, Ontario, Canada. Turing is a descendant of Euclid, Pascal and SP/k that features a clean syntax and precise machine-independent semantics. Turing 4.1.0 is the latest stable version of Turing. Turing 4.1.1 and Turing 4.1.2 do not allow for stand alone .EXE files",
		href:"https://en.wikipedia.org/wiki/Turing_(programming_language)"
	},
	"TypeScript":{
		name:"TypeScript",
		desc:"TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
		href:"https://en.wikipedia.org/wiki/TypeScript"
	},
	"Ubercode":{
		name:"Ubercode",
		desc:"Ubercode is a high level programming language designed by Ubercode Software and released in 2005 for Microsoft Windows. Ubercode is influenced by Eiffel and BASIC. It is proprietary software and can be tried out for free for 30 days. No more info ;(",
		href:"https://en.wikipedia.org/wiki/<Ubercode></Ubercode>"
	},
	"Unicorn":{
		name:"Unicorn",
		desc:"Unicon is a programming language designed by American computer scientist Clint Jeffery with collaborators including Shamim Mohamed, Jafar Al Gharaibeh, Robert Parlett and others. Unicon descended from Icon and a preprocessor for Icon called IDOL. Compared with Icon, Unicon offers better access to the operating system as well as support for object-oriented programming.",
		href:"https://en.wikipedia.org/wiki/Unicon_(programming_language)"
	},
	"Vala":{
    	name:"Vala",
    	desc:"Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system. Vala is syntactically similar to C# and includes notable features such as anonymous functions, signals, properties, generics, assisted memory management, exception handling, type inference, and foreach statements.",
    	href:"https://en.wikipedia.org/wiki/Vala_(programming_language)"
	},
	"Vim script":{
	    name:"Vim script",
	    desc:"Vim script is the scripting language built into Vim. Based on the ex editor language of the original vi editor, early versions of Vim added commands for control flow and function definitions.",
	    href:"https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script"
	},
	"Visual Basic":{
	    name:"Visual Basic",
	    desc:"Visual Basic is a third-generation event-driven programming language from Microsoft known for its Component Object Model (COM) programming model first released in 1991 and declared legacy during 2008. Microsoft intended Visual Basic to be relatively easy to learn and use.",
	    href:"https://en.wikipedia.org/wiki/Visual_Basic"
	},
	"Visual DataFlex":{
	    name:"Visual DataFlex",
	    desc:"Visual DataFlex is an object-oriented high-level programming language and a fourth generation visual tool 4GL for developing Windows, web and mobile software applications on one framework-based platform. It was introduced and developed by Data Access Corporation beginning in 1982.",
	    href:"https://en.wikipedia.org/wiki/DataFlex"
	},
	"Visual DialogScript":{
	    name:"Visual DialogScript",
	    desc:"Visual DialogScript is an interpreted programming language for Microsoft Windows. It can be used to create small, fast programs. VDS has a large number of dialog and graphical elements available to create professional looking programs. VDS programs have access to the Windows API; therefore, it is possible to write applications that can perform the same advanced tasks as other programming languages such as Visual Basic, C++, or Delphi.",
	    href:"https://en.wikipedia.org/wiki/Visual_DialogScript"
	},
	"Visual Objects":{
	    name:"Visual Objects",
	    desc:"Visual Objects is an object-oriented computer programming language that is used to create computer programs that operate primarily under Windows. Although it can be used as a general-purpose programming tool, it is almost exclusively used to create database programs.",
	    href:"https://en.wikipedia.org/wiki/Visual_Objects"
	},
	"Vala":{
		name:"Vala",
		desc:"Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system. Vala is syntactically similar to C# and includes notable features such as anonymous functions, signals, properties, generics, assisted memory management, exception handling, type inference, and foreach statements.",
		href:"https://en.wikipedia.org/wiki/Vala_(programming_language)"
	},
	"Vim script":{
		name:"Vim script",
		desc:"Vim is a clone, with additions, of Bill Joy's vi text editor program for Unix. Vim's author, Bram Moolenaar, based it on the source code for a port of the Stevie editor to the Amiga and released a version to the public in 1991. Vim is designed for use both from a command-line interface and as a standalone application in a graphical user interface.",
		href:"https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script"
	},
	"WebAssembly":{
		name:"WebAssembly",
		desc:"WebAssembly is an open standard that defines a portable binary-code format for executable programs, and a corresponding textual assembly language, as well as interfaces for facilitating interactions between such programs and their host environment. The main goal of WebAssembly is to enable high-performance applications on web pages, but the format is designed to be executed and integrated in other environments as well.",
		href:"https://en.wikipedia.org/wiki/WebAssembly"
	},
	"XBL":{
		name:"XBL",
		desc:"XBL is an XML-based markup language for altering the behavior of XUL widgets. It has only ever been implemented in the Mozilla codebase.Mozilla deprecated XBL in 2017 and completed the process of removing it from the Firefox web browser codebase in 2019. However, the UXP fork of the codebase intends to continue supporting XBL indefinitely. The Shadow DOM specification acknowledges XBL as a strong influence.",
		href:"https://en.wikipedia.org/wiki/XBL"
	},
	"XSLT":{
		name:"XSLT",
		desc:"XSLT is a language for transforming XML documents into other XML documents, or other formats such as HTML for web pages, plain text or XSL Formatting Objects, which may subsequently be converted to other formats, such as PDF, PostScript and PNG. XSLT 1.0 is widely supported in modern web browsers.",
		href:"https://en.wikipedia.org/wiki/XSLT"
	},
	"Xtend":{
		name:"Xtend",
		desc:"Xtend is a general-purpose high-level programming language for the Java Virtual Machine. Syntactically and semantically Xtend has its roots in the Java programming language but focuses on a more concise syntax and some additional functionality such as type inference, extension methods, and operator overloading. Being primarily an object-oriented language, it also integrates features known from functional programming, e.g. lambda expressions.",
		href:"https://en.wikipedia.org/wiki/Xtend"
	},
	"Yoix":{
		name:"Yoix",
		desc:"In computer programming, Yoix is a high-level, general-purpose, interpreted, dynamic programming language. The Yoix interpreter is implemented using standard Java technology without any add-on packages and requires only a Sun-compliant JVM to operate. Initially developed by AT&T Labs researchers for internal use, it has been available as free and open source software since late 2000.",
		href:"https://en.wikipedia.org/wiki/Yoix"
	},
	"Zeno":{
		name:"Zeno",
		desc:"Zeno is an imperative procedural programming language designed to be easy to learn and user friendly. Zeno is generic in the sense that it contains most of the essential elements used in other languages to develop real applications. The Zeno Interpreter was designed for use in Windows 95 and later Microsoft operating systems. The interpreter comes with built-in debugging tools, a source code text editor, and an on-line language reference.",
		href:"https://en.wikipedia.org/wiki/Zeno_(programming_language)"
	},
	"Z++":{
		name:"Z++",
		desc:"Z++ is an object-oriented extension to the Z specification language. Z++ allows for the definition of classes, and the relation of classes through inheritance, association, or aggregation. The primary construct of Z++ is a class. A Z++ class consists of a number of clauses which are optional.",
		href:"https://en.wikipedia.org/wiki/Z%2B%2B"
	}
}	
for (var key in languages){
	var one = document.createElement("span");
	one.className = "test";
	document.querySelector("article").appendChild(one);
	one.innerHTML = languages[key].name;
	one.setAttribute("data-key",`${key}`)
}
for(var i = 0; i < document.getElementsByClassName("test").length; i++ ){
	document.getElementsByClassName("test")[i].onclick = function(){
		document.querySelector("article").style.display = "none";
		document.querySelector(".h1-desc").innerHTML = languages[this.getAttribute("data-key")].name;
		document.querySelector(".span-desc").innerHTML = languages[this.getAttribute("data-key")].desc;
		document.querySelector(".this-a").setAttribute("href",languages[this.getAttribute("data-key")].href);
		document.querySelector(".big-info").style.display = "flex";
		document.querySelector(".container").style.filter = "blur(7px)";
		document.querySelector("body").style.overflowY = "hidden";
		document.querySelector(".cross").style.opacity = "0";
		// document.querySelector(".cross").style.cursor = "auto";
			}
}
function show(){
	document.querySelector("article").style.display = "flex";
	if(document.querySelector("article").style.display = "flex"){
	document.querySelector(".cross").onclick = function(){
		document.querySelector("article").style.display = "none";
		document.querySelector(".cross").style.opacity = "0";
		// document.querySelector(".cross").style.cursor = "auto";
	}
	document.querySelector(".cross").style.opacity = "1";
}
}
function closeDescription(){
	document.querySelector(".big-info").style.display = "none";
	document.querySelector("body").style.overflowY = "hidden";
	document.querySelector(".container").style.filter = "blur(0)";
}
document.querySelector(".final-attention").onclick = function(){
	document.querySelector(".container").style.filter = "blur(7px)";
	document.querySelector(".attention-content").style.transform = "translateY(0)";
}
document.querySelector(".close-but").onclick = function(){
	document.querySelector(".container").style.filter = "blur(0)";
	document.querySelector(".attention-content").style.transform = "translateY(-100%)";
}