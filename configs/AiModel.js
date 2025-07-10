const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate a study material for Python for Exam and level of difficulty will be EASY with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"courseTitle\": \"Python for Beginners: Exam Prep (Easy Level)\",\n  \"courseSummary\": \"This study material provides a simplified introduction to Python programming, covering fundamental concepts required for a basic Python exam. It focuses on essential syntax, data types, control flow, and basic input/output operations.  Emphasis is placed on practical examples and easy-to-understand explanations suitable for beginners.\",\n  \"level\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"This chapter introduces Python, its history, and its advantages.  It also covers setting up the development environment (Python installation and a basic IDE).\",\n      \"topics\": [\n        \"What is Python?\",\n        \"History of Python\",\n        \"Advantages of Python (Readability, Versatility, Community)\",\n        \"Python Installation (using Anaconda or Python.org)\",\n        \"Introduction to IDEs (e.g., IDLE, VS Code with Python extension)\",\n        \"Running your first Python program (Hello, World!)\"\n      ]\n    },\n    {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter introduces fundamental data types in Python and how to declare and use variables. It also covers basic arithmetic operations.\",\n      \"topics\": [\n        \"Data Types: Integers (int), Floating-point numbers (float), Strings (str), Booleans (bool)\",\n        \"Variables: Declaring variables, Assigning values, Variable naming conventions\",\n        \"Arithmetic Operators: +, -, *, /, %, //, **\",\n        \"String Operations: Concatenation (+), Repetition (*)\",\n        \"Type Conversion: Converting between data types (e.g., int() , float(), str())\"\n      ]\n    },\n    {\n      \"chapterNumber\": 3,\n      \"chapterTitle\": \"Input and Output\",\n      \"chapterSummary\": \"This chapter explains how to take input from the user and display output using the `input()` and `print()` functions.\",\n      \"topics\": [\n        \"The `print()` function: Displaying text and variables to the console\",\n        \"The `input()` function: Taking input from the user\",\n        \"String Formatting: Using f-strings and the `.format()` method to create dynamic strings\",\n        \"Example:  Creating a simple calculator program\"\n      ]\n    },\n    {\n      \"chapterNumber\": 4,\n      \"chapterTitle\": \"Control Flow: Conditional Statements\",\n      \"chapterSummary\": \"This chapter introduces conditional statements (`if`, `elif`, `else`) to control the flow of execution based on conditions.\",\n      \"topics\": [\n        \"Boolean Expressions: Using comparison operators (==, !=, >, <, >=, <=) and logical operators (and, or, not)\",\n        \"The `if` statement: Executing code based on a condition\",\n        \"The `elif` statement:  Adding multiple conditions\",\n        \"The `else` statement:  Executing code if none of the previous conditions are true\",\n        \"Nested `if` statements (basic understanding)\",\n        \"Example: Determining if a number is positive, negative, or zero\"\n      ]\n    },\n    {\n      \"chapterNumber\": 5,\n      \"chapterTitle\": \"Control Flow: Loops\",\n      \"chapterSummary\": \"This chapter introduces `for` and `while` loops for repeating code blocks.\",\n      \"topics\": [\n        \"The `for` loop: Iterating over a sequence (e.g., strings, lists - basics covered in Chapter 6)\",\n        \"The `range()` function: Generating a sequence of numbers for iteration\",\n        \"The `while` loop: Repeating code while a condition is true\",\n        \"The `break` statement: Exiting a loop prematurely\",\n        \"The `continue` statement: Skipping the current iteration of a loop\",\n        \"Example:  Printing numbers from 1 to 10 using a `for` loop\"\n      ]\n    },\n    {\n      \"chapterNumber\": 6,\n      \"chapterTitle\": \"Lists (Basic Introduction)\",\n      \"chapterSummary\": \"This chapter provides a basic introduction to lists, a fundamental data structure for storing collections of items.\",\n      \"topics\": [\n        \"What is a list? Ordered, mutable collections of items\",\n        \"Creating lists: Using square brackets []\",\n        \"Accessing list elements: Using indexing (starting from 0)\",\n        \"List slicing (basic): Selecting a portion of the list\",\n        \"List methods (basic): `append()`, `len()`\",\n        \"Iterating through lists using a `for` loop\",\n        \"Example:  Creating a list of names and printing each name\"\n      ]\n    },\n    {\n      \"chapterNumber\": 7,\n      \"chapterTitle\": \"Functions (Basic Introduction)\",\n      \"chapterSummary\": \"This chapter introduces the concept of functions for code reusability.\",\n      \"topics\": [\n        \"What is a function? A block of code that performs a specific task.\",\n        \"Defining a function: Using the `def` keyword\",\n        \"Function parameters: Passing values to a function\",\n        \"The `return` statement: Returning a value from a function\",\n        \"Calling a function\",\n        \"Example: Creating a function to calculate the square of a number\"\n      ]\n    }\n  ]\n}\n```" },
      ],
    },
  ],
});


