var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value){
  return object
  return Object.assign({}, object, { [key]: value })
}
