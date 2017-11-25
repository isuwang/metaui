[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/isuwang/metaui)

## Introduces
> A metadata-driven front-end framework, which you can easily create a component in your web app with metadata.
## Tutorials
### Installation
- [Install Polymer from Bower][1]

- Install metaui
```
bower install git://github.com/isuwang/metaui.git
```
###  [_Demos and API docs_][2]
### Example
```html
<m2-crud metadata="{{metadata}}"></m2-crud>
```
```javascript
metadata = {
  query: {
    formUrl: "/query.do",
    fields: [
      {
        name: "username",
        label: "Username",
        editable: true
      }
    ]
  },
  result: {
    grids: [
      {
        name: "username",
        label: "Username"
      },
      {
        name: "phone",
        label: "Phone"
      },
      {
        name: "addr",
        label: "Addr"
      },
      {
        metaType: {type: "ACTION"},
        name: "actions",
        label: "Actions"
      }
    ],
    actions: {
      "record-delete": {
        actionId: "record-delete",
        actionName: "DELETE",
        operType: 2,
        formMeta: {
          formUrl: "/url-to-send-form",
          confirm: "Sure to submit?",
          fields: [
            {
              name: "phone",
              label: "Phone"
            },
          ],
        }
      },
      "record-edit": {
        actionId: "record-edit",
        actionName: "Edit",
        operType: 2,
        formMeta: {
          formUrl: "/url-to-send-form",
          confirm: "Sure to submit?",
          fields: [
            {
              name: "username",
              label: "Username",
              visible:true,
              editable:true
            },
            {
              name: "phone",
              label: "Phone",
              visible:true,
              editable:true
            },
            {
              name: "addr",
              label: "Addr",
              visible:true,
              editable:true
            }
          ],
        }
      }
    }
  }
};
```

> ![ui][3]
### Create custom style
> In most of ``<m2-*/>`` components, you can custom your own style sheets, use the selectors just like you used in the ``<style>`` tag.



```css
metadata.style = `
  .container {
    display: flex;
    justify-content: flex-end;
  }
  .container__item {
    width: 100px;
  }
`;
```
### Create custom widgets
> A widget is an element nested in a ``<m2-field>``. Metaui provides four internal widgets(``<m2-text>``、``<m2-text-area>``、``<m2-select-list``、``<m2-radio-group>``, maybe more in the future). But in fact, you can use almost all ``<m2-*>`` components as your widget. Also, you can create your own widgets.
- Create your polymer element.
  ```html
  <link rel="import" href="m2-widget-base.html">
  <dom-module id="your-widget-name">
    <template>
      <!--your code here-->
      
      <!--eg.-->
      <!--<paper-input-->
      <!--          id="input"-->
      <!--          always-float-label-->
      <!--          value="{{ value }}"-->
      <!--          label="[[ metadata.label ]]"-->
      <!--          auto-validate-->
      <!--          required="[[ metadata.required]]"-->
      <!--          error-message="[[ metadata.prompt ]]"-->
      <!--          min="[[ metadata.min ]]"-->
      <!--          minlength="[[ metadata.minLength ]]"-->
      <!--          max="[[ metadata.max ]]"-->
      <!--          maxlength="[[ metadata.maxLength ]]"-->
      <!--          pattern="[[ metadata.regexp ]]"-->
      <!--          readonly="[[ !metadata.editable ]]">-->
      <!--  </paper-input>-->
    </template>
    <script>
  
    class YourWidget extends M2WidgetBase {
      static get is() {
        return "your-widget-name";
      }
      /**
       * Before a form being submitted, validate() will be called automatically to check if the value is legal.
       * You can override it if needed.
       */
      validate() {
        // return this.$.input.validate();
        return true;
      }
      // more methods here
    }
    customElements.define(YourWidget.is, YourWidget);
    </script>
  </dom-module>
  ```
  > Notice: Your must maintenance the ``value`` property of your widget. 
  > And don't forget to import your element in your index page.
  
- Configure in the metadata. [See more about FieldMeta][4] 
  ```
  fieldMeta = {
    elememt: "your-widget-name",
    label: "<labelForName>",
    name: "<someName>",
    required: true,
    editable: true
  }
  ```

[1]: https://www.polymer-project.org/2.0/start/install-2-0#use-bower
[2]: https://www.webcomponents.org/element/isuwang/metaui
[3]: https://ws4.sinaimg.cn/large/006tNc79gy1fifwg803isj30mw0do3zs.jpg
[4]: https://www.webcomponents.org/element/isuwang/metaui/elements/m2-field
