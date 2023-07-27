# Module 4 - Web Development Assignment

---

## Assignment Questions 1

### Q.1 `<!DOCTYPE html>` is it a tag of html? If not, what is it and why do we use it?

> `<!DOCTYPE html>` is not an HTML tag but rather a Document Type Declaration (DTD) declaration used to indicate the HTML version and ensure the correct rendering of the HTML document in different browsers. It is an essential part of the HTML document structure and should be included at the beginning of all HTML5 documents.

### Q.2 Explain Semantic tags in html? And why do we need it?

> Semantic tags in HTML are elements that carry meaning and convey the structure and purpose of the content they enclose. Unlike generic block-level elements (e.g., `<div>`) or inline elements (e.g., `<span>`), semantic tags are designed to provide a clear and descriptive representation of the content they contain. These semantic tags make the HTML code more readable and understandable, both for developers and for machines parsing the document.

Some common semantic tags in HTML5 include:

1. `<header>`: Represents the header of a section or page.
2. `<nav>`: Represents a navigation menu or links.
3. `<main>`: Represents the main content of a document or section.
4. `<article>`: Represents a self-contained piece of content, such as a blog post or news article.
5. `<section>`: Represents a thematic grouping of content within a document.
6. `<aside>`: Represents content that is tangentially related to the content around it, like a sidebar.
7. `<footer>`: Represents the footer of a section or page.

Why do we need semantic tags in HTML?

1. Clarity and Readability: Semantic tags make the HTML code more human-readable and provide a clear structure to the content. Developers can easily understand the purpose of each section and its relationship with other elements.

2. Search Engine Optimization (SEO): Search engines use semantic tags to better understand the content and context of a webpage. Properly using semantic tags can improve the webpage's ranking in search engine results.

3. Accessibility: Screen readers and other assistive technologies rely on semantic tags to provide meaningful information to users with disabilities. Semantic HTML helps make web content more accessible to all users.

4. Future Compatibility: Semantic tags help future-proof your HTML code. As HTML standards evolve, browsers and parsers will better understand the meaning of semantic tags, ensuring your content remains relevant and well-structured.

5. Consistency and Maintainability: Consistently using semantic tags promotes a consistent structure throughout the website, making it easier to maintain and update the codebase.

6. Code Organization: Semantic tags provide a logical structure to the content, making it easier to organize and style the webpage using CSS.

By using semantic tags, developers can create more accessible, maintainable, and SEO-friendly web pages, while providing better structure and meaning to the content for both human readers and automated systems.

### Q.3 Differentiate between HTML Tags and Elements?

> In HTML, the terms "tags" and "elements" are often used interchangeably, but they refer to different concepts:

1. HTML Tags:

   - Tags are markup symbols used to define the structure and content of an HTML document.
   - Tags are represented by angle brackets `< >` and come in pairs: an opening tag and a closing tag.
   - The opening tag contains the name of the HTML element and is preceded by `<`, while the closing tag contains the same element name preceded by `</`.
   - For example, `<h1>` is an opening tag for the heading element, and `</h1>` is the corresponding closing tag.

2. HTML Elements:
   - Elements are made up of HTML tags along with the content they enclose.
   - An HTML element consists of an opening tag, the content of the element, and a closing tag (in case of elements that have content).
   - The opening and closing tags, along with the content between them, form a complete HTML element.
   - For example, `<h1>Hello, World!</h1>` is a complete HTML element. The `<h1>` is the opening tag, the text "Hello, World!" is the content, and `</h1>` is the closing tag.

In summary, HTML tags are the markup symbols used to define the structure and content of an HTML document, while HTML elements are the complete constructs made up of HTML tags and the content they enclose. Elements are the actual building blocks that create the structure of an HTML document and define its visual and semantic content.

### Q.4 Build Your Resume using HTML only

> [Resume - click here to see](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/html-questions/answer-4>)

### Q. 5 Write HTML code so that it looks like the below image
![screencapture-file-notion-so-f-s-5d76dcda-d8eb-4c2e-836d-5c1aee0f8c6d-html-png-2023-07-27-10_15_27](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/assets/112545072/19978448-be6a-4bb4-a1d9-de518110877e)


> [Q. 5 - click this link](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/blob/main/PPT_Assignment/module-4/assignment-questions-1/q5.html)

### Q. 6 What are some of the advantages of HTML5 over its previous versions?

> HTML5, the fifth major revision of the Hypertext Markup Language, introduced several advantages over its previous versions (like HTML 4.01 and XHTML 1.0). Some of the key advantages of HTML5 include:

1. Rich multimedia support: HTML5 provides native support for audio and video elements, allowing developers to embed media content directly into web pages without the need for third-party plugins like Flash. This simplifies the process of integrating multimedia content and improves compatibility across different platforms and devices.

2. Canvas element: HTML5 introduced the `<canvas>` element, which enables dynamic rendering and manipulation of graphics, animations, and interactive visualizations directly within the browser. It opened up new possibilities for creating games, data visualizations, and other rich graphical applications without relying on external technologies.

3. Improved semantics: HTML5 introduced new semantic elements such as `<header>`, `<footer>`, `<nav>`, `<article>`, and `<section>`, among others. These elements provide better structure and meaning to the content, making it easier for search engines, screen readers, and other assistive technologies to understand and interpret the page's layout.

4. Offline and storage capabilities: HTML5 introduced the concept of Web Storage (localStorage and sessionStorage) and the Application Cache, enabling web applications to store data locally on the client's device and function offline. This improved the user experience and allowed web apps to work in scenarios with limited or no internet connectivity.

