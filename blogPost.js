var imageSrc = localStorage.getItem("clickedArticle");
console.log(imageSrc)
var articleImg = document.getElementById("blogPic");
var blogContent = document.getElementById("blogContent");
var blogContainer = document.getElementById("blogContainer");

function loadArticle(){
if(imageSrc == 'Tailwind'){
articleImg.innerHTML += `<img src ="images/tailwind css.png"/>`;
blogContent.innerHTML += `<div><h2 style="font-weight:900">The Brillance of Tailwind's Color Generator</h2>
<div  class="blogParagraph">
<p>Modern UI design is about more than pixels — it’s about bridging the gap between design and development. That’s where Tailwind CSS has become a go-to for dev teams: utility-first, scalable, and consistent. But how do I keep your Figma designs in sync with Tailwind’s color system?
Enter the Tailwind CSS Color Generator plugin for Figma — a powerful tool that brings Tailwind’s full color palette right into my design workflow.
In this post, I’ll walk through what the plugin does, why it matters, and how it can streamline your handoff between design and development.</p>
</div>


<div class="blogPoints">
<h3>What the Plugin Does</h3>
<p>At its core, the Tailwind CSS Color Generator plugin does one simple thing very well:
It generates Tailwind’s full color palette (with all shades) directly inside your Figma file — as color styles, ready to use.
No more copying hex values from the Tailwind docs, manually building swatches, or worrying if the dev team is using different shades than you.
</p>
<h4>You get:</h4>
<ul>
<li>All official Tailwind color families (gray, blue, emerald, rose, etc.)</li>
<li>Every shade (50 through 900)</li>
<li>Applied automatically as Figma color styles (with consistent naming)</li>
</ul>
</div>

<div class="blogParagraph">
<h3>Why This Matters in a Real Design Workflow</h3>
<h4>1. Design Tokens, Simplified</h4>
<p>If I’m using Tailwind in production, this plugin makes it easy to design with the exact tokens devs will use. That means fewer mismatches, fewer questions during handoff, and faster development.</p>
<h4>2. Rapid Prototyping with Utility Thinking</h4>
<p>Designers working in Tailwind-friendly environments often think in classes like bg-indigo-600 or text-gray-800. With this plugin, you’re designing with the same visual language — creating mockups that feel “code-ready” from the start.</p>
<h4>3. Easy Color Theming</h4>
<p>Want to try a new color theme? Rerun the plugin and select a different color family (e.g., switch from blue to violet). All styles are updated systematically, giving you a quick way to experiment with branding or light/dark variants.</p>
<h4>4. Team-Wide Consistency</h4>
<p>Color styles are shared across files and components. When the Tailwind colors are generated as Figma styles, every designer on the team is pulling from the same library. No more off-brand colors sneaking into components.</p>
<h3>How to Use</h3>
<ul>
<li>Install the plugin from the Figma community</li>
<li>Run it on your Figma file</li>
<li>Choose which color families to generate (you can pick specific ones)</li>
<br>
</ul>
</div>
</div>
`
console.log(articleImg.innerHTML);
}
else if(imageSrc == 'Icons8'){
articleImg.innerHTML += `<img src ="images/Icons8.png"/>`;
blogContent.innerHTML += `<div><h2 style="font-weight:900">My Trusty catalog in icons8</h2>

<div class="blogParagraph">
<p>As a UX Designer, I’m constantly balancing speed, consistency, and creativity. While Figma gives me a robust canvas for collaboration and prototyping, the real magic often lies in how I extend its capabilities. One of the most powerful plugins in that toolbox? Icons8.
Whether I’m working on UI mockups, marketing assets, or quick concept prototypes, the Icons8 plugin brings serious efficiency and polish to my workflow. Here’s how.</p>
</div>

<div class = "blogPoints">
<h3>1. Instant Access to Thousands of Icons</h3>
<ul>
<li>Icons8’s primary feature is right in the name: icons. The plugin gives me instant access to a vast, searchable library of pixel-perfect icons — all without leaving Figma. I can:</li>
<li>Search by keyword or category</li>
<li>Toggle between line, solid, flat, or color styles</li>
<li>Instantly drop icons into my canvas with one click</li>
<li>This is a great time-saver compared to downloading assets, unzipping files, and importing them into projects.</li>
</ul>
</div>


<div class="blogParagraph">
<h3>2. Design-Ready Illustrations</h3>
<p>Whenever I need something more than a basic Icon, Icons8 also offers freehand-style illustrations (via the Ouch! library) and vector scenes — great for onboarding screens, empty states, or internal dashboards.
Because everything comes in SVG or vector format, I can tweak colors, shapes, and layouts just like any native Figma object.</p>
</div>


<div class = "blogPoints">
<h3>3. Photorealistic and AI-Generated Images</h3>
<ul>
<li>With the latest updates, Icons8 includes access to cutout people, AI-generated photos, and even background removal tools.</li>
<li>Drag in realistic characters for UX mockups</li>
<li>Use AI faces whenever I need diverse, privacy-safe human imagery</li>
<li>Swap backgrounds or isolate elements without needing Photoshop</li>
<li>This opens up creative options for designers who want to stay fully inside Figma without relying on outside editing tools.</li
><br>
</ul>
</div>
</div>
`
console.log(articleImg.innerHTML);
}
}

blogContainer.addEventListener('DOMContentLoaded', loadArticle());