export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head, Body, title tag), The chapters: {\n      "chapterNumber": 1,\n      "chapterTitle": "Introduction to Atoms",\n      "chapterSummary": "This chapter introduces the basic building blocks of matter: atoms. It covers the structure of an atom and its components.",\n      "topics": [\n        "What is matter?",\n        "Definition of an atom",\n        "Subatomic particles: protons, neutrons, and electrons",\n        "Location of subatomic particles within the atom (nucleus, electron cloud)",\n        "Atomic number (Z): number of protons",\n        "Mass number (A): number of protons + neutrons",\n        "Isotopes: atoms of the same element with different numbers of neutrons",\n        "Ions: atoms that have gained or lost electrons (cations and anions)",\n        "Basic Atomic Symbols (e.g., H, He, Li, C, O)"\n      ]\n    },',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```html\n<h1>Chapter 1: Introduction to Atoms</h1>\n\n<h2>Exam Material Detail Content</h2>\n\n<h3>Topics Covered:</h3>\n\n<ul>\n  <li><b>What is matter?</b></li>\n    <ul>\n      <li>Define matter and its different states (solid, liquid, gas, plasma).</li>\n      <li>Understand that all matter is composed of atoms or molecules.</li>\n      <li>Explain the relationship between matter and energy.</li>\n    </ul>\n\n  <li><b>Definition of an atom</b></li>\n    <ul>\n      <li>Define an atom as the smallest unit of an element that retains its chemical properties.</li>\n      <li>Understand the historical development of atomic theory (brief overview).</li>\n    </ul>\n\n  <li><b>Subatomic particles: protons, neutrons, and electrons</b></li>\n    <ul>\n      <li>Identify the three main subatomic particles: protons, neutrons, and electrons.</li>\n      <li>State the charge of each subatomic particle: protons (+1), neutrons (0), and electrons (-1).</li>\n      <li>State the relative mass of each subatomic particle (approximate): proton (~1 amu), neutron (~1 amu), and electron (~0 amu).</li>\n    </ul>\n\n  <li><b>Location of subatomic particles within the atom (nucleus, electron cloud)</b></li>\n    <ul>\n      <li>Describe the structure of an atom: a small, dense nucleus surrounded by a much larger electron cloud.</li>\n      <li>Explain that the nucleus contains protons and neutrons.</li>\n      <li>Explain that electrons exist in the electron cloud surrounding the nucleus.</li>\n      <li>Understand the concept of electron shells or energy levels.</li>\n    </ul>\n\n  <li><b>Atomic number (Z): number of protons</b></li>\n    <ul>\n      <li>Define atomic number (Z) as the number of protons in the nucleus of an atom.</li>\n      <li>Explain that the atomic number uniquely identifies an element.</li>\n      <li>Understand how to determine the atomic number of an element using the periodic table.</li>\n    </ul>\n\n  <li><b>Mass number (A): number of protons + neutrons</b></li>\n    <ul>\n      <li>Define mass number (A) as the total number of protons and neutrons in the nucleus of an atom.</li>\n      <li>Explain that the mass number is an integer value.</li>\n      <li>Understand how to calculate the number of neutrons in an atom given its mass number and atomic number (A - Z = number of neutrons).</li>\n    </ul>\n\n  <li><b>Isotopes: atoms of the same element with different numbers of neutrons</b></li>\n    <ul>\n      <li>Define isotopes as atoms of the same element that have different numbers of neutrons.</li>\n      <li>Explain that isotopes have the same atomic number but different mass numbers.</li>\n      <li>Understand how to represent isotopes using isotopic notation (e.g., carbon-12, carbon-14, <sup>12</sup>C, <sup>14</sup>C).</li>\n      <li>Calculate the number of neutrons in different isotopes of the same element.</li>\n      <li>Understand the concept of average atomic mass and how it relates to the abundance of isotopes.</li>\n    </ul>\n\n  <li><b>Ions: atoms that have gained or lost electrons (cations and anions)</b></li>\n    <ul>\n      <li>Define an ion as an atom or molecule that has gained or lost electrons, resulting in a net electrical charge.</li>\n      <li>Define a cation as a positively charged ion (formed when an atom loses electrons).</li>\n      <li>Define an anion as a negatively charged ion (formed when an atom gains electrons).</li>\n      <li>Explain how the number of protons and electrons differ in ions.</li>\n      <li>Understand how to represent ions using chemical symbols with the charge indicated as a superscript (e.g., Na<sup>+</sup>, Cl<sup>-</sup>).</li>\n    </ul>\n\n  <li><b>Basic Atomic Symbols (e.g., H, He, Li, C, O)</b></li>\n    <ul>\n      <li>Recognize and recall the chemical symbols for common elements (H, He, Li, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Ag, Au).</li>\n      <li>Relate the chemical symbol to the element's name.</li>\n      <li>Locate these elements on the periodic table.</li>\n    </ul>\n</ul>\n```",
        },
      ],
    },
  ],
});

export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `Generate the flashcard on topic: Introduction to Spring Boot, Core Concepts: Dependency Injection and Beans, Building REST APIs with Spring Boot, Data Persistence with Spring Data JPA, Testing Spring Boot Applications, Testing Spring Boot Applications, Configuration and Properties in JSON format with front back content, Maximum 15`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `Okay, here are 15 flashcards covering the specified Spring Boot topics, focusing on key concepts, with front and back content designed for memorization, and properties in JSON format.

