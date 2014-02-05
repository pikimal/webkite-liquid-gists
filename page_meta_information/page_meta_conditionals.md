#Using Page Meta Information for Conditionals
##For any page. Conditional on what kind of page is displayed, display content.

If you want to present different content/information, but in the same location, depending on what page is being displayed you can check against the <code>meta.page_type</code>. The pages you can check against are the names of the Page Templates in the WebKite theme editor. They are as follows:

* <code>index</code>
* <code>top result</code>
* <code>item</code>
* <code>compare</code>
* <code>reviews</code>
* and more granular if necessary.


````HTML
<div id="wrap" class ="{{ meta.page_type }}">…</div>
````

or

````HTML
<div id="wrap" class="{{meta.template_name|remove:'.liquid'}}">…</div>
````

To add a class from the page type or template to the <code>#wrap</code> element found on _line 1_ of the body Page Template.