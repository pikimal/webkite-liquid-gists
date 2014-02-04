#Collapsible Sidebar
On the Results page. Say you want to have filters toggled closed by default and allow a visitor to expand them. First include the JS, which will transform the header into a toggle.

You can include the JS in Top Results Assets section, and after that you'll either want to add the following to your main CSS file, or as another external file in Top Results Assets:

````CSS
/* gives you something to click for the toggle*/
#piki_prefSort .collapseable .collapse-toggle:before{
    content:"+";
    position:absolute;
    margin-top:-4px;
    }
/* Custom Filter Layout */
#piki_prefSort .collapseable {
  padding:0;
  }
#piki_prefSort .collapseable .section {
  display:none;
  margin-bottom:15px;
  overflow:visible;
  }
#piki_prefSort .collapseable h4 {
  padding:6px 9px 6px 23px;
  margin:0px -3px 3px;
  cursor:pointer;
  border:none;
  letter-spacing:0;
  position:relative;
  width:194px;
  }
#piki_prefSort .collapseable .collapse-toggle {
  position:absolute;
  top:9px;
  left:6px;
  width:10px;
  height:10px;
  }
````

If you want the list to have a strict height you then add this:

````CSS
#piki_prefSort .collapseable .section ul {
  height:100px;
  overflow:auto;
  }
````