5. Responsive design support: HTML5 provides better support for building responsive web pages by introducing media queries and viewport elements. This allows developers to create layouts that adapt to various screen sizes and resolutions, enhancing the browsing experience on both desktop and mobile devices.

6. Geolocation API: HTML5 introduced the Geolocation API, which enables web applications to access the user's geographical location through their device's GPS or other location-aware technologies. This feature has numerous applications, such as location-based services and mapping functionalities.

7. Improved form elements: HTML5 introduced new input types (e.g., email, date, color, range) and attributes (e.g., required, placeholder) that made form handling and validation easier for developers. It also enabled users to input data more conveniently, especially on mobile devices.

8. Elimination of redundant elements: HTML5 removed or deprecated many outdated and redundant elements, streamlining the language and making it easier for developers to create cleaner, more maintainable code.

Overall, HTML5 brought significant enhancements to web development, making it more powerful, flexible, and compatible with modern technologies and devices. Its adoption has led to a more engaging and dynamic web experience for users and more efficient development processes for developers.

### Q.7 Create a simple Music player using html only

```
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Music Player</title>
  </head>
  <body>
    <h1>Simple Music Player</h1>

    <!-- Audio player -->
    <audio controls>
      <source
        src="./audio/Hall of Fame Song Young Dolph.mp3"
        type="audio/mpeg"
        controls
      />
      Your browser does not support the audio element.
    </audio>
  </body>
</html>

```

### Q.8 What is the difference between `<figure>` tag and `<img>` tag?

The `<figure>` tag and the `<img>` tag are both HTML elements used for displaying images, but they serve different purposes and have different use cases:

`<img>` tag:

The `<img>` tag is a self-closing tag used to embed an image into an HTML document.
It requires the src attribute to specify the path to the image file.
The alt attribute is used to provide alternative text for the image, which is displayed if the image fails to load or for accessibility purposes (e.g., for screen readers).
The` <img>` tag does not have any semantic meaning on its own. It is just a container for the image file and its attributes.
Example: `<img src="path_to_image.jpg" alt="Description of the image">`

`<figure>` tag:

The `<figure>` tag is used to represent a self-contained content block that typically contains media content like images, illustrations, audio, video, etc.
It is often used in conjunction with the `<figcaption>` tag to provide a caption or description for the media content inside it.
The `<figure>` tag adds semantic meaning to the content it wraps, making it useful for better accessibility and understanding the structure of the document.
Example:

```
<figure>
  <img src="path_to_image.jpg" alt="Description of the image">
  <figcaption>Caption for the image</figcaption>
</figure>
```

In summary, while the `<img>` tag is used specifically for embedding images, the `<figure>` tag is used to group media content (including images) with their related captions or descriptions, providing more semantic meaning and making it easier for screen readers and other assistive technologies to understand the content's structure. When using images in your HTML document, it's generally a good practice to use the `<figure>` and `<figcaption>` elements when there is a need for captions or descriptions associated with the images.

### Q.9 What’s the difference between html tag and attribute and give example of some global attributes?

> In HTML, tags and attributes are two fundamental concepts used to structure and describe the content of a web page:

1. HTML Tags:

   - Tags are the building blocks of an HTML document. They define the structure and content of the elements on a webpage.
   - Tags are enclosed within angle brackets ("<" and ">") and come in pairs: an opening tag and a closing tag. The opening tag contains the name of the element, and the closing tag has the same name but is preceded by a forward slash ("/").
   - Example: `<p>This is a paragraph.</p>`. Here, `<p>` is the opening tag, and `</p>` is the closing tag. The text "This is a paragraph." is the content of the paragraph element.

2. HTML Attributes:
   - Attributes are additional information or metadata provided within the opening tag of an HTML element.
   - They provide extra details about the element or modify its behavior.
   - Attributes consist of a name and a value, separated by an equal sign ("=") and enclosed in double or single quotes.
   - Attributes are not present in all HTML tags, but they can be added to many elements to customize their behavior or appearance.
   - Example: `<a href="https://www.example.com">Click here</a>`. Here, `href` is the attribute name, and `"https://www.example.com"` is the attribute value. The `href` attribute specifies the link destination for the anchor element (`<a>`).

Examples of some global attributes (attributes that can be used with most HTML tags) include:

1. `id`: Provides a unique identifier for an element.
   Example: `<div id="uniqueID">Content goes here</div>`

2. `class`: Assigns one or more classes to an element for styling or JavaScript manipulation.
   Example: `<p class="important-text">This is an important paragraph.</p>`

3. `style`: Allows inline CSS styles to be applied directly to an element.
   Example: `<h1 style="color: blue;">Heading with blue text</h1>`

4. `title`: Adds a tooltip that appears when the user hovers over the element.
   Example: `<img src="image.jpg" alt="Image" title="This is an image">`

5. `data-*`: A custom attribute that allows developers to store custom data private to the page or application.
   Example: `<div data-info="some custom data">Content here</div>`

6. `aria-*`: Used for accessibility purposes (ARIA - Accessible Rich Internet Applications). It provides accessibility information for screen readers and other assistive technologies.
   Example: `<button aria-label="Close">X</button>`

These are just a few examples of global attributes in HTML. There are many more attributes available for specific elements, and they play a crucial role in defining the behavior and appearance of HTML elements in web development.

### Q.10 Write Html code so that it looks like the below image
![Screenshot 2023-07-27 101852](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/assets/112545072/3c91360b-588c-4208-b267-7227b449f93b)

[Click this link and get code](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/blob/main/PPT_Assignment/module-4/assignment-questions-1/q10.html)