**Flashcard Set: Introduction to Spring Boot**

**Card 1:**

*   **Front:** What is Spring Boot?

*   **Back:** A framework that simplifies Spring development by providing auto-configuration and opinionated defaults.

**Card 2:**

*   **Front:**  Why use Spring Boot? (Name 3 advantages)

*   **Back:**
    *   Simplified configuration
    *   Embedded servers
    *   Easy dependency management
    *   Increased productivity

**Card 3: Dependency Injection**

*   **Front:** What is Dependency Injection (DI)?

*   **Back:** A design pattern where dependencies are provided to a class instead of the class creating them itself. Promotes loose coupling.

**Card 4:**

*   **Front:** How does Spring Boot implement DI?

*   **Back:** Through the Spring IoC container, using annotations like \`@Autowired\`, \`@Component\`, \`@Service\`, and \`@Repository\`.

**Card 5: Beans**

*   **Front:** What is a Spring Bean?

*   **Back:**  An object managed by the Spring IoC container. It's instantiated, configured, and assembled by the container.  Defined using annotations or XML configuration.

**Card 6:**

*   **Front:** How do you define a Spring Bean? (Name 2 ways)

*   **Back:**
    *   Using annotations like \`@Component\`, \`@Service\`, \`@Repository\`, \`@Controller\` or \`@Bean\` annotation with a method in a \`@Configuration\` class.
    *   (Less Common) Using XML configuration.

**Card 7: REST APIs with Spring Boot**

*   **Front:** What annotation is used to create REST controllers?

*   **Back:** \`@RestController\`

**Card 8:**

*   **Front:** What annotations are used to map HTTP requests to methods in a REST controller? (Name 3)

*   **Back:** \`@GetMapping\`, \`@PostMapping\`, \`@PutMapping\`, \`@DeleteMapping\`, \`@PatchMapping\`

**Card 9: Data Persistence with Spring Data JPA**

*   **Front:** What is Spring Data JPA?

*   **Back:** A Spring module that simplifies database access by providing a repository abstraction on top of JPA (Java Persistence API). Reduces boilerplate code.

**Card 10:**

*   **Front:** What is a Spring Data JPA Repository?

*   **Back:** An interface (usually extending \`JpaRepository\`) that provides methods for CRUD operations on a database entity. Spring Data JPA automatically implements the interface.

**Card 11: Testing Spring Boot Applications**

*   **Front:** What is \`@SpringBootTest\` annotation used for?

*   **Back:**  Loads the full Spring application context for integration testing.  Allows testing of the entire application stack.

**Card 12:**

*   **Front:** What is \`@WebMvcTest\` annotation used for?

*   **Back:**  Used for testing Spring MVC controllers without loading the entire application context.

**Card 13: Configuration and Properties**

*   **Front:** How does Spring Boot handle external configuration?

*   **Back:** Through properties files (application.properties, application.yml), environment variables, command-line arguments, and more.
`,
        },
      ],
    },
  ],
})

