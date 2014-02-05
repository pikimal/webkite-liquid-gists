#Set Placeholder Image
##For Top Results or Item page. Setting the placeholder image for when an item has no images associated with it.

````Liquid
{% if item.photos? %}
  <img alt="{{ item.name }}" src="{{ item.item_image_url }}" />
{% else %}
  <img alt="{{ item.name }}" src="{{'item-placeholder.jpg'|image_url}}" />
{% endif %}
````

On Top Results page it's as simple as the above, and found in the result partial.

On Item page it's found in the <code>item-photos</code> partial, and has a lot of extra markup for the image viewer and additional images. Just find the <code>{% else %}</code> statement near the bottom and change the image path from

````HTML
<img src="/assets/missing/piki.jpg" 
         id="current_image"
         alt="{{ item.name }}"
         style="width: 80px;"
         itemprop="photo">
````

to

````HTML
<img alt="{{ item.name }}" src="{{ 'item-placeholder.jpg' | image_url }}"/>
````