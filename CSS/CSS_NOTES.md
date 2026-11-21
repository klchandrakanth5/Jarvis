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