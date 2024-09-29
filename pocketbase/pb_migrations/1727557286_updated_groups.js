/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "users.id = @request.auth.id && users.id = @request.auth.id"
  collection.viewRule = "users.id = @request.auth.id && users.id = @request.auth.id"
  collection.createRule = "users.id = @request.auth.id && users.id = @request.auth.id"
  collection.updateRule = "users.id = @request.auth.id && users.id = @request.auth.id"
  collection.deleteRule = "users.id = @request.auth.id && users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "users.id = @request.auth.id"
  collection.viewRule = "users.id = @request.auth.id"
  collection.createRule = "users.id = @request.auth.id"
  collection.updateRule = "users.id = @request.auth.id"
  collection.deleteRule = "users.id = @request.auth.id"

  return dao.saveCollection(collection)
})
