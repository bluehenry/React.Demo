This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Libraries 
* Bootstrap
* Font Awesome

# React Tips
## Loading a json file
Loading a json file is quite simple and straightforward. The only thing you need to do is import the file, like this:
```javascript
import menuData from './menu-data.json'
```
Then you can use menuData in the source code.

## Creating an iterating HTML element
Using map function to create an iterating HTML element.
```javascript
render() {       
  return menuData.map((menu, i) => {
    return (
      <div className="card" key={i}>
        {menu.label}
        <div className="card-icon"><i className={`fas ${menu.icon} fa-3x`}></i></div>
      </div>
    )
  });
}
```

## Passing parameter into HTML class attribute
Using template literals - an ECMAScript 6 feature. 
```javascript 
<div className="card-icon"><i className={`fas ${menu.icon} fa-3x`}></i></div>
```