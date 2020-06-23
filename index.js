var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return
}

function deleteFromObjectByKey(object, key){
  object[key] = undefined
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
