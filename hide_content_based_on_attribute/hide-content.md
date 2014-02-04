#Hide Content Based on Attribute
##For any Item Page, checking if an attribute is true, and hiding content if it is.

Say we wanted to hide certain parts of the right hand sidebar on an Item Page, but only on certain items. One way would be to check against the name of the Item, but that would require adding every Item name that you wanted to hide content on.

A simpler solution is to create a Yes/No attribute in the Attribute Management page, make sure it's set to Yes on the Items you want to hide the sidebar on, and add the following code in the theme editor to the appropriate file (item-right in this case):

````Liquid
{% if item.attributes['Hide Sidebar'].value == 'Yes' %}
{% else %}
{% include 'compare-sidebar' %}
    {% enhancement 'compare_items' %}
      {% include 'itemranks' %}
    {% endenhancement %}
{% endif %}
… Rest of the Sidebar
````