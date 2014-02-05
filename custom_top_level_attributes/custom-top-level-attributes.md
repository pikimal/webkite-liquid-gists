#Custom Top-Level Attributes
##For Top Results page, changing what attributes appear on the item list

Around _line 72_ in the <code>result</code> file within the Top Result section change the following code (which captures three attributes) from this:

````Liquid
{% if item.has_top_level_attributes? %}
      <ul class="item-data">
        {% for attribute in item.top_level_attributes limit: 3 %}
          <li>
              <span>{{ attribute.name }}</span>
              {{ attribute.value }}
          </li>
        {% endfor %}
      </ul>     
{% endif %}
````

To this:

````Liquid
{% if item.has_top_level_attributes? %}
  <ul class="item-data">
    <li>
      <span>{{item.attributes['my attribute'].name }}</span>
      {{ item.attributes['my attribute'].value }}
    </li>
  </ul>
{% endif %}
````

Where <code>'my attribute'</code> is replaced with whatever the name of the attribute you want to use is (note: it's case sensitive to what you see in the Attribute Management page). Add more if you like, though 3 is usually enough. If you'd like to guarantee that these show up, regardless of theme dependencies, remove the if statement enclosing the <code>ul class="item-data"</code> area.