export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Quiz on topic : Java Spring Boot, Introduction to Spring Boot, Core Concepts: Dependency Injection and Beans with Question and Options along with correct answer in JSON format`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `\`\`\`json
[
  {
    "question": "What is Spring Boot primarily designed for?",
    "options": [
      "Building complex user interfaces",
      "Simplifying the development of stand-alone, production-ready Spring-based applications",
      "Managing databases and data warehousing",
      "Developing mobile applications"
    ],
    "answer": "Simplifying the development of stand-alone, production-ready Spring-based applications"
  },
  {
    "question": "Which of the following is NOT a key feature of Spring Boot?",
    "options": [
      "Auto-configuration",
      "Opinionated Defaults Configuration",
      "Embedded Servers",
      "Manual Dependency Management"
    ],
    "answer": "Manual Dependency Management"
  },
  {
    "question": "What does 'auto-configuration' in Spring Boot refer to?",
    "options": [
      "Automatic creation of database tables",
      "Automatic configuration of Spring components based on dependencies present in the classpath",
      "Automatic generation of API documentation",
      "Automatic deployment to the cloud"
    ],
    "answer": "Automatic configuration of Spring components based on dependencies present in the classpath"
  },
  {
    "question": "What is the purpose of the \`@SpringBootApplication\` annotation?",
    "options": [
      "It only enables auto-configuration.",
      "It is a convenience annotation that combines \`@Configuration\`, \`@EnableAutoConfiguration\`, and \`@ComponentScan\`.",
      "It only enables component scanning.",
      "It is used to define a database connection."
    ],
    "answer": "It is a convenience annotation that combines \`@Configuration\`, \`@EnableAutoConfiguration\`, and \`@ComponentScan\`."
  },
  {
    "question": "What is Dependency Injection (DI)?",
    "options": [
      "A design pattern where objects are responsible for creating their own dependencies.",
      "A design pattern where objects are given their dependencies instead of creating them.",
      "A method for managing database connections.",
      "A technique for automatically generating code documentation."
    ],
    "answer": "A design pattern where objects are given their dependencies instead of creating them."
  },
  {
    "question": "What is a 'Bean' in Spring?",
    "options": [
      "A Java class that represents data.",
      "An object that is instantiated, assembled, and managed by a Spring IoC container.",
      "A database table.",
      "A user interface component."
    ],
    "answer": "An object that is instantiated, assembled, and managed by a Spring IoC container."
  },
  {
    "question": "Which annotation is used to declare a method as a Bean provider in a Spring configuration class?",
    "options": [
      "@Component",
      "@Service",
      "@Repository",
      "@Bean"
    ],
    "answer": "@Bean"
  },
  {
    "question": "What is an 'IoC container' in Spring?",
    "options": [
      "A database management system.",
      "A framework for building user interfaces.",
      "A container that manages the lifecycle of Spring beans and injects dependencies.",
      "A server that hosts web applications."
    ],
    "answer": "A container that manages the lifecycle of Spring beans and injects dependencies."
  },
  {
    "question": "Which of the following is NOT a valid way to perform Dependency Injection in Spring?",
    "options": [
      "Constructor Injection",
      "Setter Injection",
      "Interface Injection",
      "Field Injection (using @Autowired)"
    ],
    "answer": "Interface Injection"
  },
  {
    "question": "What does \`@Autowired\` annotation do in Spring?",
    "options": [
      "It marks a class as a Spring component.",
      "It automatically injects a dependency into a field, constructor, or setter method.",
      "It defines a database entity.",
      "It creates a new thread."
    ],
    "answer": "It automatically injects a dependency into a field, constructor, or setter method."
  }
]
\`\`\``,
        },
      ],
    },
  ]
})

export const GenerateQuestionAnswerAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Question Answer on topic: Next.js Fundamentals, Pages and Routing, Components in Next.js, Data Fetching Basics and only Short Question Answer in JSON format, (max,10)`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `\`\`\`json
[
  {
    "question": "What is the primary purpose of the 'pages' directory in a Next.js project?",
    "answer": "To define routes based on the files within it. Each file becomes a route endpoint."
  },
  {
    "question": "How do you create a dynamic route in Next.js?",
    "answer": "By using square brackets in the filename, e.g., \`[id].js\`."
  },
  {
    "question": "What is the difference between a client component and a server component in Next.js?",
    "answer": "Client components run in the browser, allowing interactivity. Server components run on the server, for data fetching and logic."
  },
  {
    "question": "What is the \`Link\` component used for in Next.js?",
    "answer": "Client-side navigation between pages, improving performance."
  },
  {
    "question": "Name three data fetching strategies available in Next.js.",
    "answer": "Static Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR)."
  },
  {
    "question": "What does \`getServerSideProps\` do?",
    "answer": "Fetches data on each request, rendering the page server-side."
  },
  {
    "question": "What does \`getStaticProps\` do?",
    "answer": "Fetches data at build time, generating static HTML."
  },
  {
    "question": "What does \`getStaticPaths\` do?",
    "answer": "Defines a list of paths to be statically generated when using dynamic routes with \`getStaticProps\`."
  },
  {
    "question": "How can you fetch data on the client-side in Next.js?",
    "answer": "Using \`useEffect\` and a fetch API within a client component."
  },
  {
    "question": "Why is pre-rendering important in Next.js?",
    "answer": "Improves SEO, performance, and user experience by providing ready-to-display HTML."
  }
]
\`\`\`
`,
        },
      ],
    },
  ]
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
