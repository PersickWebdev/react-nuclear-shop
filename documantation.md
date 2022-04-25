# DOCUMENTATION
### PACKAGES
```
- react-router-dom
- redux
- rext-redux
- redux-devtools-extension
- axios
- json-server
- node-sass
- @types/react-router-dom
- @types/axios
- @types/json-server
```
### REQUESTS
#### ENDPOINT
```http request
GET http://localhost:3001/data
```
#### RESPONSE EXAMPLE
```json
[
  {
    "categoryId": 1,
    "categoryName": "burgers",
    "categoryProducts": [
      {
        "parentId": 1,
        "productId": 1,
        "productCategory": "burgers",
        "productName": "Light Doseburger",
        "productWeight": 250,
        "productPrice": 5,
        "productImage": "/images/burgers/light.png",
        "productIngredients": [
          "wheat bun",
          "tomato sauce",
          "beef",
          "cheese",
          "onion",
          "tomato",
          "mustard"
        ]
      }
    ]
  }
]
```