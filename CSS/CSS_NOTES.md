# **CSS Notes**

## **1. Introduction to CSS**

CSS (Cascading Style Sheets) is a language used to describe the **style and appearance** of a document.

## **2. Basic Syntax**

```
h1 {
    color: red;
}
```

### **Components of CSS Syntax**

| Component | Description |
| --------- | ----------- |
| `h1`      | Selector    |
| `color`   | Property    |
| `red`     | Value       |

## **3. Including CSS in HTML**

CSS can be included in an HTML document in three ways:

### **1. Inline CSS**

CSS is written directly inside an HTML element using the `style` attribute.

```
<h1 style="color: red;">Ram</h1>
```

### **2. Internal CSS (Style Tag)**

CSS is written inside the `<style>` tag within the HTML document.

```
<style>
    h1 {
        color: red;
    }
</style>
```

### **3. External CSS**

CSS is written in a separate file and linked to the HTML document.

## **4. Color Property**

The `color` property is used to set the **foreground color** of an element.

Hex Color System
. Hex(Hexadecimal)
color : #ff000;
green :#00ff00;
blue :#0000ff;

SELECTORS 
1. Univarsal Selector :-- *{}
2. Element Selector :- h1{}
3. ID  selector : - #myId{}
4. Class Selectors 

| Selector           | Syntax        | Simple Explanation                               | Example                                   |
| ------------------ | ------------- | ------------------------------------------------ | ----------------------------------------- |
| Universal Selector | `* {}`        | Selects all HTML elements on the page.           | Apply the same font to everything.        |
| Element Selector   | `h1 {}`       | Selects all elements with a specific HTML tag.   | Change all heading colors.                |
| ID Selector        | `#myId {}`    | Selects an element with a specific ID.           | Style a particular login button.          |
| Class Selector     | `.myClass {}` | Selects all elements with a specific class name. | Apply the same style to multiple buttons. |


                                   Text Alignment 
                    text align :- left /right/center  
                    start means :- left
                    end means :-  right